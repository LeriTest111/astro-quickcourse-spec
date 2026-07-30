import { icons as materialSymbols } from "@iconify-json/material-symbols";
import { getIconData, iconToSVG } from "@iconify/utils";

type IconDefinition = {
  materialSymbol: string;
  description: string;
};

// Material Symbols identifiers stay internal; course authors use semantic tokens only.
const iconMap = {
  information: { materialSymbol: "info-outline", description: "General supporting information" },
  warning: { materialSymbol: "warning-outline", description: "Risk, caution or important attention" },
  tip: { materialSymbol: "lightbulb-outline", description: "Helpful advice or recommendation" },
  success: { materialSymbol: "check-circle-outline", description: "Successful completion or confirmation" },
  error: { materialSymbol: "error-outline", description: "Problem or failed action" },
  question: { materialSymbol: "help-outline", description: "Question or additional help" },
  checklist: { materialSymbol: "checklist", description: "List of required checks or steps" },
  video: { materialSymbol: "play-circle", description: "Video or visual media" },
  audio: { materialSymbol: "volume-up", description: "Audio or sound content" },
  document: { materialSymbol: "description-outline-sharp", description: "Document or reference material" },
  download: { materialSymbol: "download-sharp", description: "Download a file or resource" },
  "external-link": { materialSymbol: "open-in-new-sharp", description: "Opens a destination outside the course" },
  customer: { materialSymbol: "person-outline", description: "Customer or learner" },
  person: { materialSymbol: "person-outline", description: "Individual person" },
  team: { materialSymbol: "groups-outline", description: "Team or group" },
  manager: { materialSymbol: "supervisor-account", description: "Manager or supervisor" },
  store: { materialSymbol: "storefront-outline-sharp", description: "Store, branch or location" },
  calendar: { materialSymbol: "calendar-month-outline-sharp", description: "Date or scheduled event" },
  time: { materialSymbol: "schedule", description: "Time or duration" },
  task: { materialSymbol: "task-alt", description: "Task or completed step" },
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

export const quickCourseIconTokens = (Object.keys(iconMap) as QuickCourseIconName[]).map((name) => ({
  name,
  description: iconMap[name].description,
}));

export function getQuickCourseIconSvg(name: QuickCourseIconName) {
  const icon = getIconData(materialSymbols, iconMap[name].materialSymbol);

  if (!icon) {
    throw new Error(`Quick Course icon mapping is unavailable for "${name}".`);
  }

  return iconToSVG(icon, { height: "1em" });
}
