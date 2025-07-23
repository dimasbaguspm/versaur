import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@/primitive/button'
import { Drawer } from './drawer'
import type { DrawerProps } from './types'
import { X, Bell } from 'lucide-react'

// Wrapper component to handle state in stories
const DrawerWrapper = ({
  children,
  triggerLabel = 'Open Drawer',
  ...drawerProps
}: Partial<DrawerProps> & {
  children: React.ReactNode
  triggerLabel?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{triggerLabel}</Button>
      <Drawer {...drawerProps} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Drawer>
    </>
  )
}

const meta: Meta<typeof Drawer> = {
  title: 'Overlays/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component:
          'A controlled sliding drawer overlay component that provides additional space for content. Supports left/right positioning, multiple sizes, and glass variant where the drawer content becomes transparent with backdrop blur effects while the overlay remains dark for focus.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the drawer is open (controlled)',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position where the drawer slides in from',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '3/4', 'full'],
      description: 'Size of the drawer',
    },
    variant: {
      control: 'select',
      options: ['default', 'glass'],
      description:
        'Visual variant of the drawer. Glass makes the drawer content transparent with backdrop blur',
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

/**
 * Default drawer with standard settings
 * Shows a basic controlled drawer with header, body, and footer sections
 */
export const Default: Story = {
  render: args => (
    <DrawerWrapper {...args}>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Drawer Title</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <p className='text-gray-600 mb-4'>
          This is the main content area of the drawer. You can put any content
          here.
        </p>
        <p className='text-gray-600'>
          The drawer supports different sizes, positions, and variants to match
          your design needs.
        </p>
      </Drawer.Body>
      <Drawer.Footer>
        <Button variant='ghost'>Cancel</Button>
        <Button>Save Changes</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'md',
    variant: 'default',
  },
}

/**
 * Left position drawer
 * Demonstrates a drawer that slides in from the left side
 */
export const LeftPosition: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Settings'>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Settings</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <div className='space-y-4'>
          <div>
            <h4 className='font-medium mb-2'>Appearance</h4>
            <p className='text-sm text-gray-600'>Customize your experience</p>
          </div>
          <div>
            <h4 className='font-medium mb-2'>Notifications</h4>
            <p className='text-sm text-gray-600'>
              Manage notification preferences
            </p>
          </div>
          <div>
            <h4 className='font-medium mb-2'>Privacy</h4>
            <p className='text-sm text-gray-600'>
              Control your privacy settings
            </p>
          </div>
        </div>
      </Drawer.Body>
    </DrawerWrapper>
  ),
  args: {
    position: 'left',
    size: 'md',
    variant: 'default',
  },
}

/**
 * Glass variant drawer
 * Shows the glass variant with transparent backdrop blur effects on the drawer content
 * The overlay remains dark to maintain focus, while the drawer itself becomes glass-like
 */
export const GlassVariant: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Glass Drawer' size='full'>
      <Drawer.Body>
        <p className='text-white mb-4'>
          This drawer uses the glass variant where the drawer content itself
          becomes transparent with backdrop blur effects.
        </p>
        <p className='text-white mb-4'>
          The overlay remains dark to help you focus on the drawer content,
          while the drawer background creates a frosted glass appearance.
        </p>
        <p className='text-white'>
          Perfect for modern interfaces that need subtle, elegant overlay
          effects while maintaining visual connection with the underlying
          content.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'lg',
    variant: 'glass',
  },
}

/**
 * Large size drawer
 * Demonstrates different drawer sizes
 */
export const LargeSize: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Large Drawer'>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Notifications</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <div className='space-y-4'>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className='p-4 border border-gray-200 rounded-lg'>
              <div className='flex items-start justify-between'>
                <div>
                  <h4 className='font-medium'>Notification {i + 1}</h4>
                  <p className='text-sm text-gray-600 mt-1'>
                    This is a sample notification message with more details
                    about the event.
                  </p>
                  <span className='text-xs text-gray-400 mt-2 block'>
                    {new Date(Date.now() - i * 3600000).toLocaleString()}
                  </span>
                </div>
                <Bell size={16} className='text-blue-500 mt-1' />
              </div>
            </div>
          ))}
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button variant='ghost'>Mark all as read</Button>
        <Button>Close</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'xl',
    variant: 'default',
  },
}

/**
 * Three-quarters width drawer
 * Shows a drawer that takes 75% of the viewport width, ideal for dashboards or complex forms
 */
export const ThreeQuartersWidth: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open 3/4 Width'>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Dashboard View</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <div className='space-y-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='p-4 border border-gray-200 rounded-lg'>
              <h4 className='font-medium mb-2'>Analytics Overview</h4>
              <p className='text-gray-600 text-sm'>
                The 3/4 width drawer provides substantial space for complex
                layouts like dashboards, detailed forms, or content editing
                interfaces.
              </p>
            </div>
            <div className='p-4 border border-gray-200 rounded-lg'>
              <h4 className='font-medium mb-2'>Performance Metrics</h4>
              <p className='text-gray-600 text-sm'>
                This size strikes a balance between providing ample working
                space while maintaining some background context visibility.
              </p>
            </div>
          </div>
          <div className='p-4 border border-gray-200 rounded-lg'>
            <h4 className='font-medium mb-4'>Recent Activity</h4>
            <div className='space-y-3'>
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0'
                >
                  <div>
                    <p className='font-medium text-sm'>Activity {i + 1}</p>
                    <p className='text-xs text-gray-500'>
                      Description of the activity item
                    </p>
                  </div>
                  <span className='text-xs text-gray-400'>
                    {new Date(Date.now() - i * 1800000).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button variant='ghost'>Reset</Button>
        <Button>Apply Changes</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: '3/4',
    variant: 'default',
  },
}

/**
 * Full width drawer
 * Shows a drawer that takes the full width of the viewport
 */
export const FullWidth: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Full Width'>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Full Width Drawer</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className='p-6 border border-gray-200 rounded-lg'>
              <h4 className='font-medium mb-2'>Card {i + 1}</h4>
              <p className='text-gray-600'>
                This is a sample card in the full-width drawer layout.
              </p>
            </div>
          ))}
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button variant='ghost'>Cancel</Button>
        <Button>Save All</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'full',
    variant: 'default',
  },
}

/**
 * Custom footer layout (non-responsive)
 * Shows how to disable the responsive behavior for custom button arrangements
 */
export const CustomFooterLayout: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Custom Footer'>
      <Drawer.Header>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Custom Layout</h3>
          <Button variant='ghost' size='sm'>
            <X size={16} />
          </Button>
        </div>
      </Drawer.Header>
      <Drawer.Body>
        <p className='text-gray-600 mb-4'>
          This drawer footer has custom styling with responsive behavior
          disabled. The buttons maintain their custom layout across all screen
          sizes.
        </p>
        <p className='text-gray-600'>
          Use `responsiveFlex={false}` when you need complete control over
          footer layout.
        </p>
      </Drawer.Body>
      <Drawer.Footer responsiveFlex={false}>
        <div className='flex items-center justify-between w-full'>
          <Button variant='ghost' size='sm'>
            <Bell size={16} className='mr-2' />
            Notify
          </Button>
          <div className='flex gap-2'>
            <Button variant='ghost'>Cancel</Button>
            <Button>Apply</Button>
          </div>
        </div>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'md',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `responsiveFlex={false}`, the footer does not apply responsive behavior. You have full control over the layout and can implement custom arrangements that remain consistent across all screen sizes.',
      },
    },
  },
}

export const Fade: Story = {
  render: args => (
    <DrawerWrapper
      {...args}
      transitionType='fade'
      triggerLabel='Open Fade Drawer'
    >
      <Drawer.Header>
        <h3 className='text-lg font-semibold'>Fade Transition</h3>
      </Drawer.Header>
      <Drawer.Body>
        <p>This drawer uses a fade transition instead of sliding in/out.</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'full',
    variant: 'default',
    transitionType: 'fade',
  },
}
