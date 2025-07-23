import type { Meta, StoryObj } from '@storybook/react'
import { Tile } from './tile'

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
 * All available color variants demonstrating the soft color palette
 */
export const Variants: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4 max-w-4xl'>
      <Tile variant='white'>White</Tile>
      <Tile variant='neutral'>Neutral</Tile>
      <Tile variant='primary'>Primary</Tile>
      <Tile variant='secondary'>Secondary</Tile>
      <Tile variant='tertiary'>Tertiary</Tile>
      <Tile variant='ghost'>Ghost</Tile>
      <Tile variant='success'>Success</Tile>
      <Tile variant='info'>Info</Tile>
      <Tile variant='warning'>Warning</Tile>
      <Tile variant='danger'>Danger</Tile>
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
        Rounded corners (default)
      </Tile>
      <Tile shape='square' variant='secondary'>
        Square corners
      </Tile>
    </div>
  ),
}

/**
 * Practical use case: Information card with content and styling
 */
export const InfoCard: Story = {
  render: () => (
    <Tile variant='info' size='lg' className='max-w-md'>
      <h3 className='font-semibold text-lg mb-2'>Information Panel</h3>
      <p className='text-sm mb-4'>
        This tile component can be used to create beautiful information cards
        with soft backgrounds and proper spacing.
      </p>
      <div className='flex gap-2'>
        <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded'>
          Tag 1
        </span>
        <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded'>
          Tag 2
        </span>
      </div>
    </Tile>
  ),
}

/**
 * Dashboard-style layout using multiple tiles
 */
export const Dashboard: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4 max-w-2xl'>
      <Tile variant='success' size='lg'>
        <h4 className='font-semibold mb-2'>Active Users</h4>
        <p className='text-2xl font-bold'>1,234</p>
        <p className='text-sm opacity-75'>+12% from last month</p>
      </Tile>
      <Tile variant='warning' size='lg'>
        <h4 className='font-semibold mb-2'>Pending Tasks</h4>
        <p className='text-2xl font-bold'>56</p>
        <p className='text-sm opacity-75'>Requires attention</p>
      </Tile>
      <Tile variant='primary' size='lg'>
        <h4 className='font-semibold mb-2'>Revenue</h4>
        <p className='text-2xl font-bold'>$12,345</p>
        <p className='text-sm opacity-75'>This quarter</p>
      </Tile>
      <Tile variant='tertiary' size='lg'>
        <h4 className='font-semibold mb-2'>Reports</h4>
        <p className='text-2xl font-bold'>89</p>
        <p className='text-sm opacity-75'>Generated today</p>
      </Tile>
    </div>
  ),
}
