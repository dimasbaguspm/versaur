import type { TextInputProps } from "../text-input"

export interface SearchInputProps extends Omit<TextInputProps, "type" | "inputMode"> {
  /**
   * Override the default search icon
   */
  leftIcon?: TextInputProps["leftIcon"]
}
