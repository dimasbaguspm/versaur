import type { ReactNode, InputHTMLAttributes } from 'react'

/**
 * Props for SelectableMultipleInput
 */
export interface SelectableMultipleInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The value of the checkbox input
   */
  value: string
  /**
   * The label to display next to the checkbox input (can be any ReactNode)
   */
  label: ReactNode
  /**
   * Whether the input is checked (controlled)
   */
  checked: boolean
}
