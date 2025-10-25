/**
 * SideBar stories for Versaur UI
 * Demonstrates collapsible sidebar with nested groups and icons
 */
import { Icon } from '@/primitive'
import { SideBar } from './side-bar'
import {
  Home,
  Settings,
  FileCode,
  Smartphone,
  Users,
  Search,
  LayoutDashboard,
} from 'lucide-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideBar> = {
  title: 'Layouts/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state of the sidebar',
    },
  },
}
export default meta

type Story = StoryObj<typeof SideBar>

/**
 * Default expanded sidebar with direct items and collapsible groups.
 * Toggle the collapse button to see the sidebar shrink.
 * Groups can be expanded/collapsed vertically by clicking them.
 * Items nested inside groups automatically get left margin for visual hierarchy.
 */
export const Default: Story = {
  args: {
    defaultCollapsed: false,
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        {/* Direct items */}
        <SideBar.Item
          href='/dashboard'
          icon={<Icon as={LayoutDashboard} color='inherit' />}
        >
          Dashboard
        </SideBar.Item>
        <SideBar.Item
          active
          href='/home'
          icon={<Icon as={Home} color='inherit' />}
        >
          Home
        </SideBar.Item>

        {/* Collapsible group with icon */}
        <SideBar.Group
          label='Projects'
          icon={<Icon as={FileCode} color='inherit' />}
        >
          <SideBar.Item
            href='/projects/web'
            icon={<Icon as={FileCode} color='inherit' />}
          >
            Web Application
          </SideBar.Item>
          <SideBar.Item
            href='/projects/mobile'
            icon={<Icon as={Smartphone} color='inherit' />}
          >
            Mobile App
          </SideBar.Item>
          <SideBar.Item
            href='/projects/api'
            icon={<Icon as={FileCode} color='inherit' />}
          >
            API Service
          </SideBar.Item>
        </SideBar.Group>

        {/* Another direct item */}
        <SideBar.Item
          href='/settings'
          icon={<Icon as={Settings} color='inherit' />}
        >
          Settings
        </SideBar.Item>

        {/* Another collapsible group */}
        <SideBar.Group label='Team' icon={<Icon as={Users} color='inherit' />}>
          <SideBar.Item
            href='/team/members'
            icon={<Icon as={Users} color='inherit' />}
          >
            Members
          </SideBar.Item>
          <SideBar.Item
            href='/team/settings'
            icon={<Icon as={Settings} color='inherit' />}
          >
            Team Settings
          </SideBar.Item>
        </SideBar.Group>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Main Content</h1>
        <p className='mt-4 text-ghost'>
          Toggle the sidebar using the chevron button. Direct items (Dashboard,
          Home, Settings) remain visible when collapsed. Groups show only their
          icons when the sidebar is collapsed.
        </p>
        <p className='mt-2 text-ghost'>
          Click on group headers to expand/collapse their children vertically.
          Group headers show background color when expanded or on hover/focus.
        </p>
      </div>
    </div>
  ),
}

/**
 * Sidebar starting in collapsed state.
 * Only icons are visible. Items nested inside groups are hidden.
 */
export const DefaultCollapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        <SideBar.Item
          href='/dashboard'
          icon={<Icon as={LayoutDashboard} color='inherit' />}
        >
          Dashboard
        </SideBar.Item>
        <SideBar.Item
          active
          href='/home'
          icon={<Icon as={Home} color='inherit' />}
        >
          Home
        </SideBar.Item>
        <SideBar.Item
          href='/settings'
          icon={<Icon as={Settings} color='inherit' />}
        >
          Settings
        </SideBar.Item>

        {/* Group with nested items */}
        <SideBar.Group
          label='Projects'
          icon={<Icon as={FileCode} color='inherit' />}
        >
          <SideBar.Item
            href='/projects/web'
            icon={<Icon as={FileCode} color='inherit' />}
          >
            Web Application anD lONGGG 123123123 123 123 123 123 321
          </SideBar.Item>
          <SideBar.Item
            href='/projects/mobile'
            icon={<Icon as={Smartphone} color='inherit' />}
          >
            Mobile App
          </SideBar.Item>
        </SideBar.Group>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Collapsed Sidebar</h1>
        <p className='mt-4 text-ghost'>
          The sidebar starts collapsed. Only icons are visible. Click the
          chevron to expand and reveal groups with nested items.
        </p>
      </div>
    </div>
  ),
}

/**
 * Sidebar with additional navigation items.
 * Demonstrates various anchor-based navigation items.
 */
export const WithMoreItems: Story = {
  args: {
    defaultCollapsed: false,
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        <SideBar.Item
          href='/dashboard'
          icon={<Icon as={LayoutDashboard} color='inherit' />}
        >
          Dashboard
        </SideBar.Item>
        <SideBar.Item
          href='/search'
          icon={<Icon as={Search} color='inherit' />}
        >
          Search
        </SideBar.Item>
        <SideBar.Item
          href='/settings'
          icon={<Icon as={Settings} color='inherit' />}
        >
          Settings
        </SideBar.Item>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Navigation Items</h1>
        <p className='mt-4 text-ghost'>
          All items are anchor links for standard navigation.
        </p>
      </div>
    </div>
  ),
}

/**
 * Sidebar with many scrollable items.
 * Demonstrates overflow behavior and scrollbar styling.
 */
export const WithScrollableContent: Story = {
  args: {
    defaultCollapsed: false,
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        <SideBar.Item
          href='/dashboard'
          icon={<Icon as={LayoutDashboard} color='inherit' />}
        >
          Dashboard
        </SideBar.Item>

        <SideBar.Group
          label='Many Projects'
          icon={<Icon as={FileCode} color='inherit' />}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <SideBar.Item
              key={index}
              href={`/project-${index}`}
              icon={<Icon as={FileCode} color='inherit' />}
            >
              Project {index + 1}
            </SideBar.Item>
          ))}
        </SideBar.Group>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Scrollable Content</h1>
        <p className='mt-4 text-ghost'>
          When content exceeds viewport height, the sidebar becomes scrollable.
        </p>
      </div>
    </div>
  ),
}

/**
 * Groups with defaultExpanded set to false.
 * Demonstrates groups starting in a collapsed vertical state.
 */
export const WithCollapsedGroups: Story = {
  args: {
    defaultCollapsed: false,
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        <SideBar.Item
          href='/dashboard'
          icon={<Icon as={LayoutDashboard} color='inherit' />}
        >
          Dashboard
        </SideBar.Item>

        <SideBar.Group
          label='Projects'
          icon={<Icon as={FileCode} color='inherit' />}
          defaultExpanded={false}
        >
          <SideBar.Item
            href='/projects/web'
            icon={<Icon as={FileCode} color='inherit' />}
          >
            Web Application
          </SideBar.Item>
          <SideBar.Item
            href='/projects/mobile'
            icon={<Icon as={Smartphone} color='inherit' />}
          >
            Mobile App
          </SideBar.Item>
        </SideBar.Group>

        <SideBar.Group
          label='Team'
          icon={<Icon as={Users} color='inherit' />}
          defaultExpanded={false}
        >
          <SideBar.Item
            href='/team/members'
            icon={<Icon as={Users} color='inherit' />}
          >
            Members
          </SideBar.Item>
        </SideBar.Group>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Collapsed Groups</h1>
        <p className='mt-4 text-ghost'>
          Groups start collapsed. Click the chevron to expand them and see their
          children.
        </p>
      </div>
    </div>
  ),
}

/**
 * Sidebar with collapse callback.
 * Demonstrates the onCollapseChange callback for tracking state changes.
 */
export const WithCollapseCallback: Story = {
  args: {
    defaultCollapsed: false,
    onCollapseChange: (collapsed: boolean) => {
      console.log('Sidebar collapsed state:', collapsed)
      alert(`Sidebar is now ${collapsed ? 'collapsed' : 'expanded'}`)
    },
  },
  render: args => (
    <div className='flex h-screen'>
      <SideBar {...args}>
        <SideBar.Item href='/home' icon={<Icon as={Home} color='inherit' />}>
          Home
        </SideBar.Item>
        <SideBar.Item
          href='/settings'
          icon={<Icon as={Settings} color='inherit' />}
        >
          Settings
        </SideBar.Item>
      </SideBar>
      <div className='flex-1 p-8 bg-neutral/20'>
        <h1 className='text-2xl font-bold'>Collapse Callback</h1>
        <p className='mt-4 text-ghost'>
          Toggle the sidebar to see the callback in action (check console and
          alerts).
        </p>
      </div>
    </div>
  ),
}
