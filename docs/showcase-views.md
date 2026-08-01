# Showcase Views

Quick Course Kit is one site built from one repository and the `main` branch. It does not use separate Working and Approved deployments.

## URL State

The shared selector controls two mutually exclusive views:

- `?view=development` shows `idea`, `concept`, `draft` and `in-review` items.
- `?view=approved` shows `approved` items only.

Deprecated items are excluded from both primary views. A valid URL parameter has priority over the locally saved selection. When no valid parameter or saved preference exists, the site defaults to In development.

The selector updates the URL without a full reload. Shared header links, category cards and section indexes preserve the selected view while moving around the Showcase.

## Empty States

When no item is available for a category in the selected view, the page shows:

```text
No components in this category have been approved yet.
```

## Registry Boundary

Status metadata remains in `src/data/showcase-registry.ts`. It is Showcase governance data, not learner-facing production-component data. Proposal cards, status badges and view controls remain Showcase-only.
