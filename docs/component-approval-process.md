# Component Approval Process

The Astro Quick Course Showcase uses one repository and one `main` branch. Two Netlify sites build the same codebase:

- Working Showcase: `SHOWCASE_MODE=working`
- Approved Quick Course Kit: `SHOWCASE_MODE=approved`

`SHOWCASE_MODE` is read at Astro build time with `import.meta.env.SHOWCASE_MODE`. Local development defaults to Working mode when the variable is not set.

The plain-language workflow guide lives at `/showcase/workflow/`. It is linked from the Showcase homepage, appears in both Working and Approved builds, and is intentionally not listed in the main component-category navbar.

## Statuses

### Idea

An Idea is a proposal. It may have a name, short description, suggested learning use and notes, but no component or prototype. Ideas are visible only in Working mode and are not available for production use.

### Concept

A Concept is an early experiment. It may have a rough prototype, but behaviour, styling and accessibility may change substantially. Concepts are not production-ready and do not appear in the Approved Quick Course Kit.

### Draft

A Draft is under active development. It may contain incomplete responsive behaviour, accessibility work, documentation, content or assets. Drafts are not ready for formal review.

### In Review

An In Review item is ready for structured project-team and visual-design feedback. It should be functional enough for review, but it remains subject to change and appears only in the Working Showcase unless later approved.

### Approved

An Approved item has been signed off for use in production Quick Courses. It appears in the Approved Quick Course Kit. Changes to an Approved component should return through review before being treated as signed off again.

### Deprecated

A Deprecated item should not be used for new Quick Courses. It remains visible in Working mode for migration or historical reference, does not appear in Approved mode, and should document a replacement when one is available.

## Lifecycle

1. An Idea is submitted.
2. The team decides whether to explore it.
3. A Concept or early prototype is created.
4. It becomes a Draft during development.
5. It moves to In Review when ready for feedback.
6. The project team signs it off as Approved.
7. It may later become Deprecated if replaced or no longer suitable.

This lifecycle is guidance, not a technically enforced sequence. Maintainers may change a status directly when necessary.

## Registry

Showcase item metadata lives in `src/data/showcase-registry.ts`. The registry is the source of truth for status, version and optional approval metadata.

Changing an item to `approved` causes it to appear in the Approved Quick Course Kit after the next build. Do not invent approval dates or mark items Approved without project-team sign-off.

Idea entries may exist without component files. Proposal cards are Showcase-only and must not be copied into the future Boilerplate.

Approval metadata is Showcase governance data. It must not be placed inside learner-facing production Quick Course components. Production components remain shared by both build modes.

The workflow guide, proposal cards, status badges and preview controls are Showcase-only governance content. They must not be copied into the production Boilerplate.
