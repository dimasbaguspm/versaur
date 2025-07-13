import { forwardRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { avatarVariants, avatarImageVariants } from './helpers'
import type { AvatarProps, AvatarImageProps } from './types'

/**
 * Avatar component - provides the container and fallback display
 * Shows fallback content (children) when no image is provided or image fails to load
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      shape = 'circle',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ variant, size, shape }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * AvatarImage component - displays an image with fallback behavior
 * Automatically hides when image fails to load, allowing Avatar fallback content to show
 * Shape is inherited from the parent Avatar container through CSS overflow
 * Error state is reset when src changes to allow new images to load
 */
export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ src, alt, className, onError, ...props }, ref) => {
    const [hasError, setHasError] = useState(false)

    // Reset error state when src changes to allow new image to load
    useEffect(() => {
      setHasError(false)
    }, [src])

    const handleError = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHasError(true)
        onError?.(event)
      },
      [onError]
    )

    // Don't render if there's an error - this allows the Avatar's children to show as fallback
    if (hasError) {
      return null
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(avatarImageVariants(), className)}
        onError={handleError}
        {...props}
      />
    )
  }
)
