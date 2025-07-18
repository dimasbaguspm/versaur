import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

/**
 * Skeleton component stories for Versaur UI
 * Demonstrates shape, size, color, and rows variations for loading placeholders
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: `
The Skeleton component provides a flexible loading placeholder for content, supporting various shapes, sizes, colors, and row counts. It follows the Versaur design system and color palette.
        `,
      },
    },
  },
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['rectangle', 'rounded', 'circle', 'square'],
      description: 'Shape of the skeleton',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the skeleton',
    },
    // Only shape and size are supported now
  },
}
export default meta

type Story = StoryObj<typeof Skeleton>

/**
 * Default skeleton (rounded, md, neutral)
 */
export const Default: Story = {}

/**
 * All shape variations
 */
export const Shapes: Story = {
  render: () => (
    <div className='flex flex-col gap-4 '>
      <Skeleton shape='rectangle' size='lg' />
      <Skeleton shape='rounded' size='lg' />
      <Skeleton shape='circle' size='lg' style={{ width: 48, height: 48 }} />
      <Skeleton shape='square' size='lg' style={{ width: 48, height: 48 }} />
    </div>
  ),
}

/**
 * All size variations
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-2 flex-wrap'>
      <Skeleton size='sm' />
      <Skeleton size='md' />
      <Skeleton size='lg' />
      <Skeleton size='xl' />
    </div>
  ),
}
/**
 * Custom height (multiline skeleton)
 */
export const CustomHeight: Story = {
  args: {
    size: 'md',
    height: 64,
    style: { width: 180 },
  },
}
