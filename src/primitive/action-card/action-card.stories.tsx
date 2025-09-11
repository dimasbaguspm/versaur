import type { Meta, StoryObj } from '@storybook/react'
import { ActionCard } from './action-card'
import { Badge } from '../badge'
import { Icon } from '../icon'
import {
  Wallet,
  Tags,
  Database,
  Users,
  Settings,
  CreditCard,
  Zap,
  DatabaseZap,
} from 'lucide-react'

const meta: Meta<typeof ActionCard> = {
  title: 'Primitive/ActionCard',
  component: ActionCard,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showArrow: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['button', 'div'],
    },
  },
  args: {
    size: 'md',
    showArrow: true,
    as: 'button',
  },
}

export default meta
type Story = StoryObj<typeof ActionCard>

/**
 * Default ActionCard with basic icon and title
 */
export const Default: Story = {
  args: {
    icon: <Icon as={Wallet} color='inherit' />,
    title: 'Account Groups',
    onClick: () => console.log('ActionCard clicked'),
  },
}

/**
 * ActionCard with subtitle for additional context
 */
export const WithSubtitle: Story = {
  args: {
    icon: <Icon as={Tags} color='inherit' />,
    title: 'Category Groups',
    subtitle:
      'Organize expense and income categories into logical groups for better tracking',
    onClick: () => console.log('ActionCard with subtitle clicked'),
  },
}

/**
 * ActionCard with badge for highlighting features or status
 */
export const WithBadge: Story = {
  args: {
    icon: <Icon as={Wallet} color='inherit' />,
    title: 'Account Groups',
    badge: <Badge color='success'>Popular</Badge>,
    onClick: () => console.log('ActionCard with badge clicked'),
  },
}

/**
 * Complete ActionCard with all features
 */
export const Complete: Story = {
  args: {
    icon: <Icon as={DatabaseZap} color='inherit' />,
    title: 'Backup & Restore',
    subtitle:
      'Create backups of your data to prevent loss and restore when needed',
    badge: <Badge color='info'>New</Badge>,
    onClick: () => console.log('Complete ActionCard clicked'),
  },
}

/**
 * ActionCard without arrow for non-navigational actions
 */
export const WithoutArrow: Story = {
  args: {
    icon: <Icon as={Settings} color='inherit' />,
    title: 'Settings',
    subtitle: 'Configure your application preferences',
    showArrow: false,
    onClick: () => console.log('ActionCard without arrow clicked'),
  },
}

/**
 * Different sizes demonstration
 */
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-96'>
      <ActionCard
        size='sm'
        icon={<Icon as={Users} color='inherit' />}
        title='Small Size'
        subtitle='Compact action card'
        onClick={() => console.log('Small clicked')}
      />
      <ActionCard
        size='md'
        icon={<Icon as={CreditCard} color='inherit' />}
        title='Medium Size'
        subtitle='Default action card size'
        onClick={() => console.log('Medium clicked')}
      />
      <ActionCard
        size='lg'
        icon={<Icon as={Zap} color='inherit' />}
        title='Large Size'
        subtitle='Prominent action card for important actions'
        onClick={() => console.log('Large clicked')}
      />
    </div>
  ),
}

/**
 * ActionCard.Group for creating grouped action lists
 */
export const GroupedCards: Story = {
  render: () => (
    <div className='w-96'>
      <ActionCard.Group>
        <ActionCard
          icon={<Icon as={Wallet} color='inherit' />}
          title='Account Groups'
          subtitle='Create and manage groups for your accounts to better organize your finances'
          badge={<Badge color='success'>Popular</Badge>}
          onClick={() => console.log('Account Groups clicked')}
        />
        <ActionCard
          icon={<Icon as={Tags} color='inherit' />}
          title='Category Groups'
          subtitle='Organize expense and income categories into logical groups for better tracking'
          onClick={() => console.log('Category Groups clicked')}
        />
        <ActionCard
          icon={<Icon as={DatabaseZap} color='inherit' />}
          title='Backup & Restore'
          subtitle='Create backups of your data to prevent loss and restore when needed'
          onClick={() => console.log('Backup & Restore clicked')}
        />
      </ActionCard.Group>
    </div>
  ),
}

/**
 * ActionCard.Group with mixed content and badges
 */
export const GroupedWithVariations: Story = {
  render: () => (
    <ActionCard.Group>
      <ActionCard
        icon={<Icon as={Users} color='inherit' />}
        title='User Management'
        badge={<Badge color='primary'>Admin</Badge>}
        onClick={() => console.log('User Management clicked')}
      />
      <ActionCard
        icon={<Icon as={Settings} color='inherit' />}
        title='System Settings'
        onClick={() => console.log('System Settings clicked')}
      />
      <ActionCard
        icon={<Icon as={Database} color='inherit' />}
        title='Data Export'
        badge={<Badge color='warning'>Beta</Badge>}
        showArrow={false}
        onClick={() => console.log('Data Export clicked')}
      />
    </ActionCard.Group>
  ),
}

/**
 * Compact ActionCard.Group for mobile-like interfaces
 */
export const CompactGroup: Story = {
  render: () => (
    <div className='w-80'>
      <ActionCard.Group>
        <ActionCard
          size='sm'
          icon={<Icon as={Wallet} color='inherit' />}
          title='Wallet'
          badge={
            <Badge color='success' size='sm'>
              3
            </Badge>
          }
          onClick={() => console.log('Wallet clicked')}
        />
        <ActionCard
          size='sm'
          icon={<Icon as={CreditCard} color='inherit' />}
          title='Cards'
          onClick={() => console.log('Cards clicked')}
        />
        <ActionCard
          size='sm'
          icon={<Icon as={Zap} color='inherit' />}
          title='Quick Pay'
          badge={
            <Badge color='info' size='sm'>
              New
            </Badge>
          }
          onClick={() => console.log('Quick Pay clicked')}
        />
      </ActionCard.Group>
    </div>
  ),
}
