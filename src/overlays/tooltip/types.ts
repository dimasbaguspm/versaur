import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

/**
 * Tooltip position options
 * 'auto' (default): browser chooses best position, prefers bottom
 * 'top', 'bottom', 'left', 'right': force position
 */
export type TooltipPosition = 'auto' | 'top' | 'bottom' | 'left' | 'right'

/**
 * TooltipRootProps: Props for Tooltip root
 * Extends native div props, but allows ReactNode for content
 */
export interface TooltipRootProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'content'
  > {
  /**
   * The content to show inside the tooltip
   */
  content: ReactNode
  /**
   * The element that triggers the tooltip (usually a child)
   */
  children: ReactNode
  /**
   * Position of the tooltip relative to the trigger (default: 'auto')
   */
  position?: TooltipPosition
  /**
   * Optional: delay in ms before showing the tooltip
   */
  delay?: number
  /**
   * Optional: className for the tooltip popover
   */
  popoverClassName?: string
}
