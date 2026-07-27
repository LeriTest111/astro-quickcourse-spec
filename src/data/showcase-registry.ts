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
}

export const showcaseMode: ShowcaseMode = import.meta.env.SHOWCASE_MODE === "approved" ? "approved" : "working";

export const showcaseModeIdentity = {
  working: {
    title: "Working Showcase",
    description: "Includes proposed ideas, early concepts, drafts and items under review.",
  },
  approved: {
    title: "Approved Quick Course Kit",
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
  { id: "image-overlay-hero", name: "Image overlay hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "split-hero", name: "Split hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "centered-minimal-hero", name: "Centred minimal hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "floating-card-hero", name: "Floating card hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "learning-objectives-hero", name: "Learning objectives hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "scenario-opener-hero", name: "Scenario opener hero", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "readable-text-section", name: "Readable Text Section", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "text-image-split", name: "Text and Image Split", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "two-column-content", name: "Two-Column Content", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "card-grid", name: "Card Grid", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "product-feature", name: "Product Feature", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "feature-list-visual", name: "Feature List with Supporting Visual", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "numbered-process", name: "Numbered Process", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "comparison-layout", name: "Comparison Layout", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "image-grid", name: "Image Gallery or Visual Grid", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "quote-key-message", name: "Quote or Key Message", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "call-to-action-section", name: "Call-to-Action Section", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "section-divider", name: "Section Divider or Chapter Opener", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "summary-section", name: "Summary Layout", category: "layouts", status: "in-review", version: "0.1.0" },
  { id: "accordion", name: "Accordion", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "flip-cards", name: "Flip Cards", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "hotspot-reveal", name: "Click-to-Reveal Hotspots", category: "display-interactions", status: "in-review", version: "0.1.0" },
  {
    id: "guided-product-explorer",
    name: "Guided Product Explorer",
    category: "display-interactions",
    status: "concept",
    version: "0.1.0",
    description: "An early experiment for exploring a product through selectable feature regions.",
    proposedUse: "Product knowledge courses where learners need to connect visible product areas with practical customer benefits.",
    notes: "Showcase-only concept entry. Behaviour, styling and accessibility are not final.",
    hasExample: false,
  },
  { id: "detail-modal", name: "Supporting-Detail Modal or Panel", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "tabs", name: "Tabs", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "carousel", name: "Carousel", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "process-explorer", name: "Process Explorer", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "timeline", name: "Timeline", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "expandable-image", name: "Expandable Image", category: "display-interactions", status: "in-review", version: "0.1.0" },
  { id: "multiple-choice-feedback", name: "Multiple-choice feedback", category: "assessment-interactions", status: "in-review", version: "0.1.0" },
  {
    id: "drag-and-drop",
    name: "Drag and Drop",
    category: "assessment-interactions",
    status: "idea",
    description: "Allow learners to sort items into groups or place them in a sequence.",
    proposedUse: "Sorting products, process steps or behaviours before receiving assessment feedback.",
    notes: "Showcase-only idea entry. No working component or prototype exists yet.",
    hasExample: false,
  },
  { id: "standard-video", name: "Standard Video", category: "multimedia", status: "in-review", version: "0.1.0" },
  { id: "video-with-supporting-text", name: "Video with Supporting Text", category: "multimedia", status: "in-review", version: "0.1.0" },
  { id: "video-with-transcript", name: "Video with Transcript", category: "multimedia", status: "in-review", version: "0.1.0" },
  { id: "video-with-chapters", name: "Video with Chapters", category: "multimedia", status: "in-review", version: "0.1.0" },
  { id: "type-scale", name: "System type stack", category: "typography", status: "in-review", version: "0.1.0" },
  { id: "icon-set", name: "Core icon examples", category: "icons", status: "in-review", version: "0.1.0" },
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
  return item.hasExample ?? !["idea", "concept"].includes(item.status);
}

export function isProposalOnlyItem(item: ShowcaseRegistryItem) {
  return !hasWorkingExample(item);
}

export function getVisibleProposalItems(category?: ShowcaseCategory, mode: ShowcaseMode = showcaseMode) {
  return getVisibleShowcaseItems(category, mode).filter(isProposalOnlyItem);
}
