# Quick Course Typography System

Status: Draft

The Quick Course Typography System is one controlled system for course copy, editorial emphasis and responsive text layouts. The Working Showcase demonstrates curated combinations; production courses use the same small set of primitives without Showcase labels, statuses or review guidance.

## Font Policy

No external font service, downloaded font file, `@font-face` declaration or JavaScript font loader is used.

- Sans default: `"Arial Nova", Arial, Helvetica, sans-serif`
- Serif: `Georgia, "Times New Roman", Times, serif`
- Monospace: `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace`

Sans is the default for headings, Body copy, UI and most learning content. Serif is reserved for selected editorial headings, reflective introductions and quotes. Monospace is for short technical values, identifiers, filenames and keyboard examples. The system does not provide an additional decorative font family.

## Showcase Baseline

The Typography System supplies the normal Showcase baseline in both Working and Approved builds. Normal page titles, headings, Leads, Body copy, labels, captions, links, list text, guidance and modal copy inherit the Arial Nova-first stack and the controlled normal reading rhythm.

Body is the default for ordinary instructional information, including explanations inside cards, panels, layouts, video examples and modals. Supporting text and Caption are opt-in secondary roles; their location beneath a heading or inside a component does not make normal content secondary.

Section introductions, specimen descriptions, component purposes, guidance paragraphs and instructions use Body unless the content is genuinely optional. Supporting text is only for a non-essential clarification or caveat. Caption is only for text directly tied to media, a figure, a source or attribution.

Expressive treatments remain opt-in. Display roles, editorial serif, pull quotes, large statistics, monospace examples, solid-surface typography and special column layouts are selected only when their instructional purpose calls for them. Component-specific typography remains in control where it protects an established interaction, control or hierarchy.

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
| `body` | Default role for normal instructional reading. It uses a stable `1.125rem` (approximately 18px) size with a 1.55 line height. |
| `body-compact` | Optional concise secondary context, never compressed primary reading. |
| `eyebrow`, `label` | Short contextual labels, categories, statuses and metadata. |
| `caption` | Text directly associated with media, figures, sources or attribution; not a general small-paragraph style. |
| `statement` | A short memorable phrase, transition or instruction. |
| `display-gradient` | One short, high-impact Display phrase using the approved plum-to-steel gradient. |
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

- Narrow reading column: a 42rem measure for detailed or long-form reading where comfortable line length matters.
- Standard reading column: a 54rem measure for most headings, paragraphs and lists in a Quick Course.
- Wide content layout: the available course-content container for short introductions, strong headings, media and surfaces; constrain detailed Body copy to Standard or Narrow measure beneath it.
- Two equal columns: two short parallel ideas of similar length and importance.
- Two unequal columns: a main explanation with a concise supporting note, reminder, example or context.
- Three columns: three short parallel principles, terms or steps only.
- Split heading and body: an editorial opening with a strong heading beside its explanation.
- Pull quote aside: non-essential editorial emphasis alongside a longer explanation.

The default model is a Wide section container with Standard-measure reading content inside it. Long-form or detailed content can use Narrow measure; short headings and Leads can use more of the outer container. Columns collapse to one logical DOM order on narrow screens. Do not use right-aligned paragraphs, justified text, three columns for long copy or two columns for two long articles. Prefer one readable column over forcing text across the full width.

## Vertical Rhythm

Shared parent stacks control the Showcase rhythm so the same relationship receives the same spacing across pages and components. The system distinguishes:

- Major section heading to introduction: `0.65rem`.
- Introduction to first specimen: responsive `2rem` to `2.5rem`.
- Specimen title to description: `0.5rem`.
- Specimen description to rendered example: responsive `1.25rem` to `1.5rem`.
- Content heading to Body and paragraph-to-paragraph rhythm: `1.25rem` for content blocks, with compact `0.5rem` relationships inside headings and cards.
- Major section separation: responsive `4rem` to `5.75rem` plus the section divider treatment.

Use the established section, specimen and prose grid stacks rather than adding local heading or paragraph margins. This prevents margin stacking and keeps mobile, desktop and 200% zoom behaviour predictable. List items remain closer within an item than between separate items.

## Lists And Definitions

Use native `ul` for related non-sequential ideas and `ol` only where order or priority matters. Native markers remain visible and align wrapped text beneath the item, not the marker. Use a learning-outcomes treatment only for genuine outcomes with action verbs. Checklist-style lists are non-interactive text; they do not save, score or track completion. Compact lists use restrained separators for short grouped facts.

Large numbered steps are display treatments, not normal list styles. Use them only for short editorial sequences; do not replace ordinary ordered lists merely for visual decoration. The explanation beneath each display step uses Body by default; use Supporting text only for an additional non-essential note.

Use semantic `dl` markup for term-and-meaning relationships. Static questions and answers use the normal Label, Heading and Body roles. Use a card or accordion only when the content or interaction genuinely requires it. Accordions, interactive checklists, timelines and process exploration belong to the interaction library.

Keep nested lists to one restrained level. Do not choose list markers merely for decorative variety and do not convert every short paragraph into a list.

## Quotes, Values And Surfaces

Use `QuoteBlock` for standard, side-rule, pull, centred and surface quotes. Quote attribution is optional; do not attribute fabricated quotations to real people. A pull quote must clearly reinforce nearby copy and must never hold essential information that exists nowhere else.

Use `StatisticBlock` for clearly illustrative values only. A statistic must help explain the learning point and must not imply live business data.

`TextLayout` accepts semantic surfaces: `none`, `default`, `muted`, `primary`, `secondary`, `accent`, `dark`, `light`, `success`, `warning` and `error`. Use a surface to support hierarchy, not to turn every paragraph into an alert. Keep long essential content on a plain, muted or light readable surface. Do not use colour as the only indicator of meaning.

## Gradient Display Text

`display-gradient` is one restrained, opt-in treatment for a short hero phrase, major transition, concise statement or occasional prominent statistic. It uses the approved plum-to-steel gradient from the existing Showcase palette. Use it once and sparingly; normal headings, Body copy, lists, Supporting text, Captions, definitions, links and instructions remain solid.

The solid plum foreground is the default fallback. Gradient clipping is applied only when supported. Forced-colours and print contexts restore readable solid text. The treatment is static, needs no JavaScript, introduces no external dependency and remains suitable for static and SCORM builds.

## AI Authoring Rules

AI should make choices in this order:

1. Explicit visual-designer or storyboard direction.
2. Course-level theme or template configuration.
3. Clear instructional evidence in the supplied content.
4. Quick Course defaults.

AI should identify the semantic purpose, choose an approved role, choose a suitable measure and layout, preserve heading hierarchy and use the simplest readable option when no special treatment is justified.

Normal Body uses the shared fixed 18px baseline with a 1.55 line height. Do not reduce it to force excessive content into a layout. Use Wide for the outer section or component container, Standard for ordinary paragraphs and Narrow for detailed long-form content. Use Supporting text only for optional context and Caption only for text directly attached to media or attribution. Use the existing parent grid stacks for heading, paragraph and specimen rhythm instead of adding one-off margins.

AI should not:

- Use Display for long copy.
- Treat Display roles as heading levels.
- Add an eyebrow to every heading.
- Turn a normal ordered list into large editorial steps without a clear display purpose.
- Use centred text for long reading.
- Make each heading a different colour.
- Use small text to fit excessive content.
- Use monospace for normal paragraphs.
- Use thin Body text, long italic passages or all-caps paragraphs.
- Put essential information only in a pull quote or supporting aside.
- Use gradient Display text as decoration, on long copy, or for more than one prominent phrase in the same view. Use solid text for normal headings and all instructional reading.
- Invent arbitrary colours, font sizes, column ratios or CSS classes.
- Silently truncate storyboard copy.

## Responsive, Accessibility And Real-World Content

- Major Display and heading roles use controlled clamp-based sizing.
- Body uses a fixed 18px size with a 1.55 line height while compact roles remain distinct.
- Short headings use balanced wrapping; Body content uses ordinary readable wrapping.
- Normal words must not break arbitrarily or be truncated with ellipses.
- Long links and identifiers can wrap safely without creating horizontal overflow.
- Standard reading content stays near a 60 to 75 character line measure.
- Links are visibly underlined, focus remains visible and inline code can wrap safely.
- Quotes, lists and definitions retain native semantic HTML.
- Columns collapse at small widths without changing reading order.
- Optional content such as eyebrows, descriptions and captions must not leave blank placeholder gaps when absent.
- Check the system at narrow mobile, standard mobile, tablet, laptop, wide desktop and 200% zoom or an equivalent constrained width.

## Design Token Readiness

The typography CSS defines a small semantic variable layer for font families, text roles, tones, surface colours, divider values, Body size and vertical-rhythm relationships. Future course-theme tokens can replace these values without changing the semantic component API or AI authoring rules. The shared stacks normalise heading and paragraph margins, prevent accidental margin stacking and work in both Working and Approved builds. The output remains static-build and SCORM compatible. Do not add a full design-token framework or allow generated course content to set arbitrary tokens.

## Approval Notes

The Typography System remains Draft. It has sufficient structure for visual, instructional and learning-technology review, but should not move to In Review until the project team confirms the editorial treatments, reading-layout guidance, revised page rhythm and course-theme token direction.
