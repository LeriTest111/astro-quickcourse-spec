# Showcase Structure

## Purpose

The Astro Quick Course Showcase is a review and maintenance catalogue for reusable Quick Course patterns. It may use multiple pages so the project team can find categories quickly, compare variants, test responsiveness and share direct links.

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

Shared Showcase navigation lives outside production-course navigation. It links to every major category and uses `aria-current="page"` for the active category.

The Layouts page also includes stable anchor links for direct review:

- `#heroes`
- `#content-sections`
- `#repeated-content`
- `#processes-comparisons`
- `#visual-layouts`
- `#openers-closers`

## Future Recipes

Complete course recipes can be added later under routes such as `/showcase/recipes/product-knowledge-course`. Recipes should demonstrate how approved components combine into one complete single-page Quick Course; they should not convert production courses into multi-page experiences.

## Boilerplate Boundary

Showcase-only pages, badges, example labels and documentation live in `src/pages/showcase/`, `src/components/showcase/` and `docs/`. Reusable course components remain in `src/components/`, `src/layouts/`, `src/utils/` and `src/styles/`.
