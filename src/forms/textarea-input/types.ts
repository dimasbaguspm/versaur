import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Available formatting options for rich text editing
 */
export type FormatType =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'orderedList'
  | 'unorderedList'
  | 'link'

/**
 * State of active formats in the current selection
 */
export interface FormatState {
  bold: boolean
  italic: boolean
  underline: boolean
  strikethrough: boolean
  h1: boolean
  h2: boolean
  h3: boolean
  orderedList: boolean
  unorderedList: boolean
  link: boolean
}

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
  /**
   * Whether to show the formatting toolbar
   * @default false
   */
  showToolbar?: boolean
  /**
   * Allowed formatting options (if not specified, all are allowed)
   */
  allowedFormats?: FormatType[]
}
