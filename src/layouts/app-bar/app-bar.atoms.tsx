import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type {
  AppBarLeadingProps,
  AppBarHeadlineProps,
  AppBarSubtitleProps,
  AppBarTrailingProps,
  AppBarCenterProps,
  AppBarBottomProps,
} from './types'
import { appBarCenterVariants } from './helpers'
import { Text } from '@/primitive'

/**
 * Bottom section (flexible area for additional content, e.g. tabs)
 */
export const AppBarBottom = forwardRef<HTMLDivElement, AppBarBottomProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      data-versaur-appbar-bottom
      className={cn('w-full flex items-center min-h-[2.5rem] mt-2', className)}
    >
      {children}
    </div>
  )
)

/**
 * Leading section (logo, nav icon)
 */
export const AppBarLeading = forwardRef<HTMLDivElement, AppBarLeadingProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center', className)}
      data-versaur-appbar-leading
    >
      {children}
    </div>
  )
)

/**
 * Headline section (main title)
 */
export const AppBarHeadline = forwardRef<
  HTMLParagraphElement,
  AppBarHeadlineProps
>(({ children, ...props }, ref) => (
  <Text
    {...props}
    as='h1'
    ref={ref}
    fontSize='lg'
    fontWeight='semibold'
    ellipsis
    clamp={1}
  >
    {children}
  </Text>
))

/**
 * Subtitle section (secondary text)
 */
export const AppBarSubtitle = forwardRef<
  HTMLParagraphElement,
  AppBarSubtitleProps
>(({ children, ...props }, ref) => (
  <Text
    {...props}
    ref={ref}
    as='p'
    fontSize='xs'
    fontWeight='normal'
    ellipsis
    clamp={1}
    color='gray'
  >
    {children}
  </Text>
))

/**
 * Trailing section (actions, avatar, etc.)
 */
export const AppBarTrailing = forwardRef<HTMLDivElement, AppBarTrailingProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-end gap-2', className)}
      data-versaur-appbar-trailing
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
