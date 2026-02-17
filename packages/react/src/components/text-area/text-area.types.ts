import type { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
   * Whether the textarea is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * Whether the textarea is resizable
   * @default true
   */
  resizable?: boolean;

  /**
   * Minimum number of visible rows
   * @default 3
   */
  minRows?: number;

  /**
   * Maximum number of rows before scrolling
   * @default 5
   */
  maxRows?: number;
}

declare module "@versaur/core" {
  export namespace TextArea {
    export { TextAreaProps as Props };
  }
}
