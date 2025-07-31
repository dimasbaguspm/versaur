import { cva } from 'class-variance-authority'

/**
 * Variants for the Image component
 * - position: how the image is positioned within its box
 * - size: predefined sizing for the image
 */
export const imageVariants = cva('block object-cover', {
  variants: {
    position: {
      cover: 'object-cover',
      contain: 'object-contain',
      center: 'object-center',
      top: 'object-top',
      bottom: 'object-bottom',
      left: 'object-left',
      right: 'object-right',
      none: '',
    },
    size: {
      sm: 'w-16 h-16',
      md: 'w-32 h-32',
      lg: 'w-48 h-48',
      full: 'w-full h-full',
      auto: '',
    },
    shape: {
      rectangle: 'rounded',
      square: 'aspect-square rounded',
      circle: 'rounded-full aspect-square',
    },
  },
  defaultVariants: {
    position: 'cover',
    size: 'auto',
    shape: 'rectangle',
  },
})

export const imageAtomVariants = cva(
  'flex items-center justify-center bg-neutral-soft text-ghost border border-border',
  {
    variants: {
      shape: {
        rectangle: 'rounded',
        square: 'aspect-square rounded',
        circle: 'rounded-full aspect-square',
      },
      size: {
        sm: 'w-16 h-16',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        full: 'w-full h-full',
        auto: 'w-full h-full',
      },
    },
    defaultVariants: {
      shape: 'rectangle',
      size: 'auto',
    },
  }
)
