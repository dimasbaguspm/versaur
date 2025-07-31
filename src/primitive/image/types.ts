import type { SkeletonProps } from '@/feedbacks'
import type { ImgHTMLAttributes } from 'react'

export interface BaseImageSkeletonProps
  extends Omit<SkeletonProps, 'shape' | 'size'> {
  /**
   * Shape of the skeleton: 'square', 'rectangle', or 'circle'
   */
  shape?: BaseImageProps['shape']
  /**
   * Predefined size variant for the skeleton (see helpers.ts)
   */
  size?: BaseImageProps['size']

  width?: number | string
  height?: number | string
}

export interface BaseImageFallbackProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /**
   * Alternative text for the fallback image
   */
  alt: string

  shape?: BaseImageProps['shape']
  size?: BaseImageProps['size']
}

/**
 * ImageProps extends standard HTML <img> attributes with required src and alt, and supports position/size variants
 */
export interface BaseImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for the image
   */
  alt: string
  /**
   * Image object-fit/position variant (see helpers.ts)
   */
  position?:
    | 'cover'
    | 'contain'
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'none'
  /**
   * Predefined image size variant (see helpers.ts)
   */
  size?: 'sm' | 'md' | 'lg' | 'full' | 'auto'
  /**
   * Shape of the image: 'square', 'rectangle', or 'circle'
   * Required for all image components
   */
  shape: 'square' | 'rectangle' | 'circle'
}
