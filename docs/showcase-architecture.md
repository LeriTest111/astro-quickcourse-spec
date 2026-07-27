# Showcase Architecture

## Purpose

The Astro Quick Course Showcase is the living visual catalogue for reusable Astro course components. It is separate from the future Boilerplate repository so examples, documentation, review notes and placeholder sections do not ship inside new production courses.

The Showcase uses multiple category pages for review, governance and maintenance. This does not change the product principle: production Quick Courses remain single-page learning experiences.

## Source Boundaries

- Reusable components live in `src/components/`.
- Reusable layouts live in `src/components/layouts/`.
- Reusable utilities live in `src/utils/`.
- The Showcase landing page lives at `src/pages/index.astro`.
- Category pages live in `src/pages/showcase/`.
- The workflow governance page lives at `src/pages/showcase/workflow.astro` and is linked from the homepage, not the main navbar.
- Showcase-only page chrome, status badges and proposal cards live in `src/components/showcase/`.
- Page-level Showcase navigation is handled by the top navbar using category routes. In production Quick Courses, this navigation pattern should target topics or anchors inside the same course page.
- The Layouts category also provides same-page section anchors for direct review links.
- Showcase data lives in `src/data/` until a fuller content strategy is approved.
- Component documentation lives in `docs/components/`.
- SCORM packaging is retained in `scripts/build-scorm.mjs`.
- Typography uses native system text fonts; Google Material Symbols Sharp is the standard icon family.

## Folder Roles

```text
src/components/course/footer/      Future course footer components
src/components/course/progress/    Future progress display components
src/components/interactions/       Future activities and interaction patterns
src/components/layout/             Existing hero layout primitives
src/components/layouts/            Reusable Quick Course layout patterns
src/components/showcase/           Showcase-only navigation, labels, badges and page chrome
src/components/ui/                 Generic UI helpers
src/pages/index.astro              Showcase landing page
src/pages/showcase/                Showcase category pages
src/utils/scorm/                   Runtime-facing SCORM utility wrappers
```

## Showcase Status

Showcase items should use one of these statuses:

- Idea: proposed but not yet designed or developed.
- Concept: early experiment that may change substantially.
- Draft: active development, not ready for formal review.
- In Review: implemented enough for structured team review and testing.
- Approved: signed off by the project team for production Quick Courses and future Boilerplate promotion.
- Deprecated: no longer recommended for new courses.

The intended lifecycle is Idea, Concept, Draft, In Review, Approved and Deprecated. This is guidance rather than an enforced sequence.

Current implemented examples are mostly `In Review`. The registry may also contain proposal-only Idea and Concept entries without component imports.

Only `Approved` items appear in the Approved Quick Course Kit. All statuses remain visible in the Working Showcase.

## Boilerplate Compatibility

The future Boilerplate should be creatable by removing:

- Showcase-only pages from `src/pages/index.astro` and `src/pages/showcase/`.
- Showcase-only components from `src/components/showcase/`.
- Showcase-specific docs.
- Workflow governance guidance.
- Placeholder category cards.
- Example course data.

Reusable components, layouts, styles, utilities and SCORM boundaries should remain functional after those files are removed.
