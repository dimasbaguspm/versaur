/**
 * ButtonIcon stories demonstrating icon-only buttons with various variants, shapes, and sizes.
 * This component is perfect for toolbars, action buttons, and compact interfaces where space is limited.
 */

import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Heart, Settings, Trash2 } from 'lucide-react'
import { ButtonIcon } from './button-icon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Primitive/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ButtonIcon component is an icon-only button that directly aligns with the native HTML button element. It provides 4 essential variants for different use cases, 3 size options, and 3 shape variations.

## Features
- **4 Variants**: Primary (main actions), ghost (subtle), outline (secondary), destructive (dangerous actions)
- **3 Sizes**: Small, medium (default), large
- **3 Shapes**: Rounded (default), square, circle
- **Busy State**: Loading spinner with auto-disable
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management, required aria-label
- **Browser-aligned**: Behaves like native button with enhanced styling

## Usage
Use the ButtonIcon component for any icon-only action in your UI. Choose the variant based on the action's importance and context:
- **Primary**: Main call-to-action icon buttons
- **Ghost**: Subtle actions that shouldn't compete visually
- **Outline**: Secondary actions or alternative choices
- **Destructive**: Delete, remove, or other irreversible actions
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'outline', 'destructive'],
      description: 'Visual style variant',
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
    busy: {
      control: 'boolean',
      description: 'Whether the button is in a loading/busy state',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for screen readers (required)',
    },
  },
  args: {
    'aria-label': 'Add item',
  },
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

/**
 * Interactive playground to test all button icon properties.
 */
export const Playground: Story = {
  args: {
    as: Plus,
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    disabled: false,
    busy: false,
  },
}

/**
 * All 4 button icon variants showing visual hierarchy and use cases.
 */
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon as={Plus} variant='primary' aria-label='Primary action' />
      <ButtonIcon as={Heart} variant='ghost' aria-label='Ghost action' />
      <ButtonIcon as={Settings} variant='outline' aria-label='Outline action' />
      <ButtonIcon
        as={Trash2}
        variant='destructive'
        aria-label='Delete action'
      />
    </div>
  ),
}

/**
 * All three sizes showing proportional scaling.
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <ButtonIcon as={Plus} size='sm' aria-label='Small button' />
      <ButtonIcon as={Plus} size='md' aria-label='Medium button' />
      <ButtonIcon as={Plus} size='lg' aria-label='Large button' />
    </div>
  ),
}

/**
 * Different shapes for various design contexts.
 */
export const Shapes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <ButtonIcon as={Plus} shape='rounded' aria-label='Rounded shape' />
      <ButtonIcon as={Plus} shape='square' aria-label='Square shape' />
      <ButtonIcon as={Plus} shape='circle' aria-label='Circle shape' />
    </div>
  ),
}

/**
 * All button states: normal, busy (loading), and disabled.
 */
export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <ButtonIcon as={Plus} variant='primary' aria-label='Normal' />
        <ButtonIcon as={Plus} variant='primary' busy aria-label='Busy' />
        <ButtonIcon
          as={Plus}
          variant='primary'
          disabled
          aria-label='Disabled'
        />
      </div>
      <div className='flex flex-wrap gap-4'>
        <ButtonIcon as={Settings} variant='outline' aria-label='Normal' />
        <ButtonIcon as={Settings} variant='outline' busy aria-label='Busy' />
        <ButtonIcon
          as={Settings}
          variant='outline'
          disabled
          aria-label='Disabled'
        />
      </div>
      <div className='flex flex-wrap gap-4'>
        <ButtonIcon as={Trash2} variant='destructive' aria-label='Normal' />
        <ButtonIcon as={Trash2} variant='destructive' busy aria-label='Busy' />
        <ButtonIcon
          as={Trash2}
          variant='destructive'
          disabled
          aria-label='Disabled'
        />
      </div>
    </div>
  ),
}

/**
 * Toolbar example showing ButtonIcon in a practical context.
 */
export const ToolbarExample: Story = {
  render: () => (
    <div className='flex items-center gap-1 p-2 bg-gray-50 rounded-md'>
      <ButtonIcon as={Plus} variant='ghost' size='sm' aria-label='Add item' />
      <ButtonIcon as={Heart} variant='ghost' size='sm' aria-label='Like' />
      <ButtonIcon
        as={Settings}
        variant='ghost'
        size='sm'
        aria-label='Settings'
      />
      <div className='w-px h-4 bg-gray-300 mx-1' />
      <ButtonIcon as={Trash2} variant='ghost' size='sm' aria-label='Delete' />
    </div>
  ),
}

/**
 * Loading states for async operations.
 */
export const LoadingStates: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon
        as={Plus}
        variant='primary'
        busy
        aria-label='Loading primary'
      />
      <ButtonIcon as={Heart} variant='ghost' busy aria-label='Loading ghost' />
      <ButtonIcon
        as={Settings}
        variant='outline'
        busy
        aria-label='Loading outline'
      />
      <ButtonIcon
        as={Trash2}
        variant='destructive'
        busy
        aria-label='Loading destructive'
      />
    </div>
  ),
}

/**
 * Circular icon buttons for profile and avatar actions.
 */
export const CircularButtons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonIcon as={Plus} shape='circle' variant='primary' aria-label='Add' />
      <ButtonIcon as={Heart} shape='circle' variant='ghost' aria-label='Like' />
      <ButtonIcon
        as={Settings}
        shape='circle'
        variant='outline'
        aria-label='Settings'
      />
      <ButtonIcon
        as={Trash2}
        shape='circle'
        variant='destructive'
        aria-label='Delete'
      />
    </div>
  ),
}
