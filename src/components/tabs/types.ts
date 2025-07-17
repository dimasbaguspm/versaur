/**
 * Tabs types for Versaur UI
 */
import type { ReactNode, HTMLAttributes } from 'react'

/**
 * TabsContextValue: Shared state for compound/context Tabs
 */
export interface TabsContextValue {
  /** Currently active tab value */
  activeTab: string
  /** Set active tab */
  setActiveTab: (tab: string) => void
  /** Default color for triggers */
  color?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'neutral'
}

/**
 * TabsRootProps: Props for Tabs root
 */
export interface TabsRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled tab value */
  value: string
  /** Callback when tab changes */
  onValueChange: (tab: string) => void
  /** Color for triggers */
  color?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'neutral'
  /** Children: Tabs.Trigger */
  children: ReactNode
}

/**
 * TabsTriggerProps: Individual tab button
 */
export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
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
