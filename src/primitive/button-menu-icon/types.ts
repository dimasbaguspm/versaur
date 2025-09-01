import type { ReactNode } from 'react'
import type { IconProps } from '../icon'
import type { ButtonIconProps } from '../button-icon'
import type { MenuPlacement } from '@/overlays/menu/types'

export interface ButtonMenuIconProps
  extends Omit<ButtonIconProps, 'content'>,
    Pick<IconProps, 'as'> {
  /**
   * Callback function triggered when the menu open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void

  /**
   * The content to be displayed inside the menu.
   */
  children: ReactNode

  /**
   * Preferred placement of the menu relative to the button.
   * @default 'bottom-start'
   */
  placement?: MenuPlacement

  /**
   * Container element to respect boundaries for menu positioning.
   * Defaults to viewport if not provided.
   */
  container?: HTMLElement | null
}
