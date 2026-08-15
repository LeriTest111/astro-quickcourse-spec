# Astro Quick Course Kit - Agent Instructions

## Repository role

This repository is the Quick Course Kit development and governance workbench. Build and govern reusable learning components, maintain the Showcase, manage lifecycle and review, and improve the shared production-ready Kit. It is not an individual course repository or a Course Builder instruction set.

## Before editing

- Inspect the current component or file, related primitives, relevant styles and tokens, the relevant Showcase specimen, registry status, documentation, and applicable Workboard entries.
- Treat the current repository as the source of truth. Resolve conflicts with prompts, old documentation, memory, or assumptions by inspecting the implementation.
- Reuse sound existing patterns. Do not redesign a component merely because another implementation is possible.

## Architecture principles

- Prefer one governed component with constrained, author-friendly semantic options over near-duplicate components, arbitrary CSS values, raw class injection, or flag-heavy APIs.
- A Component is a governed reusable implementation. A Preset is an approved normal configuration. A Pattern is a higher-level composition recipe. Choose the simplest governed solution that serves the learning and content need.
- Do not create a component merely because alignment, colour, typography, density, icons, or another normal configuration differs.
- Reuse existing components, primitives, tokens, icon system, media conventions, and interaction patterns before adding equivalents.
- Keep learner-facing reusable components independent of Showcase controls, statuses, specimen copy, Workboard data, and review-only state. Do not make existing coupling worse during unrelated work.
- Use the existing semantic `QuickCourseIcon` system where appropriate. Do not expand legacy raw icon markup or start a repo-wide icon migration unless requested.

## Implementation and dependencies

- Prefer semantic HTML, then CSS, then small component-local JavaScript only where browser interaction genuinely requires it.
- Do not add React or another framework for an isolated component.
- Do not add third-party dependencies casually. First inspect existing solutions and platform capability; add one only when its maintenance and runtime cost is justified by a material benefit.
- Keep the direction of travel toward a clean production boundary, but do not start a broad Showcase/production extraction during unrelated work.

## Accessibility and resilience

- Build accessibility into implementation: semantics, keyboard operation, visible focus, contrast, non-colour state cues, meaningful alternative text, usable targets, and appropriate state or live announcements.
- Respect reduced motion where animation is present. Preserve meaningful static or print output where relevant; interactive behaviour may need JavaScript, but important learning content should not disappear unnecessarily.
- Interactive presentation may contain required learning content, but it must remain discoverable, keyboard accessible, and understandable without relying on decorative behaviour.
- Use existing responsive conventions. Test relevant work at narrow and normal desktop widths with realistic text and media. Avoid fixed heights, brittle text-length assumptions, and image treatments that require perfect crops unless deliberately governed.

## Showcase rules

- If normal component Options can express visual differences, prefer one canonical configurable live specimen rather than examples for every combination.
- Add separate specimens only for genuinely different structure, interaction behaviour, responsive behaviour, or content architecture.
- Apply this principle when touching relevant Showcase work; do not refactor every existing page pre-emptively.
- Reuse the established guidance button/dialog pattern. Keep visible examples focused and put deeper guidance behind that UI when useful.
- Showcase Options expose governed capabilities, not raw implementation details. Keep their controls consistent with shared Showcase patterns.

## Lifecycle and review

The lifecycle is: `Idea` -> `Concept` -> `Draft` -> `In Review` -> `Approved` -> `Deprecated`. `In development` is a Showcase view, not a lifecycle status.

- Idea: proposal only; do not present it as production-ready implementation.
- Concept: exploratory; behaviour and accessibility may still change.
- Draft: active implementation and iteration are expected.
- In Review: stabilise. Prioritise concrete review feedback, fixes, accessibility, resilience, and consistency. Avoid feature expansion unless review identifies a concrete need.
- Approved: governed production surface. Do not casually redesign or expand it; meaningful changes should intentionally return through review.
- Deprecated: do not use as a basis for new work unless handling migration or removal.

## Workboard and scope

- Consult `src/data/workboard.ts` when it gives relevant context. `Now`, `Next`, `Later`, and `Explore` are planning horizons, not an autonomous task queue.
- Do not implement adjacent `Later` or `Explore` work, broaden a task, or edit Workboard entries unless explicitly requested or required by an established workflow.
- Solve the requested problem without opportunistic redesigns, speculative capabilities, or general-purpose frameworks. Report worthwhile out-of-scope follow-up rather than silently implementing it.
- During focused work, do not change unrelated component lifecycle or status values.
- When review work is complete, stop instead of continuing to polish indefinitely.

## Verification and reporting

- Run `npm run build` after implementation changes unless the task is documentation-only and a build adds no value.
- Use `npm run dev` or `npm run preview` for visual/manual inspection when needed.
- Visually inspect learner-facing or Showcase UI changes in a browser before reporting them as visually complete; a successful build alone is not UI acceptance.
- Run `npm run build:scorm` when changing SCORM packaging or runtime behaviour.
- `npm run astro` is the generic Astro CLI entry point. Do not claim lint, dedicated typecheck, unit tests, E2E, automated accessibility, or visual regression checks passed: this repository has no scripts for them.
- Complete with a concise report of changes, important decisions, verification performed, anything unverified, and clearly identified out-of-scope follow-up. Never claim checks that were not run.

## Keep outside this file

Keep current priorities in the Workboard; component APIs and behaviour in implementation, typed props, docs, and Showcase guidance; long-form rationale in architecture docs; Pattern recipes in future Pattern data/docs; and course-authoring instructions in the future Course Builder environment.
