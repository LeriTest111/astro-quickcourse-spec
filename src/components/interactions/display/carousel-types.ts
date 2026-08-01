import type { QuickCourseIconName } from "../../../data/quick-course-icons";

export type CarouselVariant = "content" | "feature" | "cards" | "gallery";
export type CarouselIndicator = "count" | "dots" | "count-and-dots" | "thumbnails";
export type ContentCarouselSurfaceTreatment = "plain" | "single-surface" | "varied-surfaces";
export type CarouselImageFocalPosition = "left" | "center" | "right";

export interface CarouselLink {
  label: string;
  href: string;
}

interface BaseSlide {
  title: string;
  eyebrow?: string;
  body?: string;
}

export interface ContentCarouselSlide extends BaseSlide {
  icon?: QuickCourseIconName;
  list?: string[];
  link?: CarouselLink;
}

export interface ImageCarouselSlide extends BaseSlide {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  focalPosition?: CarouselImageFocalPosition;
  caption?: string;
}

export interface CardCarouselSlide extends BaseSlide {
  icon?: QuickCourseIconName;
}

export interface GalleryCarouselSlide {
  title?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  description?: string;
  caption?: string;
}

interface CarouselBase {
  id: string;
  label: string;
  heading?: string;
  intro?: string;
  class?: string;
}

export interface ContentCarouselProps extends CarouselBase {
  variant: "content";
  slides: ContentCarouselSlide[];
  indicator?: Exclude<CarouselIndicator, "thumbnails">;
  surfaceTreatment?: ContentCarouselSurfaceTreatment;
  controls?: "below";
}

export interface FeatureCarouselProps extends CarouselBase {
  variant: "feature";
  slides: ImageCarouselSlide[];
  indicator?: Exclude<CarouselIndicator, "thumbnails">;
  controls?: "below";
}

export interface CardCarouselProps extends CarouselBase {
  variant: "cards";
  slides: CardCarouselSlide[];
  indicator?: "count";
  controls?: "below";
}

export interface GalleryCarouselProps extends CarouselBase {
  variant: "gallery";
  slides: GalleryCarouselSlide[];
  indicator?: "count" | "dots" | "count-and-dots" | "thumbnails";
  controls?: "below" | "overlay";
}

export type CarouselProps = ContentCarouselProps | FeatureCarouselProps | CardCarouselProps | GalleryCarouselProps;
export type CarouselSlide = ContentCarouselSlide | ImageCarouselSlide | CardCarouselSlide | GalleryCarouselSlide;
