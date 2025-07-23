import type { HTMLAttributes } from 'react'

/**
 * LoadingIndicatorProps defines the props for the LoadingIndicator component
 * @property type - Type of loading indicator: spinner (default), bar
 * @property size - Size of the indicator: sm, md, lg
 * @property color - Color variant based on Versaur color system
 * @property ariaLabel - Accessible label for screen readers
 */
export interface LoadingIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Type of loading indicator: spinner (circular) or bar (linear)
   * Spinner is recommended for desktop, bar for mobile or progress contexts
   */
  type?: 'spinner' | 'bar'
  /**
   * Size of the indicator: sm, md, lg
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Color variant based on Versaur color system
   * Core: primary, secondary, tertiary, ghost, neutral
   * Semantic: success, info, warning, danger
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
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string
}
