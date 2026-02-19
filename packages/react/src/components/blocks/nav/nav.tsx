"use client"

import { navStyles } from "@versaur/core/blocks"
import { createContext, forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { NavContextValue, NavProps } from "./nav.types"

/**
 * Nav Context - provides controlled state to NavItems
 */
export const NavContext = createContext<NavContextValue | undefined>(undefined)

/**
 * Nav - Semantic navigation container
 * Supports both horizontal (TopBar) and vertical (SideBar) layouts
 *
 * @example
 * ```tsx
 * // Horizontal (default, TopBar) - uncontrolled
 * <Nav>
 *   <Nav.Item active>Home</Nav.Item>
 *   <Nav.Item>Docs</Nav.Item>
 * </Nav>
 *
 * // Controlled with value/onChange
 * const [active, setActive] = useState('home');
 * <Nav value={active} onChange={setActive}>
 *   <Nav.Item value="home">Home</Nav.Item>
 *   <Nav.Item value="docs">Docs</Nav.Item>
 * </Nav>
 *
 * // Vertical (SideBar)
 * <Nav direction="vertical" gap="sm">
 *   <Nav.Item active>Dashboard</Nav.Item>
 *   <Nav.Item>Settings</Nav.Item>
 * </Nav>
 * ```
 */
export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ direction = "horizontal", gap, value, onChange, children, ...props }, ref) => {
    const dataAttrs = useDataAttrs({ direction })

    const spacingMap: Record<string, string> = {
      lg: "var(--spacing-4)",
      md: "var(--spacing-3)",
      sm: "var(--spacing-2)",
      xs: "var(--spacing-1)",
    }

    const contextValue: NavContextValue = {
      onChange,
      value,
    }

    return (
      <NavContext.Provider value={contextValue}>
        <nav
          ref={ref}
          className={navStyles.nav}
          style={{
            ...(gap &&
              ({
                "--vers-comp-nav-gap": spacingMap[gap],
              } as React.CSSProperties)),
          }}
          {...dataAttrs}
          {...props}
        >
          {children}
        </nav>
      </NavContext.Provider>
    )
  },
)

Nav.displayName = "Nav"

Nav.displayName = "Nav"
