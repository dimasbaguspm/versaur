import type { LabelHTMLAttributes } from "react"

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Shows red asterisk after label text
   * @default false
   */
  required?: boolean

  /**
   * Muted appearance for disabled fields
   * @default false
   */
  disabled?: boolean
}

declare module "@versaur/core" {
  export namespace Label {
    export { LabelProps as Props }
  }
}
