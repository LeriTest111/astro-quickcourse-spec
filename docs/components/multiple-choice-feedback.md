# Multiple-choice Feedback

Status: Draft

## Purpose

Use this interaction when a learner should choose one option and receive immediate explanatory feedback. The component is neutral and data-driven so course-specific copy can be supplied through props.

## Intended Usage

Place `MultipleChoiceFeedback` inside a course section or showcase section. Provide neutral data through props instead of hard-coding course-specific copy inside the component.

```astro
<MultipleChoiceFeedback
  eyebrow="Knowledge check"
  title="Choose the best response"
  prompt="Which option best fits the scenario?"
  instruction="Select one answer. Feedback appears immediately below the choices."
  options={[
    {
      label: "A",
      text: "First option text.",
      isCorrect: false,
      feedbackTitle: "Not quite",
      feedback: "Explain why this option misses the mark.",
    },
    {
      label: "B",
      text: "Second option text.",
      isCorrect: true,
      feedbackTitle: "Correct",
      feedback: "Explain why this option is the best answer.",
    },
  ]}
/>
```

## Behaviour

- Options render as accessible buttons.
- Selecting an option sets `aria-pressed` on the selected button.
- Visual state changes to selected, correct, or incorrect.
- Feedback appears in an `aria-live` status region.
- Feedback includes text labels, not colour alone.

## Content Rules

- Keep feedback explanatory rather than just marking right or wrong.
- Use one correct answer for this version.
- Keep option text short enough to scan on mobile.
- Avoid course-specific brand or product copy in the reusable component.
