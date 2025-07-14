/**
 * Modal group stories
 *
 * - Demonstrates Modal compound usage
 * - Shows size and placement variants
 * - Follows accessibility best practices
 * - Usage matches README example
 */
import React from 'react'
import { Modal } from './modal'
import { Button } from '@/components/button'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export function Default() {
  /**
   * Example usage of Modal compound component
   *
   * - Follows README usage
   * - Shows header, body, and footer
   */
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} aria-label='Dialog'>
        <Modal.Header>Title</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>
          <Button variant='ghost' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function SizeModalExample({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open {size}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size={size}
        aria-label='Dialog'
      >
        <Modal.Header>{size.toUpperCase()} Modal</Modal.Header>
        <Modal.Body>Size: {size}</Modal.Body>
        <Modal.Footer>
          <Button variant='ghost' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const Sizes = () => (
  <div className='flex gap-4'>
    <SizeModalExample size='sm' />
    <SizeModalExample size='md' />
    <SizeModalExample size='lg' />
  </div>
)

function PlacementModalExample({ placement }: { placement: 'top' | 'center' }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open {placement}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement={placement}
        aria-label='Dialog'
      >
        <Modal.Header>{placement.toUpperCase()} Modal</Modal.Header>
        <Modal.Body>Placement: {placement}</Modal.Body>
        <Modal.Footer>
          <Button variant='ghost' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const Placement = () => (
  <div className='flex gap-4'>
    <PlacementModalExample placement='top' />
    <PlacementModalExample placement='center' />
  </div>
)
