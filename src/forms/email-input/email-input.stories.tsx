/**
 * EmailInput stories for Versaur UI
 *
 * Demonstrates usage and variations of the EmailInput component
 */
import type { Meta, StoryObj } from '@storybook/react'
import { EmailInput } from './email-input'

const meta: Meta<typeof EmailInput> = {
  title: 'Forms/EmailInput',
  component: EmailInput,
}
export default meta

type Story = StoryObj<typeof EmailInput>

export const Basic: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    required: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    placeholder: 'your@email.com',
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address',
    required: true,
    placeholder: 'your@email.com',
  },
}
