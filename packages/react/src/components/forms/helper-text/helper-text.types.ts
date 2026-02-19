import type { HTMLAttributes } from "react"

export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Optional ID for linking with aria-describedby
   */
  id?: string
}
