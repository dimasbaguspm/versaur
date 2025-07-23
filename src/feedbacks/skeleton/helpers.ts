import { cva, type VariantProps } from '@/utils/variants'

export const skeletonVariants = cva('w-full overflow-hidden bg-neutral-200', {
  variants: {
    shape: {
      rectangle: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
      square: 'aspect-square rounded-md',
    },
    size: {
      sm: 'h-4',
      md: 'h-6',
      lg: 'h-8',
      xl: 'h-12',
    },
  },
  defaultVariants: {
    shape: 'rounded',
    size: 'md',
  },
})

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>
