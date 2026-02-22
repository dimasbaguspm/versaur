import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

/**
 * Base props shared by both single and multiple ChipInput
 */
interface ChipInputBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Name attribute for the input group
   */
  name?: string

  /**
   * Label for the chip group
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
   * Disabled state for all chips
   */
  disabled?: boolean

  /**
   * Gap between chips
   * @default "2"
   */
  gap?: "1" | "2" | "3" | "4"

  /**
   * Enable wrapping
   * @default true
   */
  wrap?: boolean
}

/**
 * Props for single-selection mode (multiple={false} or omitted)
 */
export interface ChipInputSingleProps extends ChipInputBaseProps {
  /**
   * Disable multiple selection (default)
   */
  multiple?: false

  /**
   * Selected chip value
   */
  value: string | undefined

  /**
   * Change handler for single value
   */
  onChange: (value: string) => void
}

/**
 * Props for multiple-selection mode (multiple={true})
 */
export interface ChipInputMultipleProps extends ChipInputBaseProps {
  /**
   * Enable multiple selection
   */
  multiple: true

  /**
   * Array of selected chip values
   */
  value: string[]

  /**
   * Change handler for array value
   */
  onChange: (value: string[]) => void
}

/**
 * Discriminated union type for ChipInput root props
 * Use multiple={false} (or omit it) for single selection, multiple={true} for multiple
 */
export type ChipInputRootProps = ChipInputSingleProps | ChipInputMultipleProps

/**
 * Props for ChipInput.Option subcomponent
 */
export interface ChipInputOptionProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  /**
   * Chip value
   */
  value: string

  /**
   * Label text (children)
   */
  children?: ReactNode

  /**
   * Disabled state for this specific chip
   */
  disabled?: boolean
}
