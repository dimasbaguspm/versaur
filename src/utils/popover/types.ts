import type { HTMLAttributes, ReactNode, RefObject } from 'react'

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left'

/**
 * Popover container max-width variants
 */
export type PopoverMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

/**
 * Props for Popover component
 *
 * Positioned popover relative to trigger element with intelligent boundary detection.
 */
export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the popover
   * This is used to link the trigger and popover via popovertarget
   */
  id: string

  /**
   * The content to display in the popover
   */
  children: ReactNode

  /**
   * Trigger element ref for positioning
   * Required for calculating popover position
   */
  triggerRef: RefObject<HTMLElement | null>

  /**
   * Whether the popover is open (controlled)
   * @default undefined (uncontrolled)
   */
  isOpen?: boolean

  /**
   * Callback when the popover opens
   */
  onOpen?: () => void

  /**
   * Callback when the popover closes
   */
  onClose?: () => void

  /**
   * Anchor element for positioning
   * Uses CSS anchor positioning when supported
   */
  anchor?: string

  /**
   * Popover behavior type
   * - auto: light dismiss (closes on outside click, Escape)
   * - manual: requires explicit close
   * @default 'auto'
   */
  popover?: 'auto' | 'manual'

  /**
   * Placement relative to trigger
   * @default 'bottom'
   */
  placement?: PopoverPlacement

  /**
   * Gap between trigger and popover in pixels
   * @default 8
   */
  gap?: number

  /**
   * Maximum width of the popover container
   * @default 'sm'
   */
  maxWidth?: PopoverMaxWidth
}

/**
 * Trigger props returned by getTriggerProps
 */
export interface PopoverTriggerProps {
  /**
   * The popover target attribute
   */
  popoverTarget: string

  /**
   * The popover target action (toggle, show, hide)
   * @default 'toggle'
   */
  popoverTargetAction?: 'toggle' | 'show' | 'hide'
}

/**
 * Return type of usePopover hook
 */
export interface UsePopoverReturn {
  /**
   * Props to spread on the trigger element
   */
  getTriggerProps: (action?: 'toggle' | 'show' | 'hide') => PopoverTriggerProps

  /**
   * Programmatically show the popover
   */
  show: () => void

  /**
   * Programmatically hide the popover
   */
  hide: () => void

  /**
   * Programmatically toggle the popover
   */
  toggle: () => void

  /**
   * Whether the popover is currently open
   */
  isOpen: boolean

  /**
   * Ref to the popover element
   */
  popoverRef: React.RefObject<HTMLDivElement | null>
}
