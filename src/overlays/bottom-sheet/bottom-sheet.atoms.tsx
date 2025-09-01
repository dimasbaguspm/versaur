import { forwardRef, type MouseEvent } from 'react'

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
  BottomSheetCloseIconProps,
} from './types'
import { ButtonIcon, Heading } from '@/primitive'
import { XIcon } from 'lucide-react'
import { useBottomSheet } from './context'

/**
 * BottomSheetTitle: Title text for the sheet header (for consistency)
 */
export const BottomSheetTitle = forwardRef<
  HTMLHeadingElement,
  BottomSheetTitleProps
>(function BottomSheetTitleImpl(props, ref) {
  return <Heading level={3} ref={ref} {...props} />
})

export const BottomSheetCloseIcon = forwardRef<
  HTMLButtonElement,
  BottomSheetCloseIconProps
>(function BottomSheetCloseIconImpl(props, ref) {
  const { onClose } = useBottomSheet()

  const handleOnClick = (ev: MouseEvent<HTMLButtonElement>) => {
    onClose()
    props?.onClick?.(ev)
  }

  return (
    <ButtonIcon
      ref={ref}
      variant='ghost'
      aria-label='Close'
      as={XIcon}
      {...props}
      onClick={handleOnClick}
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
