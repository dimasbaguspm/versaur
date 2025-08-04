/**
 * Atoms for SideBar compound component
 * Includes MenuList, MenuListItem, MenuGroup, SubMenu
 */
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react'
import { sideBarItemClass } from './helpers'
import type { SideBarItemProps, SideBarGroupProps } from './types'
import { Text } from '@/primitive'
import { cn } from '@/utils'

export const SideBarItem = forwardRef<HTMLElement, SideBarItemProps>(
  (props, ref) => {
    const { icon, children, href, onClick, active, ...rest } = props
    const isAnchor = typeof href === 'string'

    if (isAnchor) {
      const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>

      return (
        <li>
          <a
            ref={ref as Ref<HTMLAnchorElement>}
            href={href}
            className={sideBarItemClass({
              disabled: !!props['aria-disabled'],
              active,
            })}
            {...anchorProps}
          >
            {icon}
            <Text as='span' color='inherit' fontSize='sm'>
              {children}
            </Text>
          </a>
        </li>
      )
    } else {
      const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
      return (
        <li>
          <button
            ref={ref as Ref<HTMLButtonElement>}
            type='button'
            onClick={onClick}
            className={cn(
              sideBarItemClass({ disabled: !!buttonProps.disabled, active }),
              'w-full text-left'
            )}
            {...buttonProps}
          >
            {icon}
            <Text as='span' color='inherit' fontSize='sm'>
              {children}
            </Text>
          </button>
        </li>
      )
    }
  }
)

export const SideBarGroup = forwardRef<HTMLLIElement, SideBarGroupProps>(
  function SideBarGroup({ children, label, ...props }, ref) {
    return (
      <li ref={ref} className='flex flex-col gap-2 mt-2' {...props}>
        <Text
          as='h2'
          fontSize='xs'
          fontWeight='semibold'
          color='gray'
          className='px-2'
        >
          {label}
        </Text>

        <ul className='flex flex-col gap-1'>{children}</ul>
      </li>
    )
  }
)
