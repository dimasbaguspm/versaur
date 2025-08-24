import { cva } from 'class-variance-authority'

export const noResultsVariants = cva(
  'flex flex-col items-center justify-center text-center border border-border rounded-lg bg-background',
  {
    variants: {
      spacing: {
        sm: 'py-8 px-4',
        md: 'py-12 px-6',
        lg: 'py-16 px-8',
      },
      hasGrayBackground: {
        true: 'bg-neutral-soft',
        false: '',
      },
    },
    defaultVariants: {
      spacing: 'md',
      hasGrayBackground: false,
    },
  }
)

export const noResultsHeaderVariants = cva(
  'flex flex-row items-center gap-3 mb-2'
)

export const noResultsTitleVariants = cva(
  'text-lg font-semibold text-foreground'
)

export const noResultsSubtitleVariants = cva(
  'text-foreground-light mb-6 max-w-md'
)
