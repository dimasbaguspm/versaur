import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type {
  AppBarLeadingProps,
  AppBarHeadlineProps,
  AppBarSubtitleProps,
  AppBarTrailingProps,
  AppBarCenterProps,
} from './types'
import { appBarCenterVariants } from './helpers'

/**
 * Leading section (logo, nav icon)
 */
export const AppBarLeading = forwardRef<HTMLDivElement, AppBarLeadingProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)}>
      {children}
    </div>
  )
)

/**
 * Headline section (main title)
 */
export const AppBarHeadline = forwardRef<HTMLDivElement, AppBarHeadlineProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('font-semibold text-lg truncate min-w-0', className)}
    >
      {children}
    </div>
  )
)

/**
 * Subtitle section (secondary text)
 */
export const AppBarSubtitle = forwardRef<HTMLDivElement, AppBarSubtitleProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('text-xs text-slate-400 truncate min-w-0', className)}
    >
      {children}
    </div>
  )
)

/**
 * Trailing section (actions, avatar, etc.)
 */
export const AppBarTrailing = forwardRef<HTMLDivElement, AppBarTrailingProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center flex-grow justify-end gap-2', className)}
    >
      {children}
    </div>
  )
)

/**
 * Center section (vertical stack of headline/subtitle)
 */
export const AppBarCenter = forwardRef<HTMLDivElement, AppBarCenterProps>(
  ({ children, className, placement }, ref) => (
    <div
      ref={ref}
      className={cn(appBarCenterVariants({ placement }), className)}
    >
      {children}
    </div>
  )
)
