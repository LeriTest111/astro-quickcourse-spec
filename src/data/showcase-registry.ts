export type ShowcaseMode = "working" | "approved";
export type ShowcaseStatus = "idea" | "concept" | "draft" | "in-review" | "approved" | "deprecated";
export type ShowcaseCategory =
  | "layouts"
  | "display-interactions"
  | "assessment-interactions"
  | "multimedia"
  | "typography"
  | "icons";

export interface ShowcaseRegistryItem {
  id: string;
  name: string;
  category: ShowcaseCategory;
  status: ShowcaseStatus;
  version?: string;
  description?: string;
  proposedUse?: string;
  notes?: string;
  approvedOn?: string;
  deprecatedReason?: string;
  replacementId?: string;
  hasExample?: boolean;
  reviewRound?: string;
  reviewAudience?: string[];
  reviewFocus?: string;
}

export const showcaseMode: ShowcaseMode = import.meta.env.SHOWCASE_MODE === "approved" ? "approved" : "working";

export const showcaseModeIdentity = {
  working: {
    title: "Quick Course Kit - Working",
    description: "Includes proposed ideas, early concepts, drafts and items under review.",
  },
  approved: {
    title: "Quick Course Kit - Approved",
    description: "Contains signed-off components ready for use.",
  },
} satisfies Record<ShowcaseMode, { title: string; description: string }>;

export const statusOrder: ShowcaseStatus[] = [
  "idea",
  "concept",
  "draft",
  "in-review",
  "approved",
  "deprecated",
];

export const statusLabels: Record<ShowcaseStatus, string> = {
  idea: "Idea",
  concept: "Concept",
  draft: "Draft",
  "in-review": "In Review",
  approved: "Approved",
  deprecated: "Deprecated",
};

export const statusTones: Record<ShowcaseStatus, string> = {
  idea: "neutral",
  concept: "concept",
  draft: "draft",
  "in-review": "review",
  approved: "approved",
  deprecated: "deprecated",
};

export const showcaseRegistry: ShowcaseRegistryItem[] = [
  { id: "image-overlay-hero", name: "Image overlay hero", category: "layouts", status: "in-review", version: "0.2.0", reviewFocus: "Review overlay treatments, brand-colour contrast, title emphasis and long-content behaviour." },
  { id: "split-hero", name: "Split hero", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "centered-minimal-hero", name: "Centred minimal hero", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "floating-card-hero", name: "Floating card hero", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "learning-objectives-hero", name: "Learning objectives hero", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "scenario-opener-hero", name: "Scenario opener hero", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "readable-text-section", name: "Readable Text Section", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "text-image-split", name: "Text and Image Split", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "two-column-content", name: "Two-Column Content", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "card-grid", name: "Card Grid", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "product-feature", name: "Product Feature", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "feature-list-visual", name: "Feature List with Supporting Visual", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "numbered-process", name: "Numbered Process", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "comparison-layout", name: "Comparison Layout", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "image-grid", name: "Image Gallery or Visual Grid", category: "layouts", status: "draft", version: "0.1.0" },
  { id: "quote-key-message", name: "Quote or Key Message", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "call-to-action-section", name: "Call-to-Action Section", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "section-divider", name: "Section Divider or Chapter Opener", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "summary-section", name: "Summary Layout", category: "layouts", status: "concept", version: "0.1.0" },
  { id: "accordion", name: "Accordion", category: "display-interactions", status: "draft", version: "0.1.0" },
  { id: "flip-cards", name: "Quick Course Flip Card System", category: "display-interactions", status: "in-review", version: "0.2.0" },
  { id: "hotspot-reveal", name: "Click-to-Reveal Hotspots", category: "display-interactions", status: "draft", version: "0.1.0" },
  {
    id: "guided-product-explorer",
    name: "Guided Product Explorer",
    category: "display-interactions",
    status: "idea",
    description: "An early experiment for exploring a product through selectable feature regions.",
    proposedUse: "Product knowledge courses where learners need to connect visible product areas with practical customer benefits.",
    notes: "Showcase-only idea entry. No working component or prototype exists yet.",
    hasExample: false,
  },
  { id: "detail-modal", name: "Supporting-Detail Modal or Panel", category: "display-interactions", status: "concept", version: "0.1.0" },
  { id: "tabs", name: "Tabs", category: "display-interactions", status: "draft", version: "0.1.0" },
  { id: "carousel", name: "Carousel", category: "display-interactions", status: "concept", version: "0.1.0" },
  { id: "process-explorer", name: "Process Explorer", category: "display-interactions", status: "draft", version: "0.1.0" },
  { id: "timeline", name: "Timeline", category: "display-interactions", status: "draft", version: "0.1.0" },
  { id: "expandable-image", name: "Expandable Image", category: "display-interactions", status: "concept", version: "0.1.0" },
  { id: "multiple-choice-feedback", name: "Multiple-choice feedback", category: "assessment-interactions", status: "draft", version: "0.1.0" },
  {
    id: "drag-and-drop",
    name: "Drag and Drop",
    category: "assessment-interactions",
    status: "idea",
    description: "Allow learners to drag items into categories or arrange them into the correct order.",
    proposedUse: "Product classification, process sequencing and matching activities.",
    notes: "Showcase-only idea entry. No working component or prototype exists yet.",
    hasExample: false,
  },
  {
    id: "in-video-assessment",
    name: "In-video Assessment",
    category: "assessment-interactions",
    status: "idea",
    description: "A video-led scenario that pauses at decision points and asks learners to choose how to respond.",
    proposedUse: "Safety, service and operational scenarios where consequences and feedback can follow each learner choice.",
    notes: "Reference direction: Lifesaver's interactive video experience. Showcase-only idea entry. No working component or prototype exists yet.",
    hasExample: false,
  },
  {
    id: "standard-video",
    name: "Standard Video",
    category: "multimedia",
    status: "in-review",
    version: "0.2.0",
    reviewRound: "Video Review 01",
    reviewAudience: ["Visual Design", "Instructional Design"],
    reviewFocus: "Review the native player presentation, poster treatment, responsive sizing and suitability as the default Quick Course video pattern.",
  },
  { id: "video-with-transcript", name: "Video with Transcript", category: "multimedia", status: "concept", version: "0.1.0" },
  {
    id: "video-with-chapters",
    name: "Video with Chapters",
    category: "multimedia",
    status: "in-review",
    version: "0.2.0",
    reviewRound: "Video Review 01",
    reviewAudience: ["Visual Design", "Instructional Design"],
    reviewFocus: "Review the chapter-panel layout, compact spacing, active-state clarity, scrolling behaviour and suitability for longer instructional videos.",
  },
  { id: "type-scale", name: "Quick Course Typography System", category: "typography", status: "in-review", version: "0.2.0" },
  { id: "icon-set", name: "Quick Course Icon System", category: "icons", status: "in-review", version: "0.2.0", reviewFocus: "Review the semantic vocabulary, Material Symbols Sharp consistency, controlled context treatments and AI-safe accessibility guidance." },
];

export function shouldShowShowcaseItem(item: ShowcaseRegistryItem, mode: ShowcaseMode = showcaseMode) {
  return mode === "working" || item.status === "approved";
}

export function getShowcaseItem(id: string) {
  return showcaseRegistry.find((item) => item.id === id);
}

export function isShowcaseItemVisible(id: string, mode: ShowcaseMode = showcaseMode) {
  const item = getShowcaseItem(id);
  return item ? shouldShowShowcaseItem(item, mode) : false;
}

export function getVisibleShowcaseItems(category?: ShowcaseCategory, mode: ShowcaseMode = showcaseMode) {
  return showcaseRegistry.filter((item) => (!category || item.category === category) && shouldShowShowcaseItem(item, mode));
}

export function formatShowcaseStatus(status: ShowcaseStatus) {
  return statusLabels[status];
}

export function getShowcaseStatusTone(status: ShowcaseStatus) {
  return statusTones[status];
}

export function hasWorkingExample(item: ShowcaseRegistryItem) {
  return item.hasExample ?? item.status !== "idea";
}

export function isProposalOnlyItem(item: ShowcaseRegistryItem) {
  return !hasWorkingExample(item);
}

export function getVisibleProposalItems(category?: ShowcaseCategory, mode: ShowcaseMode = showcaseMode) {
  return getVisibleShowcaseItems(category, mode).filter(isProposalOnlyItem);
}
