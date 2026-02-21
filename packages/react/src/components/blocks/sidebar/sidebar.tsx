"use client"

import { ChevronDownIcon } from "@versaur/icons"
import { sidebarStyles } from "@versaur/core/blocks"
import { forwardRef, type ElementType, useState } from "react"

import { cx } from "../../../utils/cx"
import { Hr } from "../../primitive/hr"
import { Icon } from "../../primitive/icon"
import type {
  SidebarBodyProps,
  SidebarDividerProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarHeaderProps,
  SidebarItemListProps,
  SidebarItemProps,
  SidebarRootProps,
  SidebarType,
} from "./sidebar.types"

/**
 * SidebarRoot - Main container
 */
const SidebarRoot = forwardRef<HTMLElement, SidebarRootProps>(({ children, className }, ref) => {
  return (
    <aside ref={ref} className={cx(sidebarStyles.sidebar, className)}>
      {children}
    </aside>
  )
})
SidebarRoot.displayName = "Sidebar"

/**
 * Sidebar.Header - Top section for header content
 */
const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(({ children, className }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-header"], className)}>
    {children}
  </div>
))
SidebarHeader.displayName = "Sidebar.Header"

/**
 * Sidebar.Body - Main scrollable content area
 */
const SidebarBody = forwardRef<HTMLDivElement, SidebarBodyProps>(({ children, className }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-body"], className)}>
    {children}
  </div>
))
SidebarBody.displayName = "Sidebar.Body"

/**
 * Sidebar.Footer - Bottom section for footer content
 */
const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(({ children, className }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-footer"], className)}>
    {children}
  </div>
))
SidebarFooter.displayName = "Sidebar.Footer"

/**
 * Sidebar.Group - Visual grouping for sidebar items with expand/collapse
 */
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      label,
      icon,
      defaultExpanded = true,
      isExpanded: controlledExpanded,
      onExpandedChange,
      children,
      className,
    },
    ref,
  ) => {
    const [internal, setInternal] = useState(defaultExpanded)
    const expanded = controlledExpanded !== undefined ? controlledExpanded : internal

    const toggle = () => {
      const next = !expanded
      setInternal(next)
      onExpandedChange?.(next)
    }

    return (
      <div
        ref={ref}
        className={cx(sidebarStyles["sidebar-group"], className)}
        data-expanded={expanded ? "" : undefined}
      >
        <button
          className={sidebarStyles["sidebar-group-header"]}
          onClick={toggle}
          aria-expanded={expanded}
        >
          {icon && <span>{icon}</span>}
          <span className={sidebarStyles["sidebar-group-label"]}>{label}</span>
          <Icon
            as={ChevronDownIcon}
            className={sidebarStyles["sidebar-group-chevron"]}
            size="sm"
          />
        </button>
        <div className={sidebarStyles["sidebar-group-content"]}>
          <div>{children}</div>
        </div>
      </div>
    )
  },
)
SidebarGroup.displayName = "Sidebar.Group"

/**
 * Sidebar.Item - Polymorphic navigation item (button or link)
 */
const SidebarItem = forwardRef<HTMLElement, SidebarItemProps>(
  ({ as: Tag = "button", active, disabled, icon, action, className, children, ...rest }, ref: React.Ref<any>) => {
    return (
      <Tag
        ref={ref}
        className={cx(sidebarStyles["sidebar-item"], className)}
        data-active={active ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
        data-action={action ? "" : undefined}
        {...rest}
      >
        {icon && <span className={sidebarStyles["sidebar-item-icon"]}>{icon}</span>}
        <span className={sidebarStyles["sidebar-item-text"]}>{children}</span>
        {action && <span className={sidebarStyles["sidebar-item-action"]}>{action}</span>}
      </Tag>
    )
  },
) as unknown as {
  <T extends ElementType = "button">(props: SidebarItemProps<T> & { ref?: React.Ref<HTMLElement> }): React.ReactElement
  displayName?: string
}
SidebarItem.displayName = "Sidebar.Item"

/**
 * Sidebar.ItemList - Container for items not wrapped in a group
 */
const SidebarItemList = forwardRef<HTMLDivElement, SidebarItemListProps>(({ children, className }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-item-list"], className)}>
    {children}
  </div>
))
SidebarItemList.displayName = "Sidebar.ItemList"

/**
 * Sidebar.Divider - Visual divider
 */
const SidebarDivider = forwardRef<HTMLDivElement, SidebarDividerProps>(({ className }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-divider"], className)}>
    <Hr />
  </div>
))
SidebarDivider.displayName = "Sidebar.Divider"

/**
 * Compound Sidebar component with sub-components
 */
const Sidebar = Object.assign(SidebarRoot, {
  Body: SidebarBody,
  Divider: SidebarDivider,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  Header: SidebarHeader,
  Item: SidebarItem,
  ItemList: SidebarItemList,
}) as SidebarType

export { Sidebar, SidebarBody, SidebarDivider, SidebarFooter, SidebarGroup, SidebarHeader, SidebarItem, SidebarItemList, SidebarRoot }
