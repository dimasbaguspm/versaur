import { useRef } from 'react'

import { ButtonMenu } from './button-menu'
import { Icon } from '../icon'
import { BoltIcon, LogOutIcon, User2Icon } from 'lucide-react'

export default {
  title: 'Primitive/ButtonMenu',
  component: ButtonMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Button with integrated menu functionality using auto placement and container constraints.',
      },
    },
  },
}

export const Basic = () => {
  return (
    <ButtonMenu
      aria-label='Open menu'
      label={
        <>
          <Icon as={User2Icon} color='inherit' />
          Profile
        </>
      }
      variant='outline'
    >
      <ButtonMenu.Item active>
        <Icon as={User2Icon} color='inherit' />
        Profile
      </ButtonMenu.Item>
      <ButtonMenu.Item>
        <Icon as={BoltIcon} color='inherit' />
        Settings
      </ButtonMenu.Item>
      <ButtonMenu.Item disabled>
        <Icon as={LogOutIcon} color='inherit' />
        Logout
      </ButtonMenu.Item>
    </ButtonMenu>
  )
}

export const Preserve = () => {
  return (
    <ButtonMenu
      aria-label='Open menu'
      label={
        <>
          <Icon as={User2Icon} color='inherit' />
          Profile
        </>
      }
      variant='outline'
      preserve
    >
      <ButtonMenu.Item active>
        <Icon as={User2Icon} color='inherit' />
        Profile
      </ButtonMenu.Item>
      <ButtonMenu.Item>
        <Icon as={BoltIcon} color='inherit' />
        Settings
      </ButtonMenu.Item>
      <ButtonMenu.Item disabled>
        <Icon as={LogOutIcon} color='inherit' />
        Logout
      </ButtonMenu.Item>
    </ButtonMenu>
  )
}

export const AutoPlacement = () => {
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
          <ButtonMenu
            aria-label='Top left menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>

        {/* Top-right corner */}
        <div className='absolute top-4 right-4'>
          <ButtonMenu
            aria-label='Top right menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>

        {/* Bottom-right corner */}
        <div className='absolute bottom-4 right-4'>
          <ButtonMenu
            aria-label='Bottom right menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>

        {/* Bottom-left corner */}
        <div className='absolute bottom-4 left-4'>
          <ButtonMenu
            aria-label='Bottom left menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>
      </div>
    </div>
  )
}

export const Placements = () => {
  return (
    <div className='grid grid-cols-2 gap-8 p-8'>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Bottom Placements</h3>
        <div className='flex gap-4'>
          <ButtonMenu
            aria-label='Bottom start menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
            placement='bottom-left'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
          <ButtonMenu
            aria-label='Bottom end menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
            placement='bottom-right'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>
      </div>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Top Placements</h3>
        <div className='flex gap-4'>
          <ButtonMenu
            aria-label='Top start menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
            placement='top-left'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
          <ButtonMenu
            aria-label='Top end menu'
            label={
              <>
                <Icon as={User2Icon} color='inherit' />
                Profile
              </>
            }
            variant='outline'
            placement='top-right'
          >
            <ButtonMenu.Item active>
              <Icon as={User2Icon} color='inherit' />
              Profile
            </ButtonMenu.Item>
            <ButtonMenu.Item>
              <Icon as={BoltIcon} color='inherit' />
              Settings
            </ButtonMenu.Item>
            <ButtonMenu.Item disabled>
              <Icon as={LogOutIcon} color='inherit' />
              Logout
            </ButtonMenu.Item>
          </ButtonMenu>
        </div>
      </div>
    </div>
  )
}

export const ContainerConstraints = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className='space-y-4'>
      <p className='text-sm text-foreground-light'>
        Menu with many items in a small container - should scroll when needed
      </p>
      <div
        className='h-48 w-64 border-2 border-border p-2 relative overflow-hidden bg-background-light'
        ref={containerRef}
      >
        <div className='absolute bottom-2 right-2'>
          <ButtonMenu
            aria-label='Open constrained menu'
            label='Profile'
            variant='outline'
          >
            <ButtonMenu.Item>Item 1</ButtonMenu.Item>
            <ButtonMenu.Item>Item 2</ButtonMenu.Item>
            <ButtonMenu.Item>Item 3</ButtonMenu.Item>
            <ButtonMenu.Item>Item 4</ButtonMenu.Item>
            <ButtonMenu.Item>Item 5</ButtonMenu.Item>
            <ButtonMenu.Item>Item 6</ButtonMenu.Item>
            <ButtonMenu.Item>Item 7</ButtonMenu.Item>
            <ButtonMenu.Item>Item 8</ButtonMenu.Item>
            <ButtonMenu.Item>Item 9</ButtonMenu.Item>
            <ButtonMenu.Item>Item 10</ButtonMenu.Item>
          </ButtonMenu>
        </div>
      </div>
    </div>
  )
}

export const ScrollableContainer = () => {
  const contentRef = useRef<HTMLDivElement>(null)

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
                <ButtonMenu
                  aria-label='Open menu'
                  label='Profile'
                  variant='outline'
                >
                  <ButtonMenu.Item>View Details</ButtonMenu.Item>
                  <ButtonMenu.Item>Edit Item</ButtonMenu.Item>
                  <ButtonMenu.Item>Share</ButtonMenu.Item>
                  <ButtonMenu.Item>Delete</ButtonMenu.Item>
                </ButtonMenu>
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
            <h4 className='text-lg font-medium'>
              ButtonMenu in scrollable page
            </h4>
            <p className='text-sm text-gray-600'>
              The menu will track with the trigger as you scroll the page
            </p>
            <ButtonMenu
              aria-label='Open menu'
              label='Profile'
              variant='outline'
            >
              <ButtonMenu.Item>Profile Settings</ButtonMenu.Item>
              <ButtonMenu.Item>Notifications</ButtonMenu.Item>
              <ButtonMenu.Item>Privacy</ButtonMenu.Item>
              <ButtonMenu.Item>Help & Support</ButtonMenu.Item>
              <ButtonMenu.Item>Sign Out</ButtonMenu.Item>
            </ButtonMenu>
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
