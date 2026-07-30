# Showcase Structure

## Purpose

The Astro Quick Course Showcase is a review and maintenance catalogue for reusable Quick Course patterns. It may use multiple pages so the project team can find categories quickly, compare variants, test responsiveness, support governance and share direct links.

Production Quick Courses remain single-page experiences. The Showcase routes are documentation and review infrastructure, not a course-routing model for the future Boilerplate.

## Routes

- `/`: concise Showcase landing page with category cards.
- `/showcase/layouts`: heroes and reusable layout patterns.
- `/showcase/display-interactions`: callouts, accordions and future exploratory display patterns.
- `/showcase/assessment-interactions`: knowledge checks, quizzes and learner-response patterns.
- `/showcase/multimedia`: video, audio, image and embed patterns.
- `/showcase/typography`: type stack and readable content standards.
- `/showcase/icons`: controlled semantic icon vocabulary and usage guidance.
- `/showcase/workflow/`: plain-language governance guide for the Quick Course Kit process.

## Navigation

Shared Showcase navigation lives outside production-course navigation. In the Showcase, navbar links open separate category pages and use `aria-current="page"` for the active category. In production Quick Courses, the same navigation pattern should link to topics or section anchors within the single course page.

Category pages may include quiet local anchor links for direct review. These links do not need a visible `Section index` heading or page-level component counts.

The workflow page is intentionally not included in the main navbar because it is supporting project-governance content, not a component category. It is linked from the Showcase homepage and appears in both Working and Approved builds.

The Layouts page includes stable anchor links such as:

- `#heroes`
- `#content-sections`
- `#repeated-content`
- `#processes-comparisons`
- `#visual-layouts`
- `#openers-closers`

## Page Hierarchy

The landing page should introduce the Showcase without decorative count labels such as `6 categories`, and category cards should not use example-count eyebrows such as `19 examples`. Page headers should stay concise, while major component groups can be separated with spacing, dividers and subtle neutral surface changes.

Showcase examples may keep component-level names and approval statuses. Eyebrows should be reserved for meaningful context, such as a module number, scenario or content category.

The Working Showcase may include proposal-only Idea and Concept cards. These cards are review and governance UI, not learner-facing production components. They should not include fake demos, disabled demo buttons or unavailable controls.

The Approved Quick Course Kit uses the same pages and production components, but build-time filtering removes Idea, Concept, Draft, In Review and Deprecated items from the generated HTML.

The workflow page explains this process in plain language for visual designers, instructional designers, developers, project-team members, reviewers and approvers. It explains `SHOWCASE_MODE` without assuming technical background.

## Options

Some examples include compact Showcase-only `Options` controls for reviewing variants, such as hero display parts, carousel indicators, carousel slide content, flip-card height modes, video poster comparison and chapter content depth. These controls live in `src/components/showcase/` and are not part of production Quick Course components.

Production components should receive normal props, content data or slots. Do not copy Showcase option controls into learner-facing courses.

Use the shared disclosure pattern for new Showcase configuration controls. It should remain visually distinct from learner-facing content and should not become a large configuration dashboard.

## Information Controls

When a visible example is self-explanatory, keep the demonstration on the page and place detailed guidance behind the established Supporting-detail Modal information control. Use a second technical-information control only when implementation detail has real value for developers or Learning Technology. This keeps the Showcase focused without removing important project guidance.

Do not apply this pattern mechanically to every component. The amount of visible information should match what reviewers need to understand the example.

## Cursor Policy

Links, enabled buttons, summaries and other genuine controls should use pointer cursor styling. Static content should keep the default cursor. Cursor styling never replaces semantic HTML, keyboard support, visible focus states or accessible names.

## Return Message

Course return instructions, including `Return to People Connect to continue`, should be quiet standalone text with suitable spacing. They should not appear inside bordered cards, panels or large CTA containers.

The Icons Showcase is a static system reference, not an icon picker. It shows controlled semantic tokens and system-defined context, colour and treatment; detailed guidance remains in its information controls.

## Future Recipes

Complete course recipes can be added later under routes such as `/showcase/recipes/product-knowledge-course`. Recipes should demonstrate how approved components combine into one complete single-page Quick Course; they should not convert production courses into multi-page experiences.

## Boilerplate Boundary

Showcase-only pages, badges, proposal cards, workflow guidance, example labels and documentation live in `src/pages/showcase/`, `src/components/showcase/` and `docs/`. Reusable course components remain in `src/components/`, `src/layouts/`, `src/utils/` and `src/styles/`.
