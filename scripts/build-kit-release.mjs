import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const sourceManifestPath = path.join(root, "generated", "kit-manifest.json");
const sourcePackagePath = path.join(root, "package.json");
const manifestScriptPath = path.join(root, "scripts", "build-kit-manifest.mjs");
const releasePackageName = "@quick-course-kit/local-release";
const kitOnlyPaths = [
  "src/pages/showcase/",
  "src/components/showcase/",
  "src/layouts/ShowcaseLayout.astro",
  "src/components/layout/ShowcaseTopNav.astro",
  "src/scripts/showcase-view.ts",
  "src/data/workboard.ts",
  "src/data/showcase-registry.ts",
];
const sourceExtensions = [".astro", ".ts", ".js", ".mjs"];
const stylePeerDependencies = ["astro", "@tailwindcss/vite", "tailwindcss", "daisyui"];

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function packageNameFor(specifier) {
  return specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];
}

function ensureReleasePath(filePath) {
  const normalized = toPosix(filePath);
  if (!normalized.startsWith("src/") || normalized.includes("..")) {
    throw new Error(`Invalid release source path: ${filePath}`);
  }
  if (kitOnlyPaths.some((kitOnlyPath) => normalized === kitOnlyPath || normalized.startsWith(kitOnlyPath))) {
    throw new Error(`Kit-only source cannot be released: ${normalized}`);
  }
  return normalized;
}

function resolveRelativeImport(sourcePath, specifier) {
  const sourceDirectory = path.dirname(path.join(root, sourcePath));
  const candidate = path.resolve(sourceDirectory, specifier);
  const candidates = path.extname(candidate) ? [candidate] : [candidate, ...sourceExtensions.map((extension) => `${candidate}${extension}`)];
  const resolved = candidates.find((item) => fs.existsSync(item) && fs.statSync(item).isFile());

  if (!resolved) {
    throw new Error(`Cannot resolve ${specifier} imported by ${sourcePath}`);
  }

  return ensureReleasePath(toPosix(path.relative(root, resolved)));
}

function getImportSpecifiers(source) {
  const specifiers = [];
  const expression = /(?:\bfrom\s*|\bimport\s*(?:type\s*)?\(?\s*)["']([^"']+)["']/g;
  for (const match of source.matchAll(expression)) {
    specifiers.push(match[1]);
  }
  return specifiers;
}

function getFileClosure(entryPaths) {
  const pending = [...entryPaths].map(ensureReleasePath).sort();
  const files = new Set();
  const externalDependencies = new Set();

  while (pending.length > 0) {
    const currentPath = pending.shift();
    if (files.has(currentPath)) continue;

    const absolutePath = path.join(root, currentPath);
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`Mapped release entry is missing: ${currentPath}`);
    }

    files.add(currentPath);
    const source = fs.readFileSync(absolutePath, "utf8");
    for (const specifier of getImportSpecifiers(source)) {
      if (specifier.startsWith(".")) {
        pending.push(resolveRelativeImport(currentPath, specifier));
      } else if (!specifier.startsWith("node:")) {
        externalDependencies.add(packageNameFor(specifier));
      }
    }
  }

  return {
    files: [...files].sort(),
    externalDependencies: [...externalDependencies].sort(),
  };
}

function createPublicExports(manifest) {
  const exports = new Map();
  const entryExports = new Map();

  for (const component of manifest.components) {
    for (const entry of component.entries) {
      const fileName = path.posix.basename(entry);
      const exportPath = `./components/${fileName}`;
      const existing = exports.get(exportPath);
      if (existing && existing !== entry) {
        throw new Error(`Duplicate public export ${exportPath} for ${existing} and ${entry}`);
      }
      exports.set(exportPath, `./${entry}`);
      entryExports.set(entry, exportPath);
    }
  }

  return {
    packageExports: Object.fromEntries([...exports.entries()].sort(([left], [right]) => left.localeCompare(right))),
    entryExports,
  };
}

function assertVersion(version) {
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
    throw new Error(`Package version is not a safe release directory name: ${version}`);
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function validateRelease({ releaseDirectory, releaseManifest, releasePackage, copiedFiles, expectedPublicCount, externalDependencies }) {
  if (releaseManifest.kitVersion !== releasePackage.version) {
    throw new Error("Release manifest and package versions do not agree.");
  }
  if (releaseManifest.components.length !== expectedPublicCount) {
    throw new Error("An approved production manifest item disappeared from the release.");
  }
  if (new Set(releaseManifest.components.map((component) => component.id)).size !== releaseManifest.components.length) {
    throw new Error("Release manifest contains duplicate public component ids.");
  }
  if (fs.existsSync(path.join(releaseDirectory, "styles", "showcase.css"))) {
    throw new Error("Showcase CSS must not be included in a production release.");
  }
  const productionStyles = ["foundation.css", "quick-course.css"]
    .map((fileName) => fs.readFileSync(path.join(releaseDirectory, "styles", fileName), "utf8"))
    .join("\n");
  for (const forbiddenSelector of ["data-showcase-", "--showcase-control-", "di-accordion-showcase", "di-accordion-development", "choice-question-showcase", "qc-type-showcase"]) {
    if (productionStyles.includes(forbiddenSelector)) {
      throw new Error(`Production styles contain Showcase-only selector or token: ${forbiddenSelector}`);
    }
  }

  for (const filePath of copiedFiles) {
    ensureReleasePath(filePath);
    const releasePath = path.join(releaseDirectory, filePath);
    if (!fs.existsSync(releasePath)) {
      throw new Error(`Release support file is missing: ${filePath}`);
    }
    for (const specifier of getImportSpecifiers(fs.readFileSync(releasePath, "utf8"))) {
      if (specifier.startsWith(".")) {
        const resolved = path.resolve(path.dirname(releasePath), specifier);
        const candidates = path.extname(resolved) ? [resolved] : [resolved, ...sourceExtensions.map((extension) => `${resolved}${extension}`)];
        if (!candidates.some((candidate) => fs.existsSync(candidate))) {
          throw new Error(`Release import does not resolve: ${filePath} -> ${specifier}`);
        }
      }
    }
  }

  for (const [exportPath, target] of Object.entries(releasePackage.exports)) {
    if (!fs.existsSync(path.join(releaseDirectory, target))) {
      throw new Error(`Package export does not resolve: ${exportPath} -> ${target}`);
    }
  }
  for (const dependency of externalDependencies) {
    if (!releasePackage.dependencies?.[dependency]) {
      throw new Error(`Release package is missing dependency metadata for ${dependency}`);
    }
  }
  for (const component of releaseManifest.components) {
    for (const entry of component.entries) {
      if (!fs.existsSync(path.join(releaseDirectory, entry.path))) {
        throw new Error(`Public release entry is missing: ${component.id} -> ${entry.path}`);
      }
      if (!releasePackage.exports[entry.export]) {
        throw new Error(`Public release entry is not exported: ${component.id} -> ${entry.export}`);
      }
    }
  }
}

const manifestProcess = spawnSync(process.execPath, [manifestScriptPath], {
  cwd: root,
  stdio: "inherit",
});
if (manifestProcess.status !== 0) {
  process.exit(manifestProcess.status ?? 1);
}

const sourcePackage = JSON.parse(fs.readFileSync(sourcePackagePath, "utf8"));
const sourceManifest = JSON.parse(fs.readFileSync(sourceManifestPath, "utf8"));
assertVersion(sourcePackage.version);

if (sourceManifest.kitVersion !== sourcePackage.version) {
  throw new Error("Generated Kit manifest does not match the current package version.");
}

const releaseRoot = path.resolve(root, "generated", "releases");
const releaseDirectory = path.resolve(releaseRoot, sourcePackage.version);
if (!releaseDirectory.startsWith(`${releaseRoot}${path.sep}`)) {
  throw new Error("Refusing to write outside generated/releases.");
}

const allPublicEntries = sourceManifest.components.flatMap((component) => component.entries);
const { files: copiedFiles, externalDependencies } = getFileClosure(allPublicEntries);
const { packageExports: componentExports, entryExports } = createPublicExports(sourceManifest);
const releaseDependencies = {};

for (const dependency of externalDependencies) {
  const version = sourcePackage.dependencies?.[dependency];
  if (!version) {
    throw new Error(`Released source imports ${dependency}, but it is not a Kit package dependency.`);
  }
  releaseDependencies[dependency] = version;
}

const releasePeerDependencies = {};
for (const dependency of stylePeerDependencies) {
  const version = sourcePackage.dependencies?.[dependency];
  if (!version) {
    throw new Error(`Release build peer dependency is missing from the Kit package: ${dependency}`);
  }
  releasePeerDependencies[dependency] = version;
}

for (const component of sourceManifest.components) {
  for (const dependency of component.runtimeDependencies) {
    if (!releaseDependencies[dependency]) {
      throw new Error(`Runtime dependency for ${component.id} is not imported by its release source: ${dependency}`);
    }
  }
}

fs.rmSync(releaseDirectory, { recursive: true, force: true });
fs.mkdirSync(path.join(releaseDirectory, "src"), { recursive: true });
fs.mkdirSync(path.join(releaseDirectory, "styles"), { recursive: true });

for (const filePath of copiedFiles) {
  const targetPath = path.join(releaseDirectory, filePath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(path.join(root, filePath), targetPath);
}
fs.copyFileSync(path.join(root, "src", "styles", "foundation.css"), path.join(releaseDirectory, "styles", "foundation.css"));
fs.copyFileSync(path.join(root, "src", "styles", "quick-course.css"), path.join(releaseDirectory, "styles", "quick-course.css"));

const releaseManifest = {
  schemaVersion: sourceManifest.schemaVersion,
  kitVersion: sourceManifest.kitVersion,
  styles: {
    entry: "styles/quick-course.css",
    export: "./styles/quick-course.css",
  },
  components: sourceManifest.components.map((component) => ({
    id: component.id,
    name: component.name,
    entries: component.entries.map((entry) => ({
      path: entry,
      export: entryExports.get(entry),
    })),
    runtimeDependencies: component.runtimeDependencies,
  })),
};
const releasePackage = {
  name: releasePackageName,
  version: sourcePackage.version,
  private: true,
  type: "module",
  files: ["manifest.json", "src", "styles"],
  exports: {
    "./manifest.json": "./manifest.json",
    "./styles/foundation.css": "./styles/foundation.css",
    "./styles/quick-course.css": "./styles/quick-course.css",
    ...componentExports,
  },
  dependencies: Object.fromEntries(Object.entries(releaseDependencies).sort(([left], [right]) => left.localeCompare(right))),
  peerDependencies: Object.fromEntries(Object.entries(releasePeerDependencies).sort(([left], [right]) => left.localeCompare(right))),
};

writeJson(path.join(releaseDirectory, "manifest.json"), releaseManifest);
writeJson(path.join(releaseDirectory, "package.json"), releasePackage);
fs.writeFileSync(path.join(releaseDirectory, "README.md"), "# Generated Quick Course Kit release\n\nThis directory is generated from the governed Kit source. Do not edit it manually.\n");

validateRelease({
  releaseDirectory,
  releaseManifest,
  releasePackage,
  copiedFiles,
  expectedPublicCount: sourceManifest.components.length,
  externalDependencies,
});

console.log(`Generated Kit release ${sourcePackage.version} at ${path.relative(root, releaseDirectory)}.`);
console.log(`Public systems: ${sourceManifest.components.length}. Source and support files: ${copiedFiles.length}.`);
