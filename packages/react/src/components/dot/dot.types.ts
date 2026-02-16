import type { HTMLAttributes } from "react";
import type { Dot } from "@versaur/core";

export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Dot.Variant;

  /**
   * Size of the dot
   * @default 'medium'
   */
  size?: Dot.Size;
}
