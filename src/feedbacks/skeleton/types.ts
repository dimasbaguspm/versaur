import type { HTMLAttributes } from 'react'

/**
 * SkeletonProps defines the props for the Skeleton component
 * @property shape - The shape of the skeleton (rectangle, rounded, circle, square)
 * @property size - The size of the skeleton (sm, md, lg, xl, or custom string)
 * @property rows - Number of rows (height) for multiline skeletons
 * @property color - The color variant for the skeleton (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
 * @property className - Additional class names for custom styling
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** The shape of the skeleton */
  shape?: 'rectangle' | 'rounded' | 'circle' | 'square'
  /** The size of the skeleton */
  size?: 'sm' | 'md' | 'lg' | 'xl' | string
  /** Custom height for the skeleton (overrides size) */
  height?: number | string
}
