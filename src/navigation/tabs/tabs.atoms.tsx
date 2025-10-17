// Tabs atoms for Versaur UI
// Uses semantic HTML: li > a for proper navigation structure
import React from 'react'
import { useTabsContext } from './context'
import type { TabsTriggerProps, TabsIndicatorProps } from './types'
import { cn } from '@/utils/cn'
import { tabsTriggerVariants, tabsIndicatorVariants } from './helpers'

/**
 * TabsTrigger: Semantic tab link (li > a)
 * Follows WCAG 2.1 AA standards for navigation tabs
 */
export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className,
  onClick,
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActiveTab(value)
    onClick?.(e)
  }

  return (
    <li role='presentation'>
      <a
        role='tab'
        id={`tabs-trigger-${value}`}
        aria-selected={isActive}
        aria-controls={`tabs-content-${value}`}
        aria-current={isActive ? 'page' : undefined}
        href={`#${value}`}
        className={cn(
          tabsTriggerVariants({
            active: isActive,
          }),
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

/**
 * TabsIndicator: Animated underline indicator for active tab (primary color)
 */
export const TabsIndicator: React.FC<TabsIndicatorProps> = ({
  left,
  width,
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden='true'
      className={cn(tabsIndicatorVariants(), className)}
      style={{
        left,
        width,
      }}
      {...props}
    />
  )
}
