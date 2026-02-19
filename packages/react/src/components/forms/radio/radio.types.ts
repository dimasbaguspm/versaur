import type { Radio as RadioCore } from "@versaur/core"
import type { InputHTMLAttributes, ReactNode } from "react"

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Visual variant of the radio
   * @default "outline"
   */
  variant?: RadioCore.Variant

  /**
   * Size of the radio
   * @default "medium"
   */
  size?: RadioCore.Size

  /**
   * Label text (children)
   */
  children?: ReactNode

  /**
   * Invalid/error state
   */
  invalid?: boolean
}
