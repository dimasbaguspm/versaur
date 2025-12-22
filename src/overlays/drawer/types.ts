import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react'
import type { OverlayPortalProps } from '@/utils/overlay-portal'

/**
 * Drawer positioning options
 */
export type DrawerPosition = 'left' | 'right'

/**
 * Drawer size options
 */
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | '3/4' | 'full'

/**
 * Context value for the Drawer compound component
 */
export interface DrawerContextValue {
  /** Whether the drawer is open */
  isOpen: boolean
  /** Function to close the drawer */
  onClose: () => void
  /** Drawer position (left or right) */
  position: DrawerPosition
  /** Drawer size */
  size: DrawerSize
  /** Whether to disable overlay click to close */
  disableOverlayClickToClose: boolean
  /** Whether to disable escape key down */
  disableEscapeKeyDown: boolean
  /** ID for the drawer title element (for aria-labelledby) */
  titleId: string
  /** ID for the drawer description element (for aria-describedby) */
  descriptionId: string
}

/**
 * Props for the Drawer component (controlled component)
 */
export interface DrawerProps
  extends Omit<ComponentPropsWithoutRef<'dialog'>, 'onClose' | 'open'>,
    OverlayPortalProps,
    Partial<Omit<DrawerContextValue, 'isOpen' | 'onClose'>>,
    Pick<DrawerContextValue, 'isOpen' | 'onClose'> {
  /** Children components */
  children: ReactNode
}

/**
 * Props for the DrawerHeader component
 */
export interface DrawerHeaderProps extends ComponentPropsWithoutRef<'header'> {
  /** Children components */
  children: ReactNode
  /** Whether the header has tabs */
  hasTab?: boolean
}

/**
 * Props for the DrawerTab component
 */
export interface DrawerHeaderTabProps extends HTMLAttributes<HTMLDivElement> {
  /** Children components */
  children: ReactNode
}

/**
 * Props for the DrawerBody component
 */
export interface DrawerBodyProps extends ComponentPropsWithoutRef<'main'> {
  /** Children components */
  children: ReactNode
}

/**
 * Props for the DrawerFooter component
 */
export interface DrawerFooterProps extends ComponentPropsWithoutRef<'footer'> {
  /** Children components */
  children: ReactNode
}
