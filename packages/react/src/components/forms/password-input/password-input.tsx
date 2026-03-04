import { LockIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { Icon } from "../../primitive/icon/icon"
import { TextInput } from "../text-input"
import type { PasswordInputProps } from "./password-input.types"

/**
 * PasswordInput component
 * A pre-configured TextInput with LockIcon and password type
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ leftIcon, ...rest }, ref) => (
  <TextInput ref={ref} type="password" leftIcon={leftIcon ?? <Icon as={LockIcon} />} {...rest} />
))

PasswordInput.displayName = "PasswordInput"
