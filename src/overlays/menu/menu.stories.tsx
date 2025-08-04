/**
 * Menu stories for Storybook
 * Group: Menu
 */

import { useState } from 'react'
import { Menu } from './menu'
import { MenuContent, MenuItem } from './menu.atoms'
import { ButtonIcon } from '@/primitive/button-icon'
import { Ellipsis, EllipsisVertical } from 'lucide-react'

export default {
  title: 'Overlays/Menu',
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
    <Menu
      isOpen={isOpen}
      onOutsideClick={() => setIsOpen(false)}
      size='md'
      content={
        <MenuContent>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem disabled>Logout</MenuItem>
        </MenuContent>
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

export const Sizes = () => {
  const [openSm, setOpenSm] = useState(false)
  const [openMd, setOpenMd] = useState(false)

  return (
    <div className='flex flex-col gap-4'>
      <Menu
        isOpen={openSm}
        onOutsideClick={() => setOpenSm(false)}
        size='sm'
        content={
          <MenuContent>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </MenuContent>
        }
      >
        <ButtonIcon
          as={EllipsisVertical}
          aria-label='Open small menu'
          onClick={() => setOpenSm(o => !o)}
        />
      </Menu>
      <Menu
        isOpen={openMd}
        onOutsideClick={() => setOpenMd(false)}
        size='md'
        content={
          <MenuContent>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </MenuContent>
        }
      >
        <ButtonIcon
          as={Ellipsis}
          aria-label='Open medium menu'
          onClick={() => setOpenMd(o => !o)}
        />
      </Menu>
    </div>
  )
}
