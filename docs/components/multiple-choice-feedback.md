# Multiple-choice Feedback

Status: Draft

## Purpose

Use this compatibility wrapper when a learner should choose one option and receive immediate explanatory feedback. It now delegates to the reusable [Choice Question](./choice-question.md) system, which should be used directly for new work requiring Check Answer, multiple response, prompt media or image answer choices.

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

- Options render as native radio inputs inside full-card labels.
- Selecting an option evaluates immediately through the shared Choice Question system.
- Visual state changes to selected, correct, or incorrect with text and markers as well as colour.
- Feedback appears in a polite live status region.
- Feedback includes text labels, not colour alone.

## Content Rules

- Keep feedback explanatory rather than just marking right or wrong.
- Use one correct answer for this wrapper.
- Keep option text short enough to scan on mobile.
- Avoid course-specific brand or product copy in the reusable component.
