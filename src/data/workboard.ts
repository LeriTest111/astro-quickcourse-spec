export type WorkboardHorizon = "now" | "next" | "later" | "explore";
export type WorkboardArea =
  | "Layout"
  | "Display"
  | "Assessment"
  | "Showcase"
  | "Foundations"
  | "Architecture"
  | "Accessibility"
  | "Media";
export type WorkboardStatus = "Planned" | "In progress" | "Blocked" | "Ready for review" | "Research";

export interface WorkboardItem {
  id: string;
  title: string;
  area: WorkboardArea;
  horizon: WorkboardHorizon;
  status?: WorkboardStatus;
  summary: string;
  nextAction: string;
  showcaseHref?: string;
  relatedComponent?: string;
  dependency?: string;
}

export const workboardHorizons: { id: WorkboardHorizon; label: string; description: string }[] = [
  { id: "now", label: "Now", description: "Active work, review blockers and current priorities." },
  { id: "next", label: "Next", description: "The next small set of priorities to pick up." },
  { id: "later", label: "Later", description: "Known improvements that should not interrupt current progress." },
  { id: "explore", label: "Explore", description: "Promising ideas that are not committed implementation work yet." },
];

export const workboardItems: WorkboardItem[] = [
  {
    id: "sample_showcase_specimen_rationalisation",
    title: "Showcase specimen rationalisation",
    area: "Showcase",
    horizon: "later",
    status: "Planned",
    summary: "When visual differences can be produced through normal component Options, prefer one canonical live specimen rather than rendering every configuration separately.",
    nextAction: "Apply this rule progressively as components are next reviewed. Preserve separate specimens only for genuinely different structures, behaviours, responsive models or content architectures.",
  },
  {
    id: "sample_accordion_review",
    title: "Accordion review",
    area: "Display",
    horizon: "now",
    status: "Ready for review",
    summary: "The Accordion System has completed its main development and refinement passes and needs final visual review before progressing.",
    nextAction: "Review the latest deployed Accordion build, resolve any remaining visual issues, then move it into Review if appropriate.",
    showcaseHref: "/showcase/display-interactions/#accordion",
    relatedComponent: "accordion",
  },
  {
    id: "sample_minimal_hero_review",
    title: "Minimal Hero review",
    area: "Layout",
    horizon: "now",
    status: "Ready for review",
    summary: "Minimal Hero has been consolidated into one configurable Showcase specimen and moved into Review.",
    nextAction: "Leave the component stable unless Review identifies a concrete issue. Do not continue adding features during Review.",
    showcaseHref: "/showcase/layouts/#centered-minimal-hero",
    relatedComponent: "centered-minimal-hero",
  },
  {
    id: "sample_assessment_matching",
    title: "Matching / Categorisation interaction",
    area: "Assessment",
    horizon: "next",
    status: "Research",
    summary: "Investigate a formative interaction for matching items or sorting content into categories. This should add a genuinely different cognitive interaction rather than duplicate Multiple Choice.",
    nextAction: "Analyse learning use cases, accessibility, mobile behaviour, keyboard interaction and whether Matching and Categorisation should share one underlying interaction system.",
  },
  {
    id: "sample_assessment_ordering",
    title: "Ordering / Sequencing interaction",
    area: "Assessment",
    horizon: "next",
    status: "Research",
    summary: "Investigate a lightweight formative interaction where learners arrange items into the correct order.",
    nextAction: "Analyse drag-and-drop versus accessible button and keyboard alternatives, responsive behaviour and suitable Quick Course use cases before implementation.",
  },
  {
    id: "sample_hero_family_expansion",
    title: "Hero family expansion",
    area: "Layout",
    horizon: "later",
    status: "Planned",
    summary: "The Kit has useful Image Overlay and Minimal Hero foundations, but additional hero structures may eventually be needed.",
    nextAction: "Review the existing draft hero concepts and decide which structurally distinct hero should be matured next. Do not add variants that can already be expressed through existing Hero Options.",
  },
  {
    id: "sample_patterns_architecture",
    title: "Patterns system",
    area: "Architecture",
    horizon: "explore",
    status: "Research",
    summary: "Explore a curated Patterns layer that teaches AI how to compose approved components, layout, imagery, typography and motion without turning every visual idea into a new component.",
    nextAction: "Define the distinction between Components, Presets and Patterns, then create a small proposed Pattern schema and three to five initial examples before implementation.",
  },
  {
    id: "sample_guidance_consistency",
    title: "Showcase guidance consistency",
    area: "Showcase",
    horizon: "later",
    status: "Planned",
    summary: "Component usage guidance should use the established compact guidance button and dialog pattern rather than exposed instructional paragraphs between specimens.",
    nextAction: "Apply this progressively when affected components are next touched rather than performing an immediate full-Kit rewrite.",
  },
  {
    id: "sample_options_ui_consistency",
    title: "Showcase Options UI consistency",
    area: "Showcase",
    horizon: "later",
    status: "Planned",
    summary: "Options panels should use a restrained, consistent typography hierarchy and coherent control sizing across selects, segmented controls, checkboxes and text fields.",
    nextAction: "Audit shared Options primitives when the next affected component is reviewed and move common fixes into shared Showcase styles where safe.",
  },
  {
    id: "sample_media_resilience_audit",
    title: "Media resilience audit",
    area: "Media",
    horizon: "later",
    status: "Planned",
    summary: "Several components support images with different aspect ratios and crops. The Kit should eventually verify consistent behaviour with ordinary author-supplied media.",
    nextAction: "Audit approved media-capable components for mixed aspect ratios, mobile behaviour, object-fit strategy, alt treatment and caption consistency.",
  },
  {
    id: "sample_accessibility_regression",
    title: "Accessibility regression pass",
    area: "Accessibility",
    horizon: "later",
    status: "Planned",
    summary: "Run a cross-component accessibility pass after a larger group of components reaches Review or Approved.",
    nextAction: "Check keyboard operation, focus visibility, reduced motion, contrast, semantic structure and common responsive and zoom resilience across reviewed components.",
  },
];

export function getWorkboardItems(horizon: WorkboardHorizon) {
  return workboardItems.filter((item) => item.horizon === horizon);
}
