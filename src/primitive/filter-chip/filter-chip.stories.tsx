import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from './filter-chip'

const meta: Meta<typeof FilterChip> = {
  title: 'Primitive/FilterChip',
  component: FilterChip,
  parameters: {
    docs: {
      description: {
        component: `
The FilterChip component is a simple, accessible chip with neutral outline styling. Built with Tailwind CSS and following Versaur's design system.

## Features
- **Fixed Style**: Neutral outline variant for consistent filtering UI
- **Sizes**: Small, medium, large
- **Removable**: Includes cross icon for removing the chip
- **Accessibility**: Full keyboard navigation, ARIA attributes, focus management
- **Responsive**: Mobile-first responsive design

## Usage
Use FilterChip for tags, filters, categories, or any removable label elements in filtering contexts.

## Design
Uses a neutral outline style with border, white background, and subtle hover states for professional, consistent filtering interfaces.
        `,
      },
    },
  },
  argTypes: {
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
 * Multiple filter chips demonstrating typical usage
 */
export const MultipleFilters: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip>Category A</FilterChip>
      <FilterChip>Status: Active</FilterChip>
      <FilterChip>Date: Today</FilterChip>
      <FilterChip>Priority: High</FilterChip>
    </div>
  ),
}

/**
 * Disabled state demonstration
 */
export const Disabled: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <FilterChip disabled>Disabled Filter</FilterChip>
      <FilterChip disabled size='sm'>
        Small Disabled
      </FilterChip>
      <FilterChip disabled size='lg'>
        Large Disabled
      </FilterChip>
    </div>
  ),
}
