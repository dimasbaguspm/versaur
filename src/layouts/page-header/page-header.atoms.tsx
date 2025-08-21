import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type {
  PageHeaderTopProps,
  PageHeaderBreadcrumbsProps,
  PageHeaderContentProps,
  PageHeaderTitleProps,
  PageHeaderSubtitleProps,
  PageHeaderBadgesProps,
  PageHeaderActionsProps,
  PageHeaderBottomProps,
} from './types'
import {
  pageHeaderTopVariants,
  pageHeaderBreadcrumbsVariants,
  pageHeaderContentVariants,
  pageHeaderBadgesVariants,
  pageHeaderActionsVariants,
  pageHeaderBottomVariants,
} from './helpers'
import { Text } from '@/primitive'

/**
 * PageHeaderTop - main header area containing breadcrumbs, content, and actions
 */
export const PageHeaderTop = forwardRef<HTMLDivElement, PageHeaderTopProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(pageHeaderTopVariants(), className)}
      data-versaur-page-header-top
      {...props}
    >
      {children}
    </div>
  )
)

/**
 * PageHeaderBreadcrumbs - breadcrumbs section
 */
export const PageHeaderBreadcrumbs = forwardRef<
  HTMLDivElement,
  PageHeaderBreadcrumbsProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderBreadcrumbsVariants(), className)}
    data-versaur-page-header-breadcrumbs
    {...props}
  >
    {children}
  </div>
))

/**
 * PageHeaderContent - content area for title, subtitle, and badges
 */
export const PageHeaderContent = forwardRef<
  HTMLDivElement,
  PageHeaderContentProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderContentVariants(), className)}
    data-versaur-page-header-content
    {...props}
  >
    {children}
  </div>
))

/**
 * PageHeaderTitle - main title heading
 * Responsive font size: smaller on mobile, larger on desktop
 */
export const PageHeaderTitle = forwardRef<
  HTMLHeadingElement,
  PageHeaderTitleProps
>((props, ref) => (
  <Text
    {...props}
    as='h1'
    fontSize='xl'
    fontWeight='semibold'
    ellipsis
    ref={ref}
  />
))

/**
 * PageHeaderSubtitle - subtitle/description text
 * Responsive font size and line clamping for mobile
 */
export const PageHeaderSubtitle = forwardRef<
  HTMLParagraphElement,
  PageHeaderSubtitleProps
>(({ className, ...props }, ref) => (
  <Text
    as='p'
    fontSize='sm'
    fontWeight='normal'
    clamp={2}
    ref={ref}
    className={cn('mb-2 sm:clamp-3', className)}
    {...props}
  />
))

/**
 * PageHeaderBadges - badges container
 */
export const PageHeaderBadges = forwardRef<
  HTMLDivElement,
  PageHeaderBadgesProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderBadgesVariants(), className)}
    data-versaur-page-header-badges
    {...props}
  >
    {children}
  </div>
))

/**
 * PageHeaderActions - actions section for buttons and button groups
 */
export const PageHeaderActions = forwardRef<
  HTMLDivElement,
  PageHeaderActionsProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderActionsVariants(), className)}
    data-versaur-page-header-actions
    {...props}
  >
    {children}
  </div>
))

/**
 * PageHeaderBottom - bottom section for tabs and filters
 */
export const PageHeaderBottom = forwardRef<
  HTMLDivElement,
  PageHeaderBottomProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderBottomVariants(), className)}
    data-versaur-page-header-bottom
    {...props}
  >
    {children}
  </div>
))
