import { cva } from '@/utils/variants'

/**
 * Filter chip group variants for managing layout and alignment
 */
export const filterChipGroupVariants = cva('flex flex-wrap items-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    alignment: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-6',
    },
    fluid: {
      true: '[&>*]:flex-1',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    alignment: 'start',
    gap: 'md',
    fluid: false,
  },
})
