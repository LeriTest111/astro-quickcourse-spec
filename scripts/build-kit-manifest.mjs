import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const registryPath = path.join(root, "src", "data", "showcase-registry.ts");
const packagePath = path.join(root, "package.json");
const outputPath = path.join(root, "generated", "kit-manifest.json");

const kitOnlyPaths = [
  "src/pages/showcase/",
  "src/components/showcase/",
  "src/layouts/ShowcaseLayout.astro",
  "src/components/layout/ShowcaseTopNav.astro",
  "src/scripts/showcase-view.ts",
  "src/data/workboard.ts",
];

function extractRegistry(source) {
  const declaration = source.indexOf("export const showcaseRegistry");
  const assignment = source.indexOf("=", declaration);
  const arrayStart = source.indexOf("[", assignment);

  if (declaration < 0 || assignment < 0 || arrayStart < 0) {
    throw new Error("Could not locate showcaseRegistry in src/data/showcase-registry.ts.");
  }

  let depth = 0;
  let quote = "";
  for (let index = arrayStart; index < source.length; index += 1) {
    const character = source[index];

    if (quote) {
      if (character === "\\") {
        index += 1;
      } else if (character === quote) {
        quote = "";
      }
      continue;
    }

    if (character === "'" || character === '"' || character === "`") {
      quote = character;
    } else if (character === "[") {
      depth += 1;
    } else if (character === "]") {
      depth -= 1;
      if (depth === 0) {
        const literal = source.slice(arrayStart, index + 1);
        return Function(`"use strict"; return (${literal});`)();
      }
    }
  }

  throw new Error("Could not read the complete showcaseRegistry array.");
}

function validateMapping(item, packageDependencies) {
  const mapping = item.production;
  if (!Array.isArray(mapping.entries) || mapping.entries.length === 0) {
    throw new Error(`Approved item "${item.id}" needs at least one production entry.`);
  }

  for (const entry of mapping.entries) {
    if (typeof entry !== "string" || !entry.startsWith("src/") || entry.includes("..")) {
      throw new Error(`Approved item "${item.id}" has an invalid production entry: ${entry}`);
    }
    if (kitOnlyPaths.some((kitOnlyPath) => entry === kitOnlyPath || entry.startsWith(kitOnlyPath))) {
      throw new Error(`Approved item "${item.id}" maps to Kit-only source: ${entry}`);
    }
    if (!fs.existsSync(path.join(root, entry))) {
      throw new Error(`Approved item "${item.id}" maps to a missing source entry: ${entry}`);
    }
  }

  for (const dependency of mapping.runtimeDependencies ?? []) {
    if (!packageDependencies[dependency]) {
      throw new Error(`Approved item "${item.id}" declares an unavailable runtime dependency: ${dependency}`);
    }
  }
}

const registry = extractRegistry(fs.readFileSync(registryPath, "utf8"));
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const packageDependencies = packageData.dependencies ?? {};
const ids = new Set();

for (const item of registry) {
  if (ids.has(item.id)) {
    throw new Error(`showcaseRegistry contains duplicate id: ${item.id}`);
  }
  ids.add(item.id);
}

const approvedItems = registry.filter((item) => item.status === "approved");
const unmappedItems = approvedItems.filter((item) => !item.production);
const mappedItems = approvedItems
  .filter((item) => item.production)
  .sort((left, right) => left.id.localeCompare(right.id));

for (const item of mappedItems) {
  validateMapping(item, packageDependencies);
}

const manifest = {
  schemaVersion: 1,
  kitVersion: packageData.version,
  styles: {
    entry: "src/styles/quick-course.css",
  },
  components: mappedItems.map((item) => ({
    id: item.id,
    name: item.name,
    entries: item.production.entries,
    runtimeDependencies: item.production.runtimeDependencies ?? [],
  })),
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Generated ${path.relative(root, outputPath)}.`);
console.log(`Approved items: ${approvedItems.length}. Production-mapped items: ${mappedItems.length}.`);

if (unmappedItems.length > 0) {
  console.warn(`Approved but not yet mapped: ${unmappedItems.map((item) => item.id).join(", ")}`);
}
