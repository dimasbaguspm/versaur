import { forwardRef } from 'react'
import {
  topBarLeadingStyles,
  topBarTrailingStyles,
  topBarNavItemStyles,
  topBarNavStyles,
  topBarActionsStyles,
} from './helpers'
import type {
  TopBarLeadingProps,
  TopBarTrailingProps,
  TopBarNavItemProps,
} from './types'

export const TopBarNav = forwardRef<HTMLDivElement, TopBarLeadingProps>(
  function TopBarNav({ children, className, ...props }, ref) {
    return (
      <nav ref={ref} className={topBarNavStyles({ className })} {...props}>
        {children}
      </nav>
    )
  }
)

export const TopBarActions = forwardRef<HTMLDivElement, TopBarTrailingProps>(
  function TopBarActions({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={topBarActionsStyles({ className })} {...props}>
        {children}
      </div>
    )
  }
)

export const TopBarLeading = forwardRef<HTMLDivElement, TopBarLeadingProps>(
  function TopBarLeading({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={topBarLeadingStyles({ className })} {...props}>
        {children}
      </div>
    )
  }
)

export const TopBarTrailing = forwardRef<HTMLDivElement, TopBarTrailingProps>(
  function TopBarTrailing({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={topBarTrailingStyles({ className })} {...props}>
        {children}
      </div>
    )
  }
)

export const TopBarNavItem = forwardRef<HTMLDivElement, TopBarNavItemProps>(
  function TopBarNavItem({ children, className, active, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={topBarNavItemStyles({ active, className })}
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)
