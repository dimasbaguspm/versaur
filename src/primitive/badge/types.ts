import type { HTMLAttributes, ReactNode } from 'react'

/**
 * BadgeProps defines the props for the Badge component
 * @property variant - Visual style variant (default or outline)
 * @property shape - Shape of the badge (rounded or square)
 * @property color - Color variant based on Versaur color system
 * @property iconLeft - Icon to display on the left side
 * @property iconRight - Icon to display on the right side
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Size of the badge
   * - sm: Small (compact)
   * - md: Medium (default)
   * - lg: Large
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Visual style variant
   * - default: Solid background with text
   * - outline: Border with transparent background
   */
  variant?: 'default' | 'outline'

  /**
   * Shape of the badge
   * - rounded: Fully rounded corners (pill-shaped)
   * - square: Standard rounded corners
   */
  shape?: 'rounded' | 'square'

  /**
   * Color variant based on Versaur color system
   * Core colors: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic colors: success, info, warning, danger
   */
  color?:
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
   * Icon element to display on the left side of the badge
   * When no children are provided and an icon is present, badge automatically becomes icon-only
   */
  iconLeft?: ReactNode

  /**
   * Icon element to display on the right side of the badge
   * When no children are provided and an icon is present, badge automatically becomes icon-only
   */
  iconRight?: ReactNode

  /**
   * Content to display in the badge
   * When empty and an icon is provided, badge automatically becomes icon-only
   */
  children?: ReactNode
}
