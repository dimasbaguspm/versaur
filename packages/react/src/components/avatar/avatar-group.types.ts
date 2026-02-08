import type { HTMLAttributes, ReactNode } from 'react';
import type { AvatarGroup } from '@versaur/core';

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
   * Avatar children
   */
  children: ReactNode;
}
