/**
 * ProgressIndicator stories for Storybook
 * Demonstrates color variants, determinate and indeterminate states
 * Follows Versaur design system and Material guidelines
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ProgressIndicator } from './progress-indicator'

const meta = {
  title: 'Feedbacks/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressIndicator>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Color Variants - Determinate
 */
export const ColorVariants: Story = {
  render: args => (
    <div className='flex flex-col gap-6'>
      <ProgressIndicator {...args} color='primary' />
      <ProgressIndicator {...args} color='secondary' />
      <ProgressIndicator {...args} color='tertiary' />
      <ProgressIndicator {...args} color='success' />
      <ProgressIndicator {...args} color='info' />
      <ProgressIndicator {...args} color='danger' />
    </div>
  ),
  args: {
    value: 60,
    max: 100,
  },
}
