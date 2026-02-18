import type { Menu as CoreMenu } from "@versaur/core"

import { Menu as MenuRoot } from "./menu"
import { MenuItem } from "./menu-item"
import type { MenuItemProps, MenuPlacement, MenuProps } from "./menu.types"

// Declaration merging: namespace + const = Menu.Props, Menu.Placement, etc.
declare namespace Menu {
  export type Placement = MenuPlacement
  export type DataAttrs = CoreMenu.DataAttrs
  export type Props = MenuProps
  export type ItemProps = MenuItemProps
}

// Attach Item as static property
const Menu = MenuRoot as typeof MenuRoot & { Item: typeof MenuItem }
Menu.Item = MenuItem

export { Menu }

// Backward-compat flat type exports
export type { MenuProps, MenuItemProps, MenuPlacement } from "./menu.types"

export { menuSections, menuProps, menuItemProps } from "./preview"
