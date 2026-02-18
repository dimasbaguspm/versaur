import type { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
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
  leftIcon?: ReactNode;

  /**
   * Icon or element displayed on the right side of input
   */
  rightIcon?: ReactNode;

  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;
}

declare module "@versaur/core" {
  export namespace TextInput {
    export { TextInputProps as Props };
  }
}
