import { icons as materialSymbols } from "@iconify-json/material-symbols";
import { getIconData, iconToSVG } from "@iconify/utils";

type IconDefinition = {
  materialSymbol: string;
  filledMaterialSymbol?: string;
  description: string;
};

// Material Symbols identifiers stay internal; course authors use semantic tokens only.
const iconMap = {
  information: { materialSymbol: "info-outline", description: "General supporting information" },
  warning: { materialSymbol: "warning-outline", description: "Caution or important attention" },
  tip: { materialSymbol: "lightbulb-outline", description: "Helpful advice" },
  success: { materialSymbol: "check-circle-outline", filledMaterialSymbol: "check-circle", description: "Completion or confirmation" },
  error: { materialSymbol: "error-outline", description: "Problem or failed action" },
  question: { materialSymbol: "help-outline", description: "Question or help" },
  checklist: { materialSymbol: "checklist", description: "A list of checks or steps" },
  video: { materialSymbol: "play-circle", description: "Video or visual media" },
  audio: { materialSymbol: "volume-up", description: "Audio or sound content" },
  document: { materialSymbol: "description-outline-sharp", description: "Document or reference material" },
  download: { materialSymbol: "download-sharp", description: "Download a file" },
  "external-link": { materialSymbol: "open-in-new-sharp", description: "Opens outside the course" },
  person: { materialSymbol: "person-outline", description: "Individual, learner or customer" },
  team: { materialSymbol: "groups-outline", description: "Team or group" },
  manager: { materialSymbol: "supervisor-account", description: "Manager or supervisor" },
  store: { materialSymbol: "storefront-outline-sharp", description: "Store, branch or location" },
  calendar: { materialSymbol: "calendar-month-outline-sharp", description: "Date or scheduled event" },
  time: { materialSymbol: "schedule", description: "Time or duration" },
  task: { materialSymbol: "task-alt", description: "An action or item to complete" },
  next: { materialSymbol: "arrow-forward", description: "Move forward or continue" },
  previous: { materialSymbol: "arrow-back", description: "Move back or return" },
  expand: { materialSymbol: "expand-more", description: "Reveal more content" },
  collapse: { materialSymbol: "expand-less", description: "Hide expanded content" },
  close: { materialSymbol: "close", description: "Close a dialog or panel" },
  menu: { materialSymbol: "menu", description: "Open a navigation menu" },
  search: { materialSymbol: "search", description: "Search or find content" },
  settings: { materialSymbol: "settings", description: "Settings or configuration" },
} as const satisfies Record<string, IconDefinition>;

export type QuickCourseIconName = keyof typeof iconMap;
export type QuickCourseIconContext = "inline" | "button" | "heading" | "feature";
export type QuickCourseIconTreatment = "default" | "filled";

export const quickCourseIconTokens = (Object.keys(iconMap) as QuickCourseIconName[]).map((name) => ({
  name,
  description: iconMap[name].description,
}));

export function getQuickCourseIconSvg(name: QuickCourseIconName, treatment: QuickCourseIconTreatment = "default") {
  const definition = iconMap[name];
  const materialSymbol = treatment === "filled" ? definition.filledMaterialSymbol : definition.materialSymbol;

  if (!materialSymbol) {
    throw new Error(`Quick Course icon "${name}" does not support the filled treatment.`);
  }

  const icon = getIconData(materialSymbols, materialSymbol);

  if (!icon) {
    throw new Error(`Quick Course icon mapping is unavailable for "${name}".`);
  }

  return iconToSVG(icon, { height: "1em" });
}
