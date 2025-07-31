import type { ReactNode, InputHTMLAttributes } from 'react'

/**
 * Props for SelectableSingleInput
 */
export interface SelectableSingleInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The value of the radio input
   */
  value: string
  /**
   * The label to display next to the radio input (can be any ReactNode)
   */
  label: ReactNode
  /**
   * Whether the input is checked (controlled)
   */
  checked: boolean
}
