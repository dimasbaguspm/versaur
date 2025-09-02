import type { ReactNode } from 'react'
import type { MenuProps } from '@/overlays/menu/types'
import type { ButtonProps } from '../button/types'

export interface ButtonMenuProps
  extends Omit<ButtonProps, 'content'>,
    Pick<MenuProps, 'placement' | 'container' | 'preserve'> {
  /**
   * Callback function triggered when the menu open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void

  /**
   * The content to be displayed inside the menu.
   */
  children: ReactNode

  /**
   * The label to be displayed on the button.
   */
  label: ReactNode
}
