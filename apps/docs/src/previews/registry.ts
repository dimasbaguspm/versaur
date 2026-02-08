import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";
import { HeadingDocPage } from "./pages/heading-doc-page";
import { TextDocPage } from "./pages/text-doc-page";

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
};
