/**
 * SelectableSingleInput stories
 *
 * Demonstrates a radio input with a custom label and checked icon.
 * Use for single-choice selection with custom content.
 */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SelectableSingleInput } from './selectable-single-input'

const meta: Meta<typeof SelectableSingleInput> = {
  title: 'Forms/SelectableSingleInput',
  component: SelectableSingleInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SelectableSingleInput>

export const Basic: Story = {
  render: function Basic() {
    const [selected, setSelected] = useState('option1')
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='option1'
          label={<span className='font-medium'>Option 1</span>}
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
        <SelectableSingleInput
          value='option2'
          label={
            <span className='text-secondary'>Option 2 (custom color)</span>
          }
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
        <SelectableSingleInput
          value='option3'
          label={
            <span className='flex items-center gap-2'>
              <span>Option 3</span>
              <span className='text-xs text-info'>(with info)</span>
            </span>
          }
          checked={selected === 'option3'}
          onChange={() => setSelected('option3')}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <SelectableSingleInput
      value='disabled'
      label={<span>Disabled option</span>}
      checked={false}
      disabled
    />
  ),
}
