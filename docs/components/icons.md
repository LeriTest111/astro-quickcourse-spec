# Quick Course Icon System

Status: Draft

## Standard

Material Symbols Sharp is the approved Quick Course icon family. `QuickCourseIcon` in `src/components/ui/QuickCourseIcon.astro` renders locally bundled SVG from the controlled map in `src/data/quick-course-icons.ts`. Iconify supplies the bundled source data; it is a delivery mechanism, not an additional visual family.

Only the icons used by rendered components appear in the static output. No runtime network request is required for `QuickCourseIcon`, which keeps it suitable for static and SCORM builds.

## Authoring API

Use semantic names only. Do not use Material ligature names, raw Iconify IDs, another icon family, numeric icon sizes, colours or SVG markup in course content.

```astro
<QuickCourseIcon name="warning" context="heading" decorative />
```

Supported contexts are `inline`, `button`, `heading` and `feature`. The component owns the matching size and alignment. Parent components should choose the context when the icon has a known location.

The approved tokens are: `information`, `warning`, `tip`, `success`, `error`, `question`, `checklist`, `video`, `audio`, `document`, `download`, `external-link`, `customer`, `person`, `team`, `manager`, `store`, `calendar`, `time`, `task`, `next`, `previous`, `expand`, `collapse`, `close`, `menu`, `search` and `settings`.

Add new tokens centrally in `src/data/quick-course-icons.ts` only after project-team review. Additional visual icon families require explicit project approval.

## Accessibility

Use `decorative` when visible text already communicates the same meaning. Decorative SVGs are hidden from assistive technology.

When an SVG conveys meaning on its own, set `decorative={false}` and supply `label`. The component throws during development and build if that label is missing. For icon-only controls, give the parent button or link an accessible name and keep the nested icon decorative to prevent duplicate announcements.

Do not use an icon or colour as the only sign of an important status. Pair unfamiliar icons with visible text.

## AI Instruction

Use an icon only when it supports comprehension, navigation, action or status. Choose an approved semantic token; never choose an icon family, raw library name, arbitrary size or arbitrary colour. Let parent components control context where possible. Prefer no icon over a weak match.

Good choices: use `warning` for a risk callout, `tip` for helpful advice, `video` as a decorative companion to a visible Video heading, and `close` inside an icon-only button labelled `Close dialog`.

Avoid adding lightbulbs to every card, choosing icons only because they look attractive, using `customer` for generic information, mixing icon families, announcing decorative SVGs, or using colour alone for success and error.

## Migration

The previous implementation loads the Material Symbols Sharp font from Google and uses raw ligature names across several existing Showcase and component files. That legacy path remains temporarily to avoid a broad visual and API rewrite.

New work must use `QuickCourseIcon`. Migrate legacy components incrementally when they are next being reviewed, starting with reusable controls and components that currently accept `icon?: string`. Replace those free-form strings with `QuickCourseIconName`, then let the parent component set its icon context and decorative behaviour.

The Icons Showcase and `DetailModal` already use the controlled local SVG path. Review the remaining legacy font dependency before promoting this standard to In Review.
