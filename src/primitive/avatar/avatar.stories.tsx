import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

/**
 * Avatar component displays user avatars with fallback support.
 * It supports multiple variants based on the Versaur color system,
 * different sizes, and shapes with automatic image fallback behavior.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Primitive/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar component for displaying user profile images with fallback text or content. Supports multiple variants, sizes, and shapes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
        'accent_1',
        'accent_2',
        'accent_3',
      ],
      description: 'Visual style variant based on Versaur color system',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar',
    },
    children: {
      control: { type: 'text' },
      description: 'Fallback content when image is not available',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default avatar with fallback text
 */
export const Default: Story = {
  args: {
    children: 'JD',
  },
}

/**
 * Avatar with image that loads successfully
 */
export const WithImage: Story = {
  args: {
    children: 'JD',
  },
  render: args => (
    <Avatar {...args}>
      <Avatar.Image
        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        alt='John Doe'
      />
      {args.children}
    </Avatar>
  ),
}

/**
 * Avatar with image that fails to load (demonstrates fallback)
 */
export const WithFailedImage: Story = {
  args: {
    children: 'FB',
  },
  render: args => (
    <Avatar {...args}>
      <Avatar.Image
        src='https://invalid-url-that-will-fail.jpg'
        alt='Failed to load'
      />
      {args.children}
    </Avatar>
  ),
}

/**
 * Different avatar variants showcasing the color system
 */
export const Variants: Story = {
  render: () => (
    <div className='flex gap-4 flex-wrap'>
      <Avatar variant='primary'>P</Avatar>
      <Avatar variant='secondary'>S</Avatar>
      <Avatar variant='tertiary'>T</Avatar>
      <Avatar variant='accent_1'>A1</Avatar>
      <Avatar variant='accent_2'>A2</Avatar>
      <Avatar variant='accent_3'>A3</Avatar>
      <Avatar variant='ghost'>G</Avatar>
      <Avatar variant='neutral'>N</Avatar>
      <Avatar variant='success'>✓</Avatar>
      <Avatar variant='info'>i</Avatar>
      <Avatar variant='warning'>!</Avatar>
      <Avatar variant='danger'>×</Avatar>
    </div>
  ),
}

/**
 * Different avatar sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4 items-center flex-wrap'>
      <Avatar size='xs'>XS</Avatar>
      <Avatar size='sm'>SM</Avatar>
      <Avatar size='md'>MD</Avatar>
      <Avatar size='lg'>LG</Avatar>
      <Avatar size='xl'>XL</Avatar>
    </div>
  ),
}

/**
 * Different avatar shapes
 */
export const Shapes: Story = {
  render: () => (
    <div className='flex gap-4 items-center flex-wrap'>
      <Avatar shape='circle'>C</Avatar>
      <Avatar shape='rounded'>R</Avatar>
      <Avatar shape='square'>S</Avatar>
    </div>
  ),
}

/**
 * Avatar group showing multiple avatars together
 */
export const Group: Story = {
  render: () => (
    <div className='flex -space-x-2'>
      <Avatar size='md' className='border-2 border-white'>
        <Avatar.Image
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          alt='John'
        />
        J
      </Avatar>
      <Avatar size='md' variant='secondary' className='border-2 border-white'>
        <Avatar.Image
          src='https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face'
          alt='Jane'
        />
        J
      </Avatar>
      <Avatar size='md' variant='tertiary' className='border-2 border-white'>
        <Avatar.Image
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
          alt='Mike'
        />
        M
      </Avatar>
      <Avatar size='md' variant='ghost' className='border-2 border-white'>
        +3
      </Avatar>
    </div>
  ),
}

/**
 * Avatar with different content types
 */
export const ContentTypes: Story = {
  render: () => (
    <div className='flex gap-4 flex-wrap'>
      <Avatar>JD</Avatar>
      <Avatar variant='secondary'>👤</Avatar>
      <Avatar variant='tertiary'>🎨</Avatar>
      <Avatar variant='success'>✓</Avatar>
      <Avatar variant='info'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-4 h-4'
        >
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
        </svg>
      </Avatar>
    </div>
  ),
}
