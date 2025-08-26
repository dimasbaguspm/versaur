/**
 * PageHeader stories for Storybook
 * Group: Layout
 * Demonstrates PageHeader usage patterns, both simplified API and compound pattern
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
 * Simple page header with just title and actions
 */
export const Simple = () => (
  <PageHeader
    title='Dashboard'
    subtitle='Welcome back, John'
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
 * Full-featured page header with all elements using simplified API
 */
export const Complete = () => {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <PageHeader
      title='User Management'
      subtitle='Manage user accounts and permissions across the organization'
      breadcrumbs={
        <Breadcrumbs>
          <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
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
          <Button variant='secondary'>
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
            variant='secondary'
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
 * Minimal header with only title
 */
export const Minimal = () => (
  <PageHeader
    title='Simple Page'
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
  />
)
