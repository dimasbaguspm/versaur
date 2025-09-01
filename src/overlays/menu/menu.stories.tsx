/**
 * Menu stories for Storybook
 * Group: Menu
 */

import { useState, useRef } from 'react'
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

export const AutoPlacement = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className='space-y-4'>
      <p className='text-sm text-foreground-light'>
        Try opening the menu in each corner - it will auto-position to stay
        within the container
      </p>
      <div
        ref={containerRef}
        className='h-80 w-96 border-2 border-primary p-4 relative overflow-hidden bg-cream-soft'
      >
        <div className='text-xs text-foreground-light mb-2'>
          Container boundary
        </div>

        {/* Top-left corner */}
        <div className='absolute top-4 left-4'>
          <Menu
            isOpen={isOpen}
            onOutsideClick={() => setIsOpen(false)}
            placement='auto'
            container={containerRef.current}
            content={
              <MenuContent>
                <MenuItem>Top Left Menu</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
                <MenuItem>Option 4</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Top left menu'
              onClick={() => setIsOpen(o => !o)}
            />
          </Menu>
        </div>

        {/* Bottom-right corner */}
        <div className='absolute bottom-4 right-4'>
          <Menu
            isOpen={isOpen}
            onOutsideClick={() => setIsOpen(false)}
            placement='auto'
            container={containerRef.current}
            content={
              <MenuContent>
                <MenuItem>Bottom Right Menu</MenuItem>
                <MenuItem>Should flip up and left</MenuItem>
                <MenuItem>To stay in bounds</MenuItem>
                <MenuItem>Extra item</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Bottom right menu'
              onClick={() => setIsOpen(o => !o)}
            />
          </Menu>
        </div>
      </div>
    </div>
  )
}

export const Placements = () => {
  const [openBottomStart, setOpenBottomStart] = useState(false)
  const [openBottomEnd, setOpenBottomEnd] = useState(false)
  const [openTopStart, setOpenTopStart] = useState(false)
  const [openTopEnd, setOpenTopEnd] = useState(false)

  return (
    <div className='grid grid-cols-2 gap-8 p-8'>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Bottom Placements</h3>
        <div className='flex gap-4'>
          <Menu
            isOpen={openBottomStart}
            onOutsideClick={() => setOpenBottomStart(false)}
            placement='bottom-start'
            content={
              <MenuContent>
                <MenuItem>Bottom Start</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Bottom start menu'
              onClick={() => setOpenBottomStart(o => !o)}
            />
          </Menu>
          <Menu
            isOpen={openBottomEnd}
            onOutsideClick={() => setOpenBottomEnd(false)}
            placement='bottom-end'
            content={
              <MenuContent>
                <MenuItem>Bottom End</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Bottom end menu'
              onClick={() => setOpenBottomEnd(o => !o)}
            />
          </Menu>
        </div>
      </div>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Top Placements</h3>
        <div className='flex gap-4'>
          <Menu
            isOpen={openTopStart}
            onOutsideClick={() => setOpenTopStart(false)}
            placement='top-start'
            content={
              <MenuContent>
                <MenuItem>Top Start</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Top start menu'
              onClick={() => setOpenTopStart(o => !o)}
            />
          </Menu>
          <Menu
            isOpen={openTopEnd}
            onOutsideClick={() => setOpenTopEnd(false)}
            placement='top-end'
            content={
              <MenuContent>
                <MenuItem>Top End</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Top end menu'
              onClick={() => setOpenTopEnd(o => !o)}
            />
          </Menu>
        </div>
      </div>
    </div>
  )
}

export const ContainerConstraints = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className='space-y-4'>
      <p className='text-sm text-foreground-light'>
        Menu with many items in a small container - should scroll when needed
      </p>
      <div
        ref={containerRef}
        className='h-48 w-64 border-2 border-border p-2 relative overflow-hidden bg-background-light'
      >
        <div className='absolute bottom-2 right-2'>
          <Menu
            isOpen={isOpen}
            onOutsideClick={() => setIsOpen(false)}
            placement='auto'
            container={containerRef.current}
            content={
              <MenuContent>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
                <MenuItem>Item 5</MenuItem>
                <MenuItem>Item 6</MenuItem>
                <MenuItem>Item 7</MenuItem>
                <MenuItem>Item 8</MenuItem>
                <MenuItem>Item 9</MenuItem>
                <MenuItem>Item 10</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Open constrained menu'
              onClick={() => setIsOpen(o => !o)}
            />
          </Menu>
        </div>
      </div>
    </div>
  )
}
