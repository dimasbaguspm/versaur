import { cva } from '@/utils/variants'

/**
 * Heading variants for Versaur design system
 * Supports color, underline, capitalization, margin, alignment, italic, clamp, ellipsis, and heading levels
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
    hasUnderline: {
      true: 'underline',
      false: '',
    },
    isCapitalize: {
      true: 'capitalize',
      false: '',
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
    italic: {
      true: 'italic',
      false: '',
    },
    clamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      none: '',
    },
    ellipsis: {
      true: 'truncate',
      false: '',
    },
    level: {
      1: 'font-bold text-2xl leading-loose',
      2: 'font-semibold text-xl leading-relaxed',
      3: 'font-medium text-base leading-relaxed',
      4: 'font-bold text-sm leading-normal',
      5: 'font-semibold text-sm leading-normal',
      6: 'font-medium text-xs leading-normal',
    },
  },
  defaultVariants: {
    color: 'ghost',
    hasUnderline: false,
    isCapitalize: false,
    hasMargin: false,
    align: 'left',
    italic: false,
    clamp: 'none',
    ellipsis: false,
    level: 1,
  },
})
