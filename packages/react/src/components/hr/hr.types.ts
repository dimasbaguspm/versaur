import type { HTMLAttributes } from "react";
import type { Hr } from "@versaur/core";

export interface HrProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: Hr.Orientation;

  /**
   * Visual variant (border style) of the divider
   * @default 'solid'
   */
  variant?: Hr.Variant;

  /**
   * Thickness of the divider line
   * @default 'sm'
   */
  size?: Hr.Size;

  /**
   * Spacing (margin) around the divider
   * @default 'md'
   */
  spacing?: Hr.Spacing;
}
