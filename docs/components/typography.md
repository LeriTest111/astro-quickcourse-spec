# Quick Course Typography System

Status: Draft

The Quick Course Typography System is one controlled system for course copy, editorial emphasis and responsive text layouts. The Working Showcase demonstrates curated combinations; production courses use the same small set of primitives without Showcase labels, statuses or review guidance.

## Font Policy

No external font service, downloaded font file, `@font-face` declaration or JavaScript font loader is used.

- Sans default: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif`
- Serif: `Georgia, "Times New Roman", Times, serif`
- Monospace: `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace`

Sans is the default for headings, Body copy, UI and most learning content. Serif is reserved for selected editorial headings, reflective introductions and quotes. Monospace is for short technical values, identifiers, filenames and keyboard examples. The system does not provide an additional decorative font family.

## Production Primitives

The system deliberately uses a small set of typed Astro components.

- `TypeText.astro`: semantic type role, alignment, reading measure, family, weight, tone and italic treatment.
- `TextLayout.astro`: controlled reading, statement, column, aside, band and grid layouts with semantic surfaces and spacing.
- `QuoteBlock.astro`: semantic `blockquote` and `cite` treatments.
- `StatisticBlock.astro`: semantic definition-list values and labels.
- `DefinitionList.astro`: semantic term-definition pairs.

Use the relevant native element (`h1` to `h6`, `p`, `blockquote`, `ul`, `ol`, `dl`, `code`, `mark`, `abbr`) for content meaning. A visual type role does not choose or change the document outline.

## Display And Content Hierarchy

Display roles control visual impact. They are not heading levels or separate font families. A Display role may be applied to an appropriate semantic element, but it must not replace the course heading structure.

Use Display only for short, exceptional openings, transitions or memorable concepts. Long headings should use the normal heading roles instead.

Content hierarchy is the structural system for page titles, sections, subsections and minor headings. Choose the HTML level from the page outline first, then select the controlled visual role.

## Semantic Type Roles

| Role | Recommended use |
| --- | --- |
| `display-xl`, `display-lg`, `display-md` | Short course-opening or section-opening statements only. |
| `heading-xl`, `heading-lg`, `heading-md`, `heading-sm` | Headings at the semantic level required by the page outline. |
| `lead` | One concise introductory paragraph. |
| `body` | Default role for normal instructional reading. It scales to approximately 18px at normal desktop reading sizes. |
| `body-compact` | Concise secondary context, not compressed primary reading. |
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
- Family: `sans`, `serif`, `mono`
- Weight: `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`
- Tone: `default`, `muted`, `strong`, `accent`, `primary`, `secondary`, `inverse`, `success`, `warning`, `error`

Use light weight only for large Display text. Normal Body copy must remain regular or stronger. Use italic only for short editorial content, citations and selected quotes; never italicise long Body sections.

## Reading Layouts

- Narrow reading column: detailed or long-form reading where comfortable line length matters.
- Standard reading column: the default for most headings, paragraphs and lists in a Quick Course.
- Wide content layout: short introductions, strong headings or concise content; constrain detailed Body copy beneath it.
- Two equal columns: two short parallel ideas of similar length and importance.
- Two unequal columns: a main explanation with a concise supporting note, reminder, example or context.
- Three columns: three short parallel principles, terms or steps only.
- Split heading and body: an editorial opening with a strong heading beside its explanation.
- Pull quote aside: non-essential editorial emphasis alongside a longer explanation.

Columns collapse to one logical DOM order on narrow screens. Do not use right-aligned paragraphs, justified text, three columns for long copy or two columns for two long articles. Prefer one readable column over forcing text across the full width.

Major Showcase sections use shared editorial spacing. Independent specimens use a smaller shared gap, while paragraphs, citations and list items within one specimen stay more closely grouped. This preserves a readable rhythm without turning the page into isolated cards.

## Lists, Definitions And Static Q&A

Use native `ul` for related non-sequential ideas and `ol` only where order or priority matters. Use a learning-outcomes treatment only for genuine outcomes with action verbs. Large numbered steps are static editorial text, not an interactive process. Checklist-style lists are non-interactive text; they do not save, score or track completion.

Use semantic `dl` markup for term-and-meaning relationships. Use static Q&A for readable common questions, reflection prompts and FAQs that do not need disclosure behaviour. Accordions, interactive checklists, timelines and process exploration belong to the interaction library.

Keep nested lists to one restrained level. Do not choose list markers merely for decorative variety and do not convert every short paragraph into a list.

## Quotes, Values And Surfaces

Use `QuoteBlock` for standard, side-rule, pull, centred and surface quotes. Quote attribution is optional; do not attribute fabricated quotations to real people. A pull quote must clearly reinforce nearby copy and must never hold essential information that exists nowhere else.

Use `StatisticBlock` for clearly illustrative values only. A statistic must help explain the learning point and must not imply live business data.

`TextLayout` accepts semantic surfaces: `none`, `default`, `muted`, `primary`, `secondary`, `accent`, `dark`, `light`, `success`, `warning` and `error`. Use a surface to support hierarchy, not to turn every paragraph into an alert. Keep long essential content on a plain, muted or light readable surface. Do not use colour as the only indicator of meaning.

## AI Authoring Rules

AI should make choices in this order:

1. Explicit visual-designer or storyboard direction.
2. Course-level theme or template configuration.
3. Clear instructional evidence in the supplied content.
4. Quick Course defaults.

AI should identify the semantic purpose, choose an approved role, choose a suitable measure and layout, preserve heading hierarchy and use the simplest readable option when no special treatment is justified.

AI should not:

- Use Display for long copy.
- Treat Display roles as heading levels.
- Add an eyebrow to every heading.
- Use centred text for long reading.
- Make each heading a different colour.
- Use small text to fit excessive content.
- Use monospace for normal paragraphs.
- Use thin Body text, long italic passages or all-caps paragraphs.
- Put essential information only in a pull quote or supporting aside.
- Invent arbitrary colours, font sizes, column ratios or CSS classes.
- Silently truncate storyboard copy.

## Responsive, Accessibility And Real-World Content

- Major Display and heading roles use controlled clamp-based sizing.
- Body scales slightly for comfortable normal reading while compact roles remain distinct.
- Short headings use balanced wrapping; Body content uses ordinary readable wrapping.
- Normal words must not break arbitrarily or be truncated with ellipses.
- Long links and identifiers can wrap safely without creating horizontal overflow.
- Standard reading content stays near a 60 to 75 character line measure.
- Links are visibly underlined, focus remains visible and inline code can wrap safely.
- Quotes, lists, definitions and Q&A retain native semantic HTML.
- Columns collapse at small widths without changing reading order.
- Optional content such as eyebrows, descriptions and captions must not leave blank placeholder gaps when absent.
- Check the system at narrow mobile, standard mobile, tablet, laptop, wide desktop and 200% zoom or an equivalent constrained width.

## Design Token Readiness

The typography CSS defines a small semantic variable layer for font families, text roles, tones, surface colours, divider values, Body size, section spacing and specimen spacing. Future course-theme tokens can replace these values without changing the semantic component API or AI authoring rules. Do not add a full design-token framework or allow generated course content to set arbitrary tokens.

## Approval Notes

The Typography System remains Draft. It has sufficient structure for visual, instructional and learning-technology review, but should not move to In Review until the project team confirms the editorial treatments, reading-layout guidance, revised page rhythm and course-theme token direction.
