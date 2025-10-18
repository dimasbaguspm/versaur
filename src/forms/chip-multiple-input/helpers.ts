import { cva } from 'class-variance-authority'

export const chipMultipleInputOptionVariants = cva(
  'inline-flex items-center justify-center rounded-full bg-white transition-colors duration-200 cursor-pointer border border-border hover:bg-primary-soft hover:border-primary-bold focus:border-primary-light data-[selected=true]:bg-primary data-[selected=true]:border-primary data-[selected=true]:text-white',
  {
    variants: {
      size: {
        sm: 'h-7 px-3 text-sm min-w-[2.25rem]',
        md: 'h-9 px-4 text-sm min-w-[2.5rem]',
        lg: 'h-10 px-8 text-lg min-w-[2.75rem]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
