import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import type { Avatar } from "@versaur/core";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
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
   * Avatar content (text initials or compound Avatar.Image)
   */
  children?: ReactNode;
}

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string;

  /**
   * Alt text for the image
   */
  alt: string;
}
