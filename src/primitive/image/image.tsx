import { forwardRef } from 'react'
import type { ImageProps } from './types'
import { useImage } from './use-image'
import { SkeletonAtom, FallbackAtom } from './image.atoms'
import { imageVariants } from './helpers'

/**
 * Image component that aligns with standard HTML <img> behavior, with optional skeleton loading state and cva variants
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
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
      className,
      ...rest
    },
    ref
  ) => {
    const { loaded, errored, naturalSize, handleLoad, handleError } = useImage({
      src,
    })

    // Prefer explicit width/height, fallback to natural size if available

    const atomWidth =
      typeof width === 'number' ? width : Number(width) || naturalSize.width

    const atomHeight =
      typeof height === 'number' ? height : Number(height) || naturalSize.height

    if (!loaded && !errored) {
      return <SkeletonAtom width={atomWidth} height={atomHeight} />
    }

    if (errored) {
      return <FallbackAtom alt={alt} width={atomWidth} height={atomHeight} />
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={imageVariants({ position, size, className })}
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
