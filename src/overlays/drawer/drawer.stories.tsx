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
          'A controlled sliding drawer overlay component that provides additional space for content. Supports left/right positioning and multiple sizes. Uses semantic HTML elements (header, main, footer) and proper ARIA attributes for accessibility.',
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
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

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
          The drawer supports different sizes and positions to match your design
          needs.
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
  },
}

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
  },
}

export const LargeSize: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Notifications'>
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
  },
}

export const WithTabs: Story = {
  render: args => (
    <DrawerWrapper {...args} triggerLabel='Open Tabbed Drawer'>
      <Drawer.Header hasTab>
        <Drawer.Title>Tabbed Content</Drawer.Title>
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
          This drawer demonstrates tabbed navigation for organizing complex
          content.
        </Text>
        <br />
        <Text as='p' color='gray'>
          Use the Tabs component inside Drawer.Tab for best accessibility and
          user experience.
        </Text>
      </Drawer.Body>
      <Drawer.Footer>
        <ButtonGroup fluid>
          <Button variant='ghost'>Cancel</Button>
          <Button>Apply</Button>
        </ButtonGroup>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
  args: {
    position: 'right',
    size: 'md',
  },
}
