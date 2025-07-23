/**
 * Storybook stories for BottomBar (Layout group)
 *
 * - Demonstrates BottomBar with 3 and 5 items
 * - Follows Versaur design system and accessibility standards
 * - Icons use lucide-react (dev only)
 *
 * @group Layout/BottomBar
 */
import type { Meta, StoryObj } from '@storybook/react'
import { BottomBar } from './bottom-bar'
import { Home, Search, User, Settings, PlusIcon } from 'lucide-react'
import { ButtonIcon } from '@/primitive/button-icon'

const meta: Meta<typeof BottomBar> = {
  title: 'Layouts/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'BottomBar is a mobile-first navigation bar for layout grouping, following Material guidelines and Versaur design system.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ minHeight: '400px', background: 'white' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

export const ThreeItems: StoryObj<typeof BottomBar> = {
  name: '3 Items',
  render: () => (
    <BottomBar>
      <BottomBar.Item icon={<Home size={20} />} label='Home' active />
      <BottomBar.Item icon={<Search size={20} />} label='Search' />
      <BottomBar.Item icon={<User size={20} />} label='Profile' />
    </BottomBar>
  ),
}

export const FiveItems: StoryObj<typeof BottomBar> = {
  name: '5 Items',
  render: () => (
    <BottomBar>
      <BottomBar.Item icon={<Home size={20} />} label='Home' active />
      <BottomBar.Item icon={<Search size={20} />} label='Search' />
      <BottomBar.Item
        icon={
          <ButtonIcon
            as={PlusIcon}
            variant='primary'
            shape='circle'
            aria-label='Add Transaction'
          />
        }
      />
      <BottomBar.Item icon={<Settings size={20} />} label='Settings' />
      <BottomBar.Item icon={<User size={20} />} label='Profile' />
    </BottomBar>
  ),
}
