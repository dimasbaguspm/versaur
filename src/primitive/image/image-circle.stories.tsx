/**
 * ImageCircle component stories
 *
 * Usage examples for the Versaur ImageCircle primitive.
 * - Demonstrates circle shape, skeleton loading, and fallback
 * - Shows accessibility and best practices
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ImageCircle } from './image-circle'

const meta: Meta<typeof ImageCircle> = {
  title: 'Primitive/Image/ImageCircle',
  component: ImageCircle,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof ImageCircle>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Circle placeholder',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Circle image with skeleton loading and fallback. Uses `rounded-full` and `aspect-square` for perfect circle.',
      },
    },
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://picsdddaum.photos/200/200',
    alt: 'Broken circle',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'Broken image fallback for circle shape.',
      },
    },
  },
}
