import { cva } from '@/utils/variants'

export const breadcrumbsRootClass = cva(
  'flex items-center gap-2 text-sm text-gray-500'
)

export const breadcrumbsItemClass = cva(
  'inline-flex items-center gap-1 transition-colors hover:underline cursor-pointer'
)
