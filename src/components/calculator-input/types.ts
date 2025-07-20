import type { CalculatorProps } from '@/components/calculator/types'
import type { ModalRootProps } from '@/components/modal/types'

/**
 * Props for CalculatorInput component
 */
export interface CalculatorInputProps
  extends Omit<CalculatorProps, 'value' | 'onChange'> {
  /**
   * The value of the input (number or empty string)
   */
  value: number | ''
  /**
   * Called when the value changes
   */
  onChange: (value: number | '') => void
  /**
   * Label text to display above the input
   */
  label?: React.ReactNode
  /**
   * Helper text to display below the input
   */
  helperText?: React.ReactNode
  /**
   * Error message for invalid state
   */
  error?: React.ReactNode
  /**
   * Placeholder text for the input
   */
  placeholder?: string
  /**
   * If true, disables the input
   */
  disabled?: boolean
  /**
   * Modal props for customizing the modal behavior
   */
  modalProps?: Partial<ModalRootProps>
  /**
   * Optional: ARIA label for dialog
   */
  'aria-label'?: string
  /**
   * Optional: ARIA labelledby for dialog
   */
  'aria-labelledby'?: string
  /**
   * Optional: ARIA describedby for dialog
   */
  'aria-describedby'?: string
}
