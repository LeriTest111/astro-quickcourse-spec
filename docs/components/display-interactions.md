# Display Interactions

All nine display interactions are marked `In Review` until the project team approves them. These components help learners reveal, compare or navigate information. They do not score answers, determine correctness, track attempts or call SCORM. Before-and-After Reveal has been removed from the library until a stronger Quick Course use case emerges.

Use brief, purposeful animation only when it clarifies a state change. Motion should use small opacity or transform changes, never autoplay content, and must respect `prefers-reduced-motion`.

## Accordion

Approval status: In Review

Purpose: reveal supporting content without displaying every detail at once.

Recommended use: optional explanations, FAQs, definitions and reference notes.

Content structure or props: heading, intro, items with title, content, optional icon or media, single-open or multiple-open mode and optional default-open item.

Interaction behaviour: native `details` and `summary` provide the baseline; small scoped JavaScript closes sibling items in single-open mode. Content reveal uses restrained opacity, vertical movement and indicator rotation.

Keyboard behaviour: native summary controls are keyboard operable.

Responsive behaviour: content expands vertically and does not clip long text.

Accessibility considerations: expanded state is native, headings remain visible and labels must be descriptive.

JavaScript requirements: optional, only for single-open behaviour.

Suitable use cases: common customer questions, policy details and supporting definitions.

Misuse to avoid: hiding essential instructions that every learner must read.

Customizable properties: item count, icons, media, open mode and default item.

Standardized properties: neutral borders, visible focus, native disclosure behaviour and restrained reveal motion.

## Tabs

Approval status: In Review

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

## Flip Cards

Approval status: In Review

Purpose: reveal a short second layer of related information.

Recommended use: term/definition, feature/benefit, myth/fact and question/explanation pairs.

Content structure or props: card front heading, optional front text, icon or image, back heading and back text.

Interaction behaviour: each card has a real reveal button and toggles between prompt and detail.

Keyboard behaviour: buttons are in normal focus order and use `aria-expanded`.

Responsive behaviour: cards stack on mobile and form a small grid on wider screens.

Accessibility considerations: does not rely on hover. The default visual treatment uses a 3D flip, while reduced-motion users get a simple content swap.

JavaScript requirements: required for reveal state, face visibility and height measurement.

Suitable use cases: compact checks for understanding without scoring.

Misuse to avoid: long back content that belongs in a panel or accordion.

Customizable properties: icons, images, copy and `heightMode`.

Standardized properties: button-based reveal, neutral card styling, real flip animation and `heightMode: "equal" | "content"`.

## Carousel

Approval status: In Review

Purpose: move through a small set of related slides.

Recommended use: two to eight compact examples, images or mixed-content panels.

Content structure or props: stable id, slide type, title, body, image, alt text, caption, attribution, action, indicator style, slide-count visibility and arrow position.

Interaction behaviour: Previous and Next arrows sit at or beside the slide edges, indicators sit inside the carousel frame near the bottom and direct slide controls update the visible slide.

Keyboard behaviour: controls are buttons; inactive slides are hidden from keyboard users after enhancement.

Responsive behaviour: slide content stacks safely, edge arrows remain touch-sized and the component avoids horizontal page overflow.

Accessibility considerations: no autoplay, live status text and disabled controls at the ends.

JavaScript requirements: required for slide navigation.

Suitable use cases: small example sets, product highlights, images with captions, short tips, quotes and related visual panels.

Misuse to avoid: essential long-form content, important procedures, content learners must compare simultaneously or large slide sets.

Customizable properties: `indicatorStyle: "dots" | "numbers" | "none"`, `showSlideCount`, `arrowPosition: "overlay" | "outside"` and slide content.

Standardized properties: one reusable carousel engine, supported slide types `image`, `text`, `image-text`, `quote` and `card`, no autoplay and explicit controls.

## Click-to-Reveal Hotspots

Approval status: In Review

Purpose: select marked image regions and reveal related detail.

Recommended use: workspace inspections, product diagrams and visual checklists.

Content structure or props: base image, alt text and two to six hotspots with label, accessible name, percentage position, title and description.

Interaction behaviour: hotspot buttons and a mobile control list activate detail panels.

Keyboard behaviour: all hotspot controls are real buttons.

Responsive behaviour: positions scale with the image and mobile controls do not require precise pointer movement.

Accessibility considerations: detail text repeats the meaning so it is not only visual.

JavaScript requirements: required for selected state and panel switching.

Suitable use cases: visual exploration with concise details.

Misuse to avoid: responsive image-map coordinates or hover-only markers.

Customizable properties: positions, labels and detail content.

Standardized properties: touch-sized controls and selected-state text.

## Timeline

Approval status: In Review

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

Approval status: In Review

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

Approval status: In Review

Purpose: display a relatively small inline image and let the learner inspect a substantially larger version.

Recommended use: product details, diagrams, infographics, screenshots, labels, maps, floor plans and technical illustrations.

Content structure or props: image source, optional thumbnail source, alt text, short caption, expand label and thumbnail size.

Interaction behaviour: a named expand button opens a centred native dialog with a significantly larger image.

Keyboard behaviour: opening uses a real button, Escape closes the dialog and focus returns to the trigger.

Responsive behaviour: the thumbnail stays contained in the page, while the expanded image fits within the viewport and dialog content can scroll.

Accessibility considerations: dialog has an accessible label and an obvious close control. Supporting explanatory text belongs in Supporting-Detail Modal, not in the image modal.

JavaScript requirements: required for dialog opening and focus return.

Suitable use cases: diagrams, product details and infographics.

Misuse to avoid: opening automatically, using the image click as the only trigger or placing large explanatory text in the image dialog.

Customizable properties: image source, thumbnail, caption, expand label and thumbnail size.

Standardized properties: thumbnail treatment, centred native dialog, obvious close control, Escape support and focus return.

## Supporting-Detail Modal or Panel

Approval status: In Review

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
