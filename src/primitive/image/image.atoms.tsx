import { Skeleton } from '@/feedbacks/skeleton'
import { ImageOff } from 'lucide-react'

/**
 * SkeletonAtom - displays a skeleton placeholder for the image
 */
export function SkeletonAtom({
  width,
  height,
  className,
}: {
  width?: number
  height?: number
  className?: string
}) {
  return <Skeleton className={className} style={{ width, height }} />
}

/**
 * FallbackAtom - displays a fallback UI when the image fails to load
 */
export function FallbackAtom({
  alt,
  width,
  height,
  className,
  style,
}: {
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-neutral-soft, #f8f9fa)',
        color: 'var(--color-ghost, #3d405b)',
        fontSize: 16,
        borderRadius: 6,
        border: '1px solid var(--color-border, #e0e0e0)',
        ...style,
      }}
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
