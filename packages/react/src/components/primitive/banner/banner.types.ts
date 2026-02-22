import type { Banner } from "@versaur/core/primitive"
import type { HTMLAttributes, ReactNode } from "react"

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * @default 'info'
   */
  variant?: Banner.Variant

  /**
   * Icon to display on the left side
   */
  icon?: ReactNode

  /**
   * Callback when dismiss button is clicked
   */
  onDismiss?: () => void

  /**
   * Banner content (text, icons, etc.)
   */
  children?: React.ReactNode
}
