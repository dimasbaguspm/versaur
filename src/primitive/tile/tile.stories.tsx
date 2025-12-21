import type { Meta, StoryObj } from '@storybook/react'
import { Tile } from './tile'
import { Text } from '../text'

/**
 * The Tile component is a flexible box container that provides a foundation for
 * content layouts. It offers multiple color variants with soft backgrounds,
 * configurable padding sizes, and shape options for rounded or square corners.
 * Perfect for creating cards, panels, sections, and other content containers.
 */
const meta: Meta<typeof Tile> = {
  title: 'Primitive/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside'],
      description: 'Element type to render as',
    },
    variant: {
      control: 'select',
      options: [
        'white',
        'neutral',
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'success',
        'info',
        'warning',
        'danger',
      ],
      description: 'Color variant for the tile',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding size of the tile',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square'],
      description: 'Border radius shape',
    },
    children: {
      control: 'text',
      description: 'Content of the tile',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default tile with white background and medium padding
 */
export const Default: Story = {
  args: {
    children: 'This is a default tile with white background',
  },
}

/**
 * Render Tile as a semantic section element.
 */
export const AsSection: Story = {
  args: {
    as: 'section',
    variant: 'neutral',
    role: 'region',
    'aria-label': 'Section Tile',
    children: (
      <div>
        <Text fontWeight='semibold'>Section Tile</Text>
        <Text>Renders as a semantic section for page structure.</Text>
      </div>
    ),
  },
}

/**
 * All available color variants demonstrating the soft color palette
 */
export const Variants: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4 max-w-4xl'>
      <Tile variant='white'>
        <Text color='black'>White</Text>
      </Tile>
      <Tile variant='neutral'>
        <Text color='black'>Neutral</Text>
      </Tile>
      <Tile variant='primary'>
        <Text color='white'>Primary</Text>
      </Tile>
      <Tile variant='secondary'>
        <Text color='white'>Secondary</Text>
      </Tile>
      <Tile variant='tertiary'>
        <Text color='white'>Tertiary</Text>
      </Tile>
      <Tile variant='ghost'>
        <Text color='black'>Ghost</Text>
      </Tile>
      <Tile variant='success'>
        <Text color='white'>Success</Text>
      </Tile>
      <Tile variant='info'>
        <Text color='white'>Info</Text>
      </Tile>
      <Tile variant='warning'>
        <Text color='white'>Warning</Text>
      </Tile>
      <Tile variant='danger'>
        <Text color='white'>Danger</Text>
      </Tile>
    </div>
  ),
}

/**
 * Different padding sizes from extra small to extra large
 */
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Tile size='xs'>Extra Small Padding</Tile>
      <Tile size='sm'>Small Padding</Tile>
      <Tile size='md'>Medium Padding</Tile>
      <Tile size='lg'>Large Padding</Tile>
      <Tile size='xl'>Extra Large Padding</Tile>
    </div>
  ),
}

/**
 * Shape options: rounded corners (default) vs square corners
 */
export const Shapes: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tile shape='rounded' variant='primary'>
        <Text color='white'>Rounded corners (default) </Text>
      </Tile>
      <Tile shape='square' variant='secondary'>
        <Text color='white'>Square corners</Text>
      </Tile>
    </div>
  ),
}
