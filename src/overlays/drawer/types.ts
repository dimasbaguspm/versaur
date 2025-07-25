/**
 * Drawer transition type options
 */
export type DrawerTransitionType = 'slide' | 'fade'
import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from '@/utils/variants'
import type { drawerVariants } from './helpers'

/**
 * Base drawer variant props derived from the drawer variants
 */
export type DrawerVariantProps = VariantProps<typeof drawerVariants>

/**
 * Drawer positioning options
 */
export type DrawerPosition = 'left' | 'right'

/**
 * Drawer size options
 */
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | '3/4' | 'full'

/**
 * Drawer variant options
 */
export type DrawerVariant = 'default' | 'glass'

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
  /** Drawer variant */
  variant: DrawerVariant
  /** Drawer transition type */
  transitionType: DrawerTransitionType
}

/**
 * Props for the Drawer component (controlled component)
 */
export interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the drawer is open (required - controlled component) */
  isOpen: boolean
  /** Callback when the drawer should close */
  onClose: (open: boolean) => void
  /** Drawer position */
  position?: DrawerPosition
  /** Drawer size */
  size?: DrawerSize
  /** Drawer variant */
  variant?: DrawerVariant
  /** Drawer transition type */
  transitionType?: DrawerTransitionType
  /** Children components */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

/**
 * Props for the DrawerHeader component
 */
export interface DrawerHeaderProps extends ComponentPropsWithoutRef<'div'> {
  /** Children components */
  children: ReactNode
  hasTab?: boolean
}

export interface DrawerHeaderTabProps extends HTMLAttributes<HTMLDivElement> {
  /** Children components */
  children: ReactNode
}

/**
 * Props for the DrawerBody component
 */
export interface DrawerBodyProps extends ComponentPropsWithoutRef<'div'> {
  /** Children components */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

/**
 * Props for the DrawerFooter component
 */
export interface DrawerFooterProps extends ComponentPropsWithoutRef<'div'> {
  /** Children components */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /**
   * Enable responsive flex behavior
   * When true (default): on small screens children expand (flex-grow), on larger screens children are right-aligned and sized to content
   * When false: children behavior is not modified by responsive rules
   */
  responsiveFlex?: boolean
}

/**
 * Props for the DrawerOverlay component
 */
export interface DrawerOverlayProps extends ComponentPropsWithoutRef<'div'> {
  /** Additional CSS classes */
  className?: string
}
