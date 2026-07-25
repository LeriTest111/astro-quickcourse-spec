# Showcase Architecture

## Purpose

The Course Showcase is the living single-page visual catalogue for approved Astro course components. It is separate from the future Boilerplate repository so examples, documentation, review notes, and placeholder sections do not ship inside new production courses.

## Source Boundaries

- Reusable components live in `src/components/`.
- Reusable layouts live in `src/layouts/`.
- Reusable utilities live in `src/utils/`.
- The Showcase page lives at `src/pages/index.astro`.
- Page-level navigation is handled by the top navbar using same-page section anchors.
- Showcase data lives in `src/data/` until a fuller content strategy is approved.
- Component documentation lives in `docs/components/`.
- SCORM packaging is retained in `scripts/build-scorm.mjs`.
- Typography uses native system text fonts; Google Material Symbols Sharp is the standard icon family.

## Folder Roles

```text
src/components/course/footer/      Future course footer components
src/components/course/progress/    Future progress display components
src/components/content/            Future reusable content blocks
src/components/interactions/       Future activities and interaction patterns
src/components/layout/             Future layout primitives
src/components/ui/                 Generic UI helpers
src/pages/index.astro              Single-page demonstration and review catalogue
src/utils/scorm/                   Runtime-facing SCORM utility wrappers
```

## Approval Status

Components should use one of these statuses:

- Draft: early internal build, not ready for review.
- In review: implemented enough for team review and testing.
- Approved: accepted by the project team for future Boilerplate promotion.
- Deprecated: no longer recommended for new courses.

Knowledge checks are currently `In review`.
Typography is currently `In Review`.
Hero variants are currently `In Review`.

## Boilerplate Compatibility

The future Boilerplate should be creatable by removing:

- Showcase-only sections from `src/pages/index.astro`
- Showcase-specific docs
- Placeholder category cards
- Example course data

Reusable components, layouts, styles, utilities, and SCORM boundaries should remain functional after those files are removed.
