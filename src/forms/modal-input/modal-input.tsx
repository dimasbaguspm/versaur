import { useState, useMemo, forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import { Modal } from '@/overlays/modal/modal'
import { type ModalInputContextValue } from './context'
import type { ModalInputProps } from './types'

/**
 * ModalInput is a readOnly TextInput that opens a Modal when clicked.
 * Modal content is provided by consumer as children.
 */
const ModalInputRoot = forwardRef<HTMLInputElement, ModalInputProps>(
  ({ children, onChange, value, size, placement, ...textInputProps }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const contextValue = useMemo(
      () => ({ isOpen, setIsOpen, onChange, value }),
      [isOpen, setIsOpen, onChange, value]
    ) satisfies ModalInputContextValue

    return (
      <>
        <TextInput
          {...textInputProps}
          onChange={onChange}
          value={value}
          ref={ref}
          readOnly
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          aria-haspopup='dialog'
          aria-expanded={isOpen}
        />
        <Modal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          size={size}
          placement={placement}
        >
          {children(contextValue)}
        </Modal>
      </>
    )
  }
)

export const ModalInput = Object.assign(ModalInputRoot, {
  Header: Modal.Header,
  Body: Modal.Body,
  Footer: Modal.Footer,
})
