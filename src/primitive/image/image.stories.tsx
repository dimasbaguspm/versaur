/**
 * Image component stories
 *
 * Usage examples for the Versaur Image primitive.
 *
 * - Demonstrates skeleton loading, fallback, and responsive usage
 * - Shows how to use with aspect ratio, object-fit, and border utilities
 * - Illustrates accessibility and best practices
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './image'

const meta: Meta<typeof Image> = {
  title: 'Primitive/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Image>

/**
 * Standard image with skeleton loading state
 *
 * - Shows a placeholder skeleton until the image loads
 * - Uses aspect ratio and object-fit for consistent layout
 * - Always provide alt text for accessibility
 */
export const Default: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Standard placeholder',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standard image with skeleton loading state. Use `width` and `height` for layout stability. Skeleton is visible until the image loads. Use `object-fit` and `aspect-ratio` utilities for consistent sizing.',
      },
    },
  },
}

export const Size: Story = {
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Image with size variant',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Image with explicit width/height for layout stability. Use Tailwind utilities for aspect ratio and object-fit. Always provide descriptive alt text for accessibility.',
      },
    },
  },
}

/**
 * Broken image fallback
 *
 * - Demonstrates fallback UI when the image fails to load
 * - Skeleton is shown first, then fallback state
 * - Always provide descriptive alt text
 */
export const BrokenImage: Story = {
  args: {
    src: 'https://picsdddaum.photos/200/300',
    alt: 'Broken image',
    width: 200,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Image with a broken src to demonstrate the fallback state. Skeleton is shown first, then fallback. Always provide alt text for accessibility.',
      },
    },
  },
}

/**
 * Responsive image without explicit size
 *
 * - Uses natural image size for skeleton/fallback
 * - Use `loading="lazy"` for performance
 * - Use Tailwind utilities for responsive layout
 */
export const NoSize: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'No explicit size',
    loading: 'lazy',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Image without explicit width/height, natural size is used for skeleton/fallback. Use `loading="lazy"` for performance. Use Tailwind utilities for aspect ratio and responsive sizing.',
      },
    },
  },
}

/**
 * Accessible decorative image
 *
 * - Use `alt=""` for purely decorative images
 * - Ensures assistive tech ignores the image
 */
export const Decorative: Story = {
  args: {
    src: 'https://picsum.photos/300/100',
    alt: '',
    width: 300,
    height: 100,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Decorative image example. Use `alt=""` for images that are purely presentational so they are ignored by screen readers.',
      },
    },
  },
}

/**
 * Fluid, responsive image
 *
 * - Uses `w-full` and `h-auto` for fluid layouts
 * - Useful for banners or full-width images
 */
export const Fluid: Story = {
  args: {
    src: 'https://picsum.photos/600/200',
    alt: 'Fluid banner',
    size: 'full',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fluid, responsive image using `w-full` and `h-auto`. Useful for banners or full-width layouts.',
      },
    },
  },
}
