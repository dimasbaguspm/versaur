/**
 * Size variants for the Badge component.
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2 items-end'>
      <Badge size='sm'>Small</Badge>
      <Badge size='md'>Medium</Badge>
      <Badge size='lg'>Large</Badge>
      <Badge size='sm' iconLeft={<CheckIcon className='h-3 w-3' />}>
        Small Icon
      </Badge>
      <Badge size='md' iconLeft={<CheckIcon className='h-4 w-4' />}>
        Medium Icon
      </Badge>
      <Badge size='lg' iconLeft={<CheckIcon className='h-5 w-5' />}>
        Large Icon
      </Badge>
      <Badge size='sm' iconLeft={<CheckIcon className='h-3 w-3' />} />
      <Badge size='md' iconLeft={<CheckIcon className='h-4 w-4' />} />
      <Badge size='lg' iconLeft={<CheckIcon className='h-5 w-5' />} />
    </div>
  ),
}
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import {
  CheckIcon,
  StarIcon,
  AlertCircleIcon,
  InfoIcon,
  XIcon,
  ArrowRightIcon,
  UserIcon,
  ShieldCheckIcon,
} from 'lucide-react'

/**
 * The Badge component is used to present or highlight values with various styles and configurations.
 * It supports different variants (default/outline), sizes, shapes, colors, and icon positioning.
 * Perfect for status indicators, labels, tags, and highlighting important information.
 */
const meta: Meta<typeof Badge> = {
  title: 'Primitive/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile badge component for displaying status, labels, and highlighted information with icon support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Visual style variant',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square'],
      description: 'Shape of the badge',
    },
    color: {
      control: 'select',
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
      ],
      description: 'Color variant based on Versaur color system',
    },
    children: {
      control: 'text',
      description: 'Content to display in the badge',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default badge with primary color and medium size.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

/**
 * Showcase all available color variants with default styling.
 */
export const Colors: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='tertiary'>Tertiary</Badge>
      <Badge color='ghost'>Ghost</Badge>
      <Badge color='neutral'>Neutral</Badge>
      <Badge color='success'>Success</Badge>
      <Badge color='info'>Info</Badge>
      <Badge color='warning'>Warning</Badge>
      <Badge color='danger'>Danger</Badge>
    </div>
  ),
}

/**
 * Outline variant badges with transparent backgrounds and colored borders.
 */
export const Outline: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' color='primary'>
        Primary
      </Badge>
      <Badge variant='outline' color='secondary'>
        Secondary
      </Badge>
      <Badge variant='outline' color='tertiary'>
        Tertiary
      </Badge>
      <Badge variant='outline' color='ghost'>
        Ghost
      </Badge>
      <Badge variant='outline' color='neutral'>
        Neutral
      </Badge>
      <Badge variant='outline' color='success'>
        Success
      </Badge>
      <Badge variant='outline' color='info'>
        Info
      </Badge>
      <Badge variant='outline' color='warning'>
        Warning
      </Badge>
      <Badge variant='outline' color='danger'>
        Danger
      </Badge>
    </div>
  ),
}

/**
 * Different badge shapes - square (default) and fully rounded.
 */
export const Shapes: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Badge shape='square'>Square</Badge>
      <Badge shape='rounded'>Rounded</Badge>
    </div>
  ),
}

/**
 * Badges with icons positioned on the left side.
 */
export const WithLeftIcon: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge iconLeft={<CheckIcon className='h-4 w-4' />} color='success'>
        Verified
      </Badge>
      <Badge iconLeft={<StarIcon className='h-4 w-4' />} color='warning'>
        Featured
      </Badge>
      <Badge iconLeft={<UserIcon className='h-4 w-4' />} color='tertiary'>
        User
      </Badge>
      <Badge iconLeft={<ShieldCheckIcon className='h-4 w-4' />} color='info'>
        Secure
      </Badge>
    </div>
  ),
}

/**
 * Badges with icons positioned on the right side.
 */
export const WithRightIcon: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge iconRight={<ArrowRightIcon className='h-4 w-4' />} color='primary'>
        Continue
      </Badge>
      <Badge iconRight={<XIcon className='h-4 w-4' />} color='danger'>
        Remove
      </Badge>
      <Badge iconRight={<InfoIcon className='h-4 w-4' />} color='info'>
        Learn More
      </Badge>
      <Badge
        iconRight={<AlertCircleIcon className='h-4 w-4' />}
        color='warning'
      >
        Alert
      </Badge>
    </div>
  ),
}

/**
 * Icon-only badges without text content, perfect for compact interfaces.
 */
export const IconOnly: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge iconLeft={<CheckIcon className='h-4 w-4' />} color='success' />
      <Badge iconLeft={<StarIcon className='h-4 w-4' />} color='warning' />
      <Badge iconLeft={<XIcon className='h-4 w-4' />} color='danger' />
      <Badge iconLeft={<InfoIcon className='h-4 w-4' />} color='info' />
      <Badge iconLeft={<UserIcon className='h-4 w-4' />} color='tertiary' />
    </div>
  ),
}

/**
 * Real-world usage examples showing common badge patterns.
 */
export const Examples: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h4 className='text-sm font-medium text-gray-700'>Status Indicators</h4>
        <div className='flex flex-wrap gap-2'>
          <Badge iconLeft={<CheckIcon className='h-4 w-4' />} color='success'>
            Active
          </Badge>
          <Badge
            iconLeft={<AlertCircleIcon className='h-4 w-4' />}
            color='warning'
          >
            Pending
          </Badge>
          <Badge iconLeft={<XIcon className='h-4 w-4' />} color='danger'>
            Inactive
          </Badge>
        </div>
      </div>

      <div className='space-y-2'>
        <h4 className='text-sm font-medium text-gray-700'>
          Feature Highlights
        </h4>
        <div className='flex flex-wrap gap-2'>
          <Badge color='primary' shape='rounded'>
            New
          </Badge>
          <Badge
            iconLeft={<StarIcon className='h-4 w-4' />}
            color='warning'
            shape='rounded'
          >
            Premium
          </Badge>
          <Badge variant='outline' color='info'>
            Beta
          </Badge>
        </div>
      </div>

      <div className='space-y-2'>
        <h4 className='text-sm font-medium text-gray-700'>Notifications</h4>
        <div className='flex flex-wrap gap-2'>
          <Badge
            iconLeft={<CheckIcon className='h-4 w-4' />}
            color='success'
            shape='rounded'
          />
          <Badge color='danger' shape='rounded'>
            3
          </Badge>
          <Badge color='primary' shape='rounded'>
            99+
          </Badge>
        </div>
      </div>
    </div>
  ),
}

/**
 * Interactive playground for testing different badge configurations.
 */
export const Playground: Story = {
  args: {
    children: 'Playground',
    variant: 'default',
    shape: 'square',
    color: 'primary',
  },
  render: args => <Badge {...args} />,
}
