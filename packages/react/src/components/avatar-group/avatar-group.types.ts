import type { HTMLAttributes } from "react";
import type { AvatarGroup } from "@versaur/core";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the avatar stack
   * @default 'horizontal'
   */
  direction?: AvatarGroup.Direction;

  /**
   * Size controls the overlap amount between avatars
   * @default 'md'
   */
  size?: AvatarGroup.Size;

  /**
   * Alignment of items
   * @default 'center'
   */
  align?: AvatarGroup.Align;

  /**
   * Flex wrap behavior
   * @default 'nowrap'
   */
  wrap?: AvatarGroup.Wrap;

  /**
   * Accessible label for the group
   * @default 'Avatar group'
   */
  "aria-label"?: string;
}
