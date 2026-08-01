# Quick Course Carousel System

Approval status: Draft

## Purpose

Use the Carousel System for two to eight compact, related items that learners may explore in any order. It is a reusable Astro component backed by locally bundled vanilla `embla-carousel@8.6.0`; it does not use a framework, external CDN, autoplay or looping.

## Authoring API

Import `Carousel.astro` and select one explicit `variant`. The component accepts a stable `id`, meaningful `label`, optional `heading` and `intro`, plus the variant's typed slide data. It intentionally does not expose raw Embla options.

- `content`: one text slide at a time. A slide may contain a title, short body, optional large `stepNumber`, semantic icon, short list and link. Use `count`, `dots` or `count-and-dots` indicators. `surfaceTreatment` is limited to `plain` (the default), `single-surface` or `varied-surfaces`; authors cannot supply arbitrary colours. A big-number presentation remains this same content variant, not a fifth Carousel type.
- `feature`: one image-and-text slide at a time. Each slide requires meaningful image alt text and image dimensions. The image and copy sit side by side on wide screens and stack on narrow screens. `focalPosition` is intentionally limited to `left`, `center` or `right` for safe `object-fit: cover` cropping.
- `cards`: a small repeated-card collection. It shows one card on mobile, two on tablet and three on desktop, moving one card per action. There is no visible range counter; a concise visible-range update is announced to screen readers after a new position is selected. Controls disappear when every card fits.
- `gallery`: one image with an optional title, Body description and genuine Caption at a time. It can use counts, dots or accessible thumbnail buttons. Thumbnail buttons are optional, not the default Gallery expectation; use them only when direct visual selection matters for recognisable image sets. Only this variant supports `controls="overlay"`; its controls use the shared icon treatment on translucent protective surfaces within the image area.

## Behaviour and accessibility

The Astro HTML remains a semantic scrollable sequence when JavaScript is unavailable. After enhancement, each instance has a labelled `carousel` region, slides remain groups with position labels, and controls appear only when navigation is possible. Previous and Next are real icon-only disabled buttons at their respective ends, with accessible labels and 44px targets. Dots and thumbnails are real labelled buttons.

Only the visible enhanced slide or slides remain exposed to keyboard and assistive-technology navigation. The component updates `aria-hidden` and `inert` together and returns focus to Previous if an item becomes unavailable while it contains focus. A polite live status announces learner-initiated slide changes; for Multi-Card it announces the visible range without adding visual clutter. It does not trap focus, require hover, depend on precise pointer movement or move by itself.

The library handles keyboard activation through native buttons and drag or swipe through Embla as an optional pointer enhancement. `prefers-reduced-motion` reduces Embla's transition duration, and CSS does not add decorative motion.

## Responsive and visual rules

The viewport is contained so it cannot create page-level horizontal overflow. Slides use CSS scroll snap for the no-JavaScript baseline. Feature imagery uses a 16:9 mobile and 3:2 desktop treatment; card density changes at the documented breakpoints; gallery controls may overlay its image only when JavaScript has enabled navigation. Gallery explanations use Body text, while Caption is reserved for image-specific context, source or attribution. At print time, controls are removed and all items are shown as a normal grid.

Use neutral course surfaces, semantic icons and locally stored assets. Do not create a separate visual theme or use a carousel merely to hide content.

## AI Authoring Guide

Start by deciding whether learners need an ordered process, visible comparison or optional detail. Choose Carousel only when the material is short, peer-level and non-essential in sequence. Select the smallest appropriate variant and keep every slide structurally consistent.

Write concise slide titles and one short paragraph. Supply accurate alt text for informative images; do not use an image just to decorate a text slide. Use Plain content surfaces by default, Single surface when a set needs one quiet treatment, and Varied surfaces only for a short set of parallel items that benefit from clearer differentiation. Use `stepNumber` for a compact, expressive content treatment only when the numbered items remain parallel rather than a completion process. Use dots only for a small number of positions and keep Count for larger sets. Choose a landscape Feature image and a meaningful controlled focal position; do not add a visible Feature caption. Do not use the Feature Carousel as a hero. Keep Gallery explanation as Body text and use Caption only for genuine image context. Choose thumbnails only when direct visual selection adds value, such as for product views, multiple screenshots or visual checks. Use the standard controls and indicators rather than inventing alternative labels, autoplay, loop behaviour or custom timing. Keep essential instructions, assessment questions, completion logic and SCORM communication outside the component.

## Maintenance

All instances share one component and one Embla integration. The component is safe to render more than once on a page and cleans up before Astro page swaps. Visible dots are 8px (10px when current) inside 40px button targets. Content colours, feature cropping and Gallery overlays remain controlled component behaviour, not arbitrary data fields. Keep Showcase-only guidance, review badges and specimen copy out of the reusable component. Any future change to navigation, motion, focus or hidden-slide behaviour requires keyboard, screen-reader-oriented semantic, reduced-motion, narrow-viewport and no-JavaScript review.
