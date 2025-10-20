import type { Meta, StoryObj } from '@storybook/react'
import { FilterChipGroup } from './filter-chip-group'
import { FilterChip } from '@/primitive/filter-chip'
import { Button } from '@/primitive'

/**
 * FilterChipGroup provides layout management for filter chips with control over positioning,
 * alignment, and fluid behavior. It's designed to wrap FilterChip components and manage
 * their positioning effectively for filtering interfaces.
 *
 * ## Features
 * - **Alignment control**: Position filter chips with start, center, end, between, around, or evenly
 * - **Orientation**: Horizontal or vertical layout
 * - **Gap management**: Control spacing between filter chips with predefined sizes
 * - **Overlay mode**: Single-line horizontal scrolling without wrapping
 * - **Accessibility**: Proper ARIA roles for screen readers
 *
 * ## Usage
 * Wrap FilterChip components with FilterChipGroup to control their layout and alignment
 */
const meta: Meta<typeof FilterChipGroup> = {
  title: 'Layouts/FilterChipGroup',
  component: FilterChipGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible layout component for managing filter chip positioning, alignment, and fluid behavior.',
      },
    },
  },
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Alignment of filter chips within the group',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the filter chip group',
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the gap between filter chips',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Whether filter chips should expand to fill available space',
    },
    overlay: {
      control: { type: 'boolean' },
      description:
        'Whether items should overlay in single line without wrapping',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterChipGroup>

/**
 * Default filter chip group with horizontal layout and start alignment
 */
export const Default: Story = {
  render: args => (
    <FilterChipGroup {...args}>
      <FilterChip>Category: Electronics</FilterChip>
      <FilterChip>Brand: Samsung</FilterChip>
      <FilterChip>Price: $500-$1000</FilterChip>
      <Button variant='ghost' size='sm'>
        Clear All
      </Button>
    </FilterChipGroup>
  ),
}

/**
 * Filter chip group with space between - useful for filter sections with clear/apply actions
 */
export const SpaceBetween: Story = {
  render: args => (
    <div
      style={{
        width: '500px',
        border: '1px solid var(--color-border)',
        padding: '16px',
      }}
    >
      <FilterChipGroup {...args} alignment='between'>
        <div className='flex gap-2 flex-wrap'>
          <FilterChip>Category: Electronics</FilterChip>
          <FilterChip>Brand: Samsung</FilterChip>
        </div>
        <Button variant='ghost' size='sm'>
          Clear All
        </Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Vertical filter chip group - useful for sidebars or stacked filter interfaces
 */
export const Vertical: Story = {
  render: args => (
    <div
      style={{
        width: '250px',
        border: '1px solid var(--color-border)',
        padding: '16px',
      }}
    >
      <FilterChipGroup {...args} orientation='vertical' gap='sm'>
        <FilterChip>Category: Electronics</FilterChip>
        <FilterChip>Brand: Samsung</FilterChip>
        <FilterChip>Price: $500-$1000</FilterChip>
        <Button variant='ghost' size='sm'>
          Clear Filters
        </Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Overlay mode - filter chips scroll horizontally without wrapping
 */
export const Overlay: Story = {
  render: args => (
    <div
      style={{
        width: '400px',
        border: '1px solid var(--color-border)',
        padding: '16px',
      }}
    >
      <FilterChipGroup {...args} overlay>
        <FilterChip>Category: Electronics</FilterChip>
        <FilterChip>Brand: Samsung</FilterChip>
        <FilterChip>Price: $500-$1000</FilterChip>
        <FilterChip>Rating: 4+</FilterChip>
        <FilterChip>In Stock</FilterChip>
        <Button variant='ghost' size='sm'>
          Clear All
        </Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Real-world e-commerce filter example
 */
export const RealWorldExamples: Story = {
  render: _args => (
    <div className='space-y-6 max-w-2xl'>
      {/* Active filters header */}
      <div>
        <h3 className='mb-3 text-sm font-medium'>Active Filters (8)</h3>
        <FilterChipGroup alignment='start' gap='sm'>
          <FilterChip>Category: Electronics</FilterChip>
          <FilterChip>Brand: Samsung</FilterChip>
          <FilterChip>Price: $500-$1000</FilterChip>
          <FilterChip>Rating: 4+</FilterChip>
          <FilterChip>Color: Black</FilterChip>
          <FilterChip>In Stock</FilterChip>
          <FilterChip>Free Shipping</FilterChip>
          <FilterChip>On Sale</FilterChip>
          <Button variant='ghost' size='sm'>
            Clear All
          </Button>
        </FilterChipGroup>
      </div>

      {/* Sidebar filters */}
      <div
        style={{
          width: '250px',
          border: '1px solid var(--color-border)',
          padding: '16px',
        }}
      >
        <h3 className='mb-3 text-sm font-medium'>Sidebar Filters</h3>
        <FilterChipGroup orientation='vertical' gap='sm'>
          <FilterChip>Category: Electronics</FilterChip>
          <FilterChip>Price: $500-$1000</FilterChip>
          <FilterChip>In Stock</FilterChip>
        </FilterChipGroup>
      </div>
    </div>
  ),
}
