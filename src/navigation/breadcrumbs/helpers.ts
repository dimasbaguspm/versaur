import { cva } from '@/utils/variants'

export const breadcrumbsRootClass = cva(
  'flex items-center gap-2 text-sm text-tertiary',
  {
    variants: {
      separator: {
        default: 'gap-2',
        compact: 'gap-1',
      },
    },
    defaultVariants: {
      separator: 'default',
    },
  }
)

export const breadcrumbsItemClass = cva(
  'inline-flex items-center gap-1 transition-colors',
  {
    variants: {
      isCurrent: {
        true: 'font-semibold text-black cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      isCurrent: false,
    },
  }
)

export const breadcrumbsSeparatorClass = 'mx-1 text-ghost-400 select-none'
