/**
 * SelectableSingleInput stories
 *
 * A radio input with custom content and optional checkbox indicator.
 * Supports function-as-children for dynamic content based on checked state.
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

/**
 * Basic usage with static content
 */
export const Basic: Story = {
  render: function Basic() {
    const [selected, setSelected] = useState('option1')
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='option1'
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        >
          First Option
        </SelectableSingleInput>
        <SelectableSingleInput
          value='option2'
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        >
          Second Option
        </SelectableSingleInput>
        <SelectableSingleInput
          value='option3'
          checked={selected === 'option3'}
          onChange={() => setSelected('option3')}
        >
          Third Option
        </SelectableSingleInput>
      </div>
    )
  },
}

/**
 * Using function-as-children to dynamically render content based on checked state
 */
export const DynamicContent: Story = {
  render: function DynamicContent() {
    const [selected, setSelected] = useState('premium')
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='free'
          checked={selected === 'free'}
          onChange={() => setSelected('free')}
        >
          {checked => (
            <div>
              <p className='font-medium'>Free Plan</p>
              <p className='text-sm text-foreground-light'>
                {checked ? '✓ Currently selected' : 'Basic features'}
              </p>
            </div>
          )}
        </SelectableSingleInput>
        <SelectableSingleInput
          value='premium'
          checked={selected === 'premium'}
          onChange={() => setSelected('premium')}
        >
          {checked => (
            <div>
              <p className='font-medium'>Premium Plan</p>
              <p className='text-sm text-foreground-light'>
                {checked ? '✓ Currently selected' : 'All features included'}
              </p>
            </div>
          )}
        </SelectableSingleInput>
      </div>
    )
  },
}

/**
 * Checkbox placement options: top, center (default), bottom
 */
export const CheckboxPlacement: Story = {
  render: function CheckboxPlacement() {
    const [selected, setSelected] = useState('center')
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='top'
          checked={selected === 'top'}
          onChange={() => setSelected('top')}
          checkboxPlacement='top'
        >
          <div>
            <p className='font-medium'>Checkbox at Top</p>
            <p className='text-sm text-foreground-light'>
              Useful for multi-line content
            </p>
          </div>
        </SelectableSingleInput>
        <SelectableSingleInput
          value='center'
          checked={selected === 'center'}
          onChange={() => setSelected('center')}
          checkboxPlacement='center'
        >
          <div>
            <p className='font-medium'>Checkbox Centered</p>
            <p className='text-sm text-foreground-light'>Default placement</p>
          </div>
        </SelectableSingleInput>
        <SelectableSingleInput
          value='bottom'
          checked={selected === 'bottom'}
          onChange={() => setSelected('bottom')}
          checkboxPlacement='bottom'
        >
          <div>
            <p className='font-medium'>Checkbox at Bottom</p>
            <p className='text-sm text-foreground-light'>
              Alternative alignment option
            </p>
          </div>
        </SelectableSingleInput>
      </div>
    )
  },
}

/**
 * Hidden checkbox - useful when you want full custom rendering
 */
export const HiddenCheckbox: Story = {
  render: function HiddenCheckbox() {
    const [selected, setSelected] = useState('option1')
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='option1'
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
          hideCheckbox
        >
          {checked => (
            <div
              className={`p-2 rounded ${checked ? 'bg-primary-soft border-2 border-primary' : 'bg-neutral-light'}`}
            >
              <p className='font-medium'>{checked ? '✓ ' : ''}Custom Style 1</p>
            </div>
          )}
        </SelectableSingleInput>
        <SelectableSingleInput
          value='option2'
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
          hideCheckbox
        >
          {checked => (
            <div
              className={`p-2 rounded ${checked ? 'bg-primary-soft border-2 border-primary' : 'bg-neutral-light'}`}
            >
              <p className='font-medium'>{checked ? '✓ ' : ''}Custom Style 2</p>
            </div>
          )}
        </SelectableSingleInput>
      </div>
    )
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: function Disabled() {
    return (
      <div className='flex flex-col'>
        <SelectableSingleInput
          value='disabled'
          checked={false}
          disabled
          readOnly
        >
          Disabled Option
        </SelectableSingleInput>
        <SelectableSingleInput
          value='enabled'
          checked={true}
          disabled={false}
          readOnly
        >
          Enabled Option
        </SelectableSingleInput>
      </div>
    )
  },
}
