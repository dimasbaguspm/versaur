import { cva } from '@/utils/variants'

/**
 * Shared formatting styles for rich text content
 * Used by both FormattedText and TextAreaInput components
 */
export const formattedContentStyles = [
  // Headings
  '[&_h1]:text-2xl',
  '[&_h1]:font-bold',
  '[&_h1]:my-2',
  '[&_h2]:text-xl',
  '[&_h2]:font-bold',
  '[&_h2]:my-1.5',
  '[&_h3]:text-lg',
  '[&_h3]:font-semibold',
  '[&_h3]:my-1',
  // Lists
  '[&_ul]:list-disc',
  '[&_ul]:ml-6',
  '[&_ul]:my-2',
  '[&_ol]:list-decimal',
  '[&_ol]:ml-6',
  '[&_ol]:my-2',
  '[&_li]:my-0.5',
  // Links
  '[&_a]:text-primary',
  '[&_a]:underline',
  '[&_a]:cursor-pointer',
  'hover:[&_a]:text-primary-bold',
  // Text formatting
  '[&_strong]:font-bold',
  '[&_em]:italic',
  '[&_u]:underline',
  '[&_s]:line-through',
  // Paragraphs
  '[&_p]:my-2',
  '[&_p:first-child]:mt-0',
  '[&_p:last-child]:mb-0',
] as const

/**
 * Variants for the FormattedText component
 */
export const formattedTextVariants = cva('block w-full break-words', {
  variants: {
    scrollable: {
      true: 'overflow-y-auto',
      false: 'overflow-visible',
    },
  },
  defaultVariants: {
    scrollable: false,
  },
})
