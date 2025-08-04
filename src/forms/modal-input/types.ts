import type { ModalRootProps } from '@/overlays'
import type { TextInputProps } from '../text-input/types'
import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

export interface ModalInputContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
  value: InputHTMLAttributes<HTMLInputElement>['value']
}

/**
 * ModalInputProps extends TextInputProps, but input is always readOnly
 * @property {boolean} open - Modal open state (controlled)
 * @property {(open: boolean) => void} onOpenChange - Callback for modal open state change
 * @property {React.ReactNode} children - Modal content
 */
export interface ModalInputProps
  extends Omit<TextInputProps, 'readOnly' | 'children'>,
    Pick<ModalRootProps, 'size' | 'placement'> {
  children: (ctx: ModalInputContextValue) => ReactNode
}
