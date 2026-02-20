"use client"

import { sidebarStyles } from "@versaur/core/blocks"
import { createContext, forwardRef, useCallback, useContext, useEffect, useRef, useState } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { combineRefs } from "../../../utils/combine-refs"
import { isComponentType } from "../../../utils/polymorphic"
import { Hr } from "../../primitive/hr"
import type {
  SidebarBodyProps,
  SidebarDividerProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarHeaderProps,
  SidebarItemProps,
  SidebarRootProps,
} from "./sidebar.types"

/**
 * Sidebar Context for managing focus and keyboard navigation
 */
interface SidebarContextType {
  isOpen: boolean
  focusedItemIndex: number
  itemRefs: React.RefObject<HTMLElement>[]
  registerItem: (ref: React.RefObject<HTMLElement>) => void
  unregisterItem: (ref: React.RefObject<HTMLElement>) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("Sidebar sub-components must be used within SidebarRoot")
  }
  return context
}

/**
 * SidebarRoot - Main container managing isOpen state and keyboard navigation
 */
const SidebarRoot = forwardRef<HTMLElement, SidebarRootProps>(({ isOpen, children, className, ...props }, ref) => {
  const itemRefsArray = useRef<React.RefObject<HTMLElement>[]>([])
  const [focusedItemIndex, setFocusedItemIndex] = useState(0)

  // Reset focus when isOpen changes
  useEffect(() => {
    setFocusedItemIndex(0)
  }, [isOpen])

  const registerItem = useCallback((itemRef: React.RefObject<HTMLElement>) => {
    if (!itemRefsArray.current.includes(itemRef)) {
      itemRefsArray.current.push(itemRef)
    }
  }, [])

  const unregisterItem = useCallback((itemRef: React.RefObject<HTMLElement>) => {
    itemRefsArray.current = itemRefsArray.current.filter((ref) => ref !== itemRef)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      const enabledItems = itemRefsArray.current.filter(
        (ref) => ref.current && !ref.current.getAttribute("data-disabled"),
      )

      if (enabledItems.length === 0) {
        return
      }

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault()
          setFocusedItemIndex((prev) => (prev + 1) % enabledItems.length)
          break
        }
        case "ArrowUp": {
          e.preventDefault()
          setFocusedItemIndex((prev) => (prev === 0 ? enabledItems.length - 1 : prev - 1))
          break
        }
        case "Enter":
        case " ": {
          e.preventDefault()
          const focusedElement = enabledItems[focusedItemIndex]?.current
          if (focusedElement) {
            focusedElement.click()
          }
          break
        }
      }
    },
    [focusedItemIndex],
  )

  const dataAttrs = useDataAttrs({ open: isOpen })

  return (
    <SidebarContext.Provider
      value={{
        focusedItemIndex,
        isOpen,
        itemRefs: itemRefsArray.current,
        registerItem,
        unregisterItem,
      }}
    >
      <aside ref={ref} className={cx(sidebarStyles.sidebar, className)} onKeyDown={handleKeyDown} {...dataAttrs} {...props}>
        {children}
      </aside>
    </SidebarContext.Provider>
  )
})
SidebarRoot.displayName = "Sidebar"

/**
 * Sidebar.Header - Top section for header content
 */
const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-header"], className)} {...props}>
    {children}
  </div>
))
SidebarHeader.displayName = "Sidebar.Header"

/**
 * Sidebar.Body - Main scrollable content area
 */
const SidebarBody = forwardRef<HTMLDivElement, SidebarBodyProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-body"], className)} {...props}>
    {children}
  </div>
))
SidebarBody.displayName = "Sidebar.Body"

/**
 * Sidebar.Footer - Bottom section for footer content
 */
const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-footer"], className)} {...props}>
    {children}
  </div>
))
SidebarFooter.displayName = "Sidebar.Footer"

/**
 * Sidebar.Group - Container for grouped items with label
 */
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(({ label, icon, children, className, ...props }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-group"], className)} {...props}>
    {label && (
      <div className={sidebarStyles["sidebar-group-label"]}>
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    )}
    {children}
  </div>
))
SidebarGroup.displayName = "Sidebar.Group"

/**
 * Sidebar.Item - Polymorphic navigation item (button or link)
 */
const SidebarItem = forwardRef<HTMLElement, SidebarItemProps>(
  ({ as: Component = "button", href, active = false, disabled = false, icon, children, onClick, className, ...props }, ref) => {
    const { focusedItemIndex, registerItem, unregisterItem, itemRefs } = useSidebarContext()
    const itemRef = useRef<HTMLElement>(null)

    useEffect(() => {
      registerItem(itemRef)
      return () => {
        unregisterItem(itemRef)
      }
    }, [registerItem, unregisterItem])

    // Determine if this item is focused
    const currentItemIndex = itemRefs.indexOf(itemRef)
    const isFocused = currentItemIndex === focusedItemIndex && currentItemIndex !== -1

    const dataAttrs = useDataAttrs({
      active,
      disabled,
      focused: isFocused,
    })

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    // Handle polymorphic component rendering
    const isLink = isComponentType(Component, "a")
    const itemProps: Record<string, any> = {
      className: cx(sidebarStyles["sidebar-item"], className),
      onClick: handleClick,
      ref: combineRefs(itemRef, ref),
      ...dataAttrs,
      ...props,
    }

    if (isLink) {
      itemProps.href = href
    }

    const ItemComponent = (Component as any) || "button"

    return (
      <ItemComponent {...itemProps}>
        {icon && <span className={sidebarStyles["sidebar-item-icon"]}>{icon}</span>}
        {children && <span className={sidebarStyles["sidebar-item-text"]}>{children}</span>}
      </ItemComponent>
    )
  },
)
SidebarItem.displayName = "Sidebar.Item"

/**
 * Sidebar.Divider - Visual divider using Hr component
 */
const SidebarDivider = forwardRef<HTMLDivElement, SidebarDividerProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(sidebarStyles["sidebar-divider"], className)}>
    <Hr {...props} />
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
})

export { Sidebar, SidebarBody, SidebarDivider, SidebarFooter, SidebarGroup, SidebarHeader, SidebarItem, SidebarRoot }
