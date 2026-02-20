"use client"

import { bottomBarStyles } from "@versaur/core/blocks"
import type { ReactNode } from "react"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { isComponentType } from "../../../utils/polymorphic"

/**
 * BottomBar.Item Props
 */
interface BottomBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a" | React.ComponentType<any>
  href?: string
  active?: boolean
  disabled?: boolean
  icon: ReactNode
  children?: ReactNode
}

/**
 * BottomBar.Root Props
 */
interface BottomBarRootProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

/**
 * BottomBarRoot - Main container for bottom navigation items
 */
const BottomBarRoot = forwardRef<HTMLElement, BottomBarRootProps>(({ children, ...props }, ref) => (
  <nav ref={ref} className={bottomBarStyles["bottom-bar"]} {...props}>
    {children}
  </nav>
))
BottomBarRoot.displayName = "BottomBar"

/**
 * BottomBar.Item - Polymorphic navigation item (button or link)
 */
const BottomBarItem = forwardRef<HTMLElement, BottomBarItemProps>(
  ({ as: Component = "button", href, active = false, disabled = false, icon, children, onClick, ...props }, ref) => {
    const isLink = isComponentType(Component, "a")

    const dataAttrs = useDataAttrs({
      active,
      disabled,
    })

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }
      onClick?.(e as any)
    }

    const itemProps: Record<string, any> = {
      className: bottomBarStyles["bottom-bar-item"],
      onClick: handleClick,
      ref,
      ...dataAttrs,
      ...props,
    }

    if (isLink) {
      itemProps.href = href
    }

    const ItemComponent = (Component as any) || "button"

    return (
      <ItemComponent {...itemProps}>
        {icon && <span className={bottomBarStyles["bottom-bar-item-icon"]}>{icon}</span>}
        {children && <span className={bottomBarStyles["bottom-bar-item-text"]}>{children}</span>}
      </ItemComponent>
    )
  },
)
BottomBarItem.displayName = "BottomBar.Item"

/**
 * BottomBar Component - Compound component with item sub-component
 */
export interface BottomBarComponent extends React.ForwardRefExoticComponent<
  BottomBarRootProps & React.RefAttributes<HTMLElement>
> {
  Item: typeof BottomBarItem
}

/**
 * Compound BottomBar component with sub-components
 */
const BottomBar = Object.assign(BottomBarRoot, {
  Item: BottomBarItem,
}) as BottomBarComponent

export { BottomBar, BottomBarRoot, BottomBarItem }
