import { cva } from '@/utils/variants'

/**
 * Text variants for Versaur design system
 * Supports color, underline, and capitalization
 */

/**
 * Extended text variants for Versaur design system
 * Adds support for align, italic, clamp, ellipsis, fontWeight, fontSize, lineHeight
 */
export const textVariants = cva('', {
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
    as: {
      h1: 'font-bold text-4xl leading-loose',
      h2: 'font-semibold text-3xl leading-relaxed',
      h3: 'font-medium text-2xl leading-relaxed',
      h4: 'font-bold text-xl leading-normal',
      h5: 'font-semibold text-lg leading-normal',
      h6: 'font-medium text-base leading-normal',
      p: 'font-normal text-base leading-normal',
      span: 'font-normal text-base leading-normal',
      label: 'font-normal text-xs leading-normal',
    },
  },
  defaultVariants: {
    color: 'neutral',
    hasUnderline: false,
    isCapitalize: false,
    align: 'left',
    italic: false,
    clamp: 'none',
    ellipsis: false,
    as: 'span',
  },
})
