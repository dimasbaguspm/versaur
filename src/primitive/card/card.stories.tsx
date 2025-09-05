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
    subtitle: (
      <Card.List>
        <Card.ListItem>Software Engineer</Card.ListItem>
        <Card.ListItem>San Francisco</Card.ListItem>
      </Card.List>
    ),
    supplementaryInfo: '$2,847.32',
    badge: (
      <BadgeGroup>
        <Badge color='secondary'>Active</Badge>
        <Badge color='primary'>Admin</Badge>
        <Badge color='accent_1'>Verified</Badge>
        <Badge color='success'>Online</Badge>
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
    subtitle: (
      <Card.List>
        <Card.ListItem>Software Engineer</Card.ListItem>
        <Card.ListItem>San Francisco</Card.ListItem>
      </Card.List>
    ),
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
    subtitle: (
      <Card.List>
        <Card.ListItem>Software Engineer</Card.ListItem>
        <Card.ListItem>San Francisco</Card.ListItem>
      </Card.List>
    ),
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

/**
 * Minimal content card with actions.
 * Demonstrates better visual balance when using short titles/subtitles with action buttons.
 */
export const MinimalBadge: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='md'>
        JD
      </Avatar>
    ),
    title: 'John',
    badge: (
      <BadgeGroup>
        <Badge color='success' size='sm'>
          Online
        </Badge>
      </BadgeGroup>
    ),
  },
  render: args => (
    <Card {...args} onClick={() => alert('Minimal card clicked!')} />
  ),
}

/**
 * Very short content with actions.
 * Shows how the card handles extremely minimal content with action buttons.
 */
export const ShortContentWithActions: Story = {
  args: {
    title: 'Task',
    supplementaryInfo: 'Done',
  },
  render: args => (
    <Card {...args} onClick={() => alert('Short content card clicked!')} />
  ),
}

/**
 * Balanced minimal card with proper actions positioning.
 * Demonstrates optimized layout for cards with short titles and actions.
 * The actions are positioned to not overwhelm the minimal content.
 */
export const BalancedMinimal: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='md'>
        <Avatar.Image
          src='https://via.placeholder.com/40x40/84a5c0/ffffff?text=JB'
          alt='Jane Brown'
        />
        JB
      </Avatar>
    ),
    title: 'Jane',
    subtitle: 'Project Manager',
    badge: (
      <BadgeGroup>
        <Badge color='success' size='sm'>
          Online
        </Badge>
      </BadgeGroup>
    ),
    supplementaryInfo: '2 min ago',
  },
  render: args => (
    <Card {...args} onClick={() => alert('Balanced minimal card clicked!')} />
  ),
}

/**
 * Mobile-optimized card demonstrating responsive layout.
 * Shows how the card adapts to smaller screens with proper wrapping and spacing.
 */
export const MobileOptimized: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='md'>
        MO
      </Avatar>
    ),
    title: 'Sarah Johnson',
    subtitle: 'Senior Software Engineer at Tech Corp',
    badge: (
      <BadgeGroup>
        <Badge color='success' size='sm'>
          Available
        </Badge>
      </BadgeGroup>
    ),
    supplementaryInfo: '$125k/year',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: args => (
    <div className='w-full max-w-xs mx-auto p-4'>
      <Card {...args} onClick={() => alert('Mobile card clicked!')} />
    </div>
  ),
}

/**
 * Complex mobile layout demonstrating wrapping behavior.
 * Shows how the card handles complex content on mobile screens with proper wrapping.
 */
export const ComplexMobileLayout: Story = {
  args: {
    avatar: (
      <Avatar shape='rounded' size='md'>
        CL
      </Avatar>
    ),
    title: 'Complex Mobile Card Layout with Long Title',
    subtitle: (
      <Card.List>
        <Card.ListItem>Senior Software Engineer</Card.ListItem>
        <Card.ListItem>San Francisco, CA</Card.ListItem>
      </Card.List>
    ),
    badge: (
      <BadgeGroup>
        <Badge color='success' size='sm'>
          Available
        </Badge>
        <Badge color='primary' size='sm'>
          Premium
        </Badge>
      </BadgeGroup>
    ),
    supplementaryInfo: '$125,000/year',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: args => (
    <div className='w-full max-w-sm mx-auto p-4 space-y-4'>
      <Card {...args} onClick={() => alert('Complex mobile card clicked!')} />
      <Card
        {...args}
        title='Another Complex Card'
        subtitle='Multiple items in a mobile layout'
        onClick={() => alert('Second card clicked!')}
      />
    </div>
  ),
}
