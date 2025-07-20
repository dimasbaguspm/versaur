/**
 * CalculatorInput stories
 *
 * Demonstrates the CalculatorInput component for numeric entry with a modal calculator
 */
import type { Meta, StoryObj } from '@storybook/react'
import { CalculatorInput } from './calculator-input'
import { useState } from 'react'

const meta: Meta<typeof CalculatorInput> = {
  title: 'Form/CalculatorInput',
  component: CalculatorInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof CalculatorInput>

export const Basic: Story = {
  render: function BasicStory() {
    const [value, setValue] = useState<number | ''>('')
    return (
      <CalculatorInput
        value={value}
        onChange={setValue}
        label='Enter amount'
        helperText='Enter a value using the calculator'
      />
    )
  },
}

export const WithError: Story = {
  render: function WithErrorStory() {
    const [value, setValue] = useState<number | ''>('')
    return (
      <CalculatorInput
        value={value}
        onChange={setValue}
        label='Amount'
        error={value === '' ? 'Amount is required' : undefined}
      />
    )
  },
}
export const Disabled: Story = {
  render: function DisabledStory() {
    const [value, setValue] = useState<number | ''>('')
    return (
      <CalculatorInput
        value={value}
        onChange={setValue}
        label='Disabled'
        disabled
      />
    )
  },
}
