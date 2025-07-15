import type { HTMLAttributes } from 'react'

/**
 * TopBarRoot - main container for TopBar layout
 * Provides horizontal layout for desktop navigation/header
 * Compound pattern: Leading, Trailing, NavItem
 */
export type TopBarProps = HTMLAttributes<HTMLDivElement>

/**
 * TopBarLeading - left section (logo, brand, nav)
 */
export interface TopBarLeadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for leading section
   */
  className?: string
}

/**
 * TopBarTrailing - right section (actions, profile, etc)
 */
export interface TopBarTrailingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for trailing section
   */
  className?: string
}

/**
 * TopBarNavItem - navigation item (link, button, etc)
 */
export interface TopBarNavItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the nav item is active
   */
  active?: boolean
  /**
   * Custom class for nav item
   */
  className?: string
}
