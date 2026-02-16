import type { HTMLAttributes, ReactNode } from "react";
import type { Text } from "@versaur/core";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   * @default 'p'
   */
  as?: Text.As;

  /**
   * Override the preset font-size
   */
  size?: Text.Size;

  /**
   * Override the preset font-weight
   */
  weight?: Text.Weight;

  /**
   * Text color intent
   */
  intent?: Text.Intent;

  /**
   * Text transform case
   */
  case?: Text.Case;

  /**
   * Text decoration transform
   */
  transform?: Text.Transform;

  /**
   * Text content
   */
  children: ReactNode;
}
