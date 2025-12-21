import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { textVariants, normalizeTextTag } from './helpers'
import type { TextProps } from './types'

/**
 * Text component for Versaur UI
 * Provides semantic typography, color, decoration, and transform support
 * @example <Text as="p" color="primary" decoration="underline" transform="capitalize">bar</Text>
 */
type TextRef =
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLQuoteElement
  | HTMLLabelElement
  | HTMLElement

export const Text = forwardRef<TextRef, TextProps>(
  (
    {
      as: Component = 'span',
      color = 'ghost',
      transform = 'none',
      decoration = 'none',
      align = 'left',
      italic = false,
      clamp = 'none',
      ellipsis = false,
      fontWeight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const tag = normalizeTextTag(Component)
    const Comp = Component as React.ElementType
    const fontWeightClass = fontWeight ? `font-${fontWeight}` : ''
    const ellipsisClass = ellipsis
      ? clamp === 'none'
        ? 'truncate'
        : 'overflow-hidden'
      : ''
    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          textVariants({
            color,
            transform,
            decoration,
            align,
            italic,
            clamp,
            as: tag,
          }),
          fontWeightClass,
          ellipsisClass,
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
