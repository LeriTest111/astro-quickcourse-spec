# Showcase Build Modes

This project uses one repository and one `main` branch for both Showcase outputs.

Two Netlify sites can build the same codebase with different environment values:

- Working Showcase: `SHOWCASE_MODE=working`
- Approved Quick Course Kit: `SHOWCASE_MODE=approved`

If `SHOWCASE_MODE` is not set, local development defaults to `working`.

## Environment Variable

Use the build-time variable:

```text
SHOWCASE_MODE
```

Astro reads it server-side with `import.meta.env.SHOWCASE_MODE`. It is intentionally not prefixed with `PUBLIC_` because browser JavaScript does not need this value.

## Visibility Rules

Showcase item metadata lives in `src/data/showcase-registry.ts`.

Supported statuses:

- `draft`
- `in-review`
- `approved`
- `deprecated`

Working mode renders all registered items. Approved mode renders only items with `status: "approved"`.

New items should begin as `draft` or `in-review`. Changing an item to `approved` in the registry causes it to appear in the approved build the next time that site builds.

## Empty States

The approved site keeps the shared header, navigation, category pages, typography and styling. If a category has no approved items, it shows:

```text
No components in this category have been approved yet.
```

Unapproved examples are filtered during the Astro build and are not rendered into the approved site HTML.

## Boilerplate Boundary

Approval metadata is Showcase-only. Do not place registry metadata, approval badges or build-mode logic inside reusable production Quick Course components.
