import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PinField } from './pin-field'

/**
 * PinField component for entering 6-digit PIN codes with automatic focus management.
 * Ensures only numeric input and provides proper accessibility support.
 */
const meta: Meta<typeof PinField> = {
  title: 'Forms/PinField',
  component: PinField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A PIN field component that accepts exactly 6 digits with automatic focus management, validation, and accessibility features.',
      },
    },
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
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    secure: {
      control: 'boolean',
    },
    autoSubmit: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default PIN field with primary variant
 */
export const Default: Story = {
  args: {
    label: 'Enter PIN',
    helperText: 'Enter your 6-digit PIN code',
  },
}

/**
 * PIN field with all variants
 */
export const Variants: Story = {
  render: () => (
    <div className='space-y-6'>
      <PinField variant='primary' label='Primary' />
      <PinField variant='secondary' label='Secondary' />
      <PinField variant='tertiary' label='Tertiary' />
      <PinField variant='ghost' label='Ghost' />
      <PinField variant='neutral' label='Neutral' />
    </div>
  ),
}

/**
 * Outline variants
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <PinField variant='primary-outline' label='Primary Outline' />
      <PinField variant='secondary-outline' label='Secondary Outline' />
      <PinField variant='tertiary-outline' label='Tertiary Outline' />
      <PinField variant='ghost-outline' label='Ghost Outline' />
      <PinField variant='neutral-outline' label='Neutral Outline' />
    </div>
  ),
}

/**
 * Semantic variants for different states
 */
export const SemanticVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <PinField variant='success' label='Success State' />
      <PinField variant='info' label='Info State' />
      <PinField variant='warning' label='Warning State' />
      <PinField variant='danger' label='Error State' />
    </div>
  ),
}

/**
 * PIN field with error state
 */
export const WithError: Story = {
  args: {
    label: 'Enter PIN',
    error: 'Invalid PIN. Please try again.',
    defaultValue: '123456',
  },
}

/**
 * PIN field with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Enter PIN',
    helperText: 'Your PIN should be 6 digits long',
  },
}

/**
 * Disabled PIN field
 */
export const Disabled: Story = {
  args: {
    label: 'Enter PIN',
    disabled: true,
    defaultValue: '123456',
    helperText: 'This field is disabled',
  },
}

/**
 * Required PIN field
 */
export const Required: Story = {
  args: {
    label: 'Enter PIN',
    required: true,
    helperText: 'This field is required',
  },
}

/**
 * Secure PIN field (shows dots instead of numbers)
 */
export const Secure: Story = {
  args: {
    label: 'Enter Secure PIN',
    secure: true,
    helperText: 'PIN will be hidden for security',
  },
}

/**
 * Auto-submit PIN field
 */
export const AutoSubmit: Story = {
  args: {
    label: 'Enter PIN',
    autoSubmit: true,
    helperText: 'Form will auto-submit when complete',
  },
}

/**
 * Controlled PIN field with state management
 */
export const Controlled: Story = {
  render: function ControlledPinField() {
    const [value, setValue] = React.useState('')
    const [completed, setCompleted] = React.useState(false)

    return (
      <div className='space-y-4'>
        <PinField
          label='Controlled PIN'
          value={value}
          onChange={setValue}
          onComplete={() => setCompleted(true)}
          helperText={`Current value: ${value} (${value.length}/6)`}
        />
        {completed && (
          <div className='text-success text-sm'>✓ PIN completed: {value}</div>
        )}
      </div>
    )
  },
}

/**
 * PIN field in a form context
 */
export const InForm: Story = {
  render: () => (
    <form
      onSubmit={e => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        alert(`PIN submitted: ${formData.get('pin')}`)
      }}
      className='space-y-4'
    >
      <PinField
        label='Enter PIN'
        name='pin'
        required
        helperText='Enter your 6-digit PIN to continue'
      />
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-bold'
      >
        Submit
      </button>
    </form>
  ),
}

/**
 * Demonstration of focus management and interactions
 */
export const FocusManagement: Story = {
  args: {
    label: 'Focus Management Demo',
    helperText: 'Try typing, backspace, arrow keys, and paste operations',
  },
}
