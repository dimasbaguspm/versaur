import * as React from 'react'
import { cn } from '@/utils/cn'
import { LoadingIndicator } from '@/feedbacks/loading-indicator'
import { pageLoaderVariants, messageVariants } from './helpers'
import type { PageLoaderProps } from './types'

/**
 * PageLoader component that centers a loading indicator within a flex container
 *
 * This component wraps the LoadingIndicator with layout styling to center it
 * within the available container space, making it ideal for full-page loading states.
 *
 * @group Layout
 */
export const PageLoader = React.forwardRef<HTMLDivElement, PageLoaderProps>(
  function PageLoader(
    {
      type = 'bar',
      size = 'sm',
      color = 'primary',
      ariaLabel = 'Loading page',
      message,
      minimal = false,
      className,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(pageLoaderVariants({ minimal }), className)}
        {...rest}
      >
        <div className='max-w-xs w-full flex justify-center'>
          <LoadingIndicator
            type={type}
            size={size}
            color={color}
            ariaLabel={ariaLabel}
          />
        </div>
        {message && (
          <p className={messageVariants()} aria-live='polite'>
            {message}
          </p>
        )}
        {children}
      </div>
    )
  }
)
