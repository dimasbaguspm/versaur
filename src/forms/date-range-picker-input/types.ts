import type { ReactNode } from 'react'

/**
 * ISO 8601 date string (YYYY-MM-DD)
 */
export type ISODateString = string

/**
 * Tuple for date range value: [start, end] (ISO 8601 or null)
 */
export type DateRangeValue = [ISODateString | null, ISODateString | null] | null

/**
 * Props for DateRangePickerInput
 */
export interface DateRangePickerInputProps {
  /**
   * The selected date range value (tuple of ISO 8601 strings or nulls)
   */
  value: DateRangeValue
  /**
   * Callback when the value changes
   */
  onChange: (value: DateRangeValue) => void
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
