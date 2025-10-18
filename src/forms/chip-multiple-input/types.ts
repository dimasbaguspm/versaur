import type {
  FieldsetHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

/**
 * Props for the ChipMultipleInput component
 */
export interface ChipMultipleInputProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  /**
   * The size of the chip: 'sm', 'md' (default), or 'lg'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Label text to display above the chip group (rendered as legend)
   */
  label?: ReactNode
  /**
   * Whether the field is required (displays asterisk in legend)
   */
  required?: boolean
  /**
   * Helper text to display below the chip group
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * The name attribute for the checkbox group - required for checkbox functionality
   */
  name: string
  /**
   * Current selected values (controlled component)
   * Array of strings representing selected option values
   */
  value?: string[]
  /**
   * Callback when value changes
   */
  onChange?: (value: string[]) => void
  /**
   * Whether the chip group is read-only
   */
  readOnly?: boolean
  /**
   * Maximum width for individual chips (enables text truncation)
   */
  maxWidth?: string
}

/**
 * Props for the ChipMultipleInput.Option component
 */
export interface ChipMultipleInputOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * The value for this chip option
   */
  value: string
}
