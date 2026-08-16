# Production Boundary

## Kit Workbench

The Showcase, Workboard, lifecycle/status UI, preview controls, proposal cards, specimen copy and review tooling stay in this repository as Kit-only workbench code. They are not learner-facing runtime dependencies.

## Styles

- `src/styles/foundation.css` contains the shared base layer used by both learner-facing components and the Showcase.
- `src/styles/quick-course.css` is the learner-facing Quick Course style entry for a future Course Starter.
- `src/styles/showcase.css` imports the Quick Course entry and layers Kit workbench styling over it.
- `src/styles/global.css` is a temporary compatibility import for existing consumers; new learner applications should use `quick-course.css` and the Showcase uses `showcase.css` directly.

## Eligibility And Manifest

The lifecycle registry in `src/data/showcase-registry.ts` remains the governance source of truth. A component appears in the production manifest only when it is `Approved` and has a valid explicit `production` mapping.

Run `npm run build:kit-manifest` to generate `generated/kit-manifest.json`. The ignored manifest is a deterministic production-facing projection of approved component source entries and their browser runtime dependencies. It does not ship the Showcase registry to learner runtime.

The generator rejects missing entries, Kit-only source paths, undeclared runtime dependencies and duplicate registry IDs. Approved items without a mapping are reported but are not treated as a generator failure.

## Generated Release

Run `npm run build:kit-release` to create a disposable, versioned Astro source release at `generated/releases/<kit-version>/`. The command regenerates the manifest, copies Approved mapped public components with their required internal source dependencies, adds production styles and writes a release-relative manifest plus private local package metadata.

The generated package currently uses the provisional local-only name `@quick-course-kit/local-release`. It exposes approved components through `./components/<Component>.astro`, the production stylesheet through `./styles/quick-course.css`, and the release manifest through `./manifest.json`. Package publishing is deliberately out of scope.

A future Course Starter will consume one specific generated release through a pinned local `file:` dependency. The Starter, rather than this workbench, will provide the full consumption proof.

The release package lists source dependencies required by released components and pins the Kit's installed peer build requirements for Astro, Tailwind and DaisyUI. It excludes Showcase CSS, Showcase pages/components, Workboard data, lifecycle registry code and review tooling. Never edit generated release files manually; regenerate them from the Kit source instead.

## Exclusions And SCORM

The manifest intentionally excludes Showcase pages, Showcase components, Workboard data, lifecycle/review tooling, Preview Options and specimen wrappers. It also excludes course-shell concerns such as the current `CourseFooter`.

The generic SCORM runtime utility can remain a Kit utility. Course packaging and SCORM configuration belong to the future Starter and are outside this boundary.

## Deferred Cleanup

- Hero classes and preview hooks still have Showcase-oriented names.
- Some non-release candidates still use legacy raw Material Symbols markup.
- Shared production tokens still include some `--showcase-*` names.
