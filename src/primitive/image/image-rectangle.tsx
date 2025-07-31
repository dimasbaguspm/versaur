import { forwardRef } from 'react'
import { BaseImage } from './base-image'
import type { BaseImageProps } from './types'

/**
 * Rectangle-shaped Image component for Versaur
 * Inherits all behavior from BaseImage, sets shape to 'rectangle'
 */
export const ImageRectangle = forwardRef<
  HTMLImageElement,
  Omit<BaseImageProps, 'shape'>
>((props, ref) => <BaseImage ref={ref} {...props} shape='rectangle' />)
