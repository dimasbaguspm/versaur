// import { Skeleton } from '@/feedbacks/skeleton'
import { ImageOff } from 'lucide-react'
import type { BaseImageFallbackProps, BaseImageSkeletonProps } from './types'

/**
 * SkeletonAtom - displays a skeleton placeholder for the image
 */
import { imageAtomVariants } from './helpers'
import { Skeleton } from '@/feedbacks'
import { cn } from '@/utils'

export function BaseImageSkeleton({
  className,
  shape,
  size,
  height,
  width,
}: BaseImageSkeletonProps) {
  return (
    <Skeleton
      className={cn(imageAtomVariants({ shape, size }), className)}
      style={{ height, width }}
    />
  )
}

/**
 * FallbackAtom - displays a fallback UI when the image fails to load
 */
export function BaseImageFallback({
  alt,
  width,
  height,
  className,
  style,
  shape,
  size,
}: BaseImageFallbackProps) {
  return (
    <div
      className={imageAtomVariants({ shape, size, className })}
      style={{ width, height, ...style }}
      aria-label={alt}
      role='img'
    >
      <ImageOff
        size={32}
        style={{ opacity: 0.5, marginRight: 4 }}
        aria-hidden='true'
      />
      <span style={{ opacity: 0.7 }}>{alt}</span>
    </div>
  )
}
