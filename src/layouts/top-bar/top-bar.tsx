import { forwardRef } from 'react'
import type { TopBarProps } from './types'
import { topBarRootStyles } from './helpers'

import {
  TopBarLeading,
  TopBarTrailing,
  TopBarNavItem,
  TopBarNav,
  TopBarActions,
} from './top-bar.atoms'

const TopBarRoot = forwardRef<HTMLDivElement, TopBarProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header ref={ref} className={topBarRootStyles({ className })} {...props}>
        {children}
      </header>
    )
  }
)

export const TopBar = Object.assign(TopBarRoot, {
  Leading: TopBarLeading,
  Trailing: TopBarTrailing,
  NavItem: TopBarNavItem,
  Nav: TopBarNav,
  Actions: TopBarActions,
})
