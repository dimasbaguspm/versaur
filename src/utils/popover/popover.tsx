import React, { forwardRef, useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import { popoverVariants, calculatePopoverPosition } from './helpers'
import { usePopover } from './use-popover'
import type { PopoverProps } from './types'
import { combineRefs } from '../combine-ref'

/**
 * Popover component using the browser Popover API
 *
 * Positioned relative to trigger element with intelligent viewport boundary detection.
 *
 * @example
 * ```tsx
 * // Uncontrolled usage
 * const triggerRef = useRef(null)
 * <button ref={triggerRef} {...Popover.getTriggerProps('my-popover')}>Open</button>
 * <Popover id="my-popover" triggerRef={triggerRef} placement="bottom">
 *   <p>Popover content</p>
 * </Popover>
 *
 * // Controlled usage
 * const [isOpen, setIsOpen] = useState(false)
 * const triggerRef = useRef(null)
 * <button ref={triggerRef} onClick={() => setIsOpen(true)}>Open</button>
 * <Popover
 *   id="my-popover"
 *   triggerRef={triggerRef}
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <p>Content</p>
 * </Popover>
 * ```
 */
const PopoverComponent = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      id,
      children,
      isOpen,
      onOpen,
      onClose,
      anchor,
      popover = 'auto',
      placement = 'bottom',
      triggerRef,
      gap = 8,
      maxWidth = 'sm',
      className,
      style,
      ...props
    },
    ref
  ) => {
    const { popoverRef, isOpen: actualIsOpen } = usePopover(
      id,
      isOpen,
      onOpen,
      onClose
    )
    const [inlinePosition, setInlinePosition] = useState<React.CSSProperties>(
      {}
    )
    const [isPositioned, setIsPositioned] = useState(false)

    // Calculate inline positioning
    useEffect(() => {
      if (!triggerRef?.current || !popoverRef.current) {
        return
      }

      const updatePosition = () => {
        if (!triggerRef.current || !popoverRef.current) return

        const position = calculatePopoverPosition(
          triggerRef.current,
          popoverRef.current,
          placement,
          gap
        )
        setInlinePosition(position)
      }

      // When popover opens, wait for render, then calculate position, then show
      if (actualIsOpen) {
        setIsPositioned(false)

        // Wait for popover to be rendered in DOM
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Now calculate position with actual dimensions
            updatePosition()
            // Wait one more frame before showing
            requestAnimationFrame(() => {
              setIsPositioned(true)
            })
          })
        })
      } else {
        setIsPositioned(false)
        // Calculate position while closed for initial setup
        updatePosition()
      }

      // Update on scroll and resize only when popover is open
      const handleUpdate = () => {
        if (actualIsOpen) {
          updatePosition()
        }
      }

      window.addEventListener('scroll', handleUpdate, true)
      window.addEventListener('resize', handleUpdate)

      return () => {
        window.removeEventListener('scroll', handleUpdate, true)
        window.removeEventListener('resize', handleUpdate)
      }
    }, [triggerRef, popoverRef, placement, gap, actualIsOpen])

    const combinedStyles = {
      ...inlinePosition,
      ...style,
      // Hide until positioned to prevent flash
      ...(isPositioned
        ? {}
        : {
            opacity: 0,
            pointerEvents: 'none' as const,
            transition: 'none',
          }),
    } as React.CSSProperties

    return (
      <div
        {...props}
        ref={combineRefs(ref, popoverRef)}
        id={id}
        popover={popover}
        className={cn(popoverVariants({ maxWidth }), className)}
        style={combinedStyles}
        {...(anchor && { anchor })}
      >
        {children}
      </div>
    )
  }
)

PopoverComponent.displayName = 'Popover'

/**
 * Static method to get trigger props for uncontrolled usage
 */
const getTriggerProps = (
  id: string,
  action: 'toggle' | 'show' | 'hide' = 'toggle'
) => ({
  popoverTarget: id,
  popoverTargetAction: action,
})

export const Popover = Object.assign(PopoverComponent, {
  getTriggerProps,
})
