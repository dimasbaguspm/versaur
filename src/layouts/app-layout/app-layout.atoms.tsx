import { forwardRef } from 'react'
import {
  appLayoutTopRegionStyles,
  appLayoutSideLeftRegionStyles,
  appLayoutSideRightRegionStyles,
  appLayoutBottomRegionStyles,
  appLayoutMainRegionStyles,
} from './helpers'
import type {
  AppLayoutTopRegionProps,
  AppLayoutSideLeftRegionProps,
  AppLayoutSideRightRegionProps,
  AppLayoutBottomRegionProps,
  AppLayoutMainRegionProps,
} from './types'

export const AppLayoutTopRegion = forwardRef<
  HTMLDivElement,
  AppLayoutTopRegionProps
>(function AppLayoutTopRegion({ children, className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={appLayoutTopRegionStyles({ className })}
      {...props}
    >
      {children}
    </div>
  )
})

export const AppLayoutSideLeftRegion = forwardRef<
  HTMLDivElement,
  AppLayoutSideLeftRegionProps
>(function AppLayoutSideLeftRegion({ children, className, ...props }, ref) {
  return (
    <aside
      ref={ref}
      className={appLayoutSideLeftRegionStyles({ className })}
      {...props}
    >
      {children}
    </aside>
  )
})

export const AppLayoutSideRightRegion = forwardRef<
  HTMLDivElement,
  AppLayoutSideRightRegionProps
>(function AppLayoutSideRightRegion({ children, className, ...props }, ref) {
  return (
    <aside
      ref={ref}
      className={appLayoutSideRightRegionStyles({ className })}
      {...props}
    >
      {children}
    </aside>
  )
})

export const AppLayoutBottomRegion = forwardRef<
  HTMLDivElement,
  AppLayoutBottomRegionProps
>(function AppLayoutBottomRegion({ children, className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={appLayoutBottomRegionStyles({ className })}
      {...props}
    >
      {children}
    </div>
  )
})

export const AppLayoutMainRegion = forwardRef<
  HTMLDivElement,
  AppLayoutMainRegionProps
>(function AppLayoutMainRegion({ children, className, ...props }, ref) {
  return (
    <main
      ref={ref}
      className={appLayoutMainRegionStyles({ className })}
      {...props}
    >
      {children}
    </main>
  )
})
