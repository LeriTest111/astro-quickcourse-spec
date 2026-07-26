# K-Beauty Project Analysis

## Current Technical Architecture

The K-Beauty source at `C:\Users\jacquesrou\k-beauty-course` is organised as a multi-module course. The repository root contains course-level scripts and source assets, while each folder under `modules/Module-*` is an independent Astro project.

- Astro version: module packages use Astro `^6.1.6`.
- Tailwind CSS: modules use `@tailwindcss/vite` and CSS-first Tailwind 4 imports.
- DaisyUI: installed in each module and enabled with `@plugin "daisyui";`.
- Configuration: each module has its own `astro.config.mjs`, `tsconfig.json`, `package.json`, `package-lock.json`, `src/pages/index.astro`, `src/styles/global.css`, and `public/` assets.
- SCORM: modules use a shared root script at `scripts/build-scorm.mjs`, triggered as `postbuild` in the K-Beauty modules. It injects a SCORM runtime, writes `imsmanifest.xml`, rewrites root-relative asset paths, and supports SCORM 1.2 and 2004 method names.
- Course delivery: each module builds as a static single-page SCO.

## Reusable Elements

- Astro static build setup.
- Tailwind 4 and DaisyUI integration.
- Root-level SCORM packaging script.
- Static course module approach suitable for LMS upload.
- Responsive page layout patterns based on utility classes.
- Client-side progressive enhancement for interactions such as flip cards.
- The idea of keeping SCORM packaging outside component presentation.

## Course-Specific Elements

- K-Beauty title, module titles, lesson copy, product content, product banners, ingredient cards, video, and source PowerPoint.
- TFG logo and brand assets.
- K-Beauty-specific colour palette, decorative bubbles, gradients, and product-focused visual treatment.
- Module-specific source images in `src/images` and `public/`.
- Generated `dist`, `node_modules`, `.astro`, and ZIP files that should not seed the Showcase source.

## Recommended Changes

- Use the K-Beauty Astro, Tailwind, DaisyUI, and SCORM foundations.
- Create one clean Showcase project rather than preserving the multi-module K-Beauty structure.
- Keep the Showcase as one page at `src/pages/index.astro`, with component examples as same-page sections.
- Keep reusable course components under `src/components/`.
- Move SCORM assumptions into `src/utils/scorm/` and keep the build-time packager in `scripts/`.
- Remove K-Beauty branding from reusable components.
- Mark new components as Draft or In review until project-team approval.

## Risks Or Technical Debt

- The K-Beauty repository includes generated and dependency files under source control, making inspection noisy.
- Some K-Beauty source contains mojibake characters from pasted or generated copy.
- K-Beauty modules are duplicated rather than componentised, so reusable architecture has to be extracted rather than copied wholesale.
- The SCORM runtime marks completion on load in K-Beauty modules; Showcase keeps `completeOnLoad` disabled by default.
- No automated accessibility test setup exists yet.

## Proposed Showcase Structure

```text
src/
  components/
    course/
      navigation/
      footer/
      progress/
    content/
    interactions/
    layout/
    ui/
  data/
  layouts/
  pages/
    index.astro
  scripts/
  styles/
  utils/
    scorm/
docs/
  components/
scripts/
```
