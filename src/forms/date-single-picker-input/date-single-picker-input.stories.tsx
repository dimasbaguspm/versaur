/**
 * Stories for DateSinglePickerInput
 * Group: Forms
 * Shows usage and variations for date picking
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
          'A wrapper around TextInput for picking a single date. Uses native <input type="date"> for accessibility and browser support.',
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
        helperText='Select your birth date.'
      />
    )
  },
}

export const CustomFormatter: Story = {
  render: function CustomFormatter() {
    const [date, setDate] = useState('2025-08-01')
    return (
      <DateSinglePickerInput
        value={date}
        onChange={setDate}
        label='Date of Birth'
        formatter={date => {
          if (!date) return ''
          const d = new Date(date)
          return d.toLocaleDateString('en-US', {
            month: 'short',
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
        label='Date of Birth'
        error={date === '' ? 'Date is required' : undefined}
        required
      />
    )
  },
}
