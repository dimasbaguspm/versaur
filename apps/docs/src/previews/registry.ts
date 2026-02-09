import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";
import { HeadingDocPage } from "./pages/heading-doc-page";
import { TextDocPage } from "./pages/text-doc-page";
import { AvatarDocPage } from "./pages/avatar-doc-page";
import { HrDocPage } from "./pages/hr-doc-page";
import { TabsDocPage } from "./pages/tabs-doc-page";

export interface RegistryEntry {
  component: ComponentType;
  title: string;
  description: string;
}

export const previewRegistry: Record<string, RegistryEntry> = {
  button: {
    component: ButtonDocPage,
    title: "Button",
    description:
      "A versatile button component with multiple variants, sizes, and states",
  },
  heading: {
    component: HeadingDocPage,
    title: "Heading",
    description:
      "A typography component for headings with configurable level, size, weight, and intent",
  },
  text: {
    component: TextDocPage,
    title: "Text",
    description:
      "A typography component for body text with configurable element, size, weight, and intent",
  },
  avatar: {
    component: AvatarDocPage,
    title: "Avatar",
    description:
      "A user representation component with image, initials, or icon fallback and grouping support",
  },
  hr: {
    component: HrDocPage,
    title: "Hr",
    description: "A divider component for visually separating content sections",
  },
  tabs: {
    component: TabsDocPage,
    title: "Tabs",
    description:
      "A controlled compound component for managing tab selection with accessible triggers and custom panel support",
  },
};
