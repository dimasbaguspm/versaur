import type { ReactNode } from 'react'

/**
 * Props for the DateSinglePickerInput component
 */
/**
 * Props for the DateSinglePickerInput component
 */
export interface DateSinglePickerInputProps {
  /**
   * Picker display type: 'docked' (default) or 'modal'.
   * 'docked' shows calendar below input, 'modal' opens a modal at top.
   */
  type?: 'docked' | 'modal'
  /**
   * The selected date value
   */
  value?: Date
  /**
   * Callback when a date is selected
   */
  onChange?: (date: Date) => void
  /**
   * Label text to display above the input
   */
  label?: ReactNode
  /**
   * Optional content to display inside the input (left)
   */
  leftContent?: ReactNode
  /**
   * Optional content to display inside the input (right)
   */
  rightContent?: ReactNode
  /**
   * Helper text to display below the input
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Visual style variant supporting Versaur color system
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'tertiary'
    | 'tertiary-outline'
    | 'ghost'
    | 'ghost-outline'
    | 'neutral'
    | 'neutral-outline'
    | 'success'
    | 'success-outline'
    | 'info'
    | 'info-outline'
    | 'warning'
    | 'warning-outline'
    | 'danger'
    | 'danger-outline'
  /**
   * Disabled state
   */
  disabled?: boolean
  /**
   * Placeholder text when no date is selected
   */
  placeholder?: ReactNode
  /**
   * Optional id for the input element
   */
  id?: string

  /**
   * Optional custom date formatter. If not provided, uses default format.
   * @param date Date to format
   * @returns Formatted date string
   */
  formatDate?: (date?: Date) => string
}

/**
 * Atoms for DateSinglePickerInput modal type
 */
export interface DateSinglePickerModalContentProps {
  children: ReactNode
}

export interface DateSinglePickerModalFooterProps {
  onCancel: () => void
  onConfirm: () => void
  confirmDisabled?: boolean
}
