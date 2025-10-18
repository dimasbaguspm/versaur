/**
 * SwitchInput stories for Storybook
 * Demonstrates controlled boolean toggle with inline labels
 * Follows browser-standard input patterns with primary color
 */
import { useState } from 'react'
import { SwitchInput } from './switch-input'
import type { Meta, StoryObj } from '@storybook/react'
import type { SwitchInputProps } from './types'

const meta: Meta<typeof SwitchInput> = {
  title: 'Forms/SwitchInput',
  component: SwitchInput,
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof SwitchInput>

/**
 * Default switch input with label and controlled state
 */
function ControlledStory(args: SwitchInputProps) {
  const [value, setValue] = useState(false)
  return <SwitchInput {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
  render: ControlledStory,
}

/**
 * Disabled switch input cannot be toggled
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
    value: false,
  },
  render: ControlledStory,
}

/**
 * Required switch input displays an asterisk
 */
export const Required: Story = {
  args: {
    label: 'Accept terms and conditions',
    required: true,
  },
  render: ControlledStory,
}

/**
 * Switch without label uses ariaLabel for accessibility
 */
export const NoLabel: Story = {
  args: {
    ariaLabel: 'Toggle setting',
  },
  render: ControlledStory,
}

/**
 * Multiple switches demonstrating different states
 */
function InteractiveStatesStory() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [marketing, setMarketing] = useState(false)

  return (
    <div className='flex flex-col gap-4'>
      <SwitchInput
        label='Push notifications'
        value={notifications}
        onChange={setNotifications}
      />
      <SwitchInput label='Dark mode' value={darkMode} onChange={setDarkMode} />
      <SwitchInput
        label='Marketing emails'
        value={marketing}
        onChange={setMarketing}
        required
      />
    </div>
  )
}

export const InteractiveStates: Story = {
  render: InteractiveStatesStory,
}
