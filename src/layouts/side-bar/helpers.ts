import { cva } from 'class-variance-authority'

export const sideBarRootClass = cva(
  'bg-background flex flex-col h-full ease-in-out justify-between',
  {
    variants: {
      collapsed: {
        true: 'w-16',
        false: 'w-56',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

export const sideBarItemClass = cva(
  'w-full flex p-3 items-center gap-2 rounded-md hover:text-primary hover:bg-primary-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all',
  {
    variants: {
      active: {
        true: 'bg-primary/10 text-primary',
        false: 'text-ghost',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      collapsed: {
        true: 'justify-center',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
      collapsed: false,
    },
  }
)

export const sideBarGroupClass = cva('', {
  variants: {
    expanded: {
      true: 'bg-neutral-light',
      false: '',
    },
  },
  defaultVariants: {
    expanded: false,
  },
})

export const sideBarGroupHeaderClass = cva(
  'w-full flex p-3 items-center gap-2 rounded-md hover:text-primary hover:bg-primary-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all',
  {
    variants: {
      collapsed: {
        true: 'justify-center',
        false: '',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

export const sideBarGroupChildrenClass = cva('flex flex-col gap-2 ml-3')

export const sideBarGroupLabelClass = cva('px-2 mb-1', {
  variants: {
    collapsed: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})

export const sideBarIconClass = cva('flex items-center justify-center size-5')
