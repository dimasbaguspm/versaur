import type { TextInputProps } from "../text-input"

export interface EmailInputProps extends Omit<TextInputProps, "type" | "inputMode"> {
  /**
   * Override the default mail icon
   */
  leftIcon?: TextInputProps["leftIcon"]
}
