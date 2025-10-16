import type { ButtonHTMLAttributes } from 'react'

/**
 * ButtonProps defines the props for the Button component
 * @property variant - Visual style variant (primary, ghost, outline, destructive)
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property busy - Whether the button is in a loading/busy state
 * @property type - Button type attribute (button, submit, reset)
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * - primary: Main action button with coral background (default)
   * - ghost: Subtle, minimal visual weight for secondary actions
   * - outline: Bordered lightweight alternative for secondary actions
   * - destructive: For dangerous or irreversible actions (delete, remove, etc.)
   */
  variant?: 'primary' | 'ghost' | 'outline' | 'destructive'
  /**
   * Size of the button
   * - sm: 28px height, compact for space-constrained interfaces
   * - md: 36px height, standard for most use cases (default)
   * - lg: 40px height, prominent for primary actions
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is disabled
   * When true, the button becomes non-interactive and visually dimmed
   */
  disabled?: boolean

  /**
   * Whether the button is in a loading/busy state
   * Can be used to show loading indicators or disable interaction during async operations
   */
  busy?: boolean
  /**
   * Button type attribute
   * - button: Standard button (default, prevents form submission)
   * - submit: Submits the containing form
   * - reset: Resets the containing form
   */
  type?: 'button' | 'submit' | 'reset'
}
