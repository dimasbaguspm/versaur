import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'
import { Avatar } from '../avatar'
import { Badge } from '../badge'
import { BadgeGroup } from '@/layouts'

/**
 * Card is a clickable container component for displaying structured information.
 * It uses a simple props-based API where the Card component manages the layout
 * and placement of avatar, title, subtitle, badge, and supplementary information.
 *
 * All cards are clickable by default with hover effects for better user interaction.
 */
const meta: Meta<typeof Card> = {
  title: 'Primitive/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A clickable card container component with structured layout for avatar, title, subtitle, badge, and supplementary information.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square'],
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    supplementaryInfo: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

/**
 * Default card with all main props shown.
 * Perfect for displaying user information, accounts, or any structured data.
 */
export const Default: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='lg'>
        AC
      </Avatar>
    ),
    title: 'Alice Cooper',
    subtitle: 'Product Manager • New York',
    supplementaryInfo: '$2,847.32',
    badge: (
      <BadgeGroup>
        <Badge color='secondary'>Active</Badge>
        <Badge color='primary'>Admin</Badge>
      </BadgeGroup>
    ),
  },
  render: args => <Card {...args} onClick={() => alert('Card clicked!')} />,
}

/**
 * Account card example mimicking the original user example.
 * Shows how to recreate the account card layout using the new simple API.
 */
export const AccountCard: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='lg'>
        AC
      </Avatar>
    ),
    title: 'Main Account',
    subtitle: 'Primary checking account',
    badge: (
      <BadgeGroup>
        <Badge color='secondary' shape='square'>
          Checking
        </Badge>
      </BadgeGroup>
    ),
    supplementaryInfo: '$2,847.32',
  },
  render: args => <Card {...args} onClick={() => alert('Account selected!')} />,
}

/**
 * User profile card example.
 * Perfect for displaying team members, contacts, or user profiles.
 */
export const UserProfile: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='lg'>
        <Avatar.Image
          src='https://this-person-does-not-exist.com/img/avatar-gen1d83cce06b8b962d11071e999b2dcbe0.jpg'
          alt='User Avatar'
        />
        JD
      </Avatar>
    ),
    title: 'John Doe',
    subtitle: 'Software Engineer • San Francisco',
    badge: <Badge color='success'>Available</Badge>,
    supplementaryInfo: 'Online',
  },
  render: args => <Card {...args} onClick={() => alert('Profile clicked!')} />,
}

/**
 * Simple card with just title and subtitle.
 * Minimal design when you don't need avatar, badge, or supplementary info.
 */
export const SimpleCard: Story = {
  args: {
    title: 'Simple Card',
    subtitle: 'Just title and subtitle',
  },
  render: args => (
    <Card {...args} onClick={() => alert('Simple card clicked!')} />
  ),
}

/**
 * Card with only avatar and title.
 * Good for minimal user representations or contact lists.
 */
export const AvatarCard: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='lg'>
        AB
      </Avatar>
    ),
    title: 'Alice Brown',
    subtitle: 'Software Engineer • San Francisco',
  },
  render: args => (
    <Card {...args} onClick={() => alert('Avatar card clicked!')} />
  ),
}

export const BorderedCard: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='lg'>
        BC
      </Avatar>
    ),
    title: 'Bordered Card',
    subtitle: 'This card has a border',
    bordered: true,
  },
  render: args => (
    <Card {...args} onClick={() => alert('Bordered card clicked!')} bordered />
  ),
}
