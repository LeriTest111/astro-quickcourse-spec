# Astro Quick Course Showcase

This is a neutral Showcase project for reusable Quick Course components and layout patterns. It keeps the useful technical foundation: Astro, Tailwind CSS, DaisyUI, static builds, and the SCORM packaging utility.

## Relationship To The Boilerplate

The Showcase is the living visual catalogue used to review reusable course components. It may use multiple pages so the project team can find categories, compare variants and share direct links.

Production Quick Courses remain single-page learning experiences. The future Boilerplate repository should contain the approved reusable components, layouts, utilities, styles, and configuration without Showcase demo pages or placeholder content.

In this Showcase, top navigation links open separate category pages for review, governance and maintenance. In production Quick Courses, the same navigation pattern should link to topics or section anchors within the single learner page.

## Technology Stack

- Astro
- Tailwind CSS
- DaisyUI
- Native system text font stack
- Google Material Symbols Sharp for icons
- JavaScript where browser interaction is required
- Optional SCORM packaging via `scripts/build-scorm.mjs`

## Local Setup

```sh
npm install
npm run dev
```

## Commands

| Command | Action |
| :-- | :-- |
| `npm run dev` | Start local Astro dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run build:scorm` | Build and inject SCORM runtime/manifest |
| `npm run preview` | Preview the built site |

## Showcase Build Modes

This repository uses one `main` branch for both Showcase outputs. `SHOWCASE_MODE` controls visibility at Astro build time:

- `working`: default for local development; shows Idea, Concept, Draft, In Review, Approved and Deprecated items.
- `approved`: shows only items with `status: "approved"` in `src/data/showcase-registry.ts`.

The variable is read with `import.meta.env.SHOWCASE_MODE` and is not exposed to browser JavaScript. See `docs/showcase-build-modes.md` and `docs/component-approval-process.md` for Netlify setup and approval workflow notes.

## Workflow Guide

The Showcase includes a plain-language governance page at `/showcase/workflow/`. It explains how the Working Showcase, Approved Quick Course Kit, statuses, visual-design input, `SHOWCASE_MODE` and the future Boilerplate fit together.

The page is linked from a restrained supporting section on the Showcase homepage. It is intentionally not part of the main component-category navbar and must not be copied into production Quick Courses or the learner-facing Boilerplate.

## Folder Structure

```text
src/
  components/
    course/
      footer/
      progress/
    content/
    interactions/
    layout/
    layouts/
    showcase/
    ui/
  data/
  layouts/
  pages/
    index.astro
    showcase/
  scripts/
  styles/
  utils/
    scorm/
docs/
  components/
scripts/
```

## Component Approval Status

- Idea: proposed but not yet designed or developed.
- Concept: early experiment; behaviour, styling and accessibility may change.
- Draft: active development and not ready for formal review.
- In Review: ready for project-team review but still subject to change.
- Approved: signed off for production Quick Courses and future Boilerplate promotion.
- Deprecated: retained in the Working Showcase for reference, but not for new courses.

Knowledge checks are currently marked `Draft` unless otherwise noted in the registry.
Typography and icon standards are currently marked `Draft`.
Most implemented layout and interaction patterns are currently marked `Draft`, with selected items marked `Concept` for further review. Standard Video and Video with Chapters are marked `In Review` for Video Review 01.

## Showcase Interface Notes

The Showcase keeps page chrome quiet so the reusable examples remain the focus. The landing page avoids decorative count badges, category cards use titles and short descriptions instead of example-count eyebrows, and category pages keep local anchor links without a visible `Section index` heading.

Major component groups use stronger spacing, dividers and subtle neutral surface changes instead of heavy cards around every example. The course return message, such as `Return to People Connect to continue`, should render as understated standalone text rather than a boxed call-to-action.

Showcase-only configuration uses the shared `Preview options` disclosure pattern. These controls help reviewers compare component variants and should not be copied into production Quick Courses.

The multimedia page uses Preview Options to compare Standard Video and Video with Chapters with and without an optional poster image. This is Showcase-only review tooling; the reusable video player simply accepts a normal `poster` prop.

Interactive controls use pointer cursor styling only when the element is genuinely clickable. Static content should not be styled to appear interactive.

## Typography Standard

The Showcase uses native system fonts only:

```css
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Arial,
Helvetica,
sans-serif
```

No external service is required for text fonts, and no text font files are included in the project. Google Material Symbols Sharp is loaded separately as the standard icon family. This typography foundation is shared by the Showcase and future Boilerplate. Any future custom text font requires project-team approval.

## Icon Standard

The Showcase uses Google Material Symbols Sharp for interface icons. Use the shared `material-symbols-sharp showcase-icon` classes and render icons with ligature text, such as `arrow_upward`.

## Proposing A New Component

1. Add an Idea or Concept entry to `src/data/showcase-registry.ts`.
2. Use a Showcase-only proposal card when no component or prototype exists yet.
3. Add a reusable component under the correct `src/components/` category only when implementation begins.
4. Add neutral demo data and a section example to the appropriate `src/pages/showcase/` category page when there is a real example.
5. Document the component under `docs/components/`.
6. Move it to Draft or In Review only when that status accurately reflects the work.

## Approving A Component

1. Review the Showcase example in browser.
2. Test desktop and mobile layouts.
3. Test keyboard operation and visible focus.
4. Confirm content and props are not hard-coded to one course.
5. Confirm SCORM is not tightly coupled to presentation.
6. Update status to Approved only after project-team sign-off.

## Promoting To The Future Boilerplate

Approved components can later be copied or synchronised into the Boilerplate with their required layouts, styles, utilities, and documentation. Do not copy Showcase-only pages, badges, placeholder category cards, or example course content into production starter courses.
