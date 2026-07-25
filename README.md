# Astro Course Component Showcase

This is a new neutral Showcase project seeded from the K-Beauty Astro course stack. It keeps the useful technical foundation: Astro, Tailwind CSS, DaisyUI, static builds, and the SCORM packaging utility, while removing K-Beauty branding and course content from reusable components.

## Relationship To The Boilerplate

The Showcase is the living single-page visual catalogue used to review and approve reusable course components. The future Boilerplate repository should contain the approved reusable components, layouts, utilities, styles, and configuration without Showcase demo sections or placeholder content.

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

## Component Approval Status

- Draft: early internal build.
- In review: ready for project-team review.
- Approved: accepted for future Boilerplate promotion.
- Deprecated: retained only for legacy reference.

Knowledge checks are currently marked `In review`.
Typography is currently marked `In Review`.

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

1. Add the reusable component under the correct `src/components/` category.
2. Add neutral demo data and a section example to `src/pages/index.astro`.
3. Document the component under `docs/components/`.
4. Mark it as Draft or In review.
5. Confirm build, responsive behaviour, keyboard access, and accessibility basics.

## Approving A Component

1. Review the Showcase example in browser.
2. Test desktop and mobile layouts.
3. Test keyboard operation and visible focus.
4. Confirm content and props are not hard-coded to one course.
5. Confirm SCORM is not tightly coupled to presentation.
6. Update status to Approved only after project-team sign-off.

## Promoting To The Future Boilerplate

Approved components can later be copied or synchronised into the Boilerplate with their required layouts, styles, utilities, and documentation. Do not copy Showcase-only sections, placeholder category cards, or example course content into production starter courses.
