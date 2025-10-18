import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Props for the TextAreaInput component
 */
export interface TextAreaInputProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onChange' | 'children' | 'defaultValue'
  > {
  /**
   * Label text to display above the textarea
   */
  label?: ReactNode
  /**
   * Helper text to display below the textarea
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * The current value of the textarea (for controlled components)
   */
  value?: string
  /**
   * The default value for uncontrolled components
   */
  defaultValue?: string
  /**
   * Callback fired when the content changes
   */
  onChange?: (value: string) => void
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean
  /**
   * Whether the textarea is read-only
   */
  readOnly?: boolean
  /**
   * Placeholder text to display when empty
   */
  placeholder?: string
  /**
   * Name attribute for form submission
   */
  name?: string
  /**
   * Number of rows (height in rem units)
   * @default 3
   */
  row?: number
  /**
   * Whether the textarea is required
   */
  required?: boolean
}
