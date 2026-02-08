import type { HTMLAttributes, ReactNode } from 'react';
import type { Avatar } from '@versaur/core';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Image source URL
   */
  src?: string;

  /**
   * Alt text for the image
   */
  alt?: string;

  /**
   * Name used to generate initials fallback
   */
  name?: string;

  /**
   * Visual variant of the avatar
   * @default 'primary'
   */
  variant?: Avatar.Variant;

  /**
   * Size of the avatar
   * @default 'md'
   */
  size?: Avatar.Size;

  /**
   * Shape of the avatar
   * @default 'circle'
   */
  shape?: Avatar.Shape;

  /**
   * Custom fallback content (overrides initials and icon)
   */
  children?: ReactNode;
}
