# Layout Patterns

Reusable layouts currently sit in Draft or Concept while the project team reviews which patterns should progress. The components are neutral, Astro-only, responsive and suitable for composition inside a single-page production Quick Course.

Eyebrows are optional. Use them only when the label adds context that the heading does not already provide, such as `Module 2`, `Scenario`, `Section 3`, `Product knowledge` or a meaningful content category. Most components and examples should work well without an eyebrow.

Showcase page labels and counts should stay restrained. Do not add page-level component counts, visible `Section index` headings or example-count eyebrows to make a page feel complete. Category pages may keep quiet anchor navigation, and major groups should be separated through spacing, dividers and subtle neutral surface changes.

Hero examples use the shared Showcase-only `Options` disclosure for optional preview controls. These controls are review tooling and are not part of reusable production layout components.

Sticky Side Navigation has been removed from the reusable layout library and Showcase. Production Quick Courses should remain single-page experiences with navigation that targets topics or section anchors within the same page.

## Existing Heroes

Status: Draft

Purpose: introduce a module, course or scenario with one of six opener variants: `ImageOverlayHero`, `SplitHero`, `CenteredMinimalHero`, `FloatingCardHero`, `LearningObjectivesHero` and `ScenarioOpenerHero`.

Recommended use: course starts, module starts and scenario starts.

Misuse to avoid: repeated chapter separators inside a long course. Use `SectionDivider` for that.

## Readable Text Section

Status: Draft

Purpose: dependable text-first layout for policies, explanations and procedures.

Content model or props: optional eyebrow, heading, intro, rich content slot, callout slot, optional primary action and readable or wide width.

Responsive behaviour: keeps the default reading width near 65ch to 70ch and avoids fixed heights.

Accessibility considerations: semantic section structure, configurable heading level, normal list and link markup.

Suitable use cases: service standards, procedure explanations, compliance notes and guidance pages.

Misuse to avoid: globally constraining all course paragraphs.

Customizable properties: eyebrow, heading, intro, heading level, width and action.

Standardized properties: readable default width and native system font stack.

## Text and Image Split

Status: Draft

Purpose: pair instructional text with a supporting image.

Content model or props: optional eyebrow, heading, description, content slot, actions, local image, alt text and caption.

Responsive behaviour: stacks on mobile and supports image-left or image-right desktop layout.

Accessibility considerations: meaningful alt text when the image conveys information; explicit action labels.

Suitable use cases: product context, workplace scenario introductions and concept explanations.

Misuse to avoid: fixed image heights that crop essential information.

Customizable properties: image position, balance, mobile image order and actions.

Standardized properties: local images, object-fit handling and visible focus states.

## Two-Column Content

Status: Draft

Purpose: compare two related content blocks without images.

Content model or props: shared header plus left and right column headings, labels, icons, body and optional points.

Responsive behaviour: collapses to one column on narrow screens.

Accessibility considerations: content order remains logical; colour is not the only difference between columns.

Suitable use cases: do/don't, problem/solution, customer says/you respond and feature/benefit.

Misuse to avoid: assuming both columns have equal text length.

Customizable properties: labels, icons, body copy, points and column weighting.

Standardized properties: semantic article blocks and native font stack.

## Card Grid

Status: Draft

Purpose: display repeated topics, products, benefits or module options.

Content model or props: section header and cards with title, description, image, image alt, icon, href and label.

Responsive behaviour: supports two, three and four desktop columns with mobile collapse.

Accessibility considerations: only the full card link is interactive when `href` is provided; no nested controls.

Suitable use cases: category lists, service pillars, benefits and option menus.

Misuse to avoid: turning every card into a link when it does not navigate.

Customizable properties: column count and card content.

Standardized properties: consistent card structure and focus order.

## Product Feature

Status: Concept

Purpose: support product-knowledge Quick Courses with structured feature rows.

Content model or props: product image, name, statement, features, benefits, tip, recommendation, caution and optional action.

Responsive behaviour: horizontal rows on wider screens and stacked mobile cards.

Accessibility considerations: semantic lists for feature and benefit content.

Suitable use cases: retail products, service plans, financial products and internal tools.

Misuse to avoid: hard-coding industry labels into the component.

Customizable properties: labels, image position, compact mode, action and product data.

Standardized properties: list markup and neutral presentation.

## Feature List with Supporting Visual

Status: Concept

Purpose: pair a supporting image with three to six feature items.

Content model or props: heading, intro, image, feature titles, descriptions and optional icons.

Responsive behaviour: stacks cleanly on mobile.

Accessibility considerations: decorative icons are hidden from assistive technology.

Suitable use cases: principles, technologies, benefits and key behaviours.

Misuse to avoid: making the visual more important than the learning list.

Customizable properties: image side, features, tip and action.

Standardized properties: semantic list structure.

## Numbered Process

Status: Draft

Purpose: display two to eight sequential procedure steps.

Content model or props: ordered steps with title, description, icon and note.

Responsive behaviour: vertical by default, with optional horizontal desktop presentation.

Accessibility considerations: uses ordered-list semantics and visible numbers.

Suitable use cases: escalation paths, onboarding flows and operational procedures.

Misuse to avoid: relying on connector lines alone to communicate order.

Customizable properties: orientation and step content.

Standardized properties: visible sequence and resilient spacing.

## Comparison Layout

Status: Concept

Purpose: compare options, behaviours or approaches.

Content model or props: options with labels, titles, descriptions, points, recommendation state and optional table rows.

Responsive behaviour: cards stack naturally; table content has a stacked representation on narrow screens.

Accessibility considerations: recommendation is communicated by text and structure, not colour alone.

Suitable use cases: before/after, do/don't, option A/B and compact comparison tables.

Misuse to avoid: forcing complex tables into unreadable horizontal scrolling on mobile.

Customizable properties: card or table variant, options, rows and highlighted option.

Standardized properties: semantic table markup when tabular content is used.

## Image Gallery or Visual Grid

Status: Draft

Purpose: arrange static visual content.

Content model or props: local images with alt text and optional captions.

Responsive behaviour: supports two, three, four and featured image grids.

Accessibility considerations: meaningful alt text where images convey information; empty alt text is allowed for decorative imagery.

Suitable use cases: visual inspections, product details and static image comparisons.

Misuse to avoid: adding lightbox or click-to-expand behaviour here.

Customizable properties: grid variant and image list.

Standardized properties: aspect-ratio containers and captions.

## Quote or Key Message

Status: Concept

Purpose: create a visual pause for an important statement or genuine quotation.

Content model or props: message, attribution, role, source, context and optional background image.

Responsive behaviour: text wraps at readable sizes on mobile.

Accessibility considerations: uses `blockquote` and `cite` only for genuine quotations.

Suitable use cases: customer insight, principle, quote and section emphasis.

Misuse to avoid: baking text into images or using quote semantics for ordinary copy.

Customizable properties: quote mode, attribution, context and background image.

Standardized properties: contrast-preserving overlay when imagery is used.

## Call-to-Action Section

Status: Concept

Purpose: prompt one clear next learner action.

Content model or props: optional eyebrow, heading, description, primary action, secondary action, icon or image.

Responsive behaviour: actions wrap or stack naturally.

Accessibility considerations: links are used for navigation and labels remain explicit.

Suitable use cases: explore a resource, download a guide, continue to an assessment or start practice.

Misuse to avoid: vague action labels such as `Click here`.

Customizable properties: compact/prominent variant, icon, image and actions.

Standardized properties: visible focus states and clear button/link styling.

## Section Divider or Chapter Opener

Status: Concept

Purpose: separate major sections in a long single-page Quick Course.

Content model or props: section number, label, heading, one-sentence introduction, image or colour block and progress label.

Responsive behaviour: compact on mobile and avoids excessive vertical height.

Accessibility considerations: configurable heading level prevents repeated page-level H1 headings.

Suitable use cases: chapter starts, major topic transitions and progress markers.

Misuse to avoid: using it as a full hero replacement at the top of every page.

Customizable properties: heading level, progress label, image and section number.

Standardized properties: compact landmark-style structure.

## Summary Layout

Status: Concept

Purpose: close a section or course with a structured recap.

Content model or props: heading, intro, takeaways, checklist, next step, action and optional icon.

Responsive behaviour: takeaways and checklist sit side by side when space allows and stack on mobile.

Accessibility considerations: semantic lists and no scoring logic.

Suitable use cases: section recaps, course endings and manager takeaway prompts.

Misuse to avoid: adding answer checking or completion behaviour here.

Customizable properties: course or section variant, icon, next step and action.

Standardized properties: concise scannable structure.
