// Compound/context Tabs component for Versaur UI
// Uses semantic HTML: nav > ul > li > a
import React, { useRef } from 'react'
import { TabsContext } from './context'
import type { TabsRootProps } from './types'
import { TabsTrigger, TabsIndicator } from './tabs.atoms'
import { cn } from '@/utils/cn'
import { tabsContainerVariants } from './helpers'
import { useTabIndicator } from './use-tab-indicator'

/**
 * TabsRoot: Semantic navigation tabs with primary underline style
 * @see https://m3.material.io/components/tabs/guidelines
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
const TabsRoot: React.FC<TabsRootProps> = ({
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  const contextValue = {
    activeTab: value,
    setActiveTab: onValueChange,
  }

  const containerRef = useRef<HTMLUListElement>(null)
  const indicatorStyle = useTabIndicator(value, containerRef)

  return (
    <TabsContext.Provider value={contextValue}>
      <nav
        className={cn('relative w-full', className)}
        aria-label='Tabs'
        {...props}
      >
        <div className='relative overflow-hidden'>
          <ul
            role='tablist'
            className={tabsContainerVariants()}
            ref={containerRef}
          >
            {children}
          </ul>
          <TabsIndicator
            left={indicatorStyle.left}
            width={indicatorStyle.width}
          />
        </div>
      </nav>
    </TabsContext.Provider>
  )
}

export const Tabs = Object.assign(TabsRoot, {
  Trigger: TabsTrigger,
})
