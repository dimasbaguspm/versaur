// Tabs atoms for Versaur UI
import React from 'react'
import { useTabsContext } from './context'
import type { TabsTriggerProps, TabsIndicatorProps } from './types'
import { cn } from '@/utils/cn'
import { tabsTriggerVariants, tabsIndicatorVariants } from './helpers'

/**
 * TabsTrigger: Individual tab button
 */
export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  const { activeTab, setActiveTab, color } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      role='tab'
      id={`tabs-trigger-${value}`}
      aria-selected={isActive}
      aria-controls={`tabs-content-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        tabsTriggerVariants({
          active: isActive,
          color,
        }),
        className
      )}
      onClick={() => setActiveTab(value)}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * TabsIndicator: Animated underline indicator for active tab
 */
export const TabsIndicator: React.FC<TabsIndicatorProps> = ({
  left,
  width,
  className,
  ...props
}) => {
  const { color } = useTabsContext()
  return (
    <div
      aria-hidden
      className={cn(tabsIndicatorVariants({ color }), className)}
      style={{
        left,
        width,
        pointerEvents: 'none',
      }}
      {...props}
    />
  )
}
