import type {
  FieldsetHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

/**
 * Props for the ChipSingleInput component
 */
export interface ChipSingleInputProps
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
   * The name attribute for the radio group - required for radio functionality
   */
  name: string
  /**
   * Current selected value (controlled component)
   * String representing selected option value
   */
  value?: string
  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void
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
 * Props for the ChipSingleInput.Option component
 */
export interface ChipSingleInputOptionProps
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
