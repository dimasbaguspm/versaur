import type { ReactNode } from "react";

export interface TabsProps {
  /**
   * The currently active tab value
   */
  value: string;

  /**
   * Callback fired when a tab is selected
   */
  onChange: (value: string) => void;

  /**
   * Whether tabs should stretch to fill available width
   */
  fullWidth?: boolean;

  /**
   * The content of the tabs component
   */
  children: ReactNode;
}

export interface TabsTriggerProps {
  /**
   * The unique identifier for this trigger
   */
  value: string;

  /**
   * Whether the trigger is disabled
   */
  disabled?: boolean;

  /**
   * The content of the trigger
   */
  children: ReactNode;
}

/**
 * Attributes object for tabpanel elements
 * Used with Tabs.getPanelAttribute() helper
 */
export interface TabsPanelAttributes {
  id: string;
  role: "tabpanel";
  "aria-labelledby": string;
}
