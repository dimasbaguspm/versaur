import { forwardRef } from 'react'
import { BaseImage } from './base-image'
import type { BaseImageProps } from './types'

/**
 * Square-shaped Image component for Versaur
 * Inherits all behavior from BaseImage, sets shape to 'square'
 */
export const ImageSquare = forwardRef<
  HTMLImageElement,
  Omit<BaseImageProps, 'shape'>
>((props, ref) => <BaseImage ref={ref} {...props} shape='square' />)
