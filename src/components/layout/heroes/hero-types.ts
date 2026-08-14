export type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type MinimalHeroAlignment = "center" | "left";
export type MinimalHeroHeadingScale = "standard" | "display";
export type MinimalHeroDensity = "compact" | "standard" | "spacious";
export type MinimalHeroSurface = "default" | "neutral" | "primary" | "secondary" | "accent" | "light";
