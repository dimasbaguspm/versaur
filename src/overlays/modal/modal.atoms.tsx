import { forwardRef } from 'react'
import type {
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
} from './types'
import { cn } from '@/utils'

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 pt-6 pb-2 text-lg font-semibold', className)}
      {...rest}
    />
  )
)

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4  flex justify-end gap-2', className)}
      {...rest}
    />
  )
)

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn('px-6 py-2', className)} {...rest} />
  )
)
