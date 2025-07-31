import { forwardRef } from 'react'
import { BaseImage } from './base-image'
import type { BaseImageProps } from './types'

/**
 * Circle-shaped Image component for Versaur
 * Inherits all behavior from BaseImage, sets shape to 'circle'
 */
export const ImageCircle = forwardRef<
  HTMLImageElement,
  Omit<BaseImageProps, 'shape'>
>((props, ref) => <BaseImage ref={ref} {...props} shape='circle' />)
