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
 * Demonstrates raw string value, comma/dot/minus as separators, and standard input attributes
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
        helperText='Enter price in IDR (accepts digits, comma, dot, minus)'
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
