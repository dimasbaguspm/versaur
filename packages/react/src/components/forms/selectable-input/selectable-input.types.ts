import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"
import type { SelectableInput as SelectableInputCore } from "@versaur/core/forms"

/**
 * Base props shared by both single and multiple SelectableInput
 */
interface SelectableInputBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Name attribute for the input group
   */
  name?: string

  /**
   * Disabled state for all options
   */
  disabled?: boolean

  /**
   * Checkbox placement within each option
   * @default "top"
   */
  placement?: SelectableInputCore.Placement
}

/**
 * Props for single-selection mode (multiple={false} or omitted)
 */
export interface SelectableInputSingleProps extends SelectableInputBaseProps {
  /**
   * Disable multiple selection (default)
   */
  multiple?: false

  /**
   * Selected option value
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
export interface SelectableInputMultipleProps extends SelectableInputBaseProps {
  /**
   * Enable multiple selection
   */
  multiple: true

  /**
   * Array of selected option values
   */
  value: string[]

  /**
   * Change handler for array value
   */
  onChange: (value: string[]) => void
}

/**
 * Discriminated union type for SelectableInput root props
 * Use multiple={false} (or omit it) for single selection, multiple={true} for multiple
 */
export type SelectableInputRootProps = SelectableInputSingleProps | SelectableInputMultipleProps

/**
 * Props for SelectableInput.Option subcomponent
 */
export interface SelectableInputOptionProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  /**
   * Option value
   */
  value: string

  /**
   * Option content (children) - accepts any ReactNode (text, Card, etc.)
   */
  children?: ReactNode

  /**
   * Disabled state for this specific option
   */
  disabled?: boolean
}
