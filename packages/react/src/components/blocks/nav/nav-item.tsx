"use client"

import { navStyles } from "@versaur/core/blocks"
import type { ElementType } from "react"
import { forwardRef, useContext } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { Icon } from "../../primitive/icon"
import { NavContext } from "./nav"
import type { NavItemProps } from "./nav.types"

/**
 * NavItem - Polymorphic navigation item
 *
 * Renders as button by default, but supports any element type (a, Link, custom).
 * Supports left and right icons for flexible composition.
 *
 * Can be used in two modes:
 * - Uncontrolled: Pass `active` prop and handle clicks with `onClick`
 * - Controlled: Use within Nav with `value` and let Nav manage active state
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Nav>
 *   <Nav.Item active onClick={handleHome}>Home</Nav.Item>
 *   <Nav.Item>Docs</Nav.Item>
 * </Nav>
 *
 * // Controlled (recommended)
 * const [active, setActive] = useState('home');
 * <Nav value={active} onChange={setActive}>
 *   <Nav.Item value="home">Home</Nav.Item>
 *   <Nav.Item value="docs">Docs</Nav.Item>
 * </Nav>
 *
 * // With icons
 * <Nav.Item leftIcon={HomeIcon} value="home">Home</Nav.Item>
 * <Nav.Item rightIcon={ChevronIcon} value="more">More</Nav.Item>
 * ```
 */
export const NavItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, NavItemProps>(
  (
    {
      as: Component = "button" as ElementType,
      active: activeProp = false,
      value,
      disabled = false,
      loading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      onClick,
      className,
      ...props
    },
    ref,
  ) => {
    const navContext = useContext(NavContext)

    // Determine if this item is active
    // If Nav provides onChange, use controlled value logic
    // Otherwise use uncontrolled active prop
    const isActive = navContext?.onChange && value !== undefined ? navContext.value === value : activeProp

    const dataAttrs = useDataAttrs({
      active: isActive,
      disabled: disabled || loading,
      loading,
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (disabled || loading) {
        e.preventDefault()
        return
      }

      // If in controlled mode, call Nav's onChange
      if (navContext?.onChange && value !== undefined) {
        navContext.onChange(value)
      }

      // Also call the item's onClick if provided (for custom handlers)
      onClick?.(e as any)
    }

    return (
      <Component
        ref={ref}
        className={cx(navStyles["nav-item"], className)}
        aria-current={isActive && Component !== "button" ? "page" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        aria-busy={loading ? "true" : undefined}
        {...dataAttrs}
        {...props}
        onClick={handleClick}
      >
        {LeftIcon && (
          <span className={navStyles["nav-item-icon"]}>
            <Icon as={LeftIcon} />
          </span>
        )}
        {children}
        {RightIcon && (
          <span className={navStyles["nav-item-icon"]}>
            <Icon as={RightIcon} />
          </span>
        )}
      </Component>
    )
  },
)

NavItem.displayName = "NavItem"
