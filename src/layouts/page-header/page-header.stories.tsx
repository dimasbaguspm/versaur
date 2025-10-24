/**
 * PageHeader stories for Storybook
 * Group: Layout
 * Demonstrates PageHeader usage patterns with size variants
 * Icons from lucide-react (dev only)
 */
import { useState } from 'react'
import { ArrowDownIcon, HomeIcon, PlusIcon, UploadIcon } from 'lucide-react'
import { PageHeader } from './index'
import { Breadcrumbs } from '@/navigation/breadcrumbs'
import { Tabs } from '@/navigation/tabs'
import { Button } from '@/primitive/button'
import { Badge } from '@/primitive/badge'
import { ButtonGroup } from '@/layouts/button-group'
import { ButtonIcon, Icon } from '@/primitive'

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * Default page header with title, subtitle, and actions
 * Demonstrates fluid size (full width) and white background
 */
export const Default = () => (
  <PageHeader
    title='Dashboard'
    subtitle='Welcome back, John'
    actions={
      <ButtonGroup>
        <Button variant='primary'>New Project</Button>
      </ButtonGroup>
    }
    mobileActions={
      <ButtonGroup>
        <ButtonIcon as={PlusIcon} variant='primary' aria-label='New Project' />
      </ButtonGroup>
    }
  />
)

/**
 * Complete page header with all elements including breadcrumbs, badges, and tabs
 * Demonstrates wide size (max-width container)
 */
export const Complete = () => {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <PageHeader
      size='wide'
      title='User Management'
      subtitle='Manage user accounts and permissions across the organization'
      breadcrumbs={
        <Breadcrumbs>
          <Breadcrumbs.Item
            href='/'
            icon={<Icon as={HomeIcon} color='inherit' size='sm' />}
          >
            Home
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item href='/admin'>Admin</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Users</Breadcrumbs.Item>
        </Breadcrumbs>
      }
      badges={
        <>
          <Badge>Active</Badge>
          <Badge color='neutral'>Admin</Badge>
        </>
      }
      actions={
        <ButtonGroup>
          <Button variant='ghost'>
            <Icon as={UploadIcon} color='inherit' />
            Import
          </Button>
          <Button variant='outline'>
            <Icon as={ArrowDownIcon} color='inherit' />
            Export
          </Button>
          <Button variant='primary'>
            <Icon as={PlusIcon} color='inherit' />
            Add User
          </Button>
        </ButtonGroup>
      }
      mobileActions={
        <ButtonGroup>
          <ButtonIcon as={UploadIcon} variant='ghost' aria-label='Import' />
          <ButtonIcon
            as={ArrowDownIcon}
            variant='outline'
            aria-label='Export'
          />
          <ButtonIcon as={PlusIcon} variant='primary' aria-label='Add User' />
        </ButtonGroup>
      }
      tabs={
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Tabs.Trigger value='all'>All Users</Tabs.Trigger>
          <Tabs.Trigger value='active'>Active</Tabs.Trigger>
          <Tabs.Trigger value='pending'>Pending</Tabs.Trigger>
          <Tabs.Trigger value='disabled'>Disabled</Tabs.Trigger>
        </Tabs>
      }
    />
  )
}

/**
 * Narrow header for focused content pages
 * Demonstrates narrow size (max-width 768px) centered layout
 */
export const Narrow = () => (
  <PageHeader
    size='narrow'
    title='Account Settings'
    subtitle='Manage your account preferences and security settings'
    breadcrumbs={
      <Breadcrumbs>
        <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Separator />
        <Breadcrumbs.Item>Settings</Breadcrumbs.Item>
      </Breadcrumbs>
    }
    actions={
      <ButtonGroup>
        <Button variant='outline'>Cancel</Button>
        <Button variant='primary'>Save Changes</Button>
      </ButtonGroup>
    }
    tabs={
      <Tabs value='all' onValueChange={() => {}}>
        <Tabs.Trigger value='all'>All Users</Tabs.Trigger>
        <Tabs.Trigger value='active'>Active</Tabs.Trigger>
        <Tabs.Trigger value='pending'>Pending</Tabs.Trigger>
        <Tabs.Trigger value='disabled'>Disabled</Tabs.Trigger>
      </Tabs>
    }
  />
)
