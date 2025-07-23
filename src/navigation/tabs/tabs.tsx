// Compound/context Tabs component for Versaur UI
// See context.ts for shared state
import React, { useRef } from 'react'
import { TabsContext } from './context'
import type { TabsRootProps } from './types'
import { TabsTrigger, TabsIndicator } from './tabs.atoms'
import { cn } from '@/utils/cn'
import { tabsContainerVariants } from './helpers'
import { useTabIndicatorAndFocus } from './use-tab-indicator'

/**
 * TabsRoot: Compound/context root for Tabs
 * @see https://m3.material.io/components/tabs/guidelines
 */
const TabsRoot: React.FC<TabsRootProps> = ({
  value,
  onValueChange,
  children,
  className,
  color = 'primary',
  variant = 'underline',
  ...props
}) => {
  const contextValue = {
    activeTab: value,
    setActiveTab: onValueChange,
    color,
    variant,
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorStyle = useTabIndicatorAndFocus(value, containerRef, children)

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        role='tablist'
        className={cn(
          tabsContainerVariants({
            variant,
          }),
          className
        )}
        ref={containerRef}
        style={{ position: 'relative' }}
        {...props}
      >
        {children}
        {variant === 'underline' && (
          <TabsIndicator
            left={indicatorStyle.left}
            width={indicatorStyle.width}
          />
        )}
      </div>
    </TabsContext.Provider>
  )
}

export const Tabs = Object.assign(TabsRoot, {
  Trigger: TabsTrigger,
})
