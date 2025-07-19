import { cva } from 'class-variance-authority'

/**
 * TopBarRoot styles
 */
export const topBarRootStyles = cva(
  'w-full flex items-center px-6 py-2 mb-6 border-b border-border shadow-xs bg-white',
  {
    variants: {},
    defaultVariants: {},
  }
)

/**
 * TopBarLeading styles
 */
export const topBarLeadingStyles = cva('flex items-center gap-3 min-w-0 flex-1')

/**
 * TopBarTrailing styles
 */
export const topBarTrailingStyles = cva('flex items-center gap-2 ml-auto')

/**
 * TopBarNavItem styles
 */
export const topBarNavItemStyles = cva(
  'px-2.5 py-1.5 rounded-md text-xs font-sm cursor-pointer transition-colors',
  {
    variants: {
      active: {
        true: 'bg-coral/10 text-coral',
        false: 'bg-neutral hover:bg-coral/10 text-ghost',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

/**
 * TopBarNav styles (container for navigation items)
 */
export const topBarNavStyles = cva('flex items-center gap-2 ml-4')

/**
 * TopBarActions styles (container for action items)
 */
export const topBarActionsStyles = cva('flex items-center gap-2 mr-4')
