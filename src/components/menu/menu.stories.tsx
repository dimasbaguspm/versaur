/**
 * Menu stories for Storybook
 * Group: Menu
 */

import { useState } from 'react'
import { Menu } from './menu'
import { ButtonIcon } from '../button-icon'
import { Ellipsis, EllipsisVertical } from 'lucide-react'

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: 'Material Design inspired menu, compound/context pattern.',
      },
    },
  },
}

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu isOpen={isOpen} onOutsideClick={() => setIsOpen(false)}>
      <Menu.Trigger onClick={() => setIsOpen(o => !o)}>
        <ButtonIcon as={EllipsisVertical} aria-label='Open menu' />
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item disabled>Logout</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}

export const Sizes = () => {
  const [openSm, setOpenSm] = useState(false)
  const [openMd, setOpenMd] = useState(false)

  return (
    <div className='flex gap-4'>
      <Menu isOpen={openSm} onOutsideClick={() => setOpenSm(false)} size='sm'>
        <Menu.Trigger onClick={() => setOpenSm(o => !o)}>
          <ButtonIcon as={EllipsisVertical} aria-label='Open small menu' />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Content>
      </Menu>
      <Menu isOpen={openMd} onOutsideClick={() => setOpenMd(false)} size='md'>
        <Menu.Trigger onClick={() => setOpenMd(o => !o)}>
          <ButtonIcon as={Ellipsis} aria-label='Open medium menu' />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}
