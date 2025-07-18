import { cva } from '@/utils/variants'

export const breadcrumbsRootClass = cva(
  'flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200',
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
        true: 'font-semibold text-slate-900 dark:text-white cursor-default',
        false:
          'hover:text-primary focus:text-primary text-slate-700 dark:text-slate-200',
      },
    },
    defaultVariants: {
      isCurrent: false,
    },
  }
)

export const breadcrumbsSeparatorClass =
  'mx-1 text-slate-400 dark:text-slate-500 select-none'
