/**
 * SideBar compound component for Versaur UI
 * Provides accessible, semantic sidebar navigation
 */
import { forwardRef } from 'react'
import type { SideBarProps } from './types'
import { SideBarItem, SideBarGroup } from './side-bar.atoms'

const SideBarRoot = forwardRef<HTMLElement, SideBarProps>(
  ({ children, ...props }, ref) => (
    <nav
      ref={ref}
      className='w-56 bg-background border-r border-border flex flex-col my-2'
      aria-label='Sidebar'
      {...props}
    >
      <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-background'>
        <ul className='flex flex-col gap-1 mx-2'>{children}</ul>
      </div>
    </nav>
  )
)

export const SideBar = Object.assign(SideBarRoot, {
  Item: SideBarItem,
  Group: SideBarGroup,
})
