/**
 * Atoms for SideBar compound component
 * Includes SideBar.Item and SideBar.Group
 */
import {
  forwardRef,
  useState,
  type AnchorHTMLAttributes,
  type Ref,
} from 'react'
import {
  sideBarItemClass,
  sideBarGroupClass,
  sideBarIconClass,
  sideBarGroupHeaderClass,
  sideBarGroupChildrenClass,
} from './helpers'
import type { SideBarItemProps, SideBarGroupProps } from './types'
import { Text } from '@/primitive'
import { cn } from '@/utils'
import { useSideBarContext } from './context'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Icon } from '@/primitive'

export const SideBarItem = forwardRef<HTMLAnchorElement, SideBarItemProps>(
  (props, ref) => {
    const { icon, children, href, active, ...rest } = props
    const { isCollapsed } = useSideBarContext()
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>

    return (
      <li>
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={sideBarItemClass({
            disabled: !!props['aria-disabled'],
            active,
            collapsed: isCollapsed,
          })}
          title={isCollapsed ? String(children) : undefined}
          {...anchorProps}
        >
          {icon && <span className={cn(sideBarIconClass())}>{icon}</span>}
          {!isCollapsed && (
            <Text
              as='small'
              color='inherit'
              fontWeight='normal'
              className='truncate'
            >
              {children}
            </Text>
          )}
        </a>
      </li>
    )
  }
)

export const SideBarGroup = forwardRef<HTMLLIElement, SideBarGroupProps>(
  function SideBarGroup(
    { children, label, icon, defaultExpanded = true, ...props },
    ref
  ) {
    const { isCollapsed, expandSidebar } = useSideBarContext()
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    const toggleExpanded = (e: React.MouseEvent) => {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }

    const handleClickWhenCollapsed = (e: React.MouseEvent) => {
      e.preventDefault()
      // Expand sidebar and the group
      expandSidebar()
      setIsExpanded(true)
    }

    // When sidebar is collapsed (horizontally), show icon only
    if (isCollapsed) {
      return (
        <li>
          <button
            type='button'
            className={sideBarItemClass({
              active: false,
              collapsed: true,
            })}
            title={String(label)}
            onClick={handleClickWhenCollapsed}
          >
            {icon && <span className={cn(sideBarIconClass())}>{icon}</span>}
          </button>
        </li>
      )
    }

    // When sidebar is expanded (horizontally)
    return (
      <li
        ref={ref}
        className={sideBarGroupClass({
          expanded: isExpanded,
        })}
        {...props}
      >
        <button
          type='button'
          className={sideBarGroupHeaderClass({
            collapsed: false,
          })}
          onClick={toggleExpanded}
        >
          {icon && <span className={cn(sideBarIconClass())}>{icon}</span>}
          <Text as='small' color='inherit' className='flex-1 truncate'>
            {label}
          </Text>
          <Icon
            as={isExpanded ? ChevronDown : ChevronRight}
            size='xs'
            color='inherit'
          />
        </button>

        {isExpanded && (
          <ul className={cn(sideBarGroupChildrenClass())}>{children}</ul>
        )}
      </li>
    )
  }
)
