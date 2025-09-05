import type { HTMLAttributes } from 'react'
import type { LoadingIndicatorProps } from '@/feedbacks/loading-indicator'

/**
 * PageLoaderProps defines the props for the PageLoader component
 * Extends LoadingIndicatorProps to support all loading indicator configurations
 * while adding layout-specific functionality
 */
export interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Type of loading indicator: spinner (default), bar
   * Spinner is recommended for page loading states
   */
  type?: LoadingIndicatorProps['type']
  /**
   * Size of the indicator: sm, md, lg
   */
  size?: LoadingIndicatorProps['size']
  /**
   * Color variant based on Versaur color system
   * Core: primary, secondary, tertiary, ghost, neutral
   * Semantic: success, info, warning, danger
   */
  color?: LoadingIndicatorProps['color']
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: LoadingIndicatorProps['ariaLabel']
  /**
   * Optional loading message to display below the indicator
   */
  message?: string
  /**
   * Whether to use a minimal height (useful for inline loading states)
   */
  minimal?: boolean
}
