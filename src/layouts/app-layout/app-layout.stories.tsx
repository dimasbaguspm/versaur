/**
 * AppLayout stories for Storybook
 * Group: Layout
 * Demonstrates AppLayout compound usage with different region combinations
 * AppLayout provides the highest-level layout structure for applications
 */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AppLayout } from './app-layout'
import { TopBar } from '@/layouts/top-bar'
import { SideBar } from '@/layouts/side-bar'
import { BottomBar } from '@/layouts/bottom-bar'
import { PageHeader } from '@/layouts/page-header'
import { PageContent } from '@/layouts/page-content'
import { Brand, Avatar, ButtonIcon, Icon, Button } from '@/primitive'
import { Tabs } from '@/navigation/tabs'
import {
  BellIcon,
  Home,
  Settings,
  Folder,
  HomeIcon,
  SearchIcon,
  UserIcon,
  PlusIcon,
} from 'lucide-react'

const meta: Meta<typeof AppLayout> = {
  title: 'Layouts/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof AppLayout>

/**
 * Sample content component to demonstrate scrollable main region
 */
const SampleContent = ({ label = 'Content' }: { label?: string }) => (
  <div className='rounded-lg bg-primary-soft p-6 text-foreground'>
    <h2 className='mb-2 text-xl font-semibold'>{label}</h2>
    <p className='text-foreground-light'>
      This is sample content to demonstrate the layout behavior.
    </p>
  </div>
)

/**
 * Top and Main only
 * Demonstrates a simple layout with just header and scrollable main content
 */
export const TopAndMain: Story = {
  render: function TopAndMainStory() {
    const [activeTab, setActiveTab] = useState('overview')

    return (
      <AppLayout>
        <AppLayout.TopRegion>
          <TopBar>
            <TopBar.Leading>
              <Brand name='spenicle' size='md' shape='rounded' />
            </TopBar.Leading>
            <TopBar.Trailing>
              <Avatar size='sm'>JD</Avatar>
            </TopBar.Trailing>
          </TopBar>
        </AppLayout.TopRegion>

        <AppLayout.MainRegion>
          <PageHeader
            size='wide'
            title='Simple Layout'
            subtitle='A minimal layout with top bar and main content'
            tabs={
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
                <Tabs.Trigger value='details'>Details</Tabs.Trigger>
              </Tabs>
            }
          />
          <PageContent size='wide'>
            {Array.from({ length: 8 }).map((_, idx) => (
              <SampleContent key={idx} label={`Section ${idx + 1}`} />
            ))}
          </PageContent>
        </AppLayout.MainRegion>
      </AppLayout>
    )
  },
}

/**
 * Left sidebar and Main
 * Demonstrates a layout with left navigation and scrollable main content
 */
export const LeftSidebarAndMain: Story = {
  render: function LeftSidebarAndMainStory() {
    return (
      <AppLayout>
        <AppLayout.TopRegion>
          <TopBar>
            <TopBar.Leading>
              <Brand name='spenicle' size='md' shape='rounded' />
            </TopBar.Leading>
            <TopBar.Trailing>
              <Avatar size='sm'>AB</Avatar>
            </TopBar.Trailing>
          </TopBar>
        </AppLayout.TopRegion>

        <AppLayout.SideLeftRegion>
          <SideBar>
            <SideBar.Item
              href='/overview'
              active
              icon={<Icon as={Home} color='inherit' size='sm' />}
            >
              Overview
            </SideBar.Item>
            <SideBar.Item
              href='/analytics'
              icon={<Icon as={Folder} color='inherit' size='sm' />}
            >
              Analytics
            </SideBar.Item>
            <SideBar.Item
              href='/settings'
              icon={<Icon as={Settings} color='inherit' size='sm' />}
            >
              Settings
            </SideBar.Item>
          </SideBar>
        </AppLayout.SideLeftRegion>

        <AppLayout.MainRegion>
          <PageHeader
            size='fluid'
            title='Dashboard Content'
            subtitle='Monitor your metrics and analytics'
            actions={
              <Button variant='primary'>
                <Icon as={PlusIcon} color='inherit' />
                Add Widget
              </Button>
            }
            mobileActions={
              <ButtonIcon
                as={PlusIcon}
                variant='primary'
                aria-label='Add Widget'
              />
            }
          />
          <PageContent size='fluid' template='two-column'>
            {Array.from({ length: 6 }).map((_, idx) => (
              <SampleContent key={idx} label={`Widget ${idx + 1}`} />
            ))}
          </PageContent>
        </AppLayout.MainRegion>
      </AppLayout>
    )
  },
}

/**
 * Three column layout
 * Demonstrates a layout with left sidebar, scrollable main content, and right sidebar
 */
export const ThreeColumn: Story = {
  render: function ThreeColumnStory() {
    return (
      <AppLayout>
        <AppLayout.TopRegion>
          <TopBar>
            <TopBar.Leading>
              <Brand name='spenicle' size='md' shape='rounded' />
              <TopBar.Nav>
                <TopBar.NavItem active>Workspace</TopBar.NavItem>
                <TopBar.NavItem>Team</TopBar.NavItem>
              </TopBar.Nav>
            </TopBar.Leading>
            <TopBar.Trailing>
              <TopBar.Actions>
                <ButtonIcon
                  as={BellIcon}
                  size='sm'
                  aria-label='Notifications'
                  variant='ghost'
                />
              </TopBar.Actions>
              <Avatar size='sm'>TU</Avatar>
            </TopBar.Trailing>
          </TopBar>
        </AppLayout.TopRegion>

        <AppLayout.SideLeftRegion>
          <SideBar>
            <SideBar.Item
              href='/home'
              active
              icon={<Icon as={Home} color='inherit' size='sm' />}
            >
              Home
            </SideBar.Item>
            <SideBar.Item
              href='/projects'
              icon={<Icon as={Folder} color='inherit' size='sm' />}
            >
              Projects
            </SideBar.Item>
          </SideBar>
        </AppLayout.SideLeftRegion>

        <AppLayout.MainRegion>
          <PageHeader
            size='fluid'
            title='Three Column Layout'
            subtitle='Content flows between two sidebars'
          />
          <PageContent size='fluid'>
            {Array.from({ length: 12 }).map((_, idx) => (
              <SampleContent key={idx} label={`Item ${idx + 1}`} />
            ))}
          </PageContent>
        </AppLayout.MainRegion>

        <AppLayout.SideRightRegion>
          <div className='h-full w-64 bg-background p-4'>
            <div className='mb-4 font-semibold text-foreground'>Details</div>
            <div className='rounded bg-info/10 p-3 text-xs text-info'>
              Additional information and context goes here.
            </div>
          </div>
        </AppLayout.SideRightRegion>
      </AppLayout>
    )
  },
}

/**
 * With bottom navigation (mobile-style)
 * Demonstrates a mobile-style layout with bottom navigation bar and scrollable content
 */
export const WithBottomNav: Story = {
  render: function WithBottomNavStory() {
    const [activeBottomItem, setActiveBottomItem] = useState(0)

    return (
      <AppLayout>
        <AppLayout.MainRegion>
          <PageHeader
            size='fluid'
            title='Feed'
            subtitle='Your latest updates'
            tabs={
              <Tabs value='overview' onValueChange={() => {}}>
                <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
                <Tabs.Trigger value='details'>Details</Tabs.Trigger>
              </Tabs>
            }
          />
          <PageContent size='fluid'>
            {Array.from({ length: 15 }).map((_, idx) => (
              <SampleContent key={idx} label={`Post ${idx + 1}`} />
            ))}
          </PageContent>
        </AppLayout.MainRegion>

        <AppLayout.BottomRegion>
          <BottomBar>
            <BottomBar.Item
              icon={<Icon as={HomeIcon} color='inherit' />}
              active={activeBottomItem === 0}
              onClick={() => setActiveBottomItem(0)}
            />
            <BottomBar.Item
              icon={<Icon as={SearchIcon} color='inherit' />}
              active={activeBottomItem === 1}
              onClick={() => setActiveBottomItem(1)}
            />
            <BottomBar.Item
              icon={<Icon as={PlusIcon} color='inherit' />}
              active={activeBottomItem === 2}
              onClick={() => setActiveBottomItem(2)}
            />
            <BottomBar.Item
              icon={<Icon as={UserIcon} color='inherit' />}
              active={activeBottomItem === 3}
              onClick={() => setActiveBottomItem(3)}
            />
          </BottomBar>
        </AppLayout.BottomRegion>
      </AppLayout>
    )
  },
}
