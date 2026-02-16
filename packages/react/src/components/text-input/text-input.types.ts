import type { InputHTMLAttributes, ReactNode } from "react";
import type { TextInput } from "@versaur/core";

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Visual variant
   * @default "outline"
   */
  variant?: TextInput.Variant;

  /**
   * Size variant
   * @default "medium"
   */
  size?: TextInput.Size | "medium";

  /**
   * Label text displayed above input
   */
  label?: string;

  /**
   * Helper text displayed below input
   */
  helper?: string;

  /**
   * Error message displayed below input (replaces helper)
   */
  error?: string;

  /**
   * Icon or element displayed on the left side of input
   */
  leading?: ReactNode;

  /**
   * Icon or element displayed on the right side of input
   */
  trailing?: ReactNode;
}

declare module "@versaur/core" {
  export namespace TextInput {
    export { TextInputProps as Props };
  }
}
