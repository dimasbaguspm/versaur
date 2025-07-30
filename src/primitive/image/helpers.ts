import { cva } from 'class-variance-authority'

/**
 * Variants for the Image component
 * - position: how the image is positioned within its box
 * - size: predefined sizing for the image
 */
export const imageVariants = cva('block object-cover rounded', {
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
  },
  defaultVariants: {
    position: 'cover',
    size: 'auto',
  },
})
