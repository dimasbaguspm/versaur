import type { ImgHTMLAttributes } from 'react'

/**
 * ImageProps extends standard HTML <img> attributes with required src and alt, and supports position/size variants
 */
export interface ImageProps
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
}
