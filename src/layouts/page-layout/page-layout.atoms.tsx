import { forwardRef } from 'react'
import {
  pageLayoutHeaderRegionStyles,
  pageLayoutContentRegionStyles,
} from './helpers'
import type {
  PageLayoutHeaderRegionProps,
  PageLayoutContentRegionProps,
} from './types'

export const PageLayoutHeaderRegion = forwardRef<
  HTMLDivElement,
  PageLayoutHeaderRegionProps
>(function PageLayoutHeaderRegion(
  { children, className, backgroundColor = 'white', ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={pageLayoutHeaderRegionStyles({ backgroundColor, className })}
      {...props}
    >
      {children}
    </div>
  )
})

export const PageLayoutContentRegion = forwardRef<
  HTMLDivElement,
  PageLayoutContentRegionProps
>(function PageLayoutContentRegion(
  { children, className, backgroundColor = 'white', ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={pageLayoutContentRegionStyles({ backgroundColor, className })}
      {...props}
    >
      {children}
    </div>
  )
})
