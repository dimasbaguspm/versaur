/**
 * BottomSheet stories
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction
 *
 * This story demonstrates the BottomSheet compound component for mobile overlays.
 * Only visible on small viewports. Use the controls to open/close the sheet.
 */
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BottomSheet } from './bottom-sheet'
import { Button } from '@/primitive/button'
import { ButtonIcon } from '@/primitive'
import { X } from 'lucide-react'
import { TextInput } from '@/forms'

const meta: Meta<typeof BottomSheet> = {
  title: 'Overlays/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A mobile-only bottom sheet overlay. Use for actions, menus, or additional content on small screens.',
      },
      viewport: {
        defaultViewport: 'mobile2',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof BottomSheet>

export const Basic: Story = {
  render: () => {
    function BasicSheet() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button variant='primary' size='md' onClick={() => setOpen(true)}>
            Open BottomSheet
          </Button>

          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <div className='flex items-center justify-between'>
                <BottomSheet.Title>Sheet Title</BottomSheet.Title>
                <ButtonIcon
                  as={X}
                  variant='ghost'
                  size='sm'
                  onClick={() => setOpen(false)}
                  aria-label='Close'
                />
              </div>
            </BottomSheet.Header>
            <BottomSheet.Body>
              <p className='text-sm text-foreground-light'>
                This is a mobile bottom sheet. You can put any content here,
                such as actions, menus, or forms.
              </p>
            </BottomSheet.Body>
            <BottomSheet.Footer>
              <Button
                variant='primary'
                size='md'
                className='w-full'
                onClick={() => setOpen(false)}
              >
                Confirm
              </Button>
            </BottomSheet.Footer>
          </BottomSheet>
        </>
      )
    }
    return <BasicSheet />
  },
}

/**
 * Confirmation Sheet Example
 */
export const Confirmation: Story = {
  render: () => {
    function ConfirmationSheet() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button variant='danger' size='md' onClick={() => setOpen(true)}>
            Delete Item
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <div className='flex items-center justify-between'>
                <BottomSheet.Title>Delete Item</BottomSheet.Title>
                <ButtonIcon
                  as={X}
                  variant='ghost'
                  size='sm'
                  onClick={() => setOpen(false)}
                  aria-label='Close'
                />
              </div>
            </BottomSheet.Header>
            <BottomSheet.Body>
              <p className='text-sm text-danger'>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </BottomSheet.Body>
            <BottomSheet.Footer>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  size='md'
                  className='flex-1'
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant='danger'
                  size='md'
                  className='flex-1'
                  onClick={() => setOpen(false)}
                >
                  Delete
                </Button>
              </div>
            </BottomSheet.Footer>
          </BottomSheet>
        </>
      )
    }
    return <ConfirmationSheet />
  },
}

/**
 * Menu Sheet Example
 */
export const Menu: Story = {
  render: () => {
    function MenuSheet() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button variant='secondary' size='md' onClick={() => setOpen(true)}>
            Open Menu
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <div className='flex items-center justify-between'>
                <BottomSheet.Title>Menu</BottomSheet.Title>
                <ButtonIcon
                  as={X}
                  variant='ghost'
                  size='sm'
                  onClick={() => setOpen(false)}
                  aria-label='Close'
                />
              </div>
            </BottomSheet.Header>
            <BottomSheet.Body>
              <ul className='divide-y divide-border'>
                <li>
                  <Button variant='ghost' className='w-full justify-start'>
                    Profile
                  </Button>
                </li>
                <li>
                  <Button variant='ghost' className='w-full justify-start'>
                    Settings
                  </Button>
                </li>
                <li>
                  <Button variant='ghost' className='w-full justify-start'>
                    Logout
                  </Button>
                </li>
              </ul>
            </BottomSheet.Body>
          </BottomSheet>
        </>
      )
    }
    return <MenuSheet />
  },
}

/**
 * Custom Content Example
 */
export const CustomContent: Story = {
  render: () => {
    function CustomContentSheet() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button variant='tertiary' size='md' onClick={() => setOpen(true)}>
            Show Custom Content
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <div className='flex items-center justify-between'>
                <BottomSheet.Title>Custom Content</BottomSheet.Title>
                <ButtonIcon
                  as={X}
                  variant='ghost'
                  size='sm'
                  onClick={() => setOpen(false)}
                  aria-label='Close'
                />
              </div>
            </BottomSheet.Header>
            <BottomSheet.Body>
              <form className='flex flex-col gap-3'>
                <TextInput label='Name' placeholder='Enter your name' />
                <TextInput
                  type='email'
                  label='Email'
                  placeholder='Enter your email'
                />
              </form>
            </BottomSheet.Body>
            <BottomSheet.Footer>
              <Button
                variant='primary'
                className='w-full'
                onClick={() => setOpen(false)}
              >
                Submit
              </Button>
            </BottomSheet.Footer>
          </BottomSheet>
        </>
      )
    }
    return <CustomContentSheet />
  },
}
