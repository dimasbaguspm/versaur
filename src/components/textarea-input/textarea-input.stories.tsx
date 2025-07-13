import type { Meta, StoryObj } from '@storybook/react'
import { TextAreaInput } from './textarea-input'

/**
 * TextAreaInput provides a styled textarea field for multi-line text input.
 * It supports field-sizing for auto-resizing, configurable minimum height,
 * and all the variant styles from the Versaur design system.
 */
const meta: Meta<typeof TextAreaInput> = {
  title: 'Form/TextAreaInput',
  component: TextAreaInput,
  parameters: {
    docs: {
      description: {
        component: `
A versatile textarea component that supports:
- Auto-resizing with field-sizing CSS property
- Configurable minimum height
- All Versaur color variants (primary, secondary, tertiary, ghost, neutral)
- Semantic variants (success, info, warning, danger)
- Outline variants for each color
- Error states and helper text
- Full accessibility support

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
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'tertiary',
        'tertiary-outline',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'success',
        'success-outline',
        'info',
        'info-outline',
        'warning',
        'warning-outline',
        'danger',
        'danger-outline',
      ],
    },
    fieldSizing: {
      control: 'select',
      options: ['fixed', 'content'],
    },
    minRows: {
      control: 'number',
    },
    maxRows: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default textarea with primary variant and fixed sizing
 */
export const Default: Story = {}

/**
 * Auto-resizing textarea that grows with content using field-sizing: content
 */
export const AutoResize: Story = {
  args: {
    label: 'Auto-resizing Comment',
    fieldSizing: 'content',
    placeholder: 'Type your message and watch it auto-resize...',
    defaultValue:
      'This textarea will automatically resize as you type more content.\n\nTry adding more lines to see it grow!',
  },
}

/**
 * Custom row configuration for larger text areas
 */
export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    minRows: 5,
    maxRows: 8,
    placeholder: 'This textarea starts with 5 rows and can expand to 8 rows',
  },
}

/**
 * All color variants showcasing the Versaur design system
 */
export const Variants: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Primary (Coral)'
        variant='primary'
        placeholder='Primary variant...'
      />
      <TextAreaInput
        label='Secondary (Sage)'
        variant='secondary'
        placeholder='Secondary variant...'
      />
      <TextAreaInput
        label='Tertiary (Mist)'
        variant='tertiary'
        placeholder='Tertiary variant...'
      />
      <TextAreaInput
        label='Ghost (Slate)'
        variant='ghost'
        placeholder='Ghost variant...'
      />
      <TextAreaInput
        label='Neutral'
        variant='neutral'
        placeholder='Neutral variant...'
      />
    </div>
  ),
}

/**
 * Outline variants for subtle styling
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Primary Outline'
        variant='primary-outline'
        placeholder='Primary outline variant...'
      />
      <TextAreaInput
        label='Secondary Outline'
        variant='secondary-outline'
        placeholder='Secondary outline variant...'
      />
      <TextAreaInput
        label='Ghost Outline'
        variant='ghost-outline'
        placeholder='Ghost outline variant...'
      />
    </div>
  ),
}

/**
 * Semantic variants for different states and contexts
 */
export const SemanticVariants: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Success'
        variant='success'
        placeholder='Success state...'
        helperText='Great! Your input looks good.'
      />
      <TextAreaInput
        label='Info'
        variant='info'
        placeholder='Info state...'
        helperText='Additional information about this field.'
      />
      <TextAreaInput
        label='Warning'
        variant='warning'
        placeholder='Warning state...'
        helperText='Please review your input carefully.'
      />
      <TextAreaInput
        label='Danger'
        variant='danger'
        placeholder='Error state...'
        error='This field is required and cannot be empty.'
      />
    </div>
  ),
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
 * Disabled state for read-only scenarios
 */
export const Disabled: Story = {
  args: {
    label: 'Read-only Content',
    disabled: true,
    defaultValue: 'This content cannot be edited in the current context.',
  },
}

/**
 * Form example showing practical usage in a contact form
 */
export const ContactForm: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Message'
        placeholder='Tell us about your project...'
        minRows={4}
        maxRows={8}
        helperText='Please provide as much detail as possible about your requirements.'
      />
      <TextAreaInput
        label='Additional Notes'
        variant='secondary'
        fieldSizing='content'
        placeholder='Any additional information...'
        helperText='This field will auto-resize as you type.'
      />
    </div>
  ),
}
