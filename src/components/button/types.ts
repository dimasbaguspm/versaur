import type { ButtonHTMLAttributes } from 'react'

/**
 * ButtonProps defines the props for the Button component
 * @property variant - Visual style variant based on Spenicle color system
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property type - Button type attribute
 * @property onClick - Click event handler
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant supporting Spenicle color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (cream)
   * Semantic variants: success, info, warning, danger
   * Each variant supports outline and ghost forms
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
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}
