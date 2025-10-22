/**
 * Menu stories for Storybook
 * Group: Menu
 */

import { useState } from 'react'
import { Menu } from './menu'
import { ButtonIcon } from '@/primitive/button-icon'
import {
  EllipsisVertical,
  LogOutIcon,
  SettingsIcon,
  UserCogIcon,
} from 'lucide-react'
import { Hr, Icon } from '@/primitive'

export default {
  title: 'Overlays/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'Material Design inspired menu using Popover API for positioning. Supports compound/context pattern.',
      },
    },
  },
}

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size='md'
      content={
        <Menu.Content>
          <Menu.Item>
            <Icon as={UserCogIcon} color='inherit' />
            Profile
          </Menu.Item>
          <Menu.Item>
            <Icon as={SettingsIcon} color='inherit' />
            Settings
          </Menu.Item>
          <Hr />
          <Menu.Item disabled>
            <Icon as={LogOutIcon} color='danger' />
            Logout
          </Menu.Item>
        </Menu.Content>
      }
    >
      <ButtonIcon
        as={EllipsisVertical}
        aria-label='Open menu'
        onClick={() => setIsOpen(o => !o)}
      />
    </Menu>
  )
}

export const Preserve = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size='md'
      preserve
      content={
        <Menu.Content>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item disabled>Logout</Menu.Item>
        </Menu.Content>
      }
    >
      <ButtonIcon
        as={EllipsisVertical}
        aria-label='Open menu'
        onClick={() => setIsOpen(o => !o)}
      />
    </Menu>
  )
}

export const Placements = () => {
  const [openBottom, setOpenBottom] = useState(false)
  const [openTop, setOpenTop] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
  const [openRight, setOpenRight] = useState(false)

  return (
    <div className='flex flex-col gap-8 p-8'>
      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Bottom (default)</h3>
        <p className='text-sm text-gray-600 mb-4'>
          Menu appears below the trigger
        </p>
        <Menu
          isOpen={openBottom}
          onClose={() => setOpenBottom(false)}
          placement='bottom'
          content={
            <Menu.Content>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Menu.Content>
          }
        >
          <ButtonIcon
            as={EllipsisVertical}
            aria-label='Bottom menu'
            onClick={() => setOpenBottom(o => !o)}
          />
        </Menu>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Top</h3>
        <p className='text-sm text-gray-600 mb-4'>
          Menu appears above the trigger
        </p>
        <Menu
          isOpen={openTop}
          onClose={() => setOpenTop(false)}
          placement='top'
          content={
            <Menu.Content>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Menu.Content>
          }
        >
          <ButtonIcon
            as={EllipsisVertical}
            aria-label='Top menu'
            onClick={() => setOpenTop(o => !o)}
          />
        </Menu>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Left</h3>
        <p className='text-sm text-gray-600 mb-4'>
          Menu appears to the left of the trigger
        </p>
        <Menu
          isOpen={openLeft}
          onClose={() => setOpenLeft(false)}
          placement='left'
          content={
            <Menu.Content>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Menu.Content>
          }
        >
          <ButtonIcon
            as={EllipsisVertical}
            aria-label='Left menu'
            onClick={() => setOpenLeft(o => !o)}
          />
        </Menu>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Right</h3>
        <p className='text-sm text-gray-600 mb-4'>
          Menu appears to the right of the trigger
        </p>
        <Menu
          isOpen={openRight}
          onClose={() => setOpenRight(false)}
          placement='right'
          content={
            <Menu.Content>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Menu.Content>
          }
        >
          <ButtonIcon
            as={EllipsisVertical}
            aria-label='Right menu'
            onClick={() => setOpenRight(o => !o)}
          />
        </Menu>
      </div>
    </div>
  )
}
