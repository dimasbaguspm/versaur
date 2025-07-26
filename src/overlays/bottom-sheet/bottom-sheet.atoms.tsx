import { forwardRef } from 'react'

import {
  bottomSheetHeaderVariants,
  bottomSheetBodyVariants,
  bottomSheetFooterVariants,
} from './helpers'
import type {
  BottomSheetHeaderProps,
  BottomSheetBodyProps,
  BottomSheetFooterProps,
  BottomSheetTitleProps,
} from './types'

/**
 * BottomSheetTitle: Title text for the sheet header (for consistency)
 */
export const BottomSheetTitle = forwardRef<
  HTMLHeadingElement,
  BottomSheetTitleProps
>(function BottomSheetTitleImpl({ className, ...props }, ref) {
  return (
    <h2
      ref={ref}
      className={['text-lg font-semibold text-foreground', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
})

/**
 * BottomSheetHeader: Top section for title or actions
 */
export const BottomSheetHeader = forwardRef<
  HTMLDivElement,
  BottomSheetHeaderProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={bottomSheetHeaderVariants({ className })}
    {...props}
  />
))

/**
 * BottomSheetBody: Main content area
 */
export const BottomSheetBody = forwardRef<HTMLDivElement, BottomSheetBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={bottomSheetBodyVariants({ className })}
      {...props}
    />
  )
)

/**
 * BottomSheetFooter: Bottom section for actions
 */
export const BottomSheetFooter = forwardRef<
  HTMLDivElement,
  BottomSheetFooterProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={bottomSheetFooterVariants({ className })}
    {...props}
  />
))
