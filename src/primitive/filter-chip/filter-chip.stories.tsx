import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from './filter-chip'

const meta: Meta<typeof FilterChip> = {
  title: 'Primitive/FilterChip',
  component: FilterChip,
  parameters: {
    docs: {
      description: {
        component: `
The FilterChip component is a versatile, accessible chip with support for semantic variants, outline styles, and multiple sizes. Built with Tailwind CSS and following Versaur's color system.

## Features
- **Core Variants**: Primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (cream)
- **Semantic Variants**: Success, info, warning, danger
- **Style Variants**: Filled, outline
- **Sizes**: Small, medium, large
- **Removable**: Optional cross icon for removing the chip
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management
- **Responsive**: Mobile-first responsive design

## Usage
Use FilterChip for tags, filters, categories, or any removable label elements. The chip can be clickable (without onRemove) or removable (with onRemove callback).

## Color System
Uses the Versaur color palette with professional harmony: coral for primary actions, sage for secondary, mist for tertiary, slate for ghost/text, and cream for neutral backgrounds.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'tertiary',
        'tertiary-outline',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'success',
        'success-outline',
        'info',
        'info-outline',
        'warning',
        'warning-outline',
        'danger',
        'danger-outline',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Filter Label',
    variant: 'neutral-outline',
    size: 'md',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof FilterChip>

/**
 * Basic filter chip with neutral outline styling
 */
export const Default: Story = {
  args: {
    children: 'Category',
  },
}

/**
 * All available variants showcasing the Versaur color system
 */
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip variant='primary'>Primary</FilterChip>
      <FilterChip variant='primary-outline'>Primary Outline</FilterChip>
      <FilterChip variant='secondary'>Secondary</FilterChip>
      <FilterChip variant='secondary-outline'>Secondary Outline</FilterChip>
      <FilterChip variant='tertiary'>Tertiary</FilterChip>
      <FilterChip variant='tertiary-outline'>Tertiary Outline</FilterChip>
      <FilterChip variant='ghost'>Ghost</FilterChip>
      <FilterChip variant='ghost-outline'>Ghost Outline</FilterChip>
      <FilterChip variant='neutral'>Neutral</FilterChip>
      <FilterChip variant='neutral-outline'>Neutral Outline</FilterChip>
    </div>
  ),
}

/**
 * Semantic color variants for different states and contexts
 */
export const SemanticColors: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip variant='success'>Success</FilterChip>
      <FilterChip variant='success-outline'>Success Outline</FilterChip>
      <FilterChip variant='info'>Info</FilterChip>
      <FilterChip variant='info-outline'>Info Outline</FilterChip>
      <FilterChip variant='warning'>Warning</FilterChip>
      <FilterChip variant='warning-outline'>Warning Outline</FilterChip>
      <FilterChip variant='danger'>Danger</FilterChip>
      <FilterChip variant='danger-outline'>Danger Outline</FilterChip>
    </div>
  ),
}

/**
 * Different sizes for various layout contexts
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <FilterChip size='sm'>Small</FilterChip>
      <FilterChip size='md'>Medium</FilterChip>
      <FilterChip size='lg'>Large</FilterChip>
    </div>
  ),
}

/**
 * Removable chips in different variants
 */
export const RemovableVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip variant='primary'>Primary</FilterChip>
      <FilterChip variant='secondary-outline'>Secondary</FilterChip>
      <FilterChip variant='success'>Success</FilterChip>
      <FilterChip variant='danger-outline'>Danger</FilterChip>
    </div>
  ),
}

/**
 * Disabled state demonstration
 */
export const Disabled: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip disabled>Disabled</FilterChip>
      <FilterChip disabled>Disabled Removable</FilterChip>
      <FilterChip variant='primary' disabled>
        Disabled Primary
      </FilterChip>
      <FilterChip variant='secondary-outline' disabled>
        Disabled Outline
      </FilterChip>
    </div>
  ),
}
