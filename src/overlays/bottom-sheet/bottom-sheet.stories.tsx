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
import { TextInput } from '@/forms/text-input'
import { TextAreaInput } from '@/forms/textarea-input'
import { ButtonGroup } from '@/layouts'

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
              <BottomSheet.Title>Sheet Title</BottomSheet.Title>
              <BottomSheet.CloseIcon />
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
          <Button variant='destructive' size='md' onClick={() => setOpen(true)}>
            Delete Item
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <BottomSheet.Title>Delete Item</BottomSheet.Title>
              <BottomSheet.CloseIcon />
            </BottomSheet.Header>
            <BottomSheet.Body>
              <p className='text-sm text-danger'>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </BottomSheet.Body>
            <BottomSheet.Footer>
              <ButtonGroup alignment='end'>
                <Button
                  variant='ghost'
                  size='md'
                  className='flex-1'
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant='destructive'
                  size='md'
                  className='flex-1'
                  onClick={() => setOpen(false)}
                >
                  Delete
                </Button>
              </ButtonGroup>
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
          <Button variant='outline' size='md' onClick={() => setOpen(true)}>
            Open Menu
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <BottomSheet.Title>Menu</BottomSheet.Title>
              <BottomSheet.CloseIcon />
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
          <Button variant='outline' size='md' onClick={() => setOpen(true)}>
            Show Custom Content
          </Button>
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <BottomSheet.Title>Custom Content</BottomSheet.Title>
              <BottomSheet.CloseIcon />
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
              <ButtonGroup alignment='end'>
                <Button
                  variant='primary'
                  className='w-full'
                  onClick={() => setOpen(false)}
                >
                  Submit
                </Button>
              </ButtonGroup>
            </BottomSheet.Footer>
          </BottomSheet>
        </>
      )
    }
    return <CustomContentSheet />
  },
}

/**
 * FormExample demonstrates how the BottomSheet adapts to virtual keyboard
 * Test on mobile devices to see keyboard-aware positioning
 */
export const FormExample: Story = {
  render: () => {
    function FormSheet() {
      const [open, setOpen] = useState(false)
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      })

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Form submitted!')
        setOpen(false)
      }

      return (
        <>
          <div className='p-4'>
            <Button variant='primary' size='md' onClick={() => setOpen(true)}>
              Contact Form
            </Button>
            <p className='mt-2 text-sm text-foreground-light'>
              Open on mobile to test virtual keyboard adaptation
            </p>
          </div>

          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <BottomSheet.Header>
              <BottomSheet.Title>Contact Us</BottomSheet.Title>
              <BottomSheet.CloseIcon />
            </BottomSheet.Header>

            <BottomSheet.Body>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <TextInput
                  label='Name'
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  placeholder='Enter your name'
                  required
                />
                <TextInput
                  label='Email'
                  type='email'
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                  placeholder='Enter your email'
                  required
                />
                <TextAreaInput
                  label='Message'
                  value={formData.message}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, message: e.target.value }))
                  }
                  placeholder='Enter your message'
                  rows={4}
                  required
                />
                <div className='text-xs text-foreground-light'>
                  * The sheet automatically adjusts when virtual keyboard
                  appears on mobile
                </div>
              </form>
            </BottomSheet.Body>

            <BottomSheet.Footer>
              <ButtonGroup>
                <Button
                  variant='ghost'
                  size='md'
                  onClick={() => setOpen(false)}
                  className='flex-1'
                >
                  Cancel
                </Button>
                <Button
                  variant='primary'
                  size='md'
                  onClick={handleSubmit}
                  className='flex-1'
                >
                  Send Message
                </Button>
              </ButtonGroup>
            </BottomSheet.Footer>
          </BottomSheet>
        </>
      )
    }
    return <FormSheet />
  },
}
