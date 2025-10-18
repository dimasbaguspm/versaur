import type {
  FieldsetHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

/**
 * Props for the CheckboxInput component
 */
export interface CheckboxInputProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'children'> {
  /**
   * Label text to display above the checkbox group (rendered as legend)
   */
  label?: ReactNode
  /**
   * Helper text to display below the checkbox group
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Direction of checkbox layout
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Whether the checkbox group is required
   */
  required?: boolean
  /**
   * Children (CheckboxInput.Option components)
   */
  children: ReactNode
}

/**
 * Props for the CheckboxInput.Option component
 */
export interface CheckboxOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * Description text below the option label
   */
  description?: ReactNode
}
