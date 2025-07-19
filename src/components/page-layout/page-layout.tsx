import * as React from 'react'
import { cn } from '@/utils/cn'
import { pageLayoutVariants } from './helpers'
import type { PageLayoutProps } from './types'

/**
 * PageLayout component for consistent responsive layout breakpoints
 *
 * @group Layout
 */
export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  function PageLayout({ type = 'desktop', className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(pageLayoutVariants({ type }), className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
