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
 * - **Gap management**: Control spacing between badges with predefined sizes
 * - **Overlay mode**: Single-line horizontal scrolling without wrapping
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
      description: 'Alignment of badges within the group',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the badge group',
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the gap between badges',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Whether badges should expand to fill available space',
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
type Story = StoryObj<typeof BadgeGroup>

/**
 * Default badge group with horizontal layout and start alignment
 */
export const Default: Story = {
  render: args => (
    <BadgeGroup {...args}>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='success'>Success</Badge>
      <Badge color='warning'>Warning</Badge>
      <Badge color='danger'>Danger</Badge>
    </BadgeGroup>
  ),
}

/**
 * Vertical badge group - useful for sidebars or stacked badge displays
 */
export const Vertical: Story = {
  render: args => (
    <BadgeGroup {...args} orientation='vertical' gap='sm'>
      <Badge color='primary'>Status: Active</Badge>
      <Badge color='success'>Verified</Badge>
      <Badge color='warning'>Pending Review</Badge>
      <Badge color='info'>New Feature</Badge>
    </BadgeGroup>
  ),
}

/**
 * Overlay mode - badges scroll horizontally without wrapping
 */
export const Overlay: Story = {
  render: args => (
    <div style={{ width: '300px', border: '1px solid var(--color-border)' }}>
      <BadgeGroup {...args} overlay>
        <Badge color='primary'>JavaScript</Badge>
        <Badge color='secondary'>TypeScript</Badge>
        <Badge color='success'>React</Badge>
        <Badge color='info'>Node.js</Badge>
        <Badge color='warning'>CSS</Badge>
        <Badge color='danger'>HTML</Badge>
        <Badge color='neutral'>Python</Badge>
      </BadgeGroup>
    </div>
  ),
}
