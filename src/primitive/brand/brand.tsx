/// <reference types="vite-plugin-svgr/client" />

import type { BrandProps } from './types'
import { cn } from '@/utils/cn'
import { BrandLogo } from './brand.atoms'
import { forwardRef } from 'react'

/**
 * Brand component for displaying app identity icon and name
 *
 * @param {BrandProps} props - Brand component props
 * @returns {JSX.Element}
 */
export const Brand = forwardRef<HTMLDivElement, BrandProps>(
  ({ name: _name = 'spenicle', size = 'md', shape, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center gap-2')}
        {...props}
      >
        <BrandLogo name={_name} shape={shape} size={size} aria-hidden='true' />
      </span>
    )
  }
)
