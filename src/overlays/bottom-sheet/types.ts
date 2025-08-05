import type { OverlayPortalProps } from '@/utils/overlay-portal'
import type { HTMLAttributes } from 'react'

/**
 * Props for BottomSheetRoot (main component)
 */
export interface BottomSheetProps
  extends HTMLAttributes<HTMLDivElement>,
    OverlayPortalProps {
  /**
   * Controls open state (controlled only)
   */
  isOpen: boolean
  /**
   * Called when the backdrop is clicked (should close the sheet)
   */
  onClose: () => void
  /**
   * Content of the bottom sheet
   */
  children: React.ReactNode
}

export type BottomSheetHeaderProps = HTMLAttributes<HTMLDivElement>
export type BottomSheetBodyProps = HTMLAttributes<HTMLDivElement>
export type BottomSheetFooterProps = HTMLAttributes<HTMLDivElement>
export type BottomSheetTitleProps = HTMLAttributes<HTMLHeadingElement>
