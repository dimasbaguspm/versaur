import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { pageContentVariants } from './helpers'
import type { PageContentProps } from './types'

/**
 * PageContent - Layout component for page content areas
 *
 * Provides consistent horizontal spacing that matches the page-header
 * component, with additional vertical padding for proper content separation.
 * Designed to be used as a sibling to PageHeader for consistent page layouts.
 *
 * Key features:
 * - Horizontal padding matches page-header (px-4 sm:px-6)
 * - Additional vertical padding for content separation (py-6 sm:py-8)
 * - Mobile-first responsive design
 * - Full width container
 */
export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pageContentVariants(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
