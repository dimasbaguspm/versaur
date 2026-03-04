import { MailIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { Icon } from "../../primitive/icon/icon"
import { TextInput } from "../text-input"
import type { EmailInputProps } from "./email-input.types"

/**
 * EmailInput component
 * A pre-configured TextInput with MailIcon and email type/inputMode
 */
export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(({ leftIcon, ...rest }, ref) => (
  <TextInput ref={ref} type="email" inputMode="email" leftIcon={leftIcon ?? <Icon as={MailIcon} />} {...rest} />
))

EmailInput.displayName = "EmailInput"
