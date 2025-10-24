import * as React from 'react'
import { cn } from '@/utils/cn'
import { pageContentInnerVariants, pageContentOuterVariants } from './helpers'
import type { PageContentProps } from './types'

/**
 * PageContent component serves as a parent wrapper for main content
 * Sits in the body region or below the page header
 *
 * @group Layout
 */
export const PageContent = React.forwardRef<HTMLDivElement, PageContentProps>(
  function PageContent(
    {
      size = 'fluid',
      template = 'single-column',
      className,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <div ref={ref} className={cn(pageContentOuterVariants())} {...rest}>
        <div
          className={cn(
            pageContentInnerVariants({ size, template }),
            className
          )}
        >
          <div>{children}</div>
        </div>
      </div>
    )
  }
)
