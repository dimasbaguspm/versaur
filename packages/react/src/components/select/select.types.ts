import type { OptgroupHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
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

export interface SelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  /**
   * The option label/value text
   */
  children?: string;
}

export interface SelectOptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {
  /**
   * The group label
   */
  label: string;
}
