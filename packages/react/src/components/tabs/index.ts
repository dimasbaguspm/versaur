import { Tabs } from "./tabs";
import type {
  TabsProps,
  TabsTriggerProps,
  TabsPanelAttributes,
} from "./tabs.types";

/**
 * Declaration merging for Tabs compound component
 */
declare namespace Tabs {
  export type Props = TabsProps;
  export type TriggerProps = TabsTriggerProps;
  export type PanelAttributes = TabsPanelAttributes;
}

export { Tabs };
export type { TabsProps, TabsTriggerProps, TabsPanelAttributes };

// Preview exports
export {
  TabsPreview,
  tabsSections,
  tabsInstallation,
  tabsProps,
  tabsTriggerProps,
} from "./preview";
export type { TabsSection } from "./preview";
