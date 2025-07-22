import { cva } from '@/utils/variants'

/**
 * Grid system for FormLayout root (12 columns, always)
 */
export const formLayoutRootVariants = cva('grid w-full gap-4 grid-cols-12')

/**
 * FormLayout.Column grid span (1-12)
 */
export const formLayoutColumnVariants = cva('', {
  variants: {
    span: {
      '1': 'col-span-1',
      '2': 'col-span-2',
      '3': 'col-span-3',
      '4': 'col-span-4',
      '5': 'col-span-5',
      '6': 'col-span-6',
      '7': 'col-span-7',
      '8': 'col-span-8',
      '9': 'col-span-9',
      '10': 'col-span-10',
      '11': 'col-span-11',
      '12': 'col-span-12',
    },
  },
  defaultVariants: {
    span: '4',
  },
})
