import type { ButtonHTMLAttributes } from 'react'

/**
 * FilterChipProps defines the props for the FilterChip component
 * @property variant - Visual style variant based on Versaur color system
 * @property size - Size of the chip (sm, md, lg)
 * @property disabled - Whether the chip is disabled
 * @property onRemove - Callback when the remove icon is clicked
 * @property label - The text content of the chip
 */
export interface FilterChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant supporting Versaur color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic variants: success, info, warning, danger
   * Each variant supports outline forms for flexible design expression
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'tertiary'
    | 'tertiary-outline'
    | 'ghost'
    | 'ghost-outline'
    | 'neutral'
    | 'neutral-outline'
    | 'success'
    | 'success-outline'
    | 'info'
    | 'info-outline'
    | 'warning'
    | 'warning-outline'
    | 'danger'
    | 'danger-outline'
  /**
   * Size of the chip
   * sm: 28px height, compact for dense layouts
   * md: 32px height, standard for most use cases
   * lg: 36px height, prominent for important filters
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the chip is disabled
   * When true, the chip becomes non-interactive and visually dimmed
   */
  disabled?: boolean
  /**
   * The text content of the chip
   * This will be displayed as the main content
   */
  children: string
}
