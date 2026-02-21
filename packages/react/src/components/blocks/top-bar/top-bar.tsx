"use client"

import { topBarStyles } from "@versaur/core/blocks"
import { forwardRef, type ElementType } from "react"

import { cx } from "../../../utils/cx"
import type {
  TopBarCentredProps,
  TopBarComponent,
  TopBarItemListProps,
  TopBarItemProps,
  TopBarLeadingProps,
  TopBarProps,
  TopBarTrailingProps,
} from "./top-bar.types"

/**
 * TopBar - Pure layout component with CSS Grid
 * Renders as <div> with three optional grid areas: leading, centred, trailing
 * No built-in styling; compose with other components for functionality
 *
 * @example
 * ```tsx
 * <TopBar>
 *   <TopBar.Leading>
 *     <Logo />
 *   </TopBar.Leading>
 *   <TopBar.Centred>
 *     <SearchBar />
 *   </TopBar.Centred>
 *   <TopBar.Trailing>
 *     <Avatar />
 *   </TopBar.Trailing>
 * </TopBar>
 * ```
 */
const TopBar = forwardRef<HTMLDivElement, TopBarProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(topBarStyles["top-bar"], className)} {...props}>
    {children}
  </div>
))
TopBar.displayName = "TopBar"

/**
 * TopBar.Leading - Left grid area
 * Typically contains logo, brand, and navigation
 */
const TopBarLeading = forwardRef<HTMLDivElement, TopBarLeadingProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(topBarStyles["top-bar-leading"], className)} {...props}>
    {children}
  </div>
))
TopBarLeading.displayName = "TopBar.Leading"

/**
 * TopBar.Centred - Center grid area
 * Typically contains search, title, or other center content
 */
const TopBarCentred = forwardRef<HTMLDivElement, TopBarCentredProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(topBarStyles["top-bar-centred"], className)} {...props}>
    {children}
  </div>
))
TopBarCentred.displayName = "TopBar.Centred"

/**
 * TopBar.Trailing - Right grid area
 * Typically contains actions, user menu, and notifications
 */
const TopBarTrailing = forwardRef<HTMLDivElement, TopBarTrailingProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(topBarStyles["top-bar-trailing"], className)} {...props}>
    {children}
  </div>
))
TopBarTrailing.displayName = "TopBar.Trailing"

/**
 * TopBar.Item - Polymorphic navigation item (button or link)
 */
const TopBarItem = forwardRef<HTMLElement, TopBarItemProps>(
  ({ as: Tag = "button", active, disabled, icon, className, children, ...rest }, ref: React.Ref<any>) => (
    <Tag
      ref={ref}
      className={cx(topBarStyles["top-bar-item"], className)}
      data-active={active ? "" : undefined}
      data-disabled={disabled ? "" : undefined}
      {...rest}
    >
      {icon && <span className={topBarStyles["top-bar-item-icon"]}>{icon}</span>}
      {children}
    </Tag>
  ),
) as unknown as {
  <T extends ElementType = "button">(props: TopBarItemProps<T> & { ref?: React.Ref<HTMLElement> }): React.ReactElement
  displayName?: string
}
TopBarItem.displayName = "TopBar.Item"

/**
 * TopBar.ListItem - Container for items in a horizontal flex layout
 */
const TopBarListItem = forwardRef<HTMLDivElement, TopBarItemListProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(topBarStyles["top-bar-list-item"], className)} {...props}>
    {children}
  </div>
))
TopBarListItem.displayName = "TopBar.ListItem"

/**
 * Compound component assembly
 * Attaches sub-components to TopBar for namespace-based API
 */
const TopBarCompound = Object.assign(TopBar, {
  Centred: TopBarCentred,
  Item: TopBarItem,
  Leading: TopBarLeading,
  ListItem: TopBarListItem,
  Trailing: TopBarTrailing,
}) as React.ForwardRefExoticComponent<TopBarProps & React.RefAttributes<HTMLElement>> & TopBarComponent

export { TopBarCompound as TopBar, TopBarLeading, TopBarCentred, TopBarTrailing, TopBarItem, TopBarListItem }
