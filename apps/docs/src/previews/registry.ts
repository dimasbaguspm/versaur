import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";
import { HeadingDocPage } from "./pages/heading-doc-page";
import { TextDocPage } from "./pages/text-doc-page";

export const previewRegistry: Record<string, ComponentType> = {
  button: ButtonDocPage,
  heading: HeadingDocPage,
  text: TextDocPage,
};
