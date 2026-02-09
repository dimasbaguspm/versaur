import type { HTMLAttributes } from "react";
import type { BadgeGroup } from "@versaur/core";

export interface BadgeGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between items
   * @default 'md'
   */
  gap?: BadgeGroup.Gap;

  /**
   * Direction of flex layout
   * @default 'horizontal'
   */
  direction?: BadgeGroup.Direction;

  /**
   * Alignment of items
   * @default 'center'
   */
  align?: BadgeGroup.Align;

  /**
   * Flex wrap behavior
   * @default 'nowrap'
   */
  wrap?: BadgeGroup.Wrap;

  /**
   * Accessible label for the group
   * @default 'Badge group'
   */
  "aria-label"?: string;

  /**
   * Badge children components
   */
  children?: React.ReactNode;
}
