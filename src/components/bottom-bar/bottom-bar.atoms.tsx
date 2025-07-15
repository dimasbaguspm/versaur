/**
 * BottomBar.Item sub-component
 */
import { forwardRef } from 'react'
import type { BottomBarItemProps } from './types'
import { bottomBarItemVariants } from './helpers'

export const BottomBarItem = forwardRef<HTMLButtonElement, BottomBarItemProps>(
  ({ icon, label, active = false, className, ...props }, ref) => (
    <button
      ref={ref}
      type='button'
      aria-current={active ? 'page' : undefined}
      className={bottomBarItemVariants({ active, className })}
      {...props}
    >
      {icon}
      {label && <span className='text-xs mt-0.5'>{label}</span>}
    </button>
  )
)
