# Hero Variants

Status: In Review

## Purpose

Heroes introduce a module, course, or scenario. Choose the layout that gives the learner enough context without making the opening screen feel busy.

## Variants

- `ImageOverlayHero`: Full-width local image with a grayscale overlay and high-contrast text.
- `SplitHero`: Text and actions alongside an image; it stacks with text first on narrow screens.
- `CenteredMinimalHero`: Neutral, image-free opening with optional actions.
- `FloatingCardHero`: Large image with a solid text card that overlays on wider screens and flows below the image on narrow screens.
- `LearningObjectivesHero`: Module context, introduction, two to five objectives, and a start action.
- `ScenarioOpenerHero`: Scenario context, situation, learner challenge, and an enter action. An optional local image can be supplied.

## Shared Actions

Use `HeroActions` through a hero's `actions` prop. Each action needs `href` and `label`; set `variant: "secondary"` for a secondary action.

## Showcase Display Options

Each showcase preview has native checkbox controls for its optional eyebrow, supporting text, and available actions. The controls use a small shared Astro script to toggle the rendered elements in place. They are for reviewing variants only and do not need to ship with a course.

## Accessibility

- Use meaningful local-image `alt` text when an image communicates course context.
- Keep the overlay variant's text on the contrast-preserving side of the image.
- Use one concise heading and one supporting paragraph.
- Keep objective lists between two and five items.
- Link actions to real course destinations and keep their labels explicit.
