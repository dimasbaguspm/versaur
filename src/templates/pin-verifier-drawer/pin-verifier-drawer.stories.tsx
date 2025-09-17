import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PinVerifierDrawer } from './pin-verifier-drawer'
import { Button } from '@/primitive/button'
import type { PinVerifierDrawerProps } from './types'

/**
 * PinVerifierDrawer is a responsive PIN verification component that adapts between
 * Modal (desktop) and Drawer (mobile) based on the `as` prop. For drawer mode,
 * it includes a numeric keypad for touch-friendly PIN entry.
 */
const meta: Meta<typeof PinVerifierDrawer> = {
  title: 'Templates/Pin Verifier Drawer',
  component: PinVerifierDrawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A responsive PIN verification component that provides both modal and drawer modes with optional numeric keypad for touch-friendly input.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'radio',
      options: ['modal', 'drawer'],
      description: 'Display mode - modal for desktop, drawer for mobile',
    },
    secure: {
      control: 'boolean',
      description: 'Whether to hide PIN digits for security',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the component is in loading state',
    },
    showKeypad: {
      control: 'boolean',
      description: 'Whether to show numeric keypad (drawer mode only)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'neutral'],
      description: 'PIN field visual variant',
    },
  },
}

export default meta
type Story = StoryObj<typeof PinVerifierDrawer>

const PinVerifierDemo = (args: Partial<PinVerifierDrawerProps>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pin, setPin] = useState(args.value || '')

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open PIN Verifier</Button>
      <PinVerifierDrawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        value={pin}
        onChange={setPin}
        onVerify={value => {
          console.log('PIN verified:', value)
          alert(`PIN verified: ${value}`)
          setIsOpen(false)
        }}
      />
    </>
  )
}

/**
 * Basic PIN verifier in modal mode with secure input
 */
export const Default: Story = {
  render: args => <PinVerifierDemo {...args} />,
  args: {
    title: 'Enter PIN',
    secure: true,
    as: 'modal',
    variant: 'primary',
  },
}

/**
 * PIN verifier in drawer mode with numeric keypad
 */
export const DrawerWithKeypad: Story = {
  render: args => <PinVerifierDemo {...args} />,
  args: {
    title: 'Enter Your PIN',
    secure: true,
    as: 'drawer',
    showKeypad: true,
    variant: 'primary',
  },
}

/**
 * PIN verifier with visible digits (non-secure mode)
 */
export const NonSecure: Story = {
  render: args => <PinVerifierDemo {...args} />,
  args: {
    title: 'Verification Code',
    secure: false,
    as: 'modal',
    variant: 'secondary',
  },
}

/**
 * PIN verifier with error state
 */
export const WithError: Story = {
  render: args => <PinVerifierDemo {...args} value='123456' />,
  args: {
    title: 'Enter PIN',
    secure: true,
    as: 'modal',
    variant: 'primary',
    error: 'Invalid PIN. Please try again.',
  },
}

/**
 * PIN verifier in loading state
 */
export const Loading: Story = {
  render: args => <PinVerifierDemo {...args} value='123456' />,
  args: {
    title: 'Enter PIN',
    secure: true,
    as: 'modal',
    variant: 'primary',
    loading: true,
  },
}

/**
 * Drawer mode without keypad (keyboard input only)
 */
export const DrawerWithoutKeypad: Story = {
  render: args => <PinVerifierDemo {...args} />,
  args: {
    title: 'Enter PIN',
    secure: true,
    as: 'drawer',
    showKeypad: false,
    variant: 'primary',
  },
}
