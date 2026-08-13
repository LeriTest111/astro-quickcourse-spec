# Display Interactions

Display interactions currently sit in Draft, Concept or Idea while the project team reviews which patterns should progress. These components help learners reveal, compare or navigate information. They do not score answers, determine correctness, track attempts or call SCORM. Before-and-After Reveal has been removed from the library until a stronger Quick Course use case emerges.

Use brief, purposeful animation only when it clarifies a state change. Motion should use small opacity or transform changes, never autoplay content, and must respect `prefers-reduced-motion`.

## Accordion

Approval status: Draft

Purpose: reveal optional supporting detail without displaying every explanation at once.

Recommended use: FAQs, policy explanations, definitions, product detail, troubleshooting, examples and reference notes. Do not hide essential instructions, mandatory safety content, required process steps or assessment instructions in an accordion.

Content structure or props: a stable group `id`, optional heading and intro, items with a stable id, title, normal text content, optional short label or number, optional meaningful icon, optional image media, list or small callout. Use controlled `behavior` (`multiple` or `single`), `initialOpen` (`none`, `first` or an item id), `orientation` (`vertical` or `horizontal`), `presentation` (`minimal`, `contained` or `surface`) and an optional cohesive surface treatment.

Interaction behaviour: the vertical system uses native `details` and `summary`. Multiple-open is the default. Single-open uses native named disclosure groups with a small scoped JavaScript fallback that closes siblings; an open item can always be closed. The dedicated right-side disclosure arrow rotates on open. Meaningful left-side icons remain stationary.

Keyboard behaviour: native summary controls work with keyboard without custom key handling. Focus uses the shared purple/neutral focus treatment. Links and secondary actions belong in an expanded panel, not in the summary.

Responsive behaviour: vertical content grows naturally and does not clip long titles or panel content. Image-and-text panels stack on smaller screens. Horizontal image-led accordions require three to five concise items and single-open behaviour; they become normal vertical accordions on narrow screens.

Accessibility considerations: native disclosure semantics communicate state. Summary text must be meaningful; colour is not the only open-state indicator; media needs appropriate alt text; focus remains visible; and reduced-motion removes panel and arrow motion. Printed output exposes all panel content.

JavaScript requirements: none for independent vertical disclosure. A small local enhancement supports consistent single-open behaviour; no accordion library or framework is used.

Suitable use cases: common customer questions, optional recovery guidance, product examples, supporting display checks and concise visual perspectives.

Misuse to avoid: hiding information every learner must read, sequential procedures, large FAQ sets in horizontal mode, long prose in the horizontal variant, nested accordions, carousels or assessments inside a panel.

Customizable properties: item count, concise labels, stationary semantic icons, controlled media, panel layout, initial state, behaviour, orientation and approved presentation/surface options.

Standardized properties: native disclosure baseline, right-side chevron, stationary content icons, minimum touch-sized summaries, purple/neutral focus, coherent group surfaces, subtle 220ms motion and reduced-motion fallback.

## Tabs

Approval status: Draft

Purpose: switch between related content panels without leaving the section.

Recommended use: peer content such as Listen, Clarify, Explain and Confirm.

Content structure or props: stable id, heading, intro and two to five tab items with labels, content and optional icons.

Interaction behaviour: tab buttons activate associated panels.

Keyboard behaviour: supports Left, Right, Home and End keys.

Responsive behaviour: tab labels scroll horizontally when space is tight.

Accessibility considerations: uses `tablist`, `tab`, `tabpanel`, `aria-selected` and linked IDs.

JavaScript requirements: required for tab activation and keyboard navigation.

Suitable use cases: related options or perspectives.

Misuse to avoid: sequential content that must be read in order.

Customizable properties: labels, icons, default tab and panel copy.

Standardized properties: predictable focus and active state.

## Quick Course Flip Card System

Approval status: Draft

Purpose: reveal one concise, meaningful second face such as a definition, explanation, benefit or visual comparison.

Content structure or props: every card has structured `front` and `back` faces. Supported face layouts are Text, Icon-led, Image, Image Overlay, Feature and Statement. Every face independently supports controlled `surface`, horizontal `alignment` and `verticalAlignment` properties where relevant. The system supports Text to Text, Icon-led to Text, Image to Text, Text to Image, Image Overlay to Text, Feature to Text, Statement to Text and Image to Image combinations.

Interaction behaviour: the entire card is one real button. Learners click, tap, press Enter or press Space to reveal and return. `flip` is the default reveal mode; `slide` raises the full back face upward over a stationary front. Content determines what appears on the faces; reveal mode determines only how the reverse face is presented.

Keyboard behaviour: cards remain in normal focus order, show visible focus, use `aria-pressed`, update their accessible label and make the hidden face unavailable to assistive technology.

Responsive behaviour: portrait, square and landscape formats stack on narrow screens. Equal-height groups align on wider screens and deliberately return to each card's natural stable height on narrow layouts.

Height modes: `content` measures the taller front or back for each individual card and keeps that height stable during a reveal. `equal` measures every face in a group and applies the shared tallest height for aligned grids.

Accessibility considerations: no hover-only content, nested links, nested buttons or internal scrolling. Informative images need meaningful alt text; decorative indicators remain hidden from assistive technology. Flip uses a controlled turn-card indicator, while Slide uses controlled Expand and Collapse indicators. Reduced-motion preference uses an instant content swap rather than 3D rotation or a large slide.

Suitable use cases: term/definition, myth/reality, question/answer, role/responsibility, feature/benefit, product image/explanation and clear visual comparisons.

Misuse to avoid: essential reading, long procedures, several paragraphs, formal assessment questions or a reveal that adds no instructional value. Prefer no Flip Card over a weak decorative reveal.

AI authoring guidance: select a supported face type and semantic icon only where it supports meaning. Keep fronts concise and backs scannable. Use top and left alignment for explanatory content; use centred horizontal and vertical alignment for short icons, values and statements. Use semantic surfaces rather than arbitrary colours, and use status surfaces only when content has that meaning. Use Statement for short prompts, labels, outcomes or memorable keywords, never paragraphs or detailed feedback. Flip and Slide work with every face type; use Flip as the fallback and keep reveal mode, height mode and format consistent in the same card group unless a designer explicitly directs otherwise.

Standardized properties: the component controls typography, spacing, statement scale, image crop, semantic foreground contrast, movement, focus, reduced-motion behaviour and accessibility. Showcase examples are review specimens, not production authoring controls. Future theme tokens may supply surface, radius and brand-overlay values without changing the face API.

## Carousel

Approval status: Draft

Purpose: let learners move through a small set of compact, related learning items without leaving the section.

The Quick Course Carousel System has four controlled variants: `content`, `feature`, `cards` and `gallery`. It uses locally bundled vanilla Embla Carousel `8.6.0`, while Astro-rendered HTML and CSS scroll snap provide the baseline. Read the detailed [Carousel System guide](./carousel-system.md) before creating a new specimen or production use.

Suitable use cases: short customer-service tips, related product features, small card collections and image sequences.

Misuse to avoid: essential reading, mandatory ordered procedures, assessments, long policy text, large content sets or information learners must compare at the same time.

Standardized properties: one shared engine, no autoplay, no loop, explicit Previous and Next controls, restrained visible position indicators where appropriate, progressive enhancement and controlled responsive behaviour. Content surfaces, Feature focal points, Gallery overlay controls and responsive image ratios are limited typed options rather than free-form styling.

## Click-to-Reveal Hotspots

Approval status: Draft

Purpose: select marked image regions and reveal related detail.

Recommended use: workspace inspections, product diagrams and visual checklists.

Content structure or props: base image, alt text and two to six hotspots with label, accessible name, percentage position, title and description.

Interaction behaviour: image hotspot buttons and the right-hand text control list activate the same detail panels.

Keyboard behaviour: all hotspot controls are real buttons.

Responsive behaviour: positions scale with the image; on mobile the text controls stack below the image and become the primary fallback.

Accessibility considerations: detail text repeats the meaning so it is not only visual. Do not add a third duplicate row of hotspot buttons.

JavaScript requirements: required for selected state and panel switching.

Suitable use cases: visual exploration with concise details.

Misuse to avoid: responsive image-map coordinates or hover-only markers.

Customizable properties: positions, labels and detail content.

Standardized properties: touch-sized image controls, synchronized text controls and selected-state text.

## Timeline

Approval status: Draft

Purpose: explore dated or milestone-led events in chronological order.

Recommended use: customer journeys, onboarding milestones, company history and operational timelines where the key question is when events happened.

Content structure or props: ordered events with label, title, description, optional detail and optional image.

Interaction behaviour: date or milestone buttons sit on a chronological line and reveal expanded event detail.

Keyboard behaviour: event markers are buttons in chronological order.

Responsive behaviour: vertical chronological list on mobile with a horizontal marker sequence where space permits.

Accessibility considerations: sequence is preserved with ordered-list markup and labels.

JavaScript requirements: required for selected event display.

Suitable use cases: compact chronology with optional details.

Misuse to avoid: using it for action-led procedures or relying on lines alone to communicate order.

Customizable properties: labels, details and images.

Standardized properties: ordered structure, prominent date or milestone labels, visible selected state and restrained detail animation.

## Process Explorer

Approval status: Draft

Purpose: inspect action-led process steps one at a time.

Recommended use: procedures that need richer step detail than a static numbered layout, especially where the learner needs to know what action happens next.

Content structure or props: three to eight steps with title, summary, detail, optional tip, warning or image.

Interaction behaviour: numbered step selectors and Previous/Next controls update the active step.

Keyboard behaviour: selectors and controls are standard buttons with disabled states where appropriate.

Responsive behaviour: selectors wrap or stack safely on small screens.

Accessibility considerations: navigation does not imply completion or assessment progress.

JavaScript requirements: required for active-step state.

Suitable use cases: customer-service workflows and operational procedures.

Misuse to avoid: styling procedural actions as a date-led timeline or forcing learners to complete steps before navigation.

Customizable properties: steps, notes, warnings and images.

Standardized properties: visible step numbers, action-led labels, active state and restrained panel animation.

## Expandable Image

Approval status: Concept

Purpose: display a relatively small inline image and let the learner inspect a substantially larger version.

Recommended use: product details, diagrams, infographics, screenshots, labels, maps, floor plans and technical illustrations.

Content structure or props: image source, optional thumbnail source, alt text, short caption, expand label and thumbnail size.

Interaction behaviour: a named expand button opens a centred native dialog with a significantly larger image.

Keyboard behaviour: opening uses a real button, Escape closes the dialog and focus returns to the trigger.

Responsive behaviour: the thumbnail stays small in the page, while the expanded image fits within the viewport without cropping or distortion.

Accessibility considerations: dialog has an accessible label and an obvious overlaid close control. The dialog contains only the image and Close button. Supporting explanatory text belongs in Supporting-Detail Modal, not in the image modal.

JavaScript requirements: required for dialog opening and focus return.

Suitable use cases: diagrams, product details and infographics.

Misuse to avoid: opening automatically, using the image click as the only trigger or placing large explanatory text in the image dialog.

Customizable properties: image source, thumbnail, caption, expand label and thumbnail size.

Standardized properties: small thumbnail treatment, image-only centred native dialog, overlaid close control, Escape support and focus return.

## Cursor Policy

Use `cursor: pointer` for genuine click targets such as links, enabled buttons, summaries, carousel controls, hotspots, tabs, timeline selectors, process controls, flip cards and modal triggers.

Do not use pointer cursor to make static content look interactive. Semantic controls, keyboard support, visible focus states, accessible names and adequate target sizes remain mandatory.

## Supporting-Detail Modal or Panel

Approval status: Concept

Purpose: reveal optional supporting information without interrupting the main course flow.

Recommended use: definitions, worked examples, specifications and reference information.

Content structure or props: trigger label, dialog heading, content, optional image and optional action.

Interaction behaviour: native dialog opens and closes with scoped controls.

Keyboard behaviour: trigger and close controls are buttons, Escape closes the dialog and focus returns to the trigger.

Responsive behaviour: dialog width fits the viewport and long content scrolls.

Accessibility considerations: dialog is named by its heading and background interaction is prevented while modal.

JavaScript requirements: required for dialog opening, close handling and focus return.

Suitable use cases: optional policy, product or conversation detail.

Misuse to avoid: essential content, assessment questions or vague trigger labels such as `More`.

Customizable properties: trigger, heading, content, image and action.

Standardized properties: native dialog, explicit close control, neutral styling, Escape support and focus return.
