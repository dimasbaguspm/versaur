import type { DrawerProps } from '@/overlays/drawer/types'
import type { TextInputProps } from '../text-input/types'
import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

export interface DrawerInputContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
  value: InputHTMLAttributes<HTMLInputElement>['value']
}

/**
 * DrawerInputProps extends TextInputProps, but input is always readOnly
 * @property {boolean} open - Drawer open state (controlled)
 * @property {(open: boolean) => void} onOpenChange - Callback for drawer open state change
 * @property {React.ReactNode} children - Drawer content
 */
export interface DrawerInputProps
  extends Omit<TextInputProps, 'readOnly' | 'children'>,
    Pick<
      DrawerProps,
      | 'size'
      | 'position'
      | 'disableEscapeKeyDown'
      | 'disableOverlayClickToClose'
    > {
  children: (ctx: DrawerInputContextValue) => ReactNode
}
