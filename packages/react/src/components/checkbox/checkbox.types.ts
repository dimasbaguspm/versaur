import type { InputHTMLAttributes, ReactNode } from "react";
import type { Checkbox as CheckboxCore } from "@versaur/core";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Visual variant of the checkbox
   * @default "outline"
   */
  variant?: CheckboxCore.Variant;

  /**
   * Size of the checkbox
   * @default "medium"
   */
  size?: CheckboxCore.Size;

  /**
   * Label text (children)
   */
  children?: ReactNode;

  /**
   * Invalid/error state
   */
  invalid?: boolean;
}
