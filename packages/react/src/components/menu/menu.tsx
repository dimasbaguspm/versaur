"use client"

import { menuStyles } from "@versaur/core"
import { createContext, forwardRef, useRef } from "react"
import type { CSSProperties } from "react"

import { closeMenu, useMenuState } from "../../hooks/use-menu-state"
import { Tooltip } from "../tooltip/tooltip"
import type { MenuContextValue, MenuGetTriggerPropsOptions, MenuProps, MenuStatic } from "./menu.types"

/**
 * Menu Context - provides controlled state to Menu.Items
 */
export const MenuContext = createContext<MenuContextValue | undefined>(undefined)

/**
 * Menu - Dropdown menu component built on Tooltip's Popover API
 *
 * Supports both uncontrolled and controlled modes (like Nav).
 * Menu stays open when items are clicked - use Menu.close({ id }) to programmatically dismiss.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <button {...Menu.getTriggerProps({ id: "menu-1" })}>More</button>
 * <Menu id="menu-1">
 *   <Menu.Item value="edit" onClick={() => console.log('edit')}>Edit</Menu.Item>
 *   <Menu.Item value="delete">Delete</Menu.Item>
 * </Menu>
 *
 * // Controlled
 * const [active, setActive] = useState<string | number>();
 * <button {...Menu.getTriggerProps({ id: "menu-1" })}>More</button>
 * <Menu id="menu-1" value={active} onChange={setActive}>
 *   <Menu.Item value="edit">Edit</Menu.Item>
 *   <Menu.Item value="delete">Delete</Menu.Item>
 * </Menu>
 *
 * // Programmatic close
 * <button onClick={() => Menu.close({ id: "menu-1" })}>Close Menu</button>
 * ```
 */
const MenuRoot = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      id,
      placement = "bottom",
      maxHeight = 400,
      minWidth = 160,
      maxWidth = 320,
      gap = 8,
      value,
      onChange,
      children,
      ...props
    },
    ref,
  ) => {
    const menuRef = useRef<HTMLDivElement>(null)

    // Register menu for programmatic closing
    useMenuState(id, menuRef)

    const contextValue: MenuContextValue = {
      close: closeMenu,
      onChange,
      value,
    }

    return (
      <div ref={ref} {...props}>
        <MenuContext.Provider value={contextValue}>
          <Tooltip ref={menuRef} id={id} placement={placement} gap={gap} triggerType="focus">
            <div
              className={menuStyles["menu-list"]}
              style={
                {
                  "--_max-height": `${maxHeight}px`,
                  "--_max-width": `${maxWidth}px`,
                  "--_min-width": `${minWidth}px`,
                } as CSSProperties
              }
            >
              {children}
            </div>
          </Tooltip>
        </MenuContext.Provider>
      </div>
    )
  },
)

MenuRoot.displayName = "Menu"

/**
 * Get required attributes for a trigger element
 */
function getTriggerProps(options: MenuGetTriggerPropsOptions): Record<string, string> {
  return Tooltip.getTooltipTriggerProps({
    id: options.id,
    triggerType: "focus",
  })
}

/**
 * Attach static methods to component
 */
export const Menu = MenuRoot as typeof MenuRoot & MenuStatic
Menu.close = closeMenu
Menu.getTriggerProps = getTriggerProps
