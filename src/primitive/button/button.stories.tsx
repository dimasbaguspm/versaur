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
The Button component is a versatile, accessible button with support for semantic variants, outline styles, ghost styles, and multiple sizes. Built with Tailwind CSS and following Versaur's Spenicle color system.

## Features
- **Core Variants**: Primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (cream)
- **Semantic Variants**: Success, info, warning, danger
- **Style Variants**: Filled, outline, ghost
- **Sizes**: Small, medium, large
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management
- **Responsive**: Mobile-first responsive design

## Color System
Uses the Spenicle color palette with professional harmony: coral for primary actions, sage for secondary, mist for tertiary, slate for ghost/text, and cream for neutral backgrounds.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// =============================================================================
// Color Stories - Semantic color system
// =============================================================================

/**
 * Complete color matrix showing all core and semantic colors in all style variants.
 * Demonstrates the comprehensive Spenicle color system and variant combinations.
 */
export const ColorMatrix: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>Core Variants</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary'>Primary (Coral)</Button>
          <Button variant='secondary'>Secondary (Sage)</Button>
          <Button variant='tertiary'>Tertiary (Mist)</Button>
          <Button variant='accent_1'>Accent 1 (Lavender)</Button>
          <Button variant='accent_2'>Accent 2 (Amber)</Button>
          <Button variant='accent_3'>Accent 3 (Rose)</Button>
          <Button variant='ghost'>Ghost (Slate)</Button>
          <Button variant='neutral'>Neutral (Light Gray)</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Semantic Variants</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='success'>Success</Button>
          <Button variant='info'>Info</Button>
          <Button variant='warning'>Warning</Button>
          <Button variant='danger'>Danger</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Outline Variants</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary-outline'>Primary</Button>
          <Button variant='secondary-outline'>Secondary</Button>
          <Button variant='tertiary-outline'>Tertiary</Button>
          <Button variant='accent_1-outline'>Accent 1</Button>
          <Button variant='accent_2-outline'>Accent 2</Button>
          <Button variant='accent_3-outline'>Accent 3</Button>
          <Button variant='ghost-outline'>Ghost</Button>
          <Button variant='neutral-outline'>Neutral</Button>
          <Button variant='success-outline'>Success</Button>
          <Button variant='info-outline'>Info</Button>
          <Button variant='warning-outline'>Warning</Button>
          <Button variant='danger-outline'>Danger</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Ghost Variants</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary-ghost'>Primary</Button>
          <Button variant='secondary-ghost'>Secondary</Button>
          <Button variant='tertiary-ghost'>Tertiary</Button>
          <Button variant='accent_1-ghost'>Accent 1</Button>
          <Button variant='accent_2-ghost'>Accent 2</Button>
          <Button variant='accent_3-ghost'>Accent 3</Button>

          <Button variant='neutral-ghost'>Neutral</Button>
          <Button variant='success-ghost'>Success</Button>
          <Button variant='info-ghost'>Info</Button>
          <Button variant='warning-ghost'>Warning</Button>
          <Button variant='danger-ghost'>Danger</Button>
        </div>
      </div>
    </div>
  ),
}

/**
 * All core colors in their filled variant.
 * Demonstrates the Spenicle color palette with coral, sage, mist, slate, and cream.
 */
export const CoreColors: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary (Coral)</Button>
      <Button variant='secondary'>Secondary (Sage)</Button>
      <Button variant='tertiary'>Tertiary (Mist)</Button>
      <Button variant='ghost'>Ghost (Slate)</Button>
      <Button variant='neutral'>Neutral (Light Gray)</Button>
    </div>
  ),
}

/**
 * All semantic colors in their filled variant.
 * Demonstrates the semantic color system for success, info, warning, and danger states.
 */
export const SemanticColors: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='success'>Success</Button>
      <Button variant='info'>Info</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='danger'>Danger</Button>
    </div>
  ),
}

/**
 * Outline variants provide a lighter visual weight while maintaining semantic meaning.
 * Perfect for secondary actions or when you need multiple buttons in close proximity.
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary-outline'>Primary Outline</Button>
      <Button variant='secondary-outline'>Secondary Outline</Button>
      <Button variant='tertiary-outline'>Tertiary Outline</Button>
      <Button variant='ghost-outline'>Ghost Outline</Button>
      <Button variant='success-outline'>Success Outline</Button>
      <Button variant='info-outline'>Info Outline</Button>
      <Button variant='warning-outline'>Warning Outline</Button>
      <Button variant='danger-outline'>Danger Outline</Button>
    </div>
  ),
}

/**
 * Ghost variants are the most subtle, perfect for navigation or when you need
 * a button that doesn't visually compete with other content.
 */
export const GhostVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary-ghost'>Primary Ghost</Button>
      <Button variant='secondary-ghost'>Secondary Ghost</Button>
      <Button variant='tertiary-ghost'>Tertiary Ghost</Button>
      <Button variant='success-ghost'>Success Ghost</Button>
      <Button variant='info-ghost'>Info Ghost</Button>
      <Button variant='warning-ghost'>Warning Ghost</Button>
      <Button variant='danger-ghost'>Danger Ghost</Button>
    </div>
  ),
}

/**
 * Comparison of all three style variants for the primary semantic color.
 * Shows how the same semantic meaning can be expressed with different visual weights.
 */
export const StyleComparison: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary Filled</Button>
      <Button variant='primary-outline'>Primary Outline</Button>
      <Button variant='primary-ghost'>Primary Ghost</Button>
    </div>
  ),
}

// =============================================================================
// Size Stories - Different button sizes
// =============================================================================

/**
 * Size comparison showing all three sizes side by side.
 * Demonstrates the proportional scaling of button sizes.
 */
export const SizeComparison: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}

// =============================================================================
// State Stories - Interactive states and conditions
// =============================================================================

/**
 * Comparison of enabled vs disabled states across different variants.
 * Shows how disabled state affects visual appearance while maintaining accessibility.
 */
export const DisabledComparison: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary'>Enabled</Button>
        <Button variant='primary' disabled>
          Disabled
        </Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary-outline'>Enabled Outline</Button>
        <Button variant='primary-outline' disabled>
          Disabled Outline
        </Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary-ghost'>Enabled Ghost</Button>
        <Button variant='primary-ghost' disabled>
          Disabled Ghost
        </Button>
      </div>
    </div>
  ),
}

/**
 * Loading state example showing how buttons can indicate ongoing processes.
 * While not built into the component, shows common usage patterns.
 */
export const LoadingState: Story = {
  args: {
    children: 'Loading...',
    disabled: true,
  },
}
