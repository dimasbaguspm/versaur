import type { BottomBarProps } from './types'
import { bottomBarVariants } from './helpers'
import { BottomBarItem } from './bottom-bar.atoms'

const BottomBarRoot = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: BottomBarProps) => (
  <nav
    role='navigation'
    aria-label='Bottom navigation'
    className={bottomBarVariants({ variant, size, className })}
    {...props}
  >
    {children}
  </nav>
)

export const BottomBar = Object.assign(BottomBarRoot, {
  Item: BottomBarItem,
})
