import type { HTMLAttributes } from "react";
import type { Badge } from "@versaur/core";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Badge.Variant;

  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: Badge.Size;

  /**
   * Shape of the badge
   * @default 'rounded'
   */
  shape?: Badge.Shape;

  /**
   * Badge content (text, icons, etc.)
   */
  children?: React.ReactNode;
}
