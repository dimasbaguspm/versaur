import type { TextareaHTMLAttributes } from "react";
import type { TextArea } from "@versaur/core";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Visual variant
   * @default "outline"
   */
  variant?: TextArea.Variant;

  /**
   * Size variant
   * @default "medium"
   */
  size?: TextArea.Size | "medium";

  /**
   * Label text displayed above textarea
   */
  label?: string;

  /**
   * Helper text displayed below textarea
   */
  helper?: string;

  /**
   * Error message displayed below textarea (replaces helper)
   */
  error?: string;

  /**
   * Resize behavior
   * @default "vertical"
   */
  resize?: TextArea.Resize;
}

declare module "@versaur/core" {
  export namespace TextArea {
    export { TextAreaProps as Props };
  }
}
