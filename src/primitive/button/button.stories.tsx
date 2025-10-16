import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Primitive/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a simple, accessible button that directly aligns with the native HTML button element. It provides 4 essential variants for different use cases and 3 size options.

## Features
- **4 Variants**: Primary (main actions), ghost (subtle), outline (secondary), destructive (dangerous actions)
- **3 Sizes**: Small, medium (default), large
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management
- **Browser-aligned**: Behaves like native button with enhanced styling

## Usage
Use the Button component for any clickable action in your UI. Choose the variant based on the action's importance and context:
- **Primary**: Main call-to-action buttons
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
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    busy: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// =============================================================================
// Interactive Playground
// =============================================================================

/**
 * Interactive playground to test all button properties.
 * Use controls to change variant, size, disabled, and busy states.
 */
export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    busy: false,
  },
}

// =============================================================================
// Variants
// =============================================================================

/**
 * All 4 button variants showing visual hierarchy and use cases.
 * Primary for main actions, ghost for subtle actions, outline for secondary, destructive for dangerous actions.
 */
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  ),
}

// =============================================================================
// Sizes
// =============================================================================

/**
 * All three sizes showing proportional scaling.
 * Small (28px), medium/default (36px), and large (40px) heights.
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}

// =============================================================================
// States
// =============================================================================

/**
 * All button states: normal, busy (loading), and disabled.
 * Busy state shows spinner and auto-disables interaction. Disabled state reduces opacity.
 */
export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary'>Normal</Button>
        <Button variant='primary' busy>
          Busy
        </Button>
        <Button variant='primary' disabled>
          Disabled
        </Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='outline'>Normal</Button>
        <Button variant='outline' busy>
          Busy
        </Button>
        <Button variant='outline' disabled>
          Disabled
        </Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='destructive'>Normal</Button>
        <Button variant='destructive' busy>
          Busy
        </Button>
        <Button variant='destructive' disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
}

// =============================================================================
// Real-world Examples
// =============================================================================

/**
 * Common form actions pattern with cancel and submit buttons.
 */
export const FormActions: Story = {
  render: () => (
    <div className='flex gap-3'>
      <Button variant='outline'>Cancel</Button>
      <Button variant='primary'>Submit</Button>
    </div>
  ),
}

/**
 * Form submission with loading state - typical async operation pattern.
 */
export const FormSubmitting: Story = {
  render: () => (
    <div className='flex gap-3'>
      <Button variant='outline' disabled>
        Cancel
      </Button>
      <Button variant='primary' busy>
        Submitting...
      </Button>
    </div>
  ),
}

/**
 * Destructive action with confirmation pattern for dangerous operations.
 */
export const DestructiveAction: Story = {
  render: () => (
    <div className='flex gap-3'>
      <Button variant='outline'>Cancel</Button>
      <Button variant='destructive'>Delete Account</Button>
    </div>
  ),
}

/**
 * Multiple button sizes working together in context.
 */
export const SizeVariations: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-3'>
      <Button size='sm' variant='outline'>
        Cancel
      </Button>
      <Button size='md' variant='primary'>
        Save
      </Button>
      <Button size='lg' variant='primary'>
        Continue
      </Button>
    </div>
  ),
}
