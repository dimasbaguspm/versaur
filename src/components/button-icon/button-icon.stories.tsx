/**
 * ButtonIcon stories demonstrating icon-only buttons with various variants, shapes, and sizes.
 * This component is perfect for toolbars, action buttons, and compact interfaces where space is limited.
 * Each story showcases different use cases and styling options available in the Versaur design system.
 */

import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Heart, Settings, Trash2 } from 'lucide-react'
import { ButtonIcon } from './button-icon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon-only buttons for compact interfaces and toolbars. Supports all Versaur color variants with customizable shapes and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-outline',
        'primary-ghost',
        'secondary',
        'secondary-outline',
        'secondary-ghost',
        'tertiary',
        'tertiary-outline',
        'tertiary-ghost',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'neutral-ghost',
        'success',
        'success-outline',
        'success-ghost',
        'info',
        'info-outline',
        'info-ghost',
        'warning',
        'warning-outline',
        'warning-ghost',
        'danger',
        'danger-outline',
        'danger-ghost',
        'outline',
        'destructive',
      ],
      description: 'Visual style variant based on Versaur color system',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'circle'],
      description: 'Shape of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  args: {
    'aria-label': 'Add item',
  },
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

/**
 * Default ButtonIcon with primary variant, medium size, and rounded shape.
 * This is the most common configuration for general-purpose icon buttons.
 */
export const Default: Story = {
  args: {
    children: <Plus size={16} />,
  },
}

/**
 * All available color variants showcasing the Versaur color system.
 * Each variant has a specific purpose and semantic meaning in the design system.
 */
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='primary' aria-label='Primary action'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Primary</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='secondary' aria-label='Secondary action'>
          <Heart size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Secondary</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='tertiary' aria-label='Tertiary action'>
          <Settings size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Tertiary</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='ghost' aria-label='Ghost action'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Ghost</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='neutral' aria-label='Neutral action'>
          <Settings size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Neutral</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='success' aria-label='Success action'>
          <Heart size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Success</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='info' aria-label='Info action'>
          <Settings size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Info</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='warning' aria-label='Warning action'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Warning</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon variant='danger' aria-label='Danger action'>
          <Trash2 size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Danger</span>
      </div>
    </div>
  ),
}

/**
 * Outline variants provide a subtle, bordered appearance.
 * Perfect for secondary actions and interfaces that need visual hierarchy.
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon variant='primary-outline' aria-label='Primary outline'>
        <Plus size={16} />
      </ButtonIcon>
      <ButtonIcon variant='secondary-outline' aria-label='Secondary outline'>
        <Heart size={16} />
      </ButtonIcon>
      <ButtonIcon variant='tertiary-outline' aria-label='Tertiary outline'>
        <Settings size={16} />
      </ButtonIcon>
      <ButtonIcon variant='success-outline' aria-label='Success outline'>
        <Heart size={16} />
      </ButtonIcon>
      <ButtonIcon variant='danger-outline' aria-label='Danger outline'>
        <Trash2 size={16} />
      </ButtonIcon>
    </div>
  ),
}

/**
 * Ghost variants provide minimal visual weight with subtle hover effects.
 * Ideal for toolbar buttons and non-primary actions.
 */
export const GhostVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon variant='primary-ghost' aria-label='Primary ghost'>
        <Plus size={16} />
      </ButtonIcon>
      <ButtonIcon variant='secondary-ghost' aria-label='Secondary ghost'>
        <Heart size={16} />
      </ButtonIcon>
      <ButtonIcon variant='tertiary-ghost' aria-label='Tertiary ghost'>
        <Settings size={16} />
      </ButtonIcon>
      <ButtonIcon variant='success-ghost' aria-label='Success ghost'>
        <Heart size={16} />
      </ButtonIcon>
      <ButtonIcon variant='danger-ghost' aria-label='Danger ghost'>
        <Trash2 size={16} />
      </ButtonIcon>
    </div>
  ),
}

/**
 * Different sizes for various interface contexts.
 * Small for compact toolbars, medium for standard use, large for prominent actions.
 */
export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon size='sm' aria-label='Small size'>
          <Plus size={14} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Small (32px)</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon size='md' aria-label='Medium size'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Medium (40px)</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon size='lg' aria-label='Large size'>
          <Plus size={18} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Large (48px)</span>
      </div>
    </div>
  ),
}

/**
 * Different shapes for various design contexts.
 * Rounded for general use, square for grid layouts, circle for profile actions.
 */
export const AllShapes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon shape='rounded' aria-label='Rounded shape'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Rounded</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon shape='square' aria-label='Square shape'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Square</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ButtonIcon shape='circle' aria-label='Circle shape'>
          <Plus size={16} />
        </ButtonIcon>
        <span className='text-sm text-gray-600'>Circle</span>
      </div>
    </div>
  ),
}

/**
 * Disabled state for all variants and sizes.
 * Demonstrates consistent disabled styling across the component system.
 */
export const DisabledStates: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon disabled aria-label='Disabled primary'>
        <Plus size={16} />
      </ButtonIcon>
      <ButtonIcon disabled variant='secondary' aria-label='Disabled secondary'>
        <Heart size={16} />
      </ButtonIcon>
      <ButtonIcon
        disabled
        variant='primary-outline'
        aria-label='Disabled outline'
      >
        <Settings size={16} />
      </ButtonIcon>
      <ButtonIcon disabled variant='danger-ghost' aria-label='Disabled ghost'>
        <Trash2 size={16} />
      </ButtonIcon>
    </div>
  ),
}

/**
 * Toolbar example showing ButtonIcon in a practical context.
 * Demonstrates how icon buttons work together in a typical interface.
 */
export const ToolbarExample: Story = {
  render: () => (
    <div className='flex items-center gap-1 p-2 bg-gray-50 rounded-md'>
      <ButtonIcon variant='ghost' size='sm' aria-label='Add item'>
        <Plus size={14} />
      </ButtonIcon>
      <ButtonIcon variant='ghost' size='sm' aria-label='Like'>
        <Heart size={14} />
      </ButtonIcon>
      <ButtonIcon variant='ghost' size='sm' aria-label='Settings'>
        <Settings size={14} />
      </ButtonIcon>
      <div className='w-px h-4 bg-gray-300 mx-1' />
      <ButtonIcon variant='danger-ghost' size='sm' aria-label='Delete'>
        <Trash2 size={14} />
      </ButtonIcon>
    </div>
  ),
}
