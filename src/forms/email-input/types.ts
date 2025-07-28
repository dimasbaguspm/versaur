import type { TextInputProps } from '../text-input/types'

/**
 * Props for the EmailInput component
 * Extends TextInputProps and enforces type="email" for HTML input standards
 */
export type EmailInputProps = Omit<TextInputProps, 'type'>
