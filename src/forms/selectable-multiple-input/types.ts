import type { ReactNode, InputHTMLAttributes } from 'react'

/**
 * Checkbox placement position
 */
type CheckboxPlacement = 'top' | 'center' | 'bottom'

/**
 * Props for SelectableMultipleInput
 */
export interface SelectableMultipleInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  /**
   * The value of the checkbox input
   */
  value: string
  /**
   * The content to display next to the checkbox input
   * Can be a ReactNode or a function that receives the checked state
   */
  children: ReactNode | ((checked: boolean) => ReactNode)
  /**
   * Whether the input is checked (controlled)
   */
  checked: boolean
  /**
   * The placement of the checkbox relative to the content
   * @default 'center'
   */
  checkboxPlacement?: CheckboxPlacement
  /**
   * Whether to hide the checkbox
   * When true, only the content is displayed and the checked state is managed externally
   * @default false
   */
  hideCheckbox?: boolean
}
