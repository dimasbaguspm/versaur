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
import {
  PlusIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'
import { ButtonIcon } from '@/primitive/button-icon'
import { Avatar, Icon } from '@/primitive'
import { useState } from 'react'

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
      <div
        style={{
          minHeight: '400px',
          background: 'white',
          margin: '1rem',
          border: '1px var(--color-primary) solid',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1 }} />
        <Story />
      </div>
    ),
  ],
}
export default meta

export const ThreeItems: StoryObj<typeof BottomBar> = {
  name: '3 Items',
  render: function ThreeItems() {
    const [activeItem, setActiveItem] = useState(0)

    return (
      <BottomBar>
        <BottomBar.Item
          icon={<Icon as={HomeIcon} color='inherit' />}
          active={activeItem === 0}
          onClick={() => setActiveItem(0)}
        />
        <BottomBar.Item
          icon={<Icon as={SearchIcon} color='inherit' />}
          active={activeItem === 1}
          onClick={() => setActiveItem(1)}
        />
        <BottomBar.Item
          icon={<Icon as={UserIcon} color='inherit' />}
          active={activeItem === 2}
          onClick={() => setActiveItem(2)}
        />
      </BottomBar>
    )
  },
}

export const FiveItems: StoryObj<typeof BottomBar> = {
  name: '5 Items',
  render: function Component() {
    const [activeItem, setActiveItem] = useState(0)

    return (
      <BottomBar>
        <BottomBar.Item
          icon={<Icon as={HomeIcon} color='inherit' />}
          active={activeItem === 0}
          onClick={() => setActiveItem(0)}
        />
        <BottomBar.Item
          icon={<Icon as={SearchIcon} color='inherit' />}
          active={activeItem === 1}
          onClick={() => setActiveItem(1)}
        />
        <BottomBar.Item
          as='div'
          icon={
            <ButtonIcon
              as={PlusIcon}
              variant='primary'
              shape='circle'
              aria-label='Add Transaction'
              onClick={() => setActiveItem(2)}
            />
          }
        />
        <BottomBar.Item
          icon={<Icon as={SettingsIcon} color='inherit' />}
          active={activeItem === 3}
          onClick={() => setActiveItem(3)}
        />
        <BottomBar.Item
          active={activeItem === 4}
          onClick={() => setActiveItem(4)}
        >
          <Avatar size='sm'>DM</Avatar>
        </BottomBar.Item>
      </BottomBar>
    )
  },
}
