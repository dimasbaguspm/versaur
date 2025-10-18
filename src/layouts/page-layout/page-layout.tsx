import * as React from 'react'
import { cn } from '@/utils/cn'
import { pageLayoutInnerVariants, pageLayoutOuterVariants } from './helpers'
import type { PageLayoutProps } from './types'

/**
 * PageLayout component serves as a parent wrapper for main content
 * Sits in the body region or below the page header
 *
 * @group Layout
 */
export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  function PageLayout(
    {
      size = 'fluid',
      template = 'single-column',
      backgroundColor = 'white',
      className,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(pageLayoutOuterVariants({ backgroundColor }))}
        {...rest}
      >
        <div
          className={cn(pageLayoutInnerVariants({ size, template }), className)}
        >
          {children}
        </div>
      </div>
    )
  }
)
