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
 * - **Fluid behavior**: Make filter chips expand to fill available space
 * - **Gap management**: Control spacing between filter chips with predefined sizes
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
      <FilterChip>Active Filter 1</FilterChip>
      <FilterChip>Active Filter 2</FilterChip>
      <Button variant='ghost'>Clear All</Button>
    </FilterChipGroup>
  ),
}

/**
 * Filter chip group with center alignment - useful for centered filter interfaces
 */
export const CenterAligned: Story = {
  render: args => (
    <FilterChipGroup {...args} alignment='center'>
      <FilterChip>Active Filter 1</FilterChip>
      <FilterChip>Active Filter 2</FilterChip>
      <Button variant='ghost'>Clear All</Button>
    </FilterChipGroup>
  ),
}

/**
 * Filter chip group with space between - common for filter sections with clear/apply actions
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
        <FilterChip>Active Filter 1</FilterChip>
        <FilterChip>Active Filter 2</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Vertical filter chip group - useful for sidebars or stacked filter interfaces
 */
export const Vertical: Story = {
  render: args => (
    <FilterChipGroup {...args} orientation='vertical'>
      <FilterChip>Active Filter 1</FilterChip>
      <FilterChip>Active Filter 2</FilterChip>
      <Button variant='ghost'>Clear All</Button>
    </FilterChipGroup>
  ),
}

/**
 * Fluid filter chips that expand to fill available space
 */
export const Fluid: Story = {
  render: args => (
    <div
      style={{
        width: '500px',
        border: '1px solid var(--color-border)',
        padding: '16px',
      }}
    >
      <FilterChipGroup {...args} fluid>
        <FilterChip>Active Filter 1</FilterChip>
        <FilterChip>Active Filter 2</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Vertical fluid layout - perfect for mobile filter interfaces
 */
export const VerticalFluid: Story = {
  render: args => (
    <div
      style={{
        width: '250px',
        border: '1px solid var(--color-border)',
        padding: '16px',
      }}
    >
      <FilterChipGroup {...args} orientation='vertical' fluid>
        <FilterChip>Active Filter 1</FilterChip>
        <FilterChip>Active Filter 2</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    </div>
  ),
}

/**
 * Different gap sizes to control spacing between filter chips
 */
export const GapVariations: Story = {
  render: _args => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Extra Small Gap</h3>
        <FilterChipGroup gap='xs'>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Small Gap</h3>
        <FilterChipGroup gap='sm'>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Medium Gap (Default)</h3>
        <FilterChipGroup gap='md'>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Large Gap</h3>
        <FilterChipGroup gap='lg'>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Extra Large Gap</h3>
        <FilterChipGroup gap='xl'>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
    </div>
  ),
}

/**
 * Mixed variant filter chips showing different states
 */
export const MixedVariants: Story = {
  render: args => (
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Solid Variants</h3>
        <FilterChipGroup {...args}>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Outline Variants</h3>
        <FilterChipGroup {...args}>
          <FilterChip>Active Filter 1</FilterChip>
          <FilterChip>Active Filter 2</FilterChip>
          <Button variant='ghost'>Clear All</Button>
        </FilterChipGroup>
      </div>
    </div>
  ),
}

/**
 * Real-world e-commerce filter example
 */
export const EcommerceFilters: Story = {
  render: args => (
    <div style={{ maxWidth: '600px' }}>
      <h3 className='mb-3 text-lg font-semibold'>Active Filters</h3>
      <FilterChipGroup {...args} alignment='start' gap='sm'>
        <FilterChip>Active Filter 1</FilterChip>
        <FilterChip>Active Filter 2</FilterChip>
        <FilterChip>Active Filter 3</FilterChip>
        <FilterChip>Active Filter 4</FilterChip>
        <FilterChip>Active Filter 5</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    </div>
  ),
}
