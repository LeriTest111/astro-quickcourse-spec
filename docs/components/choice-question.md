# Choice Question

Status: Draft

## Purpose

Use `ChoiceQuestion` for small formative knowledge checks embedded in an Astro Quick Course. It supports one reusable interaction model for single choice, multiple response, prompt images and image answer choices. It provides learning feedback only; it does not calculate assessment-wide scores, call SCORM or replace LMS summative assessment.

## Authoring model

Every question needs a stable `id`, `title`, `prompt`, and options with stable option IDs. Correctness is based on those IDs and each option's `isCorrect` value, never on display order or labels.

- `selectionMode: "single"` uses native radio inputs and requires exactly one correct option.
- `selectionMode: "multiple"` uses native checkbox inputs and evaluates with exact-match correctness.
- `submissionMode: "instant"` is available only for single choice and evaluates when the learner selects an option. It remains editable after a correct response so learners can inspect the feedback for other choices.
- `submissionMode: "check-answer"` is the general default. It lets learners change selections before submitting.
- `attemptMode: "retry"` allows a new response after incorrect feedback. `"single-attempt"` locks a Check Answer question after the first valid evaluation.
- `lockOnCorrect` defaults to `true` for Check Answer questions, leaving a correct response visible and reviewable while preventing further changes. It does not lock instant-feedback questions.
- `media` adds an optional prompt image with meaningful alt text and an optional genuine caption.
- An option can include `image` and `supportingText`. Use `optionPresentation: "image-grid"` only when visual selection is the learning task.

```astro
<ChoiceQuestion
  id="payment-window"
  title="Choose the best response"
  prompt="A customer asks when a payment will reflect. What should you explain?"
  submissionMode="check-answer"
  correctFeedback={{ title: "Correct", body: "This sets a realistic expectation." }}
  incorrectFeedback={{ title: "Try again", body: "Choose the clearest realistic response." }}
  options={[
    { id: "guarantee", label: "Guarantee a same-day result.", isCorrect: false },
    { id: "window", label: "Explain the expected processing window and next update.", isCorrect: true },
  ]}
/>
```

## Behaviour and accessibility

Options are full-card native `<label>` targets containing radio or checkbox inputs. The inputs remain the source of truth for keyboard and screen-reader operation. Selection and evaluated state are separate: before evaluation, radios use a filled dot and checkboxes use a filled square rather than correctness iconography.

Feedback appears in a polite status region and validation appears in an associated alert. Correctness has visible check or attention markers and explanatory text; it is never conveyed through colour alone. Completed questions keep the prompt, options and feedback readable. Image options have both visible labels and meaningful image alt text.

For multiple response, the selected set must exactly match the correct set. There is no partial scoring, weighting, negative marking, timer, question bank, shuffling, pass threshold, SCORM interaction call or assessment-wide orchestration.

## Content guidance

Use short, realistic choices and feedback that explains the learning reason. Use instant feedback only for a clear single-answer check. Use Check Answer for most questions and all multiple-response questions. State the multiple-response expectation clearly, such as `Select all that apply` or `Select three answers`.

Use prompt media when the image helps the learner interpret the question. Use image answer cards when a visual distinction is the answer itself, not merely to decorate ordinary text choices. Keep image answer cards to the image and a concise label; put teaching explanations in post-answer feedback. Main prompts, option labels and explanations use Body text; captions are reserved for image-specific context.

## Static and print behaviour

The semantic question, choices and images remain visible without JavaScript and in print. Interactive evaluation, validation and feedback require JavaScript. Keep essential course instructions outside a question so the learning content remains understandable in every delivery context.

## Compatibility wrapper

`MultipleChoiceFeedback.astro` remains available for existing single-select instant-feedback uses. It now delegates to `ChoiceQuestion`; new course work should use `ChoiceQuestion` directly when it needs submission, multiple response or image capabilities.
