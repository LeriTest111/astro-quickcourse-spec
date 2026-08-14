# Kit Workboard

The Kit Workboard is an internal development and planning view for the Astro Quick Course Kit. It is not learner-facing course content and is not a project-management application.

The page is driven by the repository-owned data in `src/data/workboard.ts`. Edit that file to add or update work. The `sample_` IDs identify the initial seeded entries so they can be found and removed later without making the UI depend on that prefix.

## Horizons

- `Now`: active work, review blockers and current priorities.
- `Next`: the next small set of priorities to pick up.
- `Later`: known improvements that should not interrupt current progress.
- `Explore`: promising ideas that are not committed implementation work yet.

Workboard horizon is separate from component lifecycle status. For example, a component can be `In Review` while a future refinement is recorded under `Later`.

Each entry keeps a small, AI-readable schema: stable ID, title, controlled area, horizon, optional Workboard status, summary, next action and optional Showcase/component links or dependency note. There is no browser-side editing, persistence, assignment, due-date or automation layer.

The Workboard is available from the internal Showcase navigation in the development view. It is hidden in the Approved view.
