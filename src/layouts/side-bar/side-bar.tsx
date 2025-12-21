/**
 * SideBar compound component for Versaur UI
 * Provides accessible, semantic sidebar navigation with collapsible state
 */
import { forwardRef, useState } from 'react'
import type { SideBarProps } from './types'
import { SideBarItem, SideBarGroup } from './side-bar.atoms'
import { sideBarRootClass, sideBarItemClass, sideBarIconClass } from './helpers'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Icon, Text } from '@/primitive'
import { SideBarContext } from './context'
import { cn } from '@/utils'

const SideBarRoot = forwardRef<HTMLElement, SideBarProps>(
  ({ children, defaultCollapsed = false, onCollapseChange, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

    const toggleCollapsed = () => {
      const newState = !isCollapsed
      setIsCollapsed(newState)
      onCollapseChange?.(newState)
    }

    const expandSidebar = () => {
      if (isCollapsed) {
        setIsCollapsed(false)
        onCollapseChange?.(false)
      }
    }

    return (
      <SideBarContext.Provider
        value={{ isCollapsed, toggleCollapsed, expandSidebar }}
      >
        <nav
          ref={ref}
          className={sideBarRootClass({ collapsed: isCollapsed })}
          aria-label='Sidebar'
          {...props}
        >
          <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-background py-2'>
            <ul className='flex flex-col gap-1 mx-2'>{children}</ul>
          </div>
          <div className='mx-2 mb-2'>
            <button
              onClick={toggleCollapsed}
              className={sideBarItemClass({
                collapsed: isCollapsed,
                active: false,
                disabled: false,
              })}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <span className={cn(sideBarIconClass())}>
                <Icon
                  as={isCollapsed ? ChevronRight : ChevronLeft}
                  size='sm'
                  color='inherit'
                />
              </span>
              {!isCollapsed && (
                <Text as='small' color='inherit' className='truncate'>
                  Collapse
                </Text>
              )}
            </button>
          </div>
        </nav>
      </SideBarContext.Provider>
    )
  }
)

export const SideBar = Object.assign(SideBarRoot, {
  Item: SideBarItem,
  Group: SideBarGroup,
})
