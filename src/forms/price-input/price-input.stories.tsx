/**
 * PriceInput stories for Storybook
 * Shows IDR price input with formatting and standard input attributes
 */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PriceInput } from './price-input'

const meta: Meta<typeof PriceInput> = {
  title: 'Forms/PriceInput',
  component: PriceInput,
}
export default meta

type Story = StoryObj<typeof PriceInput>

/**
 * Default PriceInput usage
 * Demonstrates Rupiah currency format with proper thousands separator (dot) and decimal separator (comma)
 * Valid formats: 10000, 10.000, 10.000,50, 1.000.000,99
 */
export const Default: Story = {
  render: function DefaultStory(args) {
    const [value, setValue] = useState('')
    return (
      <PriceInput
        value={value}
        onChange={v => {
          setValue(v)
          args?.onChange?.(v)
        }}
        label='Amount'
        helperText='Enter price in IDR format (e.g., 10.000 or 10.000,50)'
      />
    )
  },
}

/**
 * PriceInput with error state
 * Shows error message and raw string value usage
 */
export const WithError: Story = {
  render: function WithErrorStory() {
    const [value, setValue] = useState('')
    return (
      <PriceInput
        value={value}
        onChange={setValue}
        label='Amount'
        error='Invalid price'
      />
    )
  },
}
