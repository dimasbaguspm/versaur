import { forwardRef } from "react";
import { helperTextStyles } from "@versaur/core";
import type { HelperTextProps } from "./helper-text.types";

/**
 * HelperText component for form field helper/hint text
 * Internal primitive - not exported from main package
 */
export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ children, ...rest }, ref) => {
    return (
      <p ref={ref} className={helperTextStyles.helper} {...rest}>
        {children}
      </p>
    );
  },
);

HelperText.displayName = "HelperText";
