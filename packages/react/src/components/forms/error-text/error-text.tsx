import { errorTextStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import type { ErrorTextProps } from "./error-text.types"

/**
 * ErrorText component for form field error messages
 * Internal primitive - not exported from main package
 * Uses role="alert" for screen reader announcements
 */
export const ErrorText = forwardRef<HTMLParagraphElement, ErrorTextProps>(({ children, className, ...rest }, ref) => (
  <p ref={ref} className={cx(errorTextStyles.error, className)} role="alert" aria-live="polite" {...rest}>
    {children}
  </p>
))

ErrorText.displayName = "ErrorText"
