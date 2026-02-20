import { tabsStyles } from "@versaur/core/blocks"
import { createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { useResizeObserver } from "../../../hooks/use-resize-observer"
import { combineRefs } from "../../../utils/combine-refs"
import { cx } from "../../../utils/cx"
import type { TabsItemProps, TabsPanelAttributes, TabsProps } from "./tabs.types"

/**
 * Private context for managing active tab state and change handler
 */
interface TabsContextType {
  activeValue: string
  onChange: (value: string) => void
  registerTrigger: (value: string, ref: HTMLButtonElement | null) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs.Item must be used within a Tabs component")
  }
  return context
}

/**
 * Tabs Root Component
 *
 * A controlled compound component for managing tab selection with animated underline
 *
 * @example
 * ```tsx
 * const [activeTab, setActiveTab] = useState("tab1");
 *
 * <Tabs value={activeTab} onChange={setActiveTab}>
 *   <Tabs.Item value="tab1">Tab 1</Tabs.Item>
 *   <Tabs.Item value="tab2">Tab 2</Tabs.Item>
 * </Tabs>
 * ```
 */
const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(({ value, onChange, children, className }, ref) => {
  const navRef = useRef<HTMLDivElement>(null)
  const triggersRef = useRef<Map<string, HTMLButtonElement>>(new Map())
  const [thumbLeft, setThumbLeft] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(0)

  /**
   * Measure the active trigger and update thumb position/width
   */
  const measureTabs = () => {
    const activeTrigger = triggersRef.current.get(value)
    if (!activeTrigger || !navRef.current) {
      return
    }

    const navRect = navRef.current.getBoundingClientRect()
    const triggerRect = activeTrigger.getBoundingClientRect()

    // Calculate thumb position relative to nav container, accounting for scroll
    const left = triggerRect.left - navRect.left + navRef.current.scrollLeft
    const { width } = triggerRect

    setThumbLeft(left)
    setThumbWidth(width)

    // Auto-scroll active tab into view
    activeTrigger.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  /**
   * Register trigger refs for measurement
   */
  const registerTrigger = (triggerValue: string, triggerRef: HTMLButtonElement | null) => {
    if (triggerRef) {
      triggersRef.current.set(triggerValue, triggerRef)
    }
  }

  // Measure on mount and when active value changes (synchronously, no animation)
  useLayoutEffect(() => {
    measureTabs()
  }, [value])

  // Recalculate on resize
  useResizeObserver(navRef, measureTabs)

  const dataAttrs = useDataAttrs({})

  return (
    <TabsContext.Provider value={{ activeValue: value, onChange, registerTrigger }}>
      <nav ref={combineRefs(ref, navRef)} className={cx(tabsStyles.tabs, className)} {...dataAttrs}>
        <ul className={tabsStyles.tablist} role="tablist">
          {children}
        </ul>
        <div
          className={tabsStyles["tabs-thumb"]}
          style={{
            left: `${thumbLeft}px`,
            width: `${thumbWidth}px`,
          }}
        />
      </nav>
    </TabsContext.Provider>
  )
})

TabsRoot.displayName = "Tabs"

/**
 * Tabs.Item Component
 *
 * A tab item button that manages its own active/disabled state
 * based on context
 *
 * @example
 * ```tsx
 * <Tabs.Item value="tab1">Tab 1</Tabs.Item>
 * ```
 */
const TabsItem = forwardRef<HTMLButtonElement, TabsItemProps>(
  ({ value, disabled = false, children, className }, ref) => {
    const { activeValue, onChange, registerTrigger } = useTabsContext()

    const isActive = activeValue === value

    let state: "disabled" | "active" | "default"
    if (disabled) {
      state = "disabled"
    } else if (isActive) {
      state = "active"
    } else {
      state = "default"
    }

    const handleClick = () => {
      if (!disabled) {
        onChange(value)
      }
    }

    return (
      <li className={tabsStyles.tabitem}>
        <button
          ref={combineRefs(ref, (element) => registerTrigger(value, element))}
          className={cx(tabsStyles.trigger, className)}
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
    )
  },
)

TabsItem.displayName = "Tabs.Item"

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
    "aria-labelledby": `tabs-trigger-${value}`,
    id: `tabs-panel-${value}`,
    role: "tabpanel",
  }
}

// Create a compound component with typed properties
export interface TabsComponent extends React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLDivElement>
> {
  Item: typeof TabsItem
  getPanelAttribute: typeof getPanelAttribute
}

export const Tabs = Object.assign(TabsRoot, {
  Item: TabsItem,
  getPanelAttribute,
}) as TabsComponent

export { getPanelAttribute, TabsItem }
