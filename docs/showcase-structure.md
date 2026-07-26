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
- `/showcase/icons`: icon examples and usage guidance.

## Navigation

Shared Showcase navigation lives outside production-course navigation. In the Showcase, navbar links open separate category pages and use `aria-current="page"` for the active category. In production Quick Courses, the same navigation pattern should link to topics or section anchors within the single course page.

Category pages may include quiet local anchor links for direct review. These links do not need a visible `Section index` heading or page-level component counts.

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

## Showcase Options

Some examples include compact Showcase-only option controls for reviewing variants, such as carousel indicators, carousel slide content and flip-card height modes. These controls live in `src/components/showcase/` and are not part of production Quick Course components.

Production components should receive normal props, content data or slots. Do not copy Showcase option controls into learner-facing courses.

## Return Message

Course return instructions, including `Return to People Connect to continue`, should be quiet standalone text with suitable spacing. They should not appear inside bordered cards, panels or large CTA containers.

## Future Recipes

Complete course recipes can be added later under routes such as `/showcase/recipes/product-knowledge-course`. Recipes should demonstrate how approved components combine into one complete single-page Quick Course; they should not convert production courses into multi-page experiences.

## Boilerplate Boundary

Showcase-only pages, badges, example labels and documentation live in `src/pages/showcase/`, `src/components/showcase/` and `docs/`. Reusable course components remain in `src/components/`, `src/layouts/`, `src/utils/` and `src/styles/`.
