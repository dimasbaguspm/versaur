/**
 * SideBar stories for Versaur UI
 * Demonstrates compound usage, semantic structure, and icon support
 */
import { Icon } from '@/primitive'
import { SideBar } from './side-bar'
import { Home, Settings, Folder } from 'lucide-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideBar> = {
  title: 'Layouts/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof SideBar>

export const Default: Story = {
  render: () => (
    <div className='flex h-screen'>
      <SideBar>
        <SideBar.Item
          href='/home'
          icon={<Icon as={Home} color='inherit' size='sm' />}
        >
          Home
        </SideBar.Item>
        <SideBar.Item
          active
          href='/settings'
          icon={<Icon as={Settings} color='inherit' size='sm' />}
        >
          Settings
        </SideBar.Item>
        <SideBar.Group label='Projects'>
          {Array.from({ length: 50 }).map((_, index) => (
            <SideBar.Item
              key={index}
              href='/folder/abc'
              icon={<Icon as={Folder} color='inherit' size='sm' />}
            >
              abc + {index}
            </SideBar.Item>
          ))}
        </SideBar.Group>
      </SideBar>
      Content
    </div>
  ),
}
