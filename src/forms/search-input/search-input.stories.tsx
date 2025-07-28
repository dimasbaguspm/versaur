/**
 * SearchInput stories for Versaur UI
 *
 * Demonstrates usage and variations of the SearchInput component
 */
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './search-input'

const meta: Meta<typeof SearchInput> = {
  title: 'Forms/SearchInput',
  component: SearchInput,
}
export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: function DefaultStory() {
    const [value, setValue] = useState('')
    return (
      <SearchInput
        placeholder='Search...'
        value={value}
        onChange={e => setValue(e.target.value)}
        autoComplete='on'
        spellCheck={true}
        inputMode='search'
      />
    )
  },
}

export const Disabled: Story = {
  render: function DisabledStory() {
    return <SearchInput placeholder='Search...' disabled />
  },
}
