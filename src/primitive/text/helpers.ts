import type { ElementType } from 'react'
import { cva } from '@/utils/variants'

export const ALLOWED_TEXT_TAGS = [
  'p',
  'span',
  'q',
  's',
  'strong',
  'em',
  'small',
  'label',
] as const

export type AllowedTextTag = (typeof ALLOWED_TEXT_TAGS)[number]

export const normalizeTextTag = (tag?: ElementType): AllowedTextTag =>
  ALLOWED_TEXT_TAGS.includes(tag as AllowedTextTag)
    ? (tag as AllowedTextTag)
    : 'span'

/**
 * Text variants for Versaur design system
 * Supports color, text transform, decoration, alignment, and truncation utilities
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
    as: {
      p: 'font-normal text-base leading-normal',
      span: 'font-normal text-base leading-normal',
      q: 'font-normal text-base leading-normal',
      s: 'font-normal text-base leading-normal',
      strong: 'font-semibold text-base leading-normal',
      em: 'font-normal italic text-base leading-normal',
      small: 'font-normal text-sm leading-normal',
      label: 'font-normal text-xs leading-normal',
    },
  },
  defaultVariants: {
    color: 'neutral',
    transform: 'none',
    decoration: 'none',
    align: 'left',
    italic: false,
    clamp: 'none',
    as: 'span',
  },
})
