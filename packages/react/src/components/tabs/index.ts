import { Tabs } from "./tabs";
import type {
  TabsProps,
  TabsItemProps,
  TabsPanelAttributes,
} from "./tabs.types";

/**
 * Declaration merging for Tabs compound component
 */
declare namespace Tabs {
  export type Props = TabsProps;
  export type ItemProps = TabsItemProps;
  export type PanelAttributes = TabsPanelAttributes;
}

export { Tabs };
export type { TabsProps, TabsItemProps, TabsPanelAttributes };

// Preview exports
export { TabsPreview, tabsSections, tabsProps, tabsItemProps } from "./preview";
export type { TabsSection } from "./preview";
