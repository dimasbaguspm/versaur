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
import { LoaderDocPage } from "./pages/loader-doc-page";
import { AttributeListDocPage } from "./pages/attribute-list-doc-page";
import { BadgeDocPage } from "./pages/badge-doc-page";
import { DotDocPage } from "./pages/dot-doc-page";
import { KbdDocPage } from "./pages/kbd-doc-page";
import { TooltipDocPage } from "./pages/tooltip-doc-page";
import { MenuDocPage } from "./pages/menu-doc-page";
import { BadgeGroupDocPage } from "./pages/badge-group-doc-page";
import { ButtonGroupDocPage } from "./pages/button-group-doc-page";
import { CardDocPage } from "./pages/card-doc-page";
import { TableDocPage } from "./pages/table-doc-page";
import { TopBarDocPage } from "./pages/top-bar-doc-page";
import { NavDocPage } from "./pages/nav-doc-page";
import { SidebarDocPage } from "./pages/sidebar-doc-page";
import { BottomBarDocPage } from "./pages/bottom-bar-doc-page";
import { AppLayoutDocPage } from "./pages/app-layout-doc-page";
import { TextInputDocPage } from "./pages/text-input-doc-page";
import { TextAreaDocPage } from "./pages/text-area-doc-page";
import { SelectDocPage } from "./pages/select-doc-page";
import { RadioDocPage } from "./pages/radio-doc-page";
import { CheckboxDocPage } from "./pages/checkbox-doc-page";
import { RadioGroupDocPage } from "./pages/radio-group-doc-page";
import { CheckboxGroupDocPage } from "./pages/checkbox-group-doc-page";
import { ChipSingleInputDocPage } from "./pages/chip-single-input-doc-page";
import { ChipMultipleInputDocPage } from "./pages/chip-multiple-input-doc-page";
import { DrawerDocPage } from "./pages/drawer-doc-page";
import { ModalDocPage } from "./pages/modal-doc-page";
import { BottomSheetDocPage } from "./pages/bottom-sheet-doc-page";

export type ComponentCategory =
  | "Primitives"
  | "Layouts"
  | "Navigations"
  | "Forms"
  | "Overlays";

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
  loader: {
    component: LoaderDocPage,
    title: "Loader",
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
  dot: {
    component: DotDocPage,
    title: "Dot",
    description:
      "A simple circular visual indicator for status, decorative markers, or visual accents with multiple color variants",
    category: "Primitives",
  },
  kbd: {
    component: KbdDocPage,
    title: "Kbd",
    description:
      "A keyboard key display component for showing keyboard shortcuts and modifier keys with filled or outline variants",
    category: "Primitives",
  },
  tooltip: {
    component: TooltipDocPage,
    title: "Tooltip",
    description:
      "A popover-based tooltip component that uses the browser Popover API with flexible placement options and line clamping support",
    category: "Primitives",
  },
  menu: {
    component: MenuDocPage,
    title: "Menu",
    description:
      "A popover-based menu component with external triggers, selectable items, and programmatic close support",
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
  nav: {
    component: NavDocPage,
    title: "Nav",
    description:
      "A primitive navigation container with polymorphic items, horizontal/vertical layout support, and flexible icon placement",
    category: "Primitives",
  },
  sidebar: {
    component: SidebarDocPage,
    title: "Sidebar",
    description:
      "An expandable/collapsible navigation sidebar with compound pattern, polymorphic items, keyboard navigation (arrow up/down), and grouped items support",
    category: "Navigations",
  },
  "bottom-bar": {
    component: BottomBarDocPage,
    title: "BottomBar",
    description:
      "A horizontal bottom navigation bar with icon-focused items and optional text labels, designed for mobile-first interfaces",
    category: "Navigations",
  },
  "app-layout": {
    component: AppLayoutDocPage,
    title: "AppLayout",
    description:
      "A high-level layout system for managing page regions including header, sidebars, main content, and bottom navigation with responsive variants",
    category: "Layouts",
  },
  "text-input": {
    component: TextInputDocPage,
    title: "TextInput",
    description:
      "Text input with label, icons, validation states, and helper text",
    category: "Forms",
  },
  "text-area": {
    component: TextAreaDocPage,
    title: "TextArea",
    description:
      "Multi-line text input with label, validation states, and resize control",
    category: "Forms",
  },
  select: {
    component: SelectDocPage,
    title: "Select",
    description:
      "Native select dropdown with label, validation states, and custom styling",
    category: "Forms",
  },
  radio: {
    component: RadioDocPage,
    title: "Radio",
    description: "Native radio input with custom styling",
    category: "Forms",
  },
  checkbox: {
    component: CheckboxDocPage,
    title: "Checkbox",
    description: "Native checkbox input with custom styling",
    category: "Forms",
  },
  "radio-group": {
    component: RadioGroupDocPage,
    title: "RadioGroup",
    description:
      "Grouped radio inputs with coordinated state management and built-in form integration",
    category: "Forms",
  },
  "checkbox-group": {
    component: CheckboxGroupDocPage,
    title: "CheckboxGroup",
    description:
      "Grouped checkboxes for multi-selection with array state management",
    category: "Forms",
  },
  "chip-single-input": {
    component: ChipSingleInputDocPage,
    title: "ChipSingleInput",
    description:
      "Single-selection chip input - modern alternative to radio groups with interactive pill UI",
    category: "Forms",
  },
  "chip-multiple-input": {
    component: ChipMultipleInputDocPage,
    title: "ChipMultipleInput",
    description:
      "Multi-selection chip input - modern alternative to checkbox groups with interactive pill UI",
    category: "Forms",
  },
  drawer: {
    component: DrawerDocPage,
    title: "Drawer",
    description:
      "A side panel that slides in from left or right with native dialog accessibility and animated transitions",
    category: "Overlays",
  },
  modal: {
    component: ModalDocPage,
    title: "Modal",
    description:
      "A centered dialog box for focused user interactions with backdrop dimming and smooth animations",
    category: "Overlays",
  },
  "bottom-sheet": {
    component: BottomSheetDocPage,
    title: "BottomSheet",
    description:
      "A mobile-friendly panel that slides up from the bottom with native dialog support and accessibility",
    category: "Overlays",
  },
};
