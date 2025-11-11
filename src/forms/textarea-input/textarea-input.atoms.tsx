import React from 'react'
import { cn } from '@/utils/cn'
import { ButtonIcon } from '@/primitive/button-icon'
import type { FormatType } from './types'
import type { IconProps } from '@/primitive/icon'

/**
 * Props for the TextAreaInputToolbarButton component
 */
export interface TextAreaInputToolbarButtonProps {
  /**
   * The format type this button applies
   */
  format: FormatType
  /**
   * Whether this format is currently active
   */
  isActive: boolean
  /**
   * Icon component to render
   */
  icon: IconProps['as']
  /**
   * Accessible label for the button
   */
  label: string
  /**
   * Whether the button is disabled
   */
  disabled?: boolean
  /**
   * Click handler
   */
  onClick: (format: FormatType) => void
}

/**
 * Individual toolbar button for formatting actions
 */
export const TextAreaInputToolbarButton = React.forwardRef<
  HTMLButtonElement,
  TextAreaInputToolbarButtonProps
>(({ format, isActive, icon, label, disabled, onClick }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() // Prevent losing focus from contentEditable
    onClick(format)
  }

  return (
    <ButtonIcon
      ref={ref}
      as={icon}
      aria-label={label}
      aria-pressed={isActive}
      variant={isActive ? 'primary' : 'ghost'}
      size='sm'
      shape='rounded'
      disabled={disabled}
      onClick={handleClick}
      onMouseDown={e => e.preventDefault()} // Prevent focus loss
      className={cn(
        'transition-all w-8 h-8 flex items-center justify-center',
        isActive && 'bg-primary text-white',
        !isActive && 'hover:bg-ghost-soft'
      )}
    />
  )
})

TextAreaInputToolbarButton.displayName = 'TextAreaInputToolbarButton'

/**
 * Props for the TextAreaInputToolbar component
 */
export interface TextAreaInputToolbarProps {
  /**
   * Child toolbar buttons
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Container for formatting toolbar buttons
 */
export const TextAreaInputToolbar = React.forwardRef<
  HTMLDivElement,
  TextAreaInputToolbarProps
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      role='toolbar'
      aria-label='Text formatting toolbar'
      className={cn(
        // allow wrapping on small screens, consistent gaps and padding
        'flex flex-wrap items-center gap-2 p-2 border-b border-border bg-neutral-soft rounded-t-md',
        className
      )}
    >
      {children}
    </div>
  )
})

TextAreaInputToolbar.displayName = 'TextAreaInputToolbar'
