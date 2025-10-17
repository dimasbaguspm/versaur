import type { ButtonHTMLAttributes } from 'react'

/**
 * FilterChipProps defines the props for the FilterChip component
 * @property size - Size of the chip (sm, md, lg)
 * @property disabled - Whether the chip is disabled
 */
export interface FilterChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
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
