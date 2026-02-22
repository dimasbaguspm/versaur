import { menuStyles } from "@versaur/core/blocks"
import { forwardRef, useContext } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Tooltip } from "../../primitive/tooltip"
import { MenuContext } from "./menu"
import type { MenuItemProps } from "./menu.types"

/**
 * Menu.Item - Individual menu item
 *
 * @description
 * A clickable menu item that can be selected and may trigger menu closure
 * depending on the parent Menu's `closeOnClick` setting.
 *
 * When clicked:
 * 1. If Menu has `onChange` and item has `value`, onChange is called
 * 2. Item's `onClick` handler is called
 * 3. If Menu has `closeOnClick: true`, the menu will close after steps 1-2
 *
 * @example
 * ```tsx
 * // Menu stays open on click (default)
 * const [selected, setSelected] = useState<string>();
 * <Menu id="menu-1" value={selected} onChange={setSelected}>
 *   <Menu.Item value="edit">Edit</Menu.Item>
 *   <Menu.Item value="delete" onClick={() => console.log('deleting')}>Delete</Menu.Item>
 * </Menu>
 *
 * // Menu closes on click
 * <Menu id="menu-2" value={selected} onChange={setSelected} closeOnClick>
 *   <Menu.Item value="option1">Option 1</Menu.Item>
 *   <Menu.Item value="option2">Option 2</Menu.Item>
 * </Menu>
 * ```
 */
const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ value, disabled = false, leftIcon, rightIcon, children, onClick, className, ...props }, ref) => {
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

      // Close tooltip popover if closeOnClick is enabled
      if (menuContext?.closeOnClick && menuContext?.id) {
        Tooltip.close({ id: menuContext.id })
      }
    }

    return (
      <button
        ref={ref}
        className={cx(menuStyles["menu-item"], className)}
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
