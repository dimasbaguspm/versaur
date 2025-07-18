/**
 * Breadcrumbs group stories
 *
 * Shows navigation with icons and multiple items
 */
import { Breadcrumbs } from '.'
import { Home, User } from 'lucide-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Basic: Story = {
  render: () => (
    <Breadcrumbs aria-label='Breadcrumb Navigation'>
      <Breadcrumbs.Item href='/' icon={<Home size={16} />} color='primary'>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item
        href='/applicant'
        icon={<User size={16} />}
        color='secondary'
      >
        Applicant
      </Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item href='/applicant/123' color='ghost'>
        Details
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A basic breadcrumbs navigation with icons, color variations, and multiple items. Demonstrates semantic color usage and icon support.',
      },
    },
  },
}

export const Impactful: Story = {
  render: () => (
    <Breadcrumbs aria-label='Onboarding Progress'>
      <Breadcrumbs.Item href='/' icon={<Home size={16} />} color='primary'>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item href='/dashboard' color='success'>
        Dashboard
      </Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item href='/dashboard/settings' color='warning'>
        Settings
      </Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item href='/dashboard/settings/profile' color='danger'>
        Profile
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumbs with impactful color usage for each item, showing a real-world onboarding/progress navigation scenario.',
      },
    },
  },
}
