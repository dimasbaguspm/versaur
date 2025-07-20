import type { ReactNode } from 'react'
import type { ModalRootProps } from '../modal'

/**
 * Props for the TimePickerInput component
 */
export interface TimePickerInputProps {
  /**
   * The selected time value in 12-hour format (e.g., '02:30 PM')
   */
  value: string
  /**
   * Called when the time value changes
   */
  onChange: (value: string) => void
  /**
   * Optional label for the input
   */
  label?: ReactNode
  /**
   * Optional helper text below the input
   */
  helperText?: ReactNode
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Optional error message
   */
  error?: ReactNode

  /**
   * Whether to decide the modal placement'
   */
  placement?: ModalRootProps['placement']
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
