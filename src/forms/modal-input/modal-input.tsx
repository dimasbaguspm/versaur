import { useState, useMemo, forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import { Modal } from '@/overlays/modal/modal'
import {
  ModalInputContext,
  useModalInputContext,
  type ModalInputContextValue,
} from './context'
import type { ModalInputModalProps, ModalInputProps } from './types'

/**
 * ModalInput is a readOnly TextInput that opens a Modal when clicked.
 * Modal content is provided by consumer as children.
 */
const ModalInputRoot = forwardRef<HTMLInputElement, ModalInputProps>(
  ({ children, onChange, value, ...textInputProps }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const contextValue = useMemo(
      () => ({ isOpen, setIsOpen, onChange, value }),
      [isOpen, setIsOpen, onChange, value]
    ) satisfies ModalInputContextValue

    return (
      <ModalInputContext.Provider value={contextValue}>
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
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
          {children}
        </Modal>
      </ModalInputContext.Provider>
    )
  }
)

const ModalInputModal = ({ children }: ModalInputModalProps) => {
  const ctx = useModalInputContext()
  return children(ctx)
}

export const ModalInput = Object.assign(ModalInputRoot, {
  Modal: ModalInputModal,
})
