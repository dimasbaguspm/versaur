"use client"

import { menuStyles } from "@versaur/core"
import { forwardRef, useContext } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { MenuContext } from "./menu"
import type { MenuItemProps } from "./menu.types"

/**
 * Menu.Item - Individual menu item
 *
 * Does NOT auto-close the menu when clicked.
 * If Menu has onChange and this item has a value, onChange will be called.
 * Item's onClick is always fired, allowing for custom handlers.
 *
 * @example
 * ```tsx
 * // With controlled menu
 * const [selected, setSelected] = useState<string>();
 * <Menu value={selected} onChange={setSelected}>
 *   <Menu.Item value="edit">Edit</Menu.Item>
 *   <Menu.Item value="delete" onClick={() => console.log('deleting...')}>Delete</Menu.Item>
 * </Menu>
 * ```
 */
const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ value, disabled = false, leftIcon, rightIcon, children, onClick, ...props }, ref) => {
    const menuContext = useContext(MenuContext)

    // Determine if this item is active
    const isActive = menuContext?.onChange && value !== undefined ? menuContext.value === value : false

    const dataAttrs = useDataAttrs({
      active: isActive,
      disabled,
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }

      // If in controlled mode, call Menu's onChange
      if (menuContext?.onChange && value !== undefined) {
        menuContext.onChange(value)
      }

      // Also call the item's onClick if provided
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={menuStyles["menu-item"]}
        disabled={disabled}
        {...dataAttrs}
        {...props}
        onClick={handleClick}
      >
        {leftIcon ? <span className={menuStyles["menu-item-icon"]}>{leftIcon}</span> : null}
        <span className={menuStyles["menu-item-label"]}>{children}</span>
        {rightIcon ? <span className={menuStyles["menu-item-icon"]}>{rightIcon}</span> : null}
      </button>
    )
  },
)

MenuItem.displayName = "Menu.Item"

export { MenuItem }
