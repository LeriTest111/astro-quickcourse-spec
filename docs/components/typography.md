# Typography

Status: Draft

## Approved Font Stack

```css
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Arial,
Helvetica,
sans-serif
```

## Why Native System Fonts

Native system fonts are fast, reliable, and familiar to learners. They avoid external font requests, reduce package and asset maintenance, and keep the Showcase and future Boilerplate neutral enough for later course branding.

## Operating System Behaviour

- Windows uses Segoe UI on modern systems.
- Apple devices use the native San Francisco system font through `-apple-system`.
- Android and Linux use the platform system sans-serif through `system-ui`.
- Arial and Helvetica provide broad fallback coverage.
- `sans-serif` remains the final generic fallback.

## Tailwind Configuration

Tailwind CSS v4 is configured in `src/styles/global.css` with:

```css
@theme {
  --font-sans:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    Helvetica,
    sans-serif;
}
```

This maps Tailwind `font-sans` to the approved stack without adding a JavaScript Tailwind config file.

## Global CSS Configuration

The global document font is set on `:root`, and `body` inherits it. Form controls also inherit the same font:

```css
button,
input,
select,
textarea {
  font: inherit;
}
```

No `@font-face` declarations, downloaded font files, Google Fonts, Adobe Fonts, or JavaScript font loaders are used.

## Body Size And Line Height

- Default body size: `1rem`.
- Default body line height: `1.6`.
- Supporting text may use `0.875rem` when it is metadata, captions, or helper copy.

## Reading Width

Long-form learning content should use a readable line length of about `65ch` to `70ch`. In this project, that constraint is applied to `.learning-prose` content rather than every paragraph globally, so navigation, cards, alerts, modals, and interactive components are not unexpectedly constrained.

## Heading Guidance

Headings should stay neutral and readable:

- H1 to H4 use about `1.2` line height.
- Headings use `font-weight: 700` by default.
- Avoid decorative heading fonts, all-uppercase heading systems, excessive letter spacing, or highly branded type treatments.

## Accessibility Requirements

- Keep normal body text at or above `1rem`.
- Preserve readable paragraph spacing and line height.
- Do not disable browser text scaling.
- Do not use fixed-height text containers that clip text at 200% zoom.
- Keep visible keyboard focus states.
- Ensure muted text maintains sufficient contrast.
- Do not use font weight as the only indicator of state.

## Customisation Guidance

Course developers may customise:

- Heading copy and content hierarchy.
- Component-level spacing where the layout requires it.
- Supporting text labels and captions.
- Course-specific content containers.

Course developers should not customise without project-team approval:

- The global font stack.
- External font loading.
- Custom course fonts.
- The `font-sans` Tailwind mapping.
- The form-control inheritance rule.

## External Font Services

External font services or custom font files should not be added by default. Introducing a custom font affects performance, privacy, licensing, accessibility, and future Boilerplate consistency, so it requires project-team approval.
