import type { ButtonHTMLAttributes } from 'react'

/**
 * ButtonFloatProps defines the props for the ButtonFloat component
 * @property side - Which side of the viewport to float the button ('right' | 'left')
 * @property offset - Optional offset from the edge (e.g., '1rem', '24px', defaults to '1rem')
 * @property All ButtonProps from the regular Button component
 */
export interface ButtonFloatProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Which side of the viewport to float the button
   * @default 'right'
   */
  side?: 'right' | 'left'
  /**
   * Offset from the edge of the viewport (e.g., '1rem', '24px')
   * @default '1rem'
   */
  offset?: string
  /**
   * Visual style variant (same as Button)
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
   * Size of the button (same as Button)
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is disabled
   */
  disabled?: boolean
}
