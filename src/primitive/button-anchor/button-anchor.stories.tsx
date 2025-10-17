import type { Meta, StoryObj } from '@storybook/react'
import { ButtonAnchor } from './button-anchor'

const meta: Meta<typeof ButtonAnchor> = {
  title: 'Primitive/ButtonAnchor',
  component: ButtonAnchor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ButtonAnchor component is a navigation link styled as a button that directly aligns with the native HTML anchor element. It provides 3 essential variants for different use cases and 3 size options.

## Features
- **3 Variants**: Primary (main actions), ghost (subtle), outline (secondary)
- **3 Sizes**: Small, medium (default), large
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management
- **Browser-aligned**: Behaves like native anchor with button styling

## Usage
Use the ButtonAnchor component for navigation actions that should look like buttons. Choose the variant based on the action's importance and context:
- **Primary**: Main call-to-action links
- **Ghost**: Subtle navigation that shouldn't compete visually
- **Outline**: Secondary navigation or alternative choices
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonAnchor>

// =============================================================================
// Interactive Playground
// =============================================================================

/**
 * Interactive playground to test all button anchor properties.
 * Use controls to change variant, size, disabled state, and href.
 */
export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    href: '#',
  },
}

// =============================================================================
// Variants
// =============================================================================

/**
 * All 3 button anchor variants showing visual hierarchy and use cases.
 * Primary for main actions, ghost for subtle actions, outline for secondary.
 */
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <ButtonAnchor variant='primary' href='#primary'>
        Primary
      </ButtonAnchor>
      <ButtonAnchor variant='ghost' href='#ghost'>
        Ghost
      </ButtonAnchor>
      <ButtonAnchor variant='outline' href='#outline'>
        Outline
      </ButtonAnchor>
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
      <ButtonAnchor size='sm' href='#small'>
        Small
      </ButtonAnchor>
      <ButtonAnchor size='md' href='#medium'>
        Medium
      </ButtonAnchor>
      <ButtonAnchor size='lg' href='#large'>
        Large
      </ButtonAnchor>
    </div>
  ),
}

// =============================================================================
// States
// =============================================================================

/**
 * Button anchor states: normal and disabled.
 * Disabled state prevents navigation and reduces opacity.
 */
export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <ButtonAnchor variant='primary' href='#normal'>
          Normal
        </ButtonAnchor>
        <ButtonAnchor variant='primary' disabled href='#disabled'>
          Disabled
        </ButtonAnchor>
      </div>
      <div className='flex flex-wrap gap-4'>
        <ButtonAnchor variant='outline' href='#normal'>
          Normal
        </ButtonAnchor>
        <ButtonAnchor variant='outline' disabled href='#disabled'>
          Disabled
        </ButtonAnchor>
      </div>
      <div className='flex flex-wrap gap-4'>
        <ButtonAnchor variant='ghost' href='#normal'>
          Normal
        </ButtonAnchor>
        <ButtonAnchor variant='ghost' disabled href='#disabled'>
          Disabled
        </ButtonAnchor>
      </div>
    </div>
  ),
}

// =============================================================================
// Real-world Examples
// =============================================================================

/**
 * Common navigation patterns using ButtonAnchor.
 * Examples of primary and secondary navigation actions.
 */
export const RealWorldExamples: Story = {
  render: () => (
    <div className='space-y-6'>
      {/* Call to action navigation */}
      <div className='space-y-2'>
        <p className='text-sm text-gray-600'>Call to action navigation:</p>
        <div className='flex gap-3'>
          <ButtonAnchor variant='primary' size='lg' href='/get-started'>
            Get Started
          </ButtonAnchor>
          <ButtonAnchor variant='outline' size='lg' href='/learn-more'>
            Learn More
          </ButtonAnchor>
        </div>
      </div>

      {/* Navigation in card */}
      <div className='space-y-2'>
        <p className='text-sm text-gray-600'>Navigation in card:</p>
        <div className='rounded-lg border border-gray-200 p-6'>
          <h3 className='mb-2 text-lg font-semibold'>Card Title</h3>
          <p className='mb-4 text-gray-600'>
            Some description text about this card content.
          </p>
          <div className='flex gap-3'>
            <ButtonAnchor variant='primary' href='/view-details'>
              View Details
            </ButtonAnchor>
            <ButtonAnchor variant='ghost' href='/cancel'>
              Cancel
            </ButtonAnchor>
          </div>
        </div>
      </div>

      {/* Toolbar navigation */}
      <div className='space-y-2'>
        <p className='text-sm text-gray-600'>Toolbar navigation:</p>
        <div className='flex gap-2 rounded-lg border border-gray-200 p-2'>
          <ButtonAnchor variant='ghost' size='sm' href='/dashboard'>
            Dashboard
          </ButtonAnchor>
          <ButtonAnchor variant='ghost' size='sm' href='/settings'>
            Settings
          </ButtonAnchor>
          <ButtonAnchor variant='ghost' size='sm' href='/profile'>
            Profile
          </ButtonAnchor>
        </div>
      </div>
    </div>
  ),
}

// =============================================================================
// Accessibility Examples
// =============================================================================

/**
 * Demonstrating accessibility features.
 * Disabled links prevent navigation and announce their state.
 */
export const AccessibilityExamples: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <p className='text-sm text-gray-600'>
          Disabled links prevent navigation and are announced as disabled:
        </p>
        <div className='flex gap-3'>
          <ButtonAnchor variant='primary' href='/enabled'>
            Enabled Link
          </ButtonAnchor>
          <ButtonAnchor variant='primary' disabled href='/disabled'>
            Disabled Link
          </ButtonAnchor>
        </div>
      </div>

      <div className='space-y-2'>
        <p className='text-sm text-gray-600'>
          Focus indicators are clearly visible for keyboard navigation:
        </p>
        <div className='flex gap-3'>
          <ButtonAnchor variant='primary' href='/first'>
            First Link
          </ButtonAnchor>
          <ButtonAnchor variant='outline' href='/second'>
            Second Link
          </ButtonAnchor>
          <ButtonAnchor variant='ghost' href='/third'>
            Third Link
          </ButtonAnchor>
        </div>
      </div>
    </div>
  ),
}
