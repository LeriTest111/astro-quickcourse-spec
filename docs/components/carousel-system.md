# Quick Course Carousel System

Approval status: Draft

## Purpose

Use the Carousel System for two to eight compact, related items that learners may explore in any order. It is a reusable Astro component backed by locally bundled vanilla `embla-carousel@8.6.0`; it does not use a framework, external CDN, autoplay or looping.

## Authoring API

Import `Carousel.astro` and select one explicit `variant`. The component accepts a stable `id`, meaningful `label`, optional `heading` and `intro`, plus the variant's typed slide data. It intentionally does not expose raw Embla options.

- `content`: one text slide at a time. A slide may contain a title, short body, optional semantic icon, short list and link. Use `count`, `dots` or `count-and-dots` indicators.
- `feature`: one image-and-text slide at a time. Each slide requires meaningful image alt text and image dimensions. The image and copy sit side by side on wide screens and stack on narrow screens.
- `cards`: a small repeated-card collection. It shows one card on mobile, two on tablet and three on desktop, moving one card per action. The visible range is announced as `Items 2-4 of 6`; controls disappear when every card fits.
- `gallery`: one image with an optional caption at a time. It can use counts, dots or accessible thumbnail buttons. Only this variant supports `controls="overlay"`.

## Behaviour and accessibility

The Astro HTML remains a semantic scrollable sequence when JavaScript is unavailable. After enhancement, each instance has a labelled `carousel` region, slides remain groups with position labels, and controls appear only when navigation is possible. Previous and Next are real disabled buttons at their respective ends. Dots and thumbnails are real labelled buttons.

Only the visible enhanced slide or slides remain exposed to keyboard and assistive-technology navigation. The component updates `aria-hidden` and `inert` together and returns focus to Previous if an item becomes unavailable while it contains focus. A polite live status announces learner-initiated slide changes. It does not trap focus, require hover, depend on precise pointer movement or move by itself.

The library handles keyboard activation through native buttons and drag or swipe through Embla as an optional pointer enhancement. `prefers-reduced-motion` reduces Embla's transition duration, and CSS does not add decorative motion.

## Responsive and visual rules

The viewport is contained so it cannot create page-level horizontal overflow. Slides use CSS scroll snap for the no-JavaScript baseline. Feature content stacks safely; card density changes at the documented breakpoints; gallery controls may overlay its image only when JavaScript has enabled navigation. At print time, controls are removed and all items are shown as a normal grid.

Use neutral course surfaces, semantic icons and locally stored assets. Do not create a separate visual theme or use a carousel merely to hide content.

## AI Authoring Guide

Start by deciding whether learners need an ordered process, visible comparison or optional detail. Choose Carousel only when the material is short, peer-level and non-essential in sequence. Select the smallest appropriate variant and keep every slide structurally consistent.

Write concise slide titles and one short paragraph. Supply accurate alt text for informative images; do not use an image just to decorate a text slide. Keep image captions focused on the learning reason for the image. Use the standard controls and indicators rather than inventing alternative labels, autoplay, loop behaviour or custom timing. Keep essential instructions, assessment questions, completion logic and SCORM communication outside the component.

## Maintenance

All instances share one component and one Embla integration. The component is safe to render more than once on a page and cleans up before Astro page swaps. Keep Showcase-only guidance, review badges and specimen copy out of the reusable component. Any future change to navigation, motion, focus or hidden-slide behaviour requires keyboard, screen-reader-oriented semantic, reduced-motion, narrow-viewport and no-JavaScript review.
