# Hero Variants

Status: Individual hero statuses are recorded in the Showcase registry. Image Overlay Hero is In Review; the remaining hero variants are Draft.

## Purpose

Heroes introduce a module, course, or scenario. Choose the layout that gives the learner enough context without making the opening screen feel busy.

## Variants

- `ImageOverlayHero`: Full-width local image with controlled Dark, Light or Brand colour overlays and an optional eyebrow and description.
- `SplitHero`: Text and actions alongside an image; it stacks with text first on narrow screens.
- `CenteredMinimalHero`: Neutral, image-free opening with optional actions.
- `FloatingCardHero`: Large image with a solid text card that overlays on wider screens and flows below the image on narrow screens.
- `LearningObjectivesHero`: Module context, introduction, two to five objectives, and a start action.
- `ScenarioOpenerHero`: Scenario context, situation, learner challenge, and an enter action. An optional local image can be supplied.

## Shared Actions

Most hero variants use `HeroActions` through an `actions` prop. Each action needs `href` and `label`; set `variant: "secondary"` for a secondary action. `ImageOverlayHero` deliberately uses one optional `action` instead, with button styling derived from its text treatment.

## Showcase Display Options

Each showcase preview has native checkbox controls for its optional eyebrow, supporting text, and available actions. The controls use a small shared Astro script to toggle the rendered elements in place. They are for reviewing variants only and do not need to ship with a course.

## Image Overlay Hero

Status: In Review

Use this opener when a course image provides useful context and the text needs a protected reading area. It supports `dark`, `light` and `brand` overlay styles. Brand overlays accept a hexadecimal brand colour and fall back to a controlled blue when no valid colour is supplied. It may include one optional action; Light text uses a white action button and Dark text uses a dark action button.

Choose `light` or `dark` text deliberately. Dark overlay normally pairs with Light text; Light overlay normally pairs with Dark text. A Brand colour overlay needs a final contrast review using the actual course image and content. The component does not analyse image brightness automatically.

Use `standard` title emphasis for normal or descriptive course headings. Use `display` title emphasis for short, high-impact wording. The component owns responsive sizing and wrapping, so course creators should not choose arbitrary pixel sizes. Keep hero copy concise, but longer headings wrap naturally and increase the hero height when needed.

`eyebrow` and `description` are optional. Empty or whitespace-only values do not render an empty element or spacing. `title` and `imageSrc` remain required; use meaningful image alternative text when the image conveys course context.

The Image Overlay Hero Showcase adds temporary options for overlay, text, title emphasis and short, standard, long and custom content. These inputs are review tooling only. They are not learner-facing controls, production authoring controls or Boilerplate content.

## Accessibility

- Use meaningful local-image `alt` text when an image communicates course context.
- Keep the overlay variant's text on the contrast-preserving side of the image.
- Choose Dark overlay with Light text for bright imagery, and Light overlay with Dark text for dark imagery. Avoid pale brand colours with Light text and dark brand colours with Dark text.
- Use one concise heading and one supporting paragraph.
- Keep objective lists between two and five items.
- Link actions to real course destinations and keep their labels explicit.
