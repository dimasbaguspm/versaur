/**
 * Calculator stories for Versaur
 *
 * - Demonstrates usage in modal and with text-input alignment
 * - Shows disabled and initial value states
 */
import { Calculator } from './calculator'
import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Calculator> = {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A compact calculator for modals and text-input alignment.',
      },
    },
  },
} satisfies Meta<typeof Calculator>

export default meta

type Story = StoryObj<typeof Calculator>

export const Default: Story = {
  args: {
    initialValue: '',
    onChange: action('onChange'),
  },
}

export const WithInitialValue: Story = {
  args: {
    initialValue: '42',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    initialValue: '123',
  },
}
