import type { ComponentType } from "react";
import { ButtonDocPage } from "./pages/button-doc-page";

export const previewRegistry: Record<string, ComponentType> = {
  button: ButtonDocPage,
};
