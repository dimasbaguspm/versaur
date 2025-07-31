import { forwardRef } from 'react'
import type { BaseImageProps } from './types'
import { useImage } from './use-image'
import { BaseImageSkeleton, BaseImageFallback } from './base-image.atoms'
import { imageVariants } from './helpers'
import { cn } from '@/utils'

/**
 * Image component that aligns with standard HTML <img> behavior, with required shape, skeleton loading, and cva variants
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 */
export const BaseImage = forwardRef<HTMLImageElement, BaseImageProps>(
  (
    {
      src,
      alt,
      onLoad,
      onError,
      width,
      height,
      loading = 'lazy',
      position = 'cover',
      size = 'auto',
      shape,
      className,
      ...rest
    },
    ref
  ) => {
    const { loaded, errored, handleLoad, handleError } = useImage({
      src,
    })
    const atomWidth = typeof width === 'number' ? width : Number(width)
    const atomHeight = typeof height === 'number' ? height : Number(height)

    if (!loaded && !errored) {
      return (
        <BaseImageSkeleton
          shape={shape}
          width={atomWidth}
          height={atomHeight}
        />
      )
    }

    if (errored) {
      return (
        <BaseImageFallback
          shape={shape}
          alt={alt}
          width={atomWidth}
          height={atomHeight}
        />
      )
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={atomWidth}
        height={atomHeight}
        loading={loading}
        className={cn(
          imageVariants({
            position,
            size,
            shape,
          }),
          className
        )}
        onLoad={e => {
          handleLoad()
          onLoad?.(e)
        }}
        onError={e => {
          handleError()
          onError?.(e)
        }}
        {...rest}
      />
    )
  }
)
