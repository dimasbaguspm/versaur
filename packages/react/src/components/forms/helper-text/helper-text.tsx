import { helperTextStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import type { HelperTextProps } from "./helper-text.types"

/**
 * HelperText component for form field helper/hint text
 * Internal primitive - not exported from main package
 */
export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(({ children, ...rest }, ref) => (
  <p ref={ref} className={helperTextStyles.helper} {...rest}>
    {children}
  </p>
))

HelperText.displayName = "HelperText"
