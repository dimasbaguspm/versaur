import { cva } from '@/utils/variants'

/**
 * Accordion variants for styling the container
 */
export const accordionVariants = cva(
  'border-b border-border bg-background overflow-hidden',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

/**
 * Accordion header variants for styling the clickable header area
 */
export const accordionHeaderVariants = cva(
  'flex items-center justify-between w-full p-4 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-inset',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer hover:bg-neutral-soft',
      },
      isOpen: {
        true: '',
        false: 'bg-background',
      },
    },
    defaultVariants: {
      disabled: false,
      isOpen: false,
    },
  }
)

/**
 * Accordion content variants for styling the expandable content area
 */
export const accordionContentVariants = cva(
  'overflow-hidden transition-all duration-300',
  {
    variants: {
      isOpen: {
        true: 'max-h-screen opacity-100',
        false: 'max-h-0 opacity-0',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
)

/**
 * Accordion content inner variants for styling the inner content with padding
 */
export const accordionContentInnerVariants = cva('p-4 pt-0')

/**
 * Accordion icon variants for styling the expand/collapse icon
 */
export const accordionIconVariants = cva('transition-transform duration-200', {
  variants: {
    isOpen: {
      true: 'rotate-180',
      false: 'rotate-0',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
})
