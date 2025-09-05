import type { ButtonHTMLAttributes } from 'react'

/**
 * ButtonProps defines the props for the Button component
 * @property variant - Visual style variant based on Versaur color system
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property type - Button type attribute
 * @property onClick - Click event handler
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    | 'accent_1'
    | 'accent_1-outline'
    | 'accent_1-ghost'
    | 'accent_2'
    | 'accent_2-outline'
    | 'accent_2-ghost'
    | 'accent_3'
    | 'accent_3-outline'
    | 'accent_3-ghost'
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
   * Size of the button
   * sm: 36px height, compact for space-constrained interfaces
   * md: 40px height, standard for most use cases
   * lg: 44px height, prominent for primary actions
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is disabled
   * When true, the button becomes non-interactive and visually dimmed
   */
  disabled?: boolean
}
