# Component Approval Process

Quick Course Kit uses one repository, one `main` branch and one Netlify deployment. The shared header provides URL-driven In development and Approved views.

The plain-language workflow guide lives at `/showcase/workflow/`. It is linked from the Showcase homepage and is intentionally not listed in the main component-category navbar.

## Statuses

### Idea

An Idea is a proposal. It may have a name, short description, suggested learning use and notes, but no component or prototype. Ideas appear only in the In development view and are not available for production use.

### Concept

A Concept is an early experiment. It may have a rough prototype, but behaviour, styling and accessibility may change substantially. Concepts are not production-ready and do not appear in the Approved view.

### Draft

A Draft is under active development. It may contain incomplete responsive behaviour, accessibility work, documentation, content or assets. Drafts are not ready for formal review.

### In Review

An In Review item is ready for structured project-team and visual-design feedback. It should be functional enough for review, but it remains subject to change and appears only in the In development view unless later approved.

### Approved

An Approved item has been signed off for use in production Quick Courses. It appears in the Approved view. Changes to an Approved component should return through review before being treated as signed off again.

### Deprecated

A Deprecated item should not be used for new Quick Courses. It is excluded from both primary views for now and should document a replacement when one is available.

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

Changing an item to `approved` causes it to appear in the Approved view immediately. Do not invent approval dates or mark items Approved without project-team sign-off.

Idea entries may exist without component files. Proposal cards are Showcase-only and must not be copied into the future Boilerplate.

Approval metadata is Showcase governance data. It must not be placed inside learner-facing production Quick Course components. Production components remain shared by both views.

The workflow guide, proposal cards, status badges and preview controls are Showcase-only governance content. They must not be copied into the production Boilerplate.

Current multimedia review focus: Standard Video and Video with Chapters are in Video Review 01 for Visual Design and Instructional Design. Both use the shared native video-player foundation. Download and Picture-in-Picture are requested off through browser-native attributes, but support varies by browser. Poster images are optional; no automatic one-second poster extraction is implemented.
