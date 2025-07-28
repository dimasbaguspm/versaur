import { forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import type { EmailInputProps } from './types'
import { Icon } from '@/primitive/icon'
import { MailIcon } from 'lucide-react'

/**
 * EmailInput component for Versaur UI
 *
 * A wrapper around TextInput that enforces type="email" and follows HTML input standards
 * Supports all TextInput props except type, which is always "email"
 */
export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (props, ref) => {
    return (
      <TextInput
        {...props}
        ref={ref}
        type='email'
        autoComplete='email'
        inputMode='email'
        leftContent={<Icon as={MailIcon} color='inherit' size='sm' />}
      />
    )
  }
)
