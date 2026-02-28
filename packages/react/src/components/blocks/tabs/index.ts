import { Icon } from "../../primitive"
import { Tabs } from "./tabs"
import type { TabsItemProps, TabsPanelAttributes, TabsProps } from "./tabs.types"

/**
 * Declaration merging for Tabs compound component
 */
declare namespace Tabs {
  export type Props = TabsProps
  export type ItemProps = TabsItemProps
  export type PanelAttributes = TabsPanelAttributes
}

export { Icon, Tabs }
export type { TabsProps, TabsItemProps, TabsPanelAttributes }
