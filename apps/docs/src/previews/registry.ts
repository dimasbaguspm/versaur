import type { ComponentType } from "react";
import { ReactButtonPreview } from "@versaur/react/button";

export const previewRegistry: Record<
  string,
  ComponentType<{ exampleKey: string }>
> = {
  button: ReactButtonPreview,
};
