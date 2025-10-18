import type {
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
} from 'react'

/**
 * Props for the SelectInput component
 */
export interface SelectInputProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Label text to display above the select
   */
  label?: ReactNode
  /**
   * Helper text to display below the select
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Placeholder text for when no option is selected
   */
  placeholder?: string
  /**
   * Whether the select is read-only
   */
  readOnly?: boolean
}

/**
 * Props for the SelectOption component
 */
export interface SelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  /**
   * Option value (required)
   */
  value: string
  /**
   * Option label/content (required)
   */
  children: ReactNode
}

/**
 * Props for the SelectOptionGroup component
 */
export interface SelectOptionGroupProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  /**
   * Group label (required)
   */
  label: string
  /**
   * Options within the group (required)
   */
  children: ReactNode
}
