import type { TextInputProps } from '../text-input/types'
import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

export interface BottomSheetInputContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
  value: InputHTMLAttributes<HTMLInputElement>['value']
}

/**
 * BottomSheetInputProps extends TextInputProps, but input is always readOnly
 * @property {boolean} open - BottomSheet open state (controlled)
 * @property {(open: boolean) => void} onOpenChange - Callback for sheet open state change
 * @property {React.ReactNode} children - BottomSheet content
 */
export interface BottomSheetInputProps
  extends Omit<TextInputProps, 'readOnly' | 'children'> {
  children: (ctx: BottomSheetInputContextValue) => ReactNode
}
