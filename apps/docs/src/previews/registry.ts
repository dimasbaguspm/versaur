import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";
import { ButtonIconDocPage } from "./pages/button-icon-doc-page";
import { HeadingDocPage } from "./pages/heading-doc-page";
import { TextDocPage } from "./pages/text-doc-page";
import { AvatarDocPage } from "./pages/avatar-doc-page";
import { AvatarGroupDocPage } from "./pages/avatar-group-doc-page";
import { HrDocPage } from "./pages/hr-doc-page";
import { TabsDocPage } from "./pages/tabs-doc-page";
import { NoResultsDocPage } from "./pages/no-results-doc-page";
import { PageLoaderDocPage } from "./pages/page-loader-doc-page";
import { AttributeListDocPage } from "./pages/attribute-list-doc-page";
import { BadgeDocPage } from "./pages/badge-doc-page";
import { BadgeGroupDocPage } from "./pages/badge-group-doc-page";
import { ButtonGroupDocPage } from "./pages/button-group-doc-page";
import { CardDocPage } from "./pages/card-doc-page";
import { TableDocPage } from "./pages/table-doc-page";
import { TopBarDocPage } from "./pages/top-bar-doc-page";

export type ComponentCategory =
  | "Primitives"
  | "Layouts"
  | "Navigations"
  | "Forms";

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
  "attribute-list": {
    component: AttributeListDocPage,
    title: "AttributeList",
    description:
      "A semantic key-value display component with flexible grid layout, column spanning, and support for mixed content types",
    category: "Primitives",
  },
  badge: {
    component: BadgeDocPage,
    title: "Badge",
    description:
      "A badge component for displaying labels, tags, or status indicators with customizable variants, sizes, and shapes",
    category: "Primitives",
  },
  card: {
    component: CardDocPage,
    title: "Card",
    description:
      "A flexible container component with composable sub-parts (avatar, title, subtitle, badges, list) supporting multiple variants and interactive states",
    category: "Primitives",
  },
  table: {
    component: TableDocPage,
    title: "Table",
    description:
      "A semantic table component with flexible cell-level styling variants for displaying structured data",
    category: "Primitives",
  },
  "badge-group": {
    component: BadgeGroupDocPage,
    title: "BadgeGroup",
    description:
      "A container component for grouping multiple badges with customizable gap, direction, alignment, and wrap behavior",
    category: "Layouts",
  },
  "button-group": {
    component: ButtonGroupDocPage,
    title: "ButtonGroup",
    description:
      "A container component for grouping multiple buttons with customizable gap, direction, alignment, and wrap behavior",
    category: "Layouts",
  },
  "avatar-group": {
    component: AvatarGroupDocPage,
    title: "AvatarGroup",
    description:
      "A container component for grouping multiple avatars with overlapping display, customizable direction, alignment, and wrap behavior",
    category: "Layouts",
  },
  "top-bar": {
    component: TopBarDocPage,
    title: "TopBar",
    description:
      "A semantic navigation header component with compound pattern, polymorphic NavItem support, and mobile menu toggle",
    category: "Navigations",
  },
};
