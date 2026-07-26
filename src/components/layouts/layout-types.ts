export type HeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface LayoutAction {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export interface LayoutImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface IconTextItem {
  title: string;
  description?: string;
  icon?: string;
  label?: string;
}

