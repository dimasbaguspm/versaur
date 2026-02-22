import type { InputHTMLAttributes, ReactNode } from "react"

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Label text (children)
   */
  children?: ReactNode
}
