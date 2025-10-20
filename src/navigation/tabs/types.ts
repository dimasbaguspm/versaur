/**
 * Tabs types for Versaur UI
 */
import type { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react'

/**
 * TabsContextValue: Shared state for compound/context Tabs
 */
export interface TabsContextValue {
  /** Currently active tab value */
  activeTab: string
  /** Set active tab */
  setActiveTab: (tab: string) => void
  /** Whether tab triggers should fill available width */
  fullWidth?: boolean
}

/**
 * TabsRootProps: Props for Tabs root (rendered as nav element)
 */
export interface TabsRootProps extends HTMLAttributes<HTMLElement> {
  /** Controlled tab value */
  value: string
  /** Callback when tab changes */
  onValueChange: (tab: string) => void
  /** Children: Tabs.Trigger */
  children: ReactNode
  /** Whether tab triggers should fill available width equally */
  fullWidth?: boolean
}

/**
 * TabsTriggerProps: Individual tab link (rendered as li > a)
 */
export interface TabsTriggerProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Tab value (unique string) */
  value: string
  /** Children: tab label */
  children: ReactNode
}

/**
 * TabsIndicatorProps: Animated underline indicator for active tab
 */
export interface TabsIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  left: number
  width: number
}
