import { createContext, useContext, forwardRef } from "react";
import { tabsStyles } from "@versaur/core";
import "@versaur/core/tabs.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type {
  TabsProps,
  TabsTriggerProps,
  TabsPanelAttributes,
} from "./tabs.types";

/**
 * Private context for managing active tab state and change handler
 */
interface TabsContextType {
  activeValue: string;
  onChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs.Trigger must be used within a Tabs component");
  }
  return context;
}

/**
 * Tabs Root Component
 *
 * A controlled compound component for managing tab selection
 *
 * @example
 * ```tsx
 * const [activeTab, setActiveTab] = useState("tab1");
 *
 * <Tabs value={activeTab} onChange={setActiveTab}>
 *   <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
 *   <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
 * </Tabs>
 * ```
 */
const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onChange, fullWidth = false, children }, ref) => {
    const dataAttrs = useDataAttrs({
      fullWidth: fullWidth || undefined,
    });

    return (
      <TabsContext.Provider value={{ activeValue: value, onChange }}>
        <nav ref={ref} className={tabsStyles.tabs} {...dataAttrs}>
          <ul className={tabsStyles.tablist} role="tablist">
            {children}
          </ul>
        </nav>
      </TabsContext.Provider>
    );
  },
);

TabsRoot.displayName = "Tabs";

/**
 * Tabs.Trigger Component
 *
 * A tab trigger button that manages its own active/disabled state
 * based on context
 *
 * @example
 * ```tsx
 * <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
 * ```
 */
const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled = false, children }, ref) => {
    const { activeValue, onChange } = useTabsContext();

    const isActive = activeValue === value;
    const state = disabled ? "disabled" : isActive ? "active" : "default";

    const handleClick = () => {
      if (!disabled) {
        onChange(value);
      }
    };

    return (
      <li className={tabsStyles.tabitem}>
        <button
          ref={ref}
          className={tabsStyles.trigger}
          role="tab"
          id={`tabs-trigger-${value}`}
          aria-selected={isActive}
          aria-controls={`tabs-panel-${value}`}
          data-state={state}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </button>
      </li>
    );
  },
);

TabsTrigger.displayName = "Tabs.Trigger";

/**
 * Helper function to get attributes for tabpanel elements
 *
 * @param value - The tab value identifier
 * @returns Object with id, role, and aria-labelledby attributes
 *
 * @example
 * ```tsx
 * <div {...Tabs.getPanelAttribute("tab1")}>
 *   Panel content for tab 1
 * </div>
 * ```
 */
function getPanelAttribute(value: string): TabsPanelAttributes {
  return {
    id: `tabs-panel-${value}`,
    role: "tabpanel",
    "aria-labelledby": `tabs-trigger-${value}`,
  };
}

// Create a compound component with typed properties
interface TabsComponent extends React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLDivElement>
> {
  Trigger: typeof TabsTrigger;
  getPanelAttribute: typeof getPanelAttribute;
}

export const Tabs = Object.assign(TabsRoot, {
  Trigger: TabsTrigger,
  getPanelAttribute,
}) as TabsComponent;

export { TabsTrigger, getPanelAttribute };
