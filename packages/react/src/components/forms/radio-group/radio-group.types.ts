import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

export interface RadioGroupRootProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Selected radio value
   */
  value: string | undefined

  /**
   * Change handler
   */
  onChange: (value: string) => void

  /**
   * Name attribute for all radio inputs
   */
  name?: string

  /**
   * Label for the radio group
   */
  label?: ReactNode

  /**
   * Helper text shown below the group
   */
  helper?: ReactNode

  /**
   * Error message shown below the group
   */
  error?: ReactNode

  /**
   * Required indicator
   */
  required?: boolean

  /**
   * Disabled state for all radios
   */
  disabled?: boolean

  /**
   * Layout direction
   * @default "column"
   */
  direction?: "row" | "column"
}

export interface RadioGroupOptionProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Radio value
   */
  value: string

  /**
   * Label text (children)
   */
  children?: ReactNode

  /**
   * Disabled state for this specific option
   */
  disabled?: boolean
}
