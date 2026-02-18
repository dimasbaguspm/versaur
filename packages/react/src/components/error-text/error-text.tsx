import { forwardRef } from "react";
import { errorTextStyles } from "@versaur/core";
import type { ErrorTextProps } from "./error-text.types";

/**
 * ErrorText component for form field error messages
 * Internal primitive - not exported from main package
 * Uses role="alert" for screen reader announcements
 */
export const ErrorText = forwardRef<HTMLParagraphElement, ErrorTextProps>(
  ({ children, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={errorTextStyles.error}
        role="alert"
        aria-live="polite"
        {...rest}
      >
        {children}
      </p>
    );
  },
);

ErrorText.displayName = "ErrorText";
