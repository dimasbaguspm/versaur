/**
 * ImageRectangle component stories
 *
 * Usage examples for the Versaur ImageRectangle primitive.
 * - Demonstrates rectangle shape, skeleton loading, and fallback
 * - Shows accessibility and best practices
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ImageRectangle } from './image-rectangle'

const meta: Meta<typeof ImageRectangle> = {
  title: 'Primitive/Image/ImageRectangle',
  component: ImageRectangle,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof ImageRectangle>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/320/180',
    alt: 'Rectangle placeholder',
    width: 320,
    height: 180,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rectangle image with skeleton loading and fallback. Uses `rounded` for rectangle corners.',
      },
    },
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://picsdddaum.photos/320/180',
    alt: 'Broken rectangle',
    width: 320,
    height: 180,
  },
  parameters: {
    docs: {
      description: {
        story: 'Broken image fallback for rectangle shape.',
      },
    },
  },
}
