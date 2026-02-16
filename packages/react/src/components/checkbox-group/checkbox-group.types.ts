import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type { CheckboxGroup as CheckboxGroupCore } from "@versaur/core";

export interface CheckboxGroupRootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Array of selected checkbox values
   */
  value: string[];

  /**
   * Change handler
   */
  onChange: (value: string[]) => void;

  /**
   * Name attribute for all checkbox inputs
   */
  name?: string;

  /**
   * Visual variant
   * @default "outline"
   */
  variant?: CheckboxGroupCore.Variant;

  /**
   * Size variant
   * @default "medium"
   */
  size?: CheckboxGroupCore.Size;

  /**
   * Label for the checkbox group
   */
  label?: ReactNode;

  /**
   * Helper text shown below the group
   */
  helper?: ReactNode;

  /**
   * Error message shown below the group
   */
  error?: ReactNode;

  /**
   * Required indicator
   */
  required?: boolean;

  /**
   * Disabled state for all checkboxes
   */
  disabled?: boolean;

  /**
   * Layout direction
   * @default "column"
   */
  direction?: "row" | "column";
}

export interface CheckboxGroupOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Checkbox value
   */
  value: string;

  /**
   * Label text (children)
   */
  children?: ReactNode;

  /**
   * Disabled state for this specific option
   */
  disabled?: boolean;
}
