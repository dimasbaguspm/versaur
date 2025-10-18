/**
 * TextInput stories for Storybook
 *
 * Demonstrates core functionality: basic input, content placement, helper text, error states, and disabled states
 * A simple text input component that aligns with native HTML behavior
 */
import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './text-input'
import { UserIcon, MailIcon, SearchIcon, EyeIcon } from 'lucide-react'

const meta: Meta<typeof TextInput> = {
  title: 'Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TextInput>

/**
 * Default text input with label and placeholder
 */
export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
}

/**
 * Text input with helper text below for additional guidance
 */
export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email with anyone else',
    type: 'email',
  },
}

/**
 * Text input with an icon on the left side
 */
export const WithLeftIcon: Story = {
  args: {
    label: 'Username',
    leftContent: <UserIcon size={16} />,
    placeholder: 'Enter username',
    helperText: 'Your unique username for login',
  },
}

/**
 * Password input with an icon on the right side
 */
export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    rightContent: <EyeIcon size={16} />,
    placeholder: 'Enter password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
}

/**
 * Search input with icons on both sides
 */
export const WithBothIcons: Story = {
  args: {
    label: 'Search',
    leftContent: <SearchIcon size={16} />,
    rightContent: <span className='text-xs'>⌘K</span>,
    placeholder: 'Search for anything...',
  },
}

/**
 * Text input in error state with error message
 */
export const WithError: Story = {
  args: {
    label: 'Email Address',
    error: 'Please enter a valid email address',
    placeholder: 'you@example.com',
    leftContent: <MailIcon size={16} />,
    defaultValue: 'invalid-email',
  },
}

/**
 * Required field with asterisk indicator
 */
export const Required: Story = {
  args: {
    label: 'Company Name',
    placeholder: 'Acme Inc.',
    required: true,
    helperText: 'This field is required',
  },
}

/**
 * Disabled text input that cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    label: 'Account ID',
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'ACC-12345',
    helperText: 'This field cannot be edited',
  },
}

/**
 * Read-only text input that displays data but cannot be modified
 */
export const ReadOnly: Story = {
  args: {
    label: 'Transaction ID',
    readOnly: true,
    defaultValue: 'TXN-98765-ABCD',
    helperText: 'This field is read-only and displays reference information',
  },
}
