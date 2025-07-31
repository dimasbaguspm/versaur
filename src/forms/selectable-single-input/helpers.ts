import { cva } from 'class-variance-authority'

export const selectableSingleInputRootClass = cva(
  'flex items-center gap-3 cursor-pointer border-b select-none p-4 transition-colors',
  {
    variants: {
      checked: {
        true: 'border-primary',
        false: 'border-border',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)

// helpers.ts for SelectableSingleInput

/**
 * Mobile-friendly box and focus/active/checked state classes for the radio box
 */
export const selectableBoxClass = cva(
  'flex h-6 w-6 items-center justify-center rounded-sm overflow-hidden border border-border transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'border-border bg-white',
      },
      disabled: {
        true: 'opacity-50',
        false: 'active:scale-95',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)
