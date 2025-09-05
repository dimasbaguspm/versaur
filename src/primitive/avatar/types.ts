import type { HTMLAttributes, ImgHTMLAttributes } from 'react'

/**
 * AvatarProps defines the props for the Avatar component
 * @property variant - Visual style variant based on Versaur color system
 * @property size - Size of the avatar (xs, sm, md, lg, xl)
 * @property shape - Shape of the avatar (circle, square, rounded)
 */
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant supporting Versaur color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic variants: success, info, warning, danger
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'neutral'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'accent_1'
    | 'accent_2'
    | 'accent_3'

  /**
   * Size of the avatar
   * xs: 24px, sm: 32px, md: 40px, lg: 48px, xl: 64px
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Shape of the avatar
   * circle: fully rounded, square: no border radius, rounded: slight border radius
   */
  shape?: 'circle' | 'square' | 'rounded'
}

/**
 * AvatarImageProps defines the props for the AvatarImage component
 * @property src - Image source URL
 * @property alt - Alternative text for the image
 * @property onError - Error handler for failed image loads
 */
export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string

  /**
   * Alternative text for the image
   */
  alt: string

  /**
   * Error handler for failed image loads
   * Called when the image fails to load, triggering fallback to Avatar
   */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
}
