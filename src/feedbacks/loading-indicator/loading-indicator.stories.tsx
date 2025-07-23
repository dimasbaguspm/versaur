/**
 * LoadingIndicator stories for Storybook
 * Demonstrates spinner and bar types, color variants, and sizes
 * Follows Versaur design system and Material guidelines
 */
import type { Meta, StoryObj } from '@storybook/react'
import { LoadingIndicator } from './loading-indicator'

const meta = {
  title: 'Feedbacks/LoadingIndicator',
  component: LoadingIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingIndicator>

export default meta

type Story = StoryObj<typeof meta>
/**
 * Spinner Variants - All colors
 */

export const SpinnerVariants: Story = {
  render: args => (
    <div className='flex gap-6 items-center'>
      <LoadingIndicator
        {...args}
        color='primary'
        ariaLabel='Loading spinner primary'
      />
      <LoadingIndicator
        {...args}
        color='secondary'
        ariaLabel='Loading spinner secondary'
      />
      <LoadingIndicator
        {...args}
        color='tertiary'
        ariaLabel='Loading spinner tertiary'
      />
      <LoadingIndicator
        {...args}
        color='success'
        ariaLabel='Loading spinner success'
      />
      <LoadingIndicator
        {...args}
        color='info'
        ariaLabel='Loading spinner info'
      />
      <LoadingIndicator
        {...args}
        color='danger'
        ariaLabel='Loading spinner danger'
      />
    </div>
  ),
  args: {
    type: 'spinner',
    size: 'md',
  },
}

/**
 * Bar Variants - All colors
 */

export const BarVariants: Story = {
  render: args => (
    <div className='flex flex-col gap-6'>
      <LoadingIndicator
        {...args}
        color='primary'
        ariaLabel='Loading bar primary'
      />
      <LoadingIndicator
        {...args}
        color='secondary'
        ariaLabel='Loading bar secondary'
      />
      <LoadingIndicator
        {...args}
        color='tertiary'
        ariaLabel='Loading bar tertiary'
      />
      <LoadingIndicator
        {...args}
        color='success'
        ariaLabel='Loading bar success'
      />
      <LoadingIndicator {...args} color='info' ariaLabel='Loading bar info' />
      <LoadingIndicator
        {...args}
        color='danger'
        ariaLabel='Loading bar danger'
      />
    </div>
  ),
  args: {
    type: 'bar',
    size: 'md',
  },
}
