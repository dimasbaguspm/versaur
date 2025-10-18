/**
 * Stories for DateSinglePickerInput
 * Group: Forms
 * Shows usage and variations for date picking with native browser support
 */
import { useState } from 'react'
import { DateSinglePickerInput } from './date-single-picker-input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DateSinglePickerInput> = {
  title: 'Forms/DateSinglePickerInput',
  component: DateSinglePickerInput,
  parameters: {
    docs: {
      description: {
        component:
          'A date picker component that uses native <input type="date"> for accessibility and browser support. Displays a formatted text input that triggers the native date picker.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof DateSinglePickerInput>

export const Default: Story = {
  render: function Default() {
    const [date, setDate] = useState('2025-07-29')
    return (
      <DateSinglePickerInput
        value={date}
        onChange={setDate}
        label='Date of Birth'
        helperText='Select your birth date'
      />
    )
  },
}

export const WithMinMax: Story = {
  render: function WithMinMax() {
    const [date, setDate] = useState('2025-08-01')
    return (
      <DateSinglePickerInput
        value={date}
        onChange={setDate}
        label='Appointment Date'
        helperText='Select a date within the next 30 days'
        min='2025-08-01'
        max='2025-08-31'
      />
    )
  },
}

export const WithCustomFormatter: Story = {
  render: function WithCustomFormatter() {
    const [date, setDate] = useState('2025-08-01')
    return (
      <DateSinglePickerInput
        value={date}
        onChange={setDate}
        label='Event Date'
        formatter={date => {
          if (!date) return ''
          const d = new Date(date)
          return d.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        }}
      />
    )
  },
}

export const WithError: Story = {
  render: function WithError() {
    const [date, setDate] = useState('')
    return (
      <DateSinglePickerInput
        value={date}
        onChange={setDate}
        label='Required Date'
        error={date === '' ? 'Date is required' : undefined}
        required
      />
    )
  },
}
