import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface ChipSingleInputRootProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Selected chip value
   */
  value: string | undefined;

  /**
   * Change handler
   */
  onChange: (value: string) => void;

  /**
   * Name attribute for the input group
   */
  name?: string;

  /**
   * Label for the chip group
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
   * Disabled state for all chips
   */
  disabled?: boolean;

  /**
   * Gap between chips
   * @default "2"
   */
  gap?: "1" | "2" | "3" | "4";

  /**
   * Enable wrapping
   * @default true
   */
  wrap?: boolean;
}

export interface ChipSingleInputOptionProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value"
> {
  /**
   * Chip value
   */
  value: string;

  /**
   * Label text (children)
   */
  children?: ReactNode;

  /**
   * Disabled state for this specific chip
   */
  disabled?: boolean;
}
