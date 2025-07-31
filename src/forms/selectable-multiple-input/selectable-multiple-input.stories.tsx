import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SelectableMultipleInput } from './selectable-multiple-input'

/**
 * SelectableMultipleInput allows users to select multiple options using checkboxes with custom UI
 */
const meta: Meta<typeof SelectableMultipleInput> = {
  title: 'Forms/SelectableMultipleInput',
  component: SelectableMultipleInput,
}
export default meta

type Story = StoryObj<typeof SelectableMultipleInput>

export const Basic: Story = {
  render: function Basic() {
    const [selected, setSelected] = useState<string[]>([])
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ]
    return (
      <div className='flex flex-col'>
        {options.map(opt => (
          <SelectableMultipleInput
            key={opt.value}
            value={opt.value}
            label={opt.label}
            checked={selected.includes(opt.value)}
            onChange={e => {
              setSelected(sel =>
                e.target.checked
                  ? [...sel, opt.value]
                  : sel.filter(v => v !== opt.value)
              )
            }}
          />
        ))}
      </div>
    )
  },
}
