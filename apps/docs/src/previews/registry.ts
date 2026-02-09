import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";
import { ButtonIconDocPage } from "./pages/button-icon-doc-page";
import { HeadingDocPage } from "./pages/heading-doc-page";
import { TextDocPage } from "./pages/text-doc-page";
import { AvatarDocPage } from "./pages/avatar-doc-page";
import { HrDocPage } from "./pages/hr-doc-page";
import { TabsDocPage } from "./pages/tabs-doc-page";
import { NoResultsDocPage } from "./pages/no-results-doc-page";
import { PageLoaderDocPage } from "./pages/page-loader-doc-page";

export type ComponentCategory =
  | "Primitives"
  | "Layouts"
  | "Navigations"
  | "Forms"
  | "Icons";

export interface RegistryEntry {
  component: ComponentType;
  title: string;
  description: string;
  category: ComponentCategory;
}

export const previewRegistry: Record<string, RegistryEntry> = {
  button: {
    component: ButtonDocPage,
    title: "Button",
    description:
      "A versatile button component with multiple variants, sizes, and states",
    category: "Primitives",
  },
  "button-icon": {
    component: ButtonIconDocPage,
    title: "ButtonIcon",
    description:
      "An icon-only button component with multiple variants, sizes, and states for iconographic actions",
    category: "Primitives",
  },
  heading: {
    component: HeadingDocPage,
    title: "Heading",
    description:
      "A typography component for headings with configurable level, size, weight, and intent",
    category: "Primitives",
  },
  text: {
    component: TextDocPage,
    title: "Text",
    description:
      "A typography component for body text with configurable element, size, weight, and intent",
    category: "Primitives",
  },
  avatar: {
    component: AvatarDocPage,
    title: "Avatar",
    description:
      "A user representation component with image, initials, or icon fallback and grouping support",
    category: "Primitives",
  },
  hr: {
    component: HrDocPage,
    title: "Hr",
    description: "A divider component for visually separating content sections",
    category: "Primitives",
  },
  tabs: {
    component: TabsDocPage,
    title: "Tabs",
    description:
      "A controlled compound component for managing tab selection with accessible triggers and custom panel support",
    category: "Primitives",
  },
  "no-results": {
    component: NoResultsDocPage,
    title: "NoResults",
    description:
      "A flexible empty state component for displaying when no content is available in lists, search results, or filtered data",
    category: "Primitives",
  },
  "page-loader": {
    component: PageLoaderDocPage,
    title: "PageLoader",
    description:
      "A loading indicator component with spinner and bar variants, customizable sizes, and animation control",
    category: "Primitives",
  },
};
