import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PinField } from './pin-field'

/**
 * PinField component for entering PIN codes with automatic focus management.
 * Fully controlled component that ensures only numeric input with proper accessibility support.
 */
const meta: Meta<typeof PinField> = {
  title: 'Forms/PinField',
  component: PinField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A fully controlled PIN field component with configurable digit length, automatic focus management, and accessibility features.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    secure: {
      control: 'boolean',
    },
    digits: {
      control: { type: 'number', min: 4, max: 8 },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default 6-digit PIN field
 */
export const Default: Story = {
  render: function DefaultPinField() {
    const [value, setValue] = React.useState('')

    return (
      <PinField
        label='Enter PIN'
        value={value}
        onChange={setValue}
        helperText='Enter your 6-digit PIN code'
      />
    )
  },
}

/**
 * PIN field with error state
 */
export const WithError: Story = {
  render: function ErrorPinField() {
    const [value, setValue] = React.useState('123456')

    return (
      <PinField
        label='Enter PIN'
        value={value}
        onChange={setValue}
        error='Invalid PIN. Please try again.'
      />
    )
  },
}

/**
 * Disabled PIN field with a value
 */
export const Disabled: Story = {
  render: function DisabledPinField() {
    const [value, setValue] = React.useState('123456')

    return (
      <PinField
        label='Enter PIN'
        value={value}
        onChange={setValue}
        disabled
        helperText='This field is disabled'
      />
    )
  },
}

/**
 * Required PIN field for forms
 */
export const Required: Story = {
  render: function RequiredPinField() {
    const [value, setValue] = React.useState('')

    return (
      <PinField
        label='Enter PIN'
        value={value}
        onChange={setValue}
        required
        helperText='This field is required'
      />
    )
  },
}

/**
 * Secure PIN field that shows dots instead of numbers
 */
export const Secure: Story = {
  render: function SecurePinField() {
    const [value, setValue] = React.useState('')

    return (
      <PinField
        label='Enter Secure PIN'
        value={value}
        onChange={setValue}
        secure
        helperText='PIN will be hidden for security'
      />
    )
  },
}

/**
 * PIN field in a form with submission and completion callback
 */
export const InForm: Story = {
  render: function FormPinField() {
    const [value, setValue] = React.useState('')
    const [completed, setCompleted] = React.useState(false)

    return (
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
          value={value}
          onChange={newValue => {
            setValue(newValue)
            setCompleted(false)
          }}
          onComplete={() => setCompleted(true)}
          name='pin'
          required
          helperText='Enter your 6-digit PIN to continue'
        />
        {completed && (
          <div className='text-success text-sm'>✓ PIN completed: {value}</div>
        )}
        <button
          type='submit'
          className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-bold'
        >
          Submit
        </button>
      </form>
    )
  },
}

/**
 * Custom 4-digit PIN field
 */
export const CustomDigits: Story = {
  render: function CustomDigitsPinField() {
    const [value, setValue] = React.useState('')

    return (
      <PinField
        label='Enter 4-digit PIN'
        value={value}
        onChange={setValue}
        digits={4}
        helperText='Enter your 4-digit PIN code'
      />
    )
  },
}
