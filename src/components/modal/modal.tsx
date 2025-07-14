import { useRef, useState, useEffect, type FC } from 'react'

import type { ModalRootProps } from './types'
import {
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalBody,
} from './modal.atoms'
import { modalContentVariants, modalOverlayVariants } from './helpers'
import { useFocusTrap } from './use-focus-trap'
import { useEscapeClose } from './use-escape-close'

const FADE_DURATION = 200 // ms

const ModalRoot: FC<ModalRootProps> = ({
  isOpen,
  onOpenChange,
  size = 'md',
  placement = 'center',
  children,
  disableOverlayClose,
  disableEscClose,
  ...aria
}) => {
  const lastActiveRef = useRef<HTMLElement | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(isOpen)
  const [exiting, setExiting] = useState(false)

  // Handle mounting for fade-out
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setExiting(false)
      lastActiveRef.current = document.activeElement as HTMLElement
    } else if (isVisible) {
      setExiting(true)
      const timeout = setTimeout(() => {
        setIsVisible(false)
        setExiting(false)
        if (lastActiveRef.current) lastActiveRef.current.focus()
      }, FADE_DURATION)
      return () => clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEscapeClose(isOpen && !disableEscClose, () => {
    if (onOpenChange) onOpenChange(false)
  })

  useFocusTrap(overlayRef, isOpen)

  return (
    <ModalOverlay
      ref={overlayRef}
      // Remove isOpen/exiting props if not used in ModalOverlay atom
      className={
        `${modalOverlayVariants({ placement })} transition-opacity duration-200 ease-in-out ` +
        (isOpen && !exiting ? 'opacity-100' : 'opacity-0 pointer-events-none')
      }
      onOverlayClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (
          e.target === overlayRef.current &&
          !disableOverlayClose &&
          onOpenChange
        ) {
          onOpenChange(false)
        }
      }}
      placement={placement}
    >
      <div
        className={
          `${modalContentVariants({ size, placement })} transition-all duration-200 ease-in-out ` +
          (isOpen && !exiting
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none')
        }
        role='dialog'
        {...aria}
        tabIndex={0}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </ModalOverlay>
  )
}

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
