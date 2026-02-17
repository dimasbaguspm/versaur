import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /**
   * Label text (children)
   */
  children?: ReactNode;

  /**
   * Invalid/error state
   */
  invalid?: boolean;

  /**
   * Required field indicator
   */
  required?: boolean;
}
