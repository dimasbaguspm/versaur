import { cva } from '@/utils/variants'

/**
 * Shared formatting styles for rich text content
 * Used by both FormattedText and TextAreaInput components
 */
export const formattedContentStyles = [
  // Headings
  '[&_h1]:text-2xl',
  '[&_h1]:leading-loose',
  '[&_h1]:font-bold',
  '[&_h1]:my-2',
  '[&_h2]:text-2xl',
  '[&_h2]:leading-relaxed',
  '[&_h2]:font-semibold',
  '[&_h2]:my-2',
  '[&_h3]:text-2xl',
  '[&_h3]:leading-relaxed',
  '[&_h3]:font-medium',
  '[&_h3]:my-1.5',
  '[&_h4]:text-xl',
  '[&_h4]:leading-normal',
  '[&_h4]:font-bold',
  '[&_h4]:my-1.5',
  '[&_h5]:text-lg',
  '[&_h5]:leading-normal',
  '[&_h5]:font-semibold',
  '[&_h5]:my-1.5',
  '[&_h6]:text-base',
  '[&_h6]:leading-normal',
  '[&_h6]:font-medium',
  '[&_h6]:my-1',
  // Lists
  '[&_ul]:list-disc',
  '[&_ul]:ml-6',
  '[&_ul]:my-2',
  '[&_ul]:text-base',
  '[&_ul]:leading-normal',
  '[&_ol]:list-decimal',
  '[&_ol]:ml-6',
  '[&_ol]:my-2',
  '[&_ol]:text-base',
  '[&_ol]:leading-normal',
  '[&_li]:my-0.5',
  '[&_li]:text-base',
  '[&_li]:leading-normal',
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
  '[&_p]:text-base',
  '[&_p]:leading-normal',
  '[&_p]:text-ghost',
  '[&_p]:my-2',
  '[&_p:first-child]:mt-0',
  '[&_p:last-child]:mb-0',
] as const

/**
 * Variants for the FormattedText component
 */
export const formattedTextVariants = cva(
  'block w-full break-words text-ghost text-base leading-normal',
  {
    variants: {
      scrollable: {
        true: 'overflow-y-auto',
        false: 'overflow-visible',
      },
    },
    defaultVariants: {
      scrollable: false,
    },
  }
)
