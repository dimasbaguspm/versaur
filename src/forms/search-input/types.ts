import type { TextInputProps } from '../text-input/types'

/**
 * Props for the SearchInput component
 * Extends TextInputProps and enforces type='search' with proper HTML search attributes
 */
export interface SearchInputProps extends Omit<TextInputProps, 'type'> {
  /**
   * The value of the input
   */
  value?: string
  /**
   * Callback when the value changes
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  /**
   * Placeholder text for the search input
   */
  placeholder?: string
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Whether to show the clear button (native search input feature)
   */
  allowClear?: boolean
  /**
   * Autocomplete behavior for the search input
   */
  autoComplete?: string
  /**
   * Spellcheck for the search input
   */
  spellCheck?: boolean
}
