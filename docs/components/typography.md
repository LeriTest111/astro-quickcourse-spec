# Quick Course Typography System

Status: Draft

The Quick Course Typography System is one controlled system for course copy, editorial emphasis and responsive text layouts. The Working Showcase demonstrates curated combinations; production courses use the same small set of primitives without Showcase labels, statuses or review guidance.

## Font Policy

No external font service, downloaded font file, `@font-face` declaration or JavaScript font loader is used.

- Sans default: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif`
- Serif: `Georgia, "Times New Roman", Times, serif`
- Monospace: `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace`
- Cursive accent: the generic local `cursive` family only

Sans is the default for headings, body copy, UI and most learning content. Serif is reserved for selected editorial headings, reflective introductions and quotes. Monospace is for short technical values, identifiers, filenames and keyboard examples. Cursive is an experimental review option for one short, non-essential phrase; rendering varies by operating system and it must never carry essential instructions.

## Production Primitives

The system deliberately uses a small set of typed Astro components.

- `TypeText.astro`: semantic type role, alignment, reading measure, family, weight, tone and italic treatment.
- `TextLayout.astro`: controlled reading, statement, column, aside, band and grid layouts with semantic surfaces and spacing.
- `QuoteBlock.astro`: semantic `blockquote` and `cite` treatments.
- `StatisticBlock.astro`: semantic definition-list values and labels.
- `DefinitionList.astro`: semantic term-definition pairs.

Use the relevant native element (`h1` to `h6`, `p`, `blockquote`, `ul`, `ol`, `dl`, `code`, `mark`, `abbr`) for the content meaning. A visual type role does not choose or change the document outline.

## Semantic Type Roles

| Role | Recommended use |
| --- | --- |
| `display-xl`, `display-lg`, `display-md` | Short course-opening or section-opening statements only. |
| `heading-xl`, `heading-lg`, `heading-md`, `heading-sm` | Headings at the semantic level required by the page outline. |
| `lead` | One concise introductory paragraph. |
| `body`, `body-compact` | Standard reading and compact supporting copy. |
| `eyebrow`, `label`, `caption` | Short contextual labels and secondary context. |
| `statement` | A short memorable phrase, transition or instruction. |
| `statistic` | A concise illustrative value with a readable label. |
| `quote` | A genuine or clearly marked internal example quotation. |
| `code` | Short technical values and identifiers. |

Do not expose raw pixel sizes, arbitrary line heights, arbitrary letter spacing, arbitrary font families or unrestricted CSS classes to AI-authored content.

## Controlled Options

`TypeText` supports only these semantic variant families:

- Alignment: `left`, `center`
- Measure: `narrow`, `standard`, `wide`, `full`
- Family: `sans`, `serif`, `mono`, `cursive-accent`
- Weight: `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`
- Tone: `default`, `muted`, `strong`, `accent`, `primary`, `secondary`, `inverse`, `success`, `warning`, `error`

Use light weight only for large display text. Normal body copy must remain regular or stronger. Use italic only for short editorial content, citations and selected quotes; never italicise long body sections.

## Reading Measures And Layouts

- Narrow reading: focused long-form guidance, policy and reflection.
- Standard reading: the default for normal course explanations.
- Editorial wide: a heading and a short lead, not a full-width body article.
- Statement: a short centred learning moment or transition.
- Two equal columns: two related short ideas, Do and Do Not, concise comparisons.
- Two main / two aside: a main explanation with a concise supporting note, value or quote.
- Three columns: three short parallel principles, definitions, values or steps only.
- Split: heading beside supporting explanation.
- Pull quote aside: non-essential editorial emphasis alongside a longer explanation.
- Band: a short full-width statement or quote on a semantic surface.
- Grid and steps: concise glossary items, principles or editorial steps.

Columns collapse to a single logical DOM order on narrow screens. Do not use right-aligned paragraphs, justified text, three columns for long copy or two columns for two long articles.

## Quotes, Values And Structured Text

Use `QuoteBlock` for standard, side-rule, pull, centred and surface quotes. Quote attribution is optional; do not attribute fabricated quotations to real people.

Use `StatisticBlock` for clearly illustrative values only. A statistic must help explain the learning point and must not imply live business data.

Use semantic `ul` and `ol` elements for lists, `dl` for definitions, and a clearly labelled static question-and-answer layout for non-assessment reading. Checklist visuals are not interactive checkboxes unless an assessment or task component provides that behaviour.

## Surfaces And Text Colour

`TextLayout` accepts semantic surfaces: `none`, `default`, `muted`, `primary`, `secondary`, `accent`, `dark`, `light`, `success`, `warning` and `error`.

Use a surface to support hierarchy, not to turn every paragraph into an alert. Surface foreground pairings are controlled by the system. Keep long essential content on a plain, muted or light readable surface. Do not use colour as the only indicator of meaning.

## AI Authoring Rules

AI should make choices in this order:

1. Explicit visual-designer or storyboard direction.
2. Course-level theme or template configuration.
3. Clear instructional evidence in the supplied content.
4. Quick Course defaults.

AI should identify the semantic purpose, choose an approved role, choose a suitable measure and layout, preserve heading hierarchy and use the simplest readable option when no special treatment is justified.

AI should not:

- Use Display for long copy.
- Add an eyebrow to every heading.
- Use centred text for long reading.
- Make each heading a different colour.
- Use cursive for essential instructions or long passages.
- Use monospace for normal paragraphs.
- Use thin body text, long italic passages or all-caps paragraphs.
- Invent arbitrary colours, font sizes, column ratios or CSS classes.
- Use Pull Quotes for unique required content.

## Responsive, Accessibility And Resilience

- Major display and heading roles use controlled clamp-based sizing.
- Short headings use balanced wrapping; body content uses normal readable wrapping.
- Normal words must not break arbitrarily or be truncated with ellipses.
- Only long technical identifiers may use emergency wrapping.
- Standard reading content stays near a 60 to 75 character line measure.
- Body text remains at a readable size with comfortable line height.
- Links are visibly underlined, focus remains visible and inline code can wrap safely.
- Quotes, lists and definitions retain native semantic HTML.
- Columns collapse at small widths without changing reading order.
- The system must be checked at 320px, standard mobile, laptop, wide desktop and 200% zoom or an equivalent constrained width.

## Design Token Readiness

The typography CSS defines a small semantic variable layer for font families, text roles, tones, surface colours and divider values. Future course-theme tokens can replace these values without changing the semantic component API or AI authoring rules. Do not add a full design-token framework or allow generated course content to set arbitrary tokens.

## Approval Notes

The Typography System remains Draft. It has sufficient structure for visual, instructional and learning-technology review, but should not move to In Review until the project team confirms the editorial treatments, generic cursive tolerance and course-theme token direction.
