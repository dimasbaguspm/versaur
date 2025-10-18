import { cva } from 'class-variance-authority'

export const selectableMultipleInputRootClass = cva(
  'flex gap-3 cursor-pointer border-b border-border select-none transition-colors',
  {
    variants: {
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
      checkboxPlacement: {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end',
      },
      hideCheckbox: {
        true: '',
        false: 'p-4 hover:bg-neutral-light',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
      checkboxPlacement: 'center',
      hideCheckbox: false,
    },
  }
)

/**
 * Mobile-friendly box and focus/active/checked state classes for the checkbox box
 * Uses CSS ::after pseudo-element for checkmark
 */
export const selectableBoxClass = cva(
  'relative h-6 w-6 rounded border cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 appearance-none bg-white border-primary/40 checked:bg-primary checked:border-primary focus:ring-primary/20',
  {
    variants: {
      checked: {
        true: 'bg-primary border-primary',
        false: 'border-primary/40 bg-white',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'active:scale-95',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)
