/**
 * ButtonMenuIcon stories for Storybook
 * Group: ButtonMenuIcon
 */

import { useRef } from 'react'
import {
  FilterIcon,
  MoreHorizontal,
  MoreVertical,
  Settings,
} from 'lucide-react'
import { ButtonMenuIcon } from './button-menu-icon'

export default {
  title: 'Primitive/ButtonMenuIcon',
  component: ButtonMenuIcon,
  parameters: {
    docs: {
      description: {
        component:
          'Icon button with integrated menu functionality using auto placement and container constraints.',
      },
    },
  },
}

export const Basic = () => {
  return (
    <ButtonMenuIcon aria-label='Open menu' as={MoreVertical} variant='outline'>
      <ButtonMenuIcon.Item>Profile</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item>Settings</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item disabled>Logout</ButtonMenuIcon.Item>
    </ButtonMenuIcon>
  )
}

export const Preserve = () => {
  return (
    <ButtonMenuIcon
      aria-label='Open menu'
      as={MoreVertical}
      variant='outline'
      preserve
    >
      <ButtonMenuIcon.Item>Profile</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item>Settings</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item disabled>Logout</ButtonMenuIcon.Item>
    </ButtonMenuIcon>
  )
}

export const IconVariants = () => {
  return (
    <div className='flex gap-4'>
      <ButtonMenuIcon
        aria-label='More options'
        as={MoreVertical}
        variant='outline'
      >
        <ButtonMenuIcon.Item>Vertical Menu</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
      <ButtonMenuIcon
        aria-label='More actions'
        as={MoreHorizontal}
        variant='outline'
      >
        <ButtonMenuIcon.Item>Horizontal Menu</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
      <ButtonMenuIcon
        aria-label='Filter options'
        as={FilterIcon}
        variant='outline'
      >
        <ButtonMenuIcon.Item>Filter Menu</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
      <ButtonMenuIcon
        aria-label='Settings menu'
        as={Settings}
        variant='outline'
      >
        <ButtonMenuIcon.Item>Settings Menu</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
    </div>
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
          <ButtonMenuIcon
            aria-label='Top left menu'
            as={MoreVertical}
            variant='outline'
          >
            <ButtonMenuIcon.Item>Top Left Menu</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 3</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 4</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>

        {/* Top-right corner */}
        <div className='absolute top-4 right-4'>
          <ButtonMenuIcon
            aria-label='Top right menu'
            as={MoreVertical}
            variant='outline'
          >
            <ButtonMenuIcon.Item>Top Right Menu</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 3</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 4</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>

        {/* Bottom-right corner */}
        <div className='absolute bottom-4 right-4'>
          <ButtonMenuIcon
            aria-label='Bottom right menu'
            as={MoreVertical}
            variant='outline'
          >
            <ButtonMenuIcon.Item>Bottom Right Menu</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Should flip up and left</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>To stay in bounds</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Extra item</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>

        {/* Bottom-left corner */}
        <div className='absolute bottom-4 left-4'>
          <ButtonMenuIcon
            aria-label='Bottom left menu'
            as={MoreVertical}
            variant='outline'
          >
            <ButtonMenuIcon.Item>Bottom Left Menu</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 3</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 4</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
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
          <ButtonMenuIcon
            aria-label='Bottom start menu'
            as={MoreVertical}
            variant='outline'
            placement='bottom-left'
          >
            <ButtonMenuIcon.Item>Bottom Start</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
          <ButtonMenuIcon
            aria-label='Bottom end menu'
            as={MoreVertical}
            variant='outline'
            placement='bottom-right'
          >
            <ButtonMenuIcon.Item>Bottom End</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>
      </div>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Top Placements</h3>
        <div className='flex gap-4'>
          <ButtonMenuIcon
            aria-label='Top start menu'
            as={MoreVertical}
            variant='outline'
            placement='top-left'
          >
            <ButtonMenuIcon.Item>Top Start</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
          <ButtonMenuIcon
            aria-label='Top end menu'
            as={MoreVertical}
            variant='outline'
            placement='top-right'
          >
            <ButtonMenuIcon.Item>Top End</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
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
          <ButtonMenuIcon
            aria-label='Open constrained menu'
            as={MoreVertical}
            variant='outline'
          >
            <ButtonMenuIcon.Item>Item 1</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 2</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 3</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 4</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 5</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 6</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 7</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 8</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 9</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Item 10</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
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
                <ButtonMenuIcon
                  aria-label='Open menu'
                  as={MoreHorizontal}
                  variant='outline'
                >
                  <ButtonMenuIcon.Item>View Details</ButtonMenuIcon.Item>
                  <ButtonMenuIcon.Item>Edit Item</ButtonMenuIcon.Item>
                  <ButtonMenuIcon.Item>Share</ButtonMenuIcon.Item>
                  <ButtonMenuIcon.Item>Delete</ButtonMenuIcon.Item>
                </ButtonMenuIcon>
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
              ButtonMenuIcon in scrollable page
            </h4>
            <p className='text-sm text-gray-600'>
              The menu will track with the trigger as you scroll the page
            </p>
            <ButtonMenuIcon
              aria-label='Open menu'
              as={MoreVertical}
              variant='outline'
            >
              <ButtonMenuIcon.Item>Profile Settings</ButtonMenuIcon.Item>
              <ButtonMenuIcon.Item>Notifications</ButtonMenuIcon.Item>
              <ButtonMenuIcon.Item>Privacy</ButtonMenuIcon.Item>
              <ButtonMenuIcon.Item>Help & Support</ButtonMenuIcon.Item>
              <ButtonMenuIcon.Item>Sign Out</ButtonMenuIcon.Item>
            </ButtonMenuIcon>
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
