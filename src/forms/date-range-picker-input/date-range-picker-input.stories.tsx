/**
 * DateRangePickerInput stories for interactive documentation and testing
 * Demonstrates range selection and input UI
 */
import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePickerInput } from './date-range-picker-input'
import { useState } from 'react'

const meta: Meta<typeof DateRangePickerInput> = {
  title: 'Forms/DateRangePickerInput',
  component: DateRangePickerInput,
  parameters: {
    docs: {
      description: {
        component:
          'A modern, accessible date range picker input for forms, using the Versaur Calendar primitive.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof DateRangePickerInput>

const DefaultExample = () => {
  const [value, setValue] = useState<[string | null, string | null] | null>([
    null,
    null,
  ])
  return (
    <DateRangePickerInput
      value={value}
      onChange={setValue}
      label='Date range'
    />
  )
}

export const Default: Story = {
  render: DefaultExample,
}

export const Disabled: Story = {
  render: () => (
    <DateRangePickerInput
      value={[null, null]}
      onChange={() => {}}
      label='Disabled date range'
      disabled
    />
  ),
}

export const DefaultValue: Story = {
  render: () => (
    <DateRangePickerInput
      value={['2025-07-03', '2025-07-31']}
      onChange={() => {}}
      label='Default value'
    />
  ),
}
