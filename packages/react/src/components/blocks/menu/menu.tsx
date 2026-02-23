import { menuStyles } from "@versaur/core/blocks"
import type { CSSProperties } from "react"
import { createContext, forwardRef } from "react"

import { Tooltip } from "../../primitive/tooltip"
import type { MenuContextValue, MenuGetTriggerPropsOptions, MenuProps, MenuStatic } from "./menu.types"

/**
 * Menu Context - provides controlled state to Menu.Items
 */
export const MenuContext = createContext<MenuContextValue | undefined>(undefined)

/**
 * Menu - Dropdown menu component built on Tooltip's Popover API
 *
 * Supports both uncontrolled and controlled modes for selection.
 * By default, the menu stays open when items are clicked.
 * Set `closeOnClick` to automatically dismiss the menu on item selection.
 *
 * Internally uses Tooltip for positioning and popover management.
 *
 * @example
 * ```tsx
 * // Uncontrolled - menu stays open on click
 * <button {...Menu.getTriggerProps({ id: "menu-1" })}>More</button>
 * <Menu id="menu-1">
 *   <Menu.Item value="edit" onClick={() => console.log('editing')}>Edit</Menu.Item>
 *   <Menu.Item value="delete">Delete</Menu.Item>
 * </Menu>
 *
 * // Controlled with auto-close
 * const [selected, setSelected] = useState<string | number>();
 * <button {...Menu.getTriggerProps({ id: "menu-1" })}>Actions</button>
 * <Menu id="menu-1" value={selected} onChange={setSelected} closeOnClick>
 *   <Menu.Item value="save">Save</Menu.Item>
 *   <Menu.Item value="export">Export</Menu.Item>
 *   <Menu.Item value="delete">Delete</Menu.Item>
 * </Menu>
 *
 * // Programmatic close (Menu.close delegates to Tooltip.close)
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
      closeOnClick = false,
      children,
      ...props
    },
    ref,
  ) => {
    const contextValue: MenuContextValue = {
      id,
      closeOnClick,
      onChange,
      value,
    }

    return (
      <div ref={ref} {...props}>
        <MenuContext.Provider value={contextValue}>
          <Tooltip id={id} placement={placement} gap={gap} triggerType="focus">
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
function getTriggerProps(options: MenuGetTriggerPropsOptions): Record<string, unknown> {
  return Tooltip.getTooltipTriggerProps({
    id: options.id,
  })
}

/**
 * Close a menu popover by id
 * Delegates to Tooltip.close() for consistent popover management
 *
 * @example
 * ```tsx
 * Menu.close({ id: "my-menu" })
 * ```
 */
function closeMenu(options: { id: string }) {
  Tooltip.close(options)
}

/**
 * Attach static methods to component
 */
export const Menu = MenuRoot as typeof MenuRoot & MenuStatic
Menu.getTriggerProps = getTriggerProps
Menu.close = closeMenu
