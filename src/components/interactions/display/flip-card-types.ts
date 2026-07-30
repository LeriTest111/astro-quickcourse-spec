import type { QuickCourseIconName } from "../../../data/quick-course-icons";

export type FlipCardAlignment = "left" | "center";
export type FlipCardFormat = "portrait" | "square" | "landscape";
export type FlipCardHeightMode = "content" | "equal";
export type FlipCardRevealMode = "flip" | "slide";
export type FlipCardFocalPosition = "center" | "top" | "bottom" | "left" | "right";

type FlipCardCopy = {
  eyebrow?: string;
  title: string;
  body?: string;
  alignment?: FlipCardAlignment;
};

export type FlipCardTextFace = FlipCardCopy & {
  type: "text";
};

export type FlipCardIconFace = FlipCardCopy & {
  type: "icon";
  icon: QuickCourseIconName;
  iconTreatment?: "feature" | "heading";
};

export type FlipCardImageFace = {
  type: "image";
  image: string;
  imageAlt?: string;
  label?: string;
  title?: string;
  focalPosition?: FlipCardFocalPosition;
};

export type FlipCardImageOverlayFace = FlipCardCopy & {
  type: "image-overlay";
  image: string;
  imageAlt?: string;
  overlayStyle?: "dark" | "light" | "brand";
  focalPosition?: FlipCardFocalPosition;
};

export type FlipCardFeatureFace = FlipCardCopy & {
  type: "feature";
  value?: string;
  icon?: QuickCourseIconName;
};

export type FlipCardFace =
  | FlipCardTextFace
  | FlipCardIconFace
  | FlipCardImageFace
  | FlipCardImageOverlayFace
  | FlipCardFeatureFace;

export interface FlipCardItem {
  front: FlipCardFace;
  back: FlipCardFace;
  accessibleLabel?: string;
}
