import { useState, useMemo, forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import { Drawer } from '@/overlays/drawer/drawer'
import type { DrawerInputProps, DrawerInputContextValue } from './types'

/**
 * DrawerInput is a readOnly TextInput that opens a Drawer when clicked.
 * Drawer content is provided by consumer as children.
 */
const DrawerInputRoot = forwardRef<HTMLInputElement, DrawerInputProps>(
  (
    {
      children,
      onChange,
      value,
      size,
      position,
      disableEscapeKeyDown,
      disableOverlayClickToClose,
      ...textInputProps
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)

    const contextValue = useMemo(
      () => ({ isOpen, setIsOpen, onChange, value }),
      [isOpen, setIsOpen, onChange, value]
    ) satisfies DrawerInputContextValue

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
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsOpen(true)
            }
          }}
          aria-haspopup='dialog'
          aria-expanded={isOpen}
        />
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size={size}
          position={position}
          disableEscapeKeyDown={disableEscapeKeyDown}
          disableOverlayClickToClose={disableOverlayClickToClose}
        >
          {isOpen && children(contextValue)}
        </Drawer>
      </>
    )
  }
)

export const DrawerInput = Object.assign(DrawerInputRoot, {
  Header: Drawer.Header,
  Body: Drawer.Body,
  Footer: Drawer.Footer,
})
