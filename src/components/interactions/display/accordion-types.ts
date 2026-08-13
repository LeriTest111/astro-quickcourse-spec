import type { QuickCourseIconName } from "../../../data/quick-course-icons";

export type AccordionBehavior = "multiple" | "single";
export type AccordionOrientation = "vertical" | "horizontal";
export type AccordionPresentation = "minimal" | "contained" | "surface";
export type AccordionSurface = "neutral" | "accent" | "information";
export type AccordionPanelLayout = "stacked" | "side-by-side";
export type AccordionHeadingScale = "compact" | "standard" | "prominent";
export type AccordionDensity = "compact" | "comfortable";

export interface AccordionMedia {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface AccordionCallout {
  label: string;
  text: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  label?: string;
  icon?: QuickCourseIconName;
  content: string | string[];
  list?: string[];
  callout?: AccordionCallout;
  media?: AccordionMedia;
  panelLayout?: AccordionPanelLayout;
}

export interface AccordionProps {
  id: string;
  heading?: string;
  intro?: string;
  items: AccordionItem[];
  behavior?: AccordionBehavior;
  initialOpen?: "none" | "first" | string;
  orientation?: AccordionOrientation;
  presentation?: AccordionPresentation;
  surface?: AccordionSurface;
  headingScale?: AccordionHeadingScale;
  density?: AccordionDensity;
  /** @deprecated Use behavior instead. */
  allowMultiple?: boolean;
  /** @deprecated Use initialOpen instead. */
  defaultOpenIndex?: number;
}
