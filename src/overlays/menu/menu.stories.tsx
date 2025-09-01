/**
 * Menu stories for Storybook
 * Group: Menu
 */

import { useState, useRef } from 'react'
import { Menu } from './menu'
import { MenuContent, MenuItem } from './menu.atoms'
import { ButtonIcon } from '@/primitive/button-icon'
import {
  Ellipsis,
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
          <MenuItem>
            <Icon as={UserCogIcon} color='inherit' />
            Profile
          </MenuItem>
          <MenuItem>
            <Icon as={SettingsIcon} color='inherit' />
            Settings
          </MenuItem>
          <Hr />
          <MenuItem disabled>
            <Icon as={LogOutIcon} color='danger' />
            Logout
          </MenuItem>
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

export const Preserve = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu
      isOpen={isOpen}
      onOutsideClick={() => setIsOpen(false)}
      size='md'
      preserve
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
  const [isMenuAOpen, setIsMenuAOpen] = useState(false)
  const [isMenuBOpen, setIsMenuBOpen] = useState(false)
  const [isMenuCOpen, setIsMenuCOpen] = useState(false)
  const [isMenuDOpen, setIsMenuDOpen] = useState(false)

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
            isOpen={isMenuAOpen}
            onOutsideClick={() => setIsMenuAOpen(false)}
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
              onClick={() => setIsMenuAOpen(o => !o)}
            />
          </Menu>
        </div>

        {/* Top-right corner */}
        <div className='absolute top-4 right-4'>
          <Menu
            isOpen={isMenuBOpen}
            onOutsideClick={() => setIsMenuBOpen(false)}
            container={containerRef.current}
            content={
              <MenuContent>
                <MenuItem>Top Right Menu</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
                <MenuItem>Option 4</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Top right menu'
              onClick={() => setIsMenuBOpen(o => !o)}
            />
          </Menu>
        </div>

        {/* Bottom-right corner */}
        <div className='absolute bottom-4 right-4'>
          <Menu
            isOpen={isMenuCOpen}
            onOutsideClick={() => setIsMenuCOpen(false)}
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
              onClick={() => setIsMenuCOpen(o => !o)}
            />
          </Menu>
        </div>

        {/* Bottom-left corner */}
        <div className='absolute bottom-4 left-4'>
          <Menu
            isOpen={isMenuDOpen}
            onOutsideClick={() => setIsMenuDOpen(false)}
            container={containerRef.current}
            content={
              <MenuContent>
                <MenuItem>Bottom Left Menu</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
                <MenuItem>Option 4</MenuItem>
              </MenuContent>
            }
          >
            <ButtonIcon
              as={EllipsisVertical}
              aria-label='Bottom left menu'
              onClick={() => setIsMenuDOpen(o => !o)}
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

export const ScrollableContainer = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-96 border border-gray-300 rounded-lg p-4'>
      <h3 className='mb-4 font-semibold'>Scrollable Container Example</h3>
      <div
        ref={contentRef}
        className='h-full overflow-y-auto bg-gray-50 p-4 rounded'
      >
        {/* Content that makes container scrollable */}
        <div className='space-y-4'>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className='p-3 bg-white rounded shadow-sm border flex justify-between items-center'
            >
              <span>Item {i + 1}</span>
              {i === 10 && (
                <Menu
                  isOpen={isOpen}
                  onOutsideClick={() => setIsOpen(false)}
                  size='md'
                  placement='auto'
                  container={contentRef.current}
                  content={
                    <MenuContent>
                      <MenuItem>View Details</MenuItem>
                      <MenuItem>Edit Item</MenuItem>
                      <MenuItem>Share</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </MenuContent>
                  }
                >
                  <ButtonIcon
                    as={Ellipsis}
                    aria-label='Open menu'
                    onClick={() => setIsOpen(o => !o)}
                  />
                </Menu>
              )}
            </div>
          ))}
        </div>
        <p className='mt-8 text-sm text-gray-600'>
          Scroll this container to see how the menu adapts its position and
          hides when the trigger goes out of bounds.
        </p>
      </div>
    </div>
  )
}

export const ViewportScrolling = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='space-y-4'>
      <h3 className='font-semibold'>Viewport Scrolling Example</h3>
      <p className='text-sm text-gray-600 mb-4'>
        This example demonstrates menu behavior when the page itself is
        scrollable. Scroll the page up/down to see the menu reposition.
      </p>

      {/* Create a tall page that requires scrolling */}
      <div className='h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-8 rounded-lg'>
        <div className='h-1/2 flex items-center justify-center'>
          <div className='text-center space-y-4'>
            <h4 className='text-lg font-medium'>
              Scroll down to find the menu
            </h4>
            <p className='text-gray-600'>↓ Keep scrolling ↓</p>
          </div>
        </div>

        <div className='h-1/2 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-md text-center space-y-4'>
            <h4 className='text-lg font-medium'>Menu in scrollable page</h4>
            <p className='text-sm text-gray-600'>
              The menu will track with the trigger as you scroll the page
            </p>
            <Menu
              isOpen={isOpen}
              onOutsideClick={() => setIsOpen(false)}
              size='md'
              placement='auto'
              content={
                <MenuContent>
                  <MenuItem>Profile Settings</MenuItem>
                  <MenuItem>Notifications</MenuItem>
                  <MenuItem>Privacy</MenuItem>
                  <MenuItem>Help & Support</MenuItem>
                  <MenuItem>Sign Out</MenuItem>
                </MenuContent>
              }
            >
              <ButtonIcon
                as={EllipsisVertical}
                aria-label='Open menu'
                onClick={() => setIsOpen(o => !o)}
              />
            </Menu>
          </div>
        </div>
      </div>

      {/* Additional content to make page scrollable */}
      <div className='h-screen bg-gradient-to-b from-green-50 to-yellow-50 p-8 rounded-lg'>
        <div className='h-full flex items-center justify-center'>
          <div className='text-center space-y-4'>
            <h4 className='text-lg font-medium'>Continue scrolling</h4>
            <p className='text-gray-600'>
              Notice how the menu disappears when the trigger scrolls out of
              view
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
