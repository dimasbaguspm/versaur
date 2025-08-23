import type { Meta, StoryObj } from '@storybook/react'
import { BadgeGroup } from './badge-group'
import { Badge } from '@/primitive/badge'

/**
 * BadgeGroup provides layout management for badges with control over positioning,
 * alignment, and fluid behavior. It's designed to wrap Badge components and manage
 * their positioning effectively.
 *
 * ## Features
 * - **Alignment control**: Position badges with start, center, end, between, around, or evenly
 * - **Orientation**: Horizontal or vertical layout
 * - **Fluid behavior**: Make badges expand to fill available space
 * - **Gap management**: Control spacing between badges with predefined sizes
 * - **Accessibility**: Proper ARIA roles for screen readers
 *
 * ## Usage
 * Wrap Badge components with BadgeGroup to control their layout and alignment
 */
const meta: Meta<typeof BadgeGroup> = {
  title: 'Layouts/BadgeGroup',
  component: BadgeGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible layout component for managing badge positioning, alignment, and fluid behavior.',
      },
    },
  },
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Alignment of buttons within the group',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the button group',
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the gap between buttons',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Whether buttons should expand to fill available space',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BadgeGroup>

/**
 * Default badge badge with horizontal layout and start alignment
 */
export const Default: Story = {
  render: args => (
    <BadgeGroup {...args}>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='tertiary'>Tertiary</Badge>
      <Badge color='ghost'>Ghost</Badge>
      <Badge color='neutral'>Neutral</Badge>
    </BadgeGroup>
  ),
}

/**
 * Button group with center alignment - useful for modal actions
 */
export const CenterAligned: Story = {
  render: args => (
    <BadgeGroup {...args} alignment='center'>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='tertiary'>Tertiary</Badge>
      <Badge color='ghost'>Ghost</Badge>
      <Badge color='neutral'>Neutral</Badge>
    </BadgeGroup>
  ),
}

/**
 * Button group with space between - common for navigation or form actions
 */
export const SpaceBetween: Story = {
  render: args => (
    <div style={{ width: '400px', border: '1px solid var(--color-primary)' }}>
      <BadgeGroup {...args} alignment='between'>
        <Badge color='primary'>Primary</Badge>
        <Badge color='secondary'>Secondary</Badge>
        <Badge color='tertiary'>Tertiary</Badge>
        <Badge color='ghost'>Ghost</Badge>
        <Badge color='neutral'>Neutral</Badge>
      </BadgeGroup>
    </div>
  ),
}

/**
 * Vertical button group - useful for sidebars or stacked actions
 */
export const Vertical: Story = {
  render: args => (
    <BadgeGroup {...args} orientation='vertical'>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='tertiary'>Tertiary</Badge>
      <Badge color='ghost'>Ghost</Badge>
      <Badge color='neutral'>Neutral</Badge>
    </BadgeGroup>
  ),
}

/**
 * Fluid buttons that expand to fill available space
 */
export const Fluid: Story = {
  render: args => (
    <div style={{ width: '400px', border: '1px solid var(--color-primary)' }}>
      <BadgeGroup {...args} fluid>
        <Badge color='primary'>Primary</Badge>
        <Badge color='secondary'>Secondary</Badge>
        <Badge color='tertiary'>Tertiary</Badge>
        <Badge color='ghost'>Ghost</Badge>
        <Badge color='neutral'>Neutral</Badge>
      </BadgeGroup>
    </div>
  ),
}

/**
 * Vertical fluid layout - perfect for mobile interfaces
 */
export const VerticalFluid: Story = {
  render: args => (
    <div style={{ width: '200px' }}>
      <BadgeGroup {...args} orientation='vertical' fluid>
        <Badge color='primary'>Primary</Badge>
        <Badge color='secondary'>Secondary</Badge>
        <Badge color='tertiary'>Tertiary</Badge>
        <Badge color='ghost'>Ghost</Badge>
        <Badge color='neutral'>Neutral</Badge>
      </BadgeGroup>
    </div>
  ),
}

/**
 * Different gap sizes to control spacing
 */
export const GapVariations: Story = {
  render: _args => (
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Extra Small Gap</h3>
        <BadgeGroup gap='xs'>
          <Badge color='primary'>Primary</Badge>
          <Badge color='secondary'>Secondary</Badge>
          <Badge color='tertiary'>Tertiary</Badge>
          <Badge color='ghost'>Ghost</Badge>
          <Badge color='neutral'>Neutral</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Small Gap</h3>
        <BadgeGroup gap='sm'>
          <Badge color='primary'>Primary</Badge>
          <Badge color='secondary'>Secondary</Badge>
          <Badge color='tertiary'>Tertiary</Badge>
          <Badge color='ghost'>Ghost</Badge>
          <Badge color='neutral'>Neutral</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Medium Gap (Default)</h3>
        <BadgeGroup gap='md'>
          <Badge color='primary'>Primary</Badge>
          <Badge color='secondary'>Secondary</Badge>
          <Badge color='tertiary'>Tertiary</Badge>
          <Badge color='ghost'>Ghost</Badge>
          <Badge color='neutral'>Neutral</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Large Gap</h3>
        <BadgeGroup gap='lg'>
          <Badge color='primary'>Primary</Badge>
          <Badge color='secondary'>Secondary</Badge>
          <Badge color='tertiary'>Tertiary</Badge>
          <Badge color='ghost'>Ghost</Badge>
          <Badge color='neutral'>Neutral</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className='mb-2 text-sm font-medium'>Extra Large Gap</h3>
        <BadgeGroup gap='xl'>
          <Badge color='primary'>Primary</Badge>
          <Badge color='secondary'>Secondary</Badge>
          <Badge color='tertiary'>Tertiary</Badge>
          <Badge color='ghost'>Ghost</Badge>
          <Badge color='neutral'>Neutral</Badge>
        </BadgeGroup>
      </div>
    </div>
  ),
}
