/**
 * BottomBar.Item sub-component
 */
import { forwardRef } from 'react'
import type { BottomBarItemProps } from './types'
import { bottomBarItemVariants } from './helpers'

export const BottomBarItem = forwardRef<HTMLButtonElement, BottomBarItemProps>(
  (
    {
      as: Component = 'button',
      icon,
      label,
      active = false,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <Component
      // @ts-expect-error it's parameterized component
      ref={ref}
      aria-current={active ? 'page' : undefined}
      className={bottomBarItemVariants({ active, className, as: Component })}
      {...props}
    >
      {icon && icon}
      {children && children}
      {label && <span className='text-xs mt-0.5'>{label}</span>}
    </Component>
  )
)
