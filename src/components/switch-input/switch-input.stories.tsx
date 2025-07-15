/**
 * SwitchInput stories for Storybook
 * Demonstrates all variants, label placement, color, and accessibility features
 * Showcases Versaur's harmonious color palette and professional design
 */
import { useState } from 'react'
import { SwitchInput } from './switch-input'
import type { Meta, StoryObj } from '@storybook/react'
import type { SwitchInputProps } from './types'

const meta: Meta<typeof SwitchInput> = {
  title: 'Form/SwitchInput',
  component: SwitchInput,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    labelPlacement: { control: 'select', options: ['top', 'inline'] },
    disabled: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof SwitchInput>

function DefaultStory(args: SwitchInputProps) {
  const [checked, setChecked] = useState(false)
  return (
    <SwitchInput {...args} checked={checked} onCheckedChange={setChecked} />
  )
}
export const Default: Story = {
  args: {
    label: 'Enable notifications',
    color: 'primary',
    size: 'md',
  },
  render: DefaultStory,
}

function InlineLabelStory(args: SwitchInputProps) {
  const [checked, setChecked] = useState(false)
  return (
    <SwitchInput {...args} checked={checked} onCheckedChange={setChecked} />
  )
}
export const InlineLabel: Story = {
  args: {
    label: 'Inline label',
    labelPlacement: 'inline',
    color: 'secondary',
    size: 'md',
  },
  render: InlineLabelStory,
}

function DisabledStory(args: SwitchInputProps) {
  const [checked, setChecked] = useState(false)
  return (
    <SwitchInput {...args} checked={checked} onCheckedChange={setChecked} />
  )
}
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    color: 'ghost',
    size: 'md',
  },
  render: DisabledStory,
}

function NoLabelStory(args: SwitchInputProps) {
  const [checked, setChecked] = useState(false)
  return (
    <SwitchInput {...args} checked={checked} onCheckedChange={setChecked} />
  )
}
export const NoLabel: Story = {
  args: {
    color: 'primary',
    size: 'md',
  },
  render: NoLabelStory,
}

function ColorVariationsStory() {
  const colors: Array<NonNullable<SwitchInputProps['color']>> = [
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'neutral',
    'success',
    'info',
    'warning',
    'danger',
  ]
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  return (
    <div className='flex flex-wrap gap-6'>
      {colors.map(color => (
        <div key={color} className='flex flex-col items-center'>
          <SwitchInput
            color={color}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
            checked={checked[color] || false}
            onCheckedChange={val =>
              setChecked(prev => ({ ...prev, [color]: val }))
            }
            size='md'
          />
        </div>
      ))}
    </div>
  )
}
export const ColorVariations: Story = {
  render: ColorVariationsStory,
}
