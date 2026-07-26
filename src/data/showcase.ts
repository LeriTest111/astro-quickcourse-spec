export interface ShowcaseCategory {
  label: string;
  slug: string;
  href: string;
  description: string;
}

export const showcaseCategories: ShowcaseCategory[] = [
  {
    label: "Layouts",
    slug: "layouts",
    href: "/showcase/layouts",
    description: "Structural page patterns for arranging course content.",
  },
  {
    label: "Display interactions",
    slug: "display-interactions",
    href: "/showcase/display-interactions",
    description: "Expandable and exploratory patterns that reveal supporting information.",
  },
  {
    label: "Assessment interactions",
    slug: "assessment-interactions",
    href: "/showcase/assessment-interactions",
    description: "Knowledge checks and evaluative moments with learner responses.",
  },
  {
    label: "Multimedia",
    slug: "multimedia",
    href: "/showcase/multimedia",
    description: "Responsive media treatments for video, audio, images and embeds.",
  },
  {
    label: "Typography",
    slug: "typography",
    href: "/showcase/typography",
    description: "Type scale, readable prose, links, lists and form typography standards.",
  },
  {
    label: "Icons",
    slug: "icons",
    href: "/showcase/icons",
    description: "Icon usage examples and guidance for course controls and cues.",
  },
];

export const layoutAnchors = [
  { label: "Heroes", href: "#heroes" },
  { label: "Content sections", href: "#content-sections" },
  { label: "Repeated content", href: "#repeated-content" },
  { label: "Processes and comparisons", href: "#processes-comparisons" },
  { label: "Visual layouts", href: "#visual-layouts" },
  { label: "Openers and closers", href: "#openers-closers" },
];

export const displayInteractionAnchors = [
  { label: "Reveal content", href: "#reveal-content" },
  { label: "Navigate related content", href: "#navigate-related-content" },
  { label: "Explore visual content", href: "#explore-visual-content" },
];
