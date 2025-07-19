/**
 * BottomBar.Item sub-component
 */
import { forwardRef } from 'react'
import type { BottomBarItemProps } from './types'
import { bottomBarItemVariants } from './helpers'

export const BottomBarItem = forwardRef<HTMLDivElement, BottomBarItemProps>(
  ({ icon, label, active = false, className, ...props }, ref) => (
    <div
      ref={ref}
      aria-current={active ? 'page' : undefined}
      className={bottomBarItemVariants({ active, className })}
      {...props}
    >
      {icon}
      {label && <span className='text-xs mt-0.5'>{label}</span>}
    </div>
  )
)
