import { cva } from '@/utils/variants'

/**
 * Heading variants for Versaur design system
 * Supports color, transform, decoration, margin, alignment, clamp, ellipsis, and heading tags
 */
export const headingVariants = cva('', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      ghost: 'text-ghost',
      neutral: 'text-ghost',
      success: 'text-success',
      info: 'text-info',
      warning: 'text-warning',
      danger: 'text-danger',
      inherit: '',
      gray: 'text-gray-500',
      black: 'text-black',
      white: 'text-white',
    },
    transform: {
      none: 'normal-case',
      capitalize: 'capitalize',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
    },
    decoration: {
      none: 'no-underline',
      underline: 'underline',
      'line-through': 'line-through',
      overline: 'overline',
    },
    hasMargin: {
      true: 'mb-4',
      false: '',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    clamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      none: '',
    },
    as: {
      h1: 'font-bold text-2xl leading-loose',
      h2: 'font-semibold text-2xl leading-relaxed',
      h3: 'font-medium text-2xl leading-relaxed',
      h4: 'font-bold text-xl leading-normal',
      h5: 'font-semibold text-lg leading-normal',
      h6: 'font-medium text-base leading-normal',
    },
  },
  defaultVariants: {
    color: 'ghost',
    transform: 'none',
    decoration: 'none',
    hasMargin: false,
    align: 'left',
    clamp: 'none',
    as: 'h1',
  },
})
