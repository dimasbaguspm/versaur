import type { Meta, StoryObj } from '@storybook/react'
import { TextAreaInput } from './textarea-input'

/**
 * TextAreaInput provides a robust multi-line text input using contentEditable div.
 * Uses primary variant by default with support for error states, disabled, and readOnly modes.
 */
const meta: Meta<typeof TextAreaInput> = {
  title: 'Forms/TextAreaInput',
  component: TextAreaInput,
  parameters: {
    docs: {
      description: {
        component: `
A versatile textarea component built with contentEditable div for better control:
- Uses primary variant styling by default
- Error states with validation messages
- Disabled and readOnly support
- Helper text for guidance
- Full accessibility with proper ARIA attributes
- Works cross-browser with consistent behavior

Perfect for forms, comments, descriptions, and any multi-line text input needs.
        `,
      },
    },
  },
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    row: {
      control: 'number',
      description: 'Height in rem units',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default textarea with primary styling
 */
export const Default: Story = {}

/**
 * With default value for uncontrolled usage
 */
export const WithDefaultValue: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Add your comment...',
    defaultValue:
      'This is a default value that can be edited.\n\nIt supports multi-line content naturally.',
  },
}

/**
 * Error state with validation message
 */
export const WithError: Story = {
  args: {
    label: 'Project Description',
    placeholder: 'Describe your project...',
    error: 'Description must be at least 10 characters long.',
    defaultValue: 'Too short',
  },
}

/**
 * With helper text for additional guidance
 */
export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Share your thoughts...',
    helperText:
      'Your feedback helps us improve our services. Please be as detailed as possible.',
  },
}

/**
 * Required field with asterisk indicator
 */
export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    required: true,
    helperText: 'This field is required and must be filled out.',
  },
}

/**
 * Disabled state prevents all interactions
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    defaultValue:
      'This content cannot be edited because the field is disabled.',
  },
}

/**
 * ReadOnly state allows viewing but not editing
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Content',
    readOnly: true,
    defaultValue:
      'This content is read-only. You can select and copy the text, but cannot modify it.',
  },
}

/**
 * Custom height using row prop (in rem units)
 */
export const CustomHeight: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Small (1 row)'
        placeholder='Compact textarea...'
        row={1}
      />
      <TextAreaInput
        label='Default (3 rows)'
        placeholder='Default size textarea...'
      />
      <TextAreaInput
        label='Large (10 rows)'
        placeholder='Expanded textarea...'
        row={10}
      />
    </div>
  ),
}
