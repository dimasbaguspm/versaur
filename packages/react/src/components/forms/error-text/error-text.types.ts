import type { HTMLAttributes } from "react"

export interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Optional ID for linking with aria-describedby
   */
  id?: string
}
