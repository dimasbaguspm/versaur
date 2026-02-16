import type { SelectHTMLAttributes } from "react";
import type { Select } from "@versaur/core";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Visual variant
   * @default "outline"
   */
  variant?: Select.Variant;

  /**
   * Size variant
   * @default "medium"
   */
  size?: Select.Size | "medium";

  /**
   * Label text displayed above select
   */
  label?: string;

  /**
   * Helper text displayed below select
   */
  helper?: string;

  /**
   * Error message displayed below select (replaces helper)
   */
  error?: string;

  /**
   * Placeholder text (creates a disabled first option)
   */
  placeholder?: string;
}

declare module "@versaur/core" {
  export namespace Select {
    export { SelectProps as Props };
  }
}
