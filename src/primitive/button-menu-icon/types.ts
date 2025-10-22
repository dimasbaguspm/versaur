import type { ReactNode } from 'react'
import type { IconProps } from '../icon'
import type { ButtonIconProps } from '../button-icon'
import type { MenuProps } from '@/overlays/menu/types'

export interface ButtonMenuIconProps
  extends Omit<ButtonIconProps, 'content'>,
    Pick<IconProps, 'as'>,
    Pick<MenuProps, 'placement' | 'preserve'> {
  /**
   * Callback function triggered when the menu open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void

  /**
   * The content to be displayed inside the menu.
   */
  children: ReactNode
}
