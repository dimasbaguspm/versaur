import type { ButtonHTMLAttributes } from 'react'
import type { IconProps } from '@/primitive/icon'

/**
 * ButtonIconProps defines the props for the ButtonIcon component
 * @property as - Icon component to render inside the button (e.g., from lucide-react)
 * @property variant - Visual style variant based on Versaur color system
 * @property shape - Shape type of the button (rounded, square, circle)
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property aria-label - Accessible label for screen readers (required for icon-only buttons)
 *
 * Inherits icon sizing and color props from IconProps for alignment
 */
export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color'>,
    Pick<IconProps, 'as'> {
  /**
   * Icon component to render inside the button (e.g., from lucide-react)
   */

  /**
   * Visual style variant supporting Versaur color system
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'primary-ghost'
    | 'secondary'
    | 'secondary-outline'
    | 'secondary-ghost'
    | 'tertiary'
    | 'tertiary-outline'
    | 'tertiary-ghost'
    | 'ghost'
    | 'ghost-outline'
    | 'neutral'
    | 'neutral-outline'
    | 'neutral-ghost'
    | 'success'
    | 'success-outline'
    | 'success-ghost'
    | 'info'
    | 'info-outline'
    | 'info-ghost'
    | 'warning'
    | 'warning-outline'
    | 'warning-ghost'
    | 'danger'
    | 'danger-outline'
    | 'danger-ghost'
    | 'outline'
    | 'destructive'

  /**
   * Size of the button and icon
   * xs: 24px, sm: 32px, md: 40px, lg: 48px, xl: 56px
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Shape type of the button
   * rounded: Standard rounded corners (default)
   * square: Perfect square with minimal rounded corners
   * circle: Circular shape
   */
  shape?: 'rounded' | 'square' | 'circle'

  /**
   * Whether the button is disabled
   * When true, the button becomes non-interactive and visually dimmed
   */
  disabled?: boolean

  /**
   * Accessible label for screen readers
   * Required for icon-only buttons to ensure accessibility
   */
  'aria-label': string
}
