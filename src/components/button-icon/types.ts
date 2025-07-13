import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * ButtonIconProps defines the props for the ButtonIcon component
 * @property children - Icon content (ReactNode)
 * @property variant - Visual style variant based on Versaur color system
 * @property shape - Shape type of the button (rounded, square, circle)
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property ariaLabel - Accessible label for screen readers (required for icon-only buttons)
 */
export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Icon content to display inside the button
   * Accepts any ReactNode (SVG icons, components, etc.)
   */
  children: ReactNode

  /**
   * Visual style variant supporting Versaur color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic variants: success, info, warning, danger
   * Each variant supports outline and ghost forms for flexible design expression
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
   * Shape type of the button
   * rounded: Standard rounded corners (default)
   * square: Perfect square with minimal rounded corners
   * circle: Circular shape
   */
  shape?: 'rounded' | 'square' | 'circle'

  /**
   * Size of the button
   * sm: 32px, compact for space-constrained interfaces
   * md: 40px, standard for most use cases
   * lg: 48px, prominent for primary actions
   */
  size?: 'sm' | 'md' | 'lg'

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
