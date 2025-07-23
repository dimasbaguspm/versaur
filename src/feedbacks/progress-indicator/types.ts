import type { HTMLAttributes } from 'react'

/**
 * Props for ProgressIndicator component (determinate only)
 */
export interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Current progress value (0-max). Required for determinate mode
   */
  value: number
  /**
   * Maximum value (default: 100)
   */
  max?: number
  /**
   * Color role (uses Versaur design system CSS variable)
   * @default 'primary'
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
}
