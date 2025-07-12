import type { ButtonHTMLAttributes } from 'react'

/**
 * ButtonProps defines the props for the Button component
 * @property variant - Visual style variant (primary, secondary, etc)
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property type - Button type attribute
 * @property onClick - Click event handler
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant (semantic, outline, ghost, destructive)
   * Supports semantic variants and their outline/ghost forms
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
    | 'ghost'
    | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}
