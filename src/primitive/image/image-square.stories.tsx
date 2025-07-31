/**
 * ImageSquare component stories
 *
 * Usage examples for the Versaur ImageSquare primitive.
 * - Demonstrates square shape, skeleton loading, and fallback
 * - Shows accessibility and best practices
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ImageSquare } from './image-square'

const meta: Meta<typeof ImageSquare> = {
  title: 'Primitive/Image/ImageSquare',
  component: ImageSquare,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof ImageSquare>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Square placeholder',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Square image with skeleton loading and fallback. Uses `aspect-square` and `rounded` for square shape.',
      },
    },
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://picsdddaum.photos/200/200',
    alt: 'Broken square',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'Broken image fallback for square shape.',
      },
    },
  },
}
