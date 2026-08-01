type ShowcaseView = "development" | "approved";

const storageKey = "quick-course-kit-view";
const validViews = new Set<ShowcaseView>(["development", "approved"]);
const developmentStatuses = new Set(["idea", "concept", "draft", "in-review"]);

function getRequestedView(): ShowcaseView | undefined {
  const value = new URLSearchParams(window.location.search).get("view");
  return value && validViews.has(value as ShowcaseView) ? (value as ShowcaseView) : undefined;
}

function getStoredView(): ShowcaseView | undefined {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value && validViews.has(value as ShowcaseView) ? (value as ShowcaseView) : undefined;
  } catch {
    return undefined;
  }
}

function getInitialView() {
  return getRequestedView() ?? getStoredView() ?? "development";
}

function isVisibleInView(status: string | undefined, view: ShowcaseView) {
  return view === "approved" ? status === "approved" : developmentStatuses.has(status ?? "");
}

function setViewLink(link: HTMLAnchorElement, view: ShowcaseView) {
  const originalHref = link.dataset.showcaseOriginalHref ?? link.getAttribute("href");
  if (!originalHref) return;

  link.dataset.showcaseOriginalHref = originalHref;
  const target = new URL(originalHref, window.location.href);
  if (target.origin !== window.location.origin) return;

  target.searchParams.set("view", view);
  link.href = `${target.pathname}${target.search}${target.hash}`;
}

function updateCategoryCounts(view: ShowcaseView) {
  document.querySelectorAll<HTMLElement>("[data-showcase-category-card]").forEach((card) => {
    const statuses = (card.dataset.showcaseCategoryStatuses ?? "").split(",").filter(Boolean);
    const count = statuses.filter((status) => isVisibleInView(status, view)).length;
    const label = card.querySelector<HTMLElement>("[data-showcase-category-count]");

    if (label) {
      label.textContent = count === 0 ? "No components in this category have been approved yet." : `${count} ${count === 1 ? "item" : "items"} in this view`;
    }
  });
}

function updateSectionsAndEmptyStates() {
  document.querySelectorAll<HTMLElement>("[data-showcase-section]").forEach((section) => {
    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-showcase-item]"));
    section.hidden = items.length > 0 && !items.some((item) => !item.hidden);
  });

  document.querySelectorAll<HTMLElement>("[data-showcase-anchor-item]").forEach((anchorItem) => {
    const link = anchorItem.querySelector<HTMLAnchorElement>('a[href^="#"]');
    const targetId = link?.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : undefined;
    anchorItem.hidden = Boolean(target && target.hidden);
  });

  document.querySelectorAll<HTMLElement>("[data-showcase-collection]").forEach((collection) => {
    const items = Array.from(collection.querySelectorAll<HTMLElement>("[data-showcase-item]"));
    const emptyState = collection.querySelector<HTMLElement>("[data-showcase-empty-state]");
    if (emptyState) emptyState.hidden = items.some((item) => !item.hidden);
  });
}

function clearIncompatibleFragment() {
  const targetId = window.location.hash.slice(1);
  const target = targetId ? document.getElementById(targetId) : undefined;
  if (!(target instanceof HTMLElement) || !target.matches("[data-showcase-item]") || !target.hidden) return;

  const url = new URL(window.location.href);
  url.hash = "";
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function applyView(view: ShowcaseView) {
  document.documentElement.dataset.showcaseView = view;

  document.querySelectorAll<HTMLElement>("[data-showcase-item]").forEach((item) => {
    item.hidden = !isVisibleInView(item.dataset.showcaseStatus, view);
  });

  document.querySelectorAll<HTMLButtonElement>("[data-showcase-view-button]").forEach((button) => {
    const isActive = button.dataset.showcaseViewButton === view;
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-showcase-view-link]").forEach((link) => setViewLink(link, view));
  updateCategoryCounts(view);
  updateSectionsAndEmptyStates();
  clearIncompatibleFragment();
}

function saveView(view: ShowcaseView) {
  try {
    window.localStorage.setItem(storageKey, view);
  } catch {
    // The selector remains usable when browser storage is unavailable.
  }
}

function selectView(view: ShowcaseView, updateHistory: boolean) {
  if (!validViews.has(view)) return;

  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", view);
    window.history.pushState({ showcaseView: view }, "", `${url.pathname}${url.search}${url.hash}`);
  }

  saveView(view);
  applyView(view);
}

document.querySelectorAll<HTMLButtonElement>("[data-showcase-view-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.showcaseViewButton;
    if (view === "development" || view === "approved") selectView(view, true);
  });
});

window.addEventListener("popstate", () => selectView(getRequestedView() ?? "development", false));

applyView(getInitialView());
