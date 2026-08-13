export type ChoiceQuestionSelectionMode = "single" | "multiple";
export type ChoiceQuestionSubmissionMode = "instant" | "check-answer";
export type ChoiceQuestionAttemptMode = "retry" | "single-attempt";
export type ChoiceQuestionOptionPresentation = "auto" | "list" | "image-grid";

export interface ChoiceQuestionFeedback {
  title: string;
  body: string;
}

export interface ChoiceQuestionImageMedia {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface ChoiceQuestionOption {
  id: string;
  label: string;
  supportingText?: string;
  image?: ChoiceQuestionImageMedia;
  isCorrect: boolean;
  feedback?: string;
}

export interface ChoiceQuestionProps {
  id: string;
  eyebrow?: string;
  title: string;
  prompt: string;
  instruction?: string;
  media?: ChoiceQuestionImageMedia;
  selectionMode?: ChoiceQuestionSelectionMode;
  submissionMode?: ChoiceQuestionSubmissionMode;
  requiredSelections?: number;
  attemptMode?: ChoiceQuestionAttemptMode;
  lockOnCorrect?: boolean;
  optionPresentation?: ChoiceQuestionOptionPresentation;
  options: ChoiceQuestionOption[];
  correctFeedback?: ChoiceQuestionFeedback;
  incorrectFeedback?: ChoiceQuestionFeedback;
}
