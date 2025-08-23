import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@/primitive/button'
import { Drawer } from './drawer'
import type { DrawerProps } from './types'
import { Bell } from 'lucide-react'
import { Text } from '@/primitive'
import { Tabs } from '@/navigation'
import { ButtonGroup } from '@/layouts'

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

/**
 * Default drawer with standard settings
 * Shows a basic controlled drawer with header, body, and footer sections
 */
export const Default: Story = {
  render: args => (
    <DrawerWrapper {...args}>
      <Drawer.Header>
        <Drawer.Title>Drawer Title</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <Text as='p' color='gray'>
          This is the main content area of the drawer. You can put any content
          here.
        </Text>
        <br />
        <Text as='p' color='gray'>
          The drawer supports different sizes, positions, and variants to match
          your design needs.
        </Text>
      </Drawer.Body>
      <Drawer.Footer>
        <ButtonGroup fluid>
          <Button variant='ghost'>Cancel</Button>
          <Button>Save Changes</Button>
        </ButtonGroup>
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
        <Drawer.Title>Settings</Drawer.Title>
        <Drawer.CloseButton />
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
        <Drawer.Title>Notifications</Drawer.Title>
        <Drawer.CloseButton />
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
        <ButtonGroup alignment='end'>
          <Button variant='ghost'>Mark all as read</Button>
          <Button>Close</Button>
        </ButtonGroup>
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
        <Drawer.Title>Dashboard View</Drawer.Title>
        <Drawer.CloseButton />
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
        <ButtonGroup alignment='end'>
          <Button variant='ghost'>Reset</Button>
          <Button>Apply Changes</Button>
        </ButtonGroup>
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
        <Drawer.Title>Full Width Drawer</Drawer.Title>
        <Drawer.CloseButton />
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
        <ButtonGroup alignment='end'>
          <Button variant='ghost'>Cancel</Button>
          <Button>Save All</Button>
        </ButtonGroup>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'full',
    variant: 'default',
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
        <Drawer.Title>Fade Transition</Drawer.Title>
        <Drawer.CloseButton />
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

export const HeaderTab: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Tab Drawer'>
      <Drawer.Header hasTab>
        <Drawer.Title>Tab Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Tab>
        <Tabs value='details' onValueChange={console.log}>
          <Tabs.Trigger value='details'>Details</Tabs.Trigger>
          <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
        </Tabs>
      </Drawer.Tab>
      <Drawer.Body>
        <Text as='p' color='gray'>
          This drawer can be used to display tabbed content or navigation.
        </Text>
        <br />
        <Text as='p' color='gray'>
          You can implement tabs inside the drawer body for better organization
          of content.
        </Text>
      </Drawer.Body>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'md',
    variant: 'default',
  },
}
