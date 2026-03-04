import type { TextInputProps } from "../text-input"

export interface PasswordInputProps extends Omit<TextInputProps, "type"> {
  /**
   * Override the default lock icon
   */
  leftIcon?: TextInputProps["leftIcon"]
}
