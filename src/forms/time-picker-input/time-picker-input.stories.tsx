/**
 * TimePickerInput stories
 *
 * Demonstrates the modal-based time picker input for Versaur UI
 * Follows Material 3 guidelines (no clock UI, just hour, minute, and AM/PM segment selection)
 */
import { useState } from 'react'
import { TimePickerInput } from './time-picker-input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TimePickerInput> = {
  title: 'Forms/TimePickerInput',
  component: TimePickerInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TimePickerInput>

export const Basic: Story = {
  render: function BasicStory() {
    const [value, setValue] = useState('02:30 PM')
    return (
      <div className={'max-w-xs mx-auto mt-10'}>
        <TimePickerInput
          value={value}
          onChange={setValue}
          label={'Select time'}
          helperText={'Choose a time for your meeting'}
        />
      </div>
    )
  },
}

export const WithError: Story = {
  render: function WithErrorStory() {
    const [value, setValue] = useState('')
    return (
      <div className={'max-w-xs mx-auto mt-10'}>
        <TimePickerInput
          value={value}
          onChange={setValue}
          label={'Time'}
          error={!value ? 'Time is required' : undefined}
        />
      </div>
    )
  },
}
