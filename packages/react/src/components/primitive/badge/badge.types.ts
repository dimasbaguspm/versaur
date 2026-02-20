import type { Badge } from "@versaur/core/primitive"
import type { HTMLAttributes, ReactNode } from "react"

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Badge.Variant

  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: Badge.Size

  /**
   * Shape of the badge
   * @default 'rounded'
   */
  shape?: Badge.Shape

  /**
   * Icon to display on the left side of the badge
   */
  iconLeft?: ReactNode

  /**
   * Icon to display on the right side of the badge
   */
  iconRight?: ReactNode

  /**
   * Maximum width of the badge. Text will truncate with ellipsis if exceeded.
   */
  maxWidth?: string | number

  /**
   * Badge content (text, icons, etc.)
   */
  children?: React.ReactNode
}
