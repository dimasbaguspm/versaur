import { forwardRef, type ElementType } from 'react'
import { cn } from '@/utils/cn'
import { textVariants } from './helpers'
import type { TextProps } from './types'

/**
 * Text component for Versaur UI
 * Provides semantic typography, color, underline, and capitalization support
 * @example <Text as="h1" color="primary" hasUnderline isCapitalize>bar</Text>
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = 'span',
      color = 'ghost',
      hasUnderline = false,
      isCapitalize = false,
      align = 'left',
      italic = false,
      clamp = 'none',
      ellipsis = false,
      fontSize,
      fontWeight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const allowedTags = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'span',
      'label',
    ] as ElementType[]
    const tag = allowedTags.includes(Component)
      ? (Component as (typeof allowedTags)[number])
      : 'span'
    // Compose font size and weight classes if provided
    const fontSizeClass = fontSize ? `text-${fontSize}` : ''
    const fontWeightClass = fontWeight ? `font-${fontWeight}` : ''
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({
            color,
            hasUnderline,
            isCapitalize,
            align,
            italic,
            clamp,
            ellipsis,
            // @ts-expect-error - `as` is not a valid variant
            as: tag,
          }),
          fontSizeClass,
          fontWeightClass,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
