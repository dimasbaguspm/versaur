import type { HTMLAttributes } from 'react'

/**
 * HrProps defines the props for the Hr component
 * @property hasMargin - Whether to include bottom margin (mb-4)
 */
export interface HrProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Whether to include bottom margin
   * - When true: Adds mb-4 for spacing
   * - When false: No margin applied (default)
   */
  hasMargin?: boolean
}
