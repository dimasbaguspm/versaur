import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SelectableMultipleInput } from './selectable-multiple-input'

/**
 * SelectableMultipleInput allows users to select multiple options using checkboxes with custom content.
 * It supports both static content and dynamic rendering through function-as-children pattern.
 */
const meta: Meta<typeof SelectableMultipleInput> = {
  title: 'Forms/SelectableMultipleInput',
  component: SelectableMultipleInput,
}
export default meta

type Story = StoryObj<typeof SelectableMultipleInput>

/**
 * Basic usage with simple text content
 */
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
            checked={selected.includes(opt.value)}
            onChange={e => {
              setSelected(sel =>
                e.target.checked
                  ? [...sel, opt.value]
                  : sel.filter(v => v !== opt.value)
              )
            }}
          >
            {opt.label}
          </SelectableMultipleInput>
        ))}
      </div>
    )
  },
}

/**
 * Dynamic content using function-as-children pattern.
 * The content changes based on the checked state.
 */
export const DynamicContent: Story = {
  render: function DynamicContent() {
    const [selected, setSelected] = useState<string[]>(['premium'])
    const plans = [
      { value: 'free', name: 'Free Plan', price: '$0/month' },
      { value: 'premium', name: 'Premium Plan', price: '$9.99/month' },
      { value: 'enterprise', name: 'Enterprise Plan', price: '$29.99/month' },
    ]
    return (
      <div className='flex flex-col'>
        {plans.map(plan => (
          <SelectableMultipleInput
            key={plan.value}
            value={plan.value}
            checked={selected.includes(plan.value)}
            onChange={e => {
              setSelected(sel =>
                e.target.checked
                  ? [...sel, plan.value]
                  : sel.filter(v => v !== plan.value)
              )
            }}
          >
            {checked => (
              <div>
                <p className='font-medium'>{plan.name}</p>
                <p className='text-sm text-foreground-light'>
                  {checked ? `✓ ${plan.price} - Selected` : plan.price}
                </p>
              </div>
            )}
          </SelectableMultipleInput>
        ))}
      </div>
    )
  },
}

/**
 * Custom checkbox placement for multi-line content.
 * Demonstrates top, center (default), and bottom alignments.
 */
export const CheckboxPlacement: Story = {
  render: function CheckboxPlacement() {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <div className='flex flex-col'>
        <SelectableMultipleInput
          value='top'
          checked={selected.includes('top')}
          onChange={e => {
            setSelected(sel =>
              e.target.checked ? [...sel, 'top'] : sel.filter(v => v !== 'top')
            )
          }}
          checkboxPlacement='top'
        >
          <div>
            <p className='font-medium'>Top Aligned</p>
            <p className='text-sm text-foreground-light'>
              The checkbox is aligned to the top of this multi-line content.
            </p>
            <p className='text-sm text-foreground-light'>
              This is useful when you have tall content.
            </p>
          </div>
        </SelectableMultipleInput>
        <SelectableMultipleInput
          value='center'
          checked={selected.includes('center')}
          onChange={e => {
            setSelected(sel =>
              e.target.checked
                ? [...sel, 'center']
                : sel.filter(v => v !== 'center')
            )
          }}
          checkboxPlacement='center'
        >
          <div>
            <p className='font-medium'>Center Aligned (Default)</p>
            <p className='text-sm text-foreground-light'>
              The checkbox is vertically centered with the content.
            </p>
          </div>
        </SelectableMultipleInput>
        <SelectableMultipleInput
          value='bottom'
          checked={selected.includes('bottom')}
          onChange={e => {
            setSelected(sel =>
              e.target.checked
                ? [...sel, 'bottom']
                : sel.filter(v => v !== 'bottom')
            )
          }}
          checkboxPlacement='bottom'
        >
          <div>
            <p className='font-medium'>Bottom Aligned</p>
            <p className='text-sm text-foreground-light'>
              The checkbox is aligned to the bottom of this multi-line content.
            </p>
            <p className='text-sm text-foreground-light'>
              Great for content with varying heights.
            </p>
          </div>
        </SelectableMultipleInput>
      </div>
    )
  },
}

/**
 * Hide the checkbox indicator for fully custom rendering.
 * Useful when you want complete control over the visual presentation.
 */
export const HiddenCheckbox: Story = {
  render: function HiddenCheckbox() {
    const [selected, setSelected] = useState<string[]>(['option2'])
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]
    return (
      <div className='flex flex-col'>
        {options.map(opt => (
          <SelectableMultipleInput
            key={opt.value}
            value={opt.value}
            checked={selected.includes(opt.value)}
            onChange={e => {
              setSelected(sel =>
                e.target.checked
                  ? [...sel, opt.value]
                  : sel.filter(v => v !== opt.value)
              )
            }}
            hideCheckbox
          >
            {checked => (
              <div
                className={`w-full p-3 rounded transition-all ${
                  checked
                    ? 'bg-primary-soft border-2 border-primary'
                    : 'bg-neutral-light border-2 border-transparent'
                }`}
              >
                <p className='font-medium'>
                  {checked ? '✓ ' : ''}
                  {opt.label}
                </p>
                <p className='text-sm text-foreground-light'>
                  {checked ? 'Selected' : 'Click to select'}
                </p>
              </div>
            )}
          </SelectableMultipleInput>
        ))}
      </div>
    )
  },
}

/**
 * Disabled state demonstration
 */
export const Disabled: Story = {
  render: function Disabled() {
    return (
      <div className='flex flex-col'>
        <SelectableMultipleInput
          value='disabled-unchecked'
          checked={false}
          disabled
        >
          Disabled Unchecked
        </SelectableMultipleInput>
        <SelectableMultipleInput
          value='disabled-checked'
          checked={true}
          disabled
        >
          Disabled Checked
        </SelectableMultipleInput>
      </div>
    )
  },
}
