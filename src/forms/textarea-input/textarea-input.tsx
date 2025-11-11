import React from 'react'
import { cn } from '@/utils/cn'
import {
  textAreaInputVariants,
  getTextAreaState,
  handlePlainTextPaste,
  syncContentWithValue,
  getContentValue,
} from './helpers'
import type { TextAreaInputProps, FormatType } from './types'
import {
  TextAreaInputToolbar,
  TextAreaInputToolbarButton,
} from './textarea-input.atoms'
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ListIcon,
  ListOrderedIcon,
  LinkIcon,
} from 'lucide-react'
import { formattedContentStyles } from '@/primitive/formatted-text'
import { useTextAreaFormatting } from './use-textarea-formatting'

/**
 * TextAreaInput component for Versaur UI
 *
 * Uses contentEditable div for robust multi-line text input with better control
 * Provides error states, disabled, and readOnly support
 * Supports rich text formatting with an optional toolbar
 * Follows browser standards and accessibility best practices
 */
export const TextAreaInput = React.forwardRef<
  HTMLDivElement,
  TextAreaInputProps
>(
  (
    {
      label,
      helperText,
      error,
      className,
      disabled,
      readOnly,
      id,
      value,
      defaultValue,
      onChange,
      placeholder,
      name,
      row = 3,
      required,
      onBlur,
      onFocus,
      onKeyDown,
      showToolbar = false,
      allowedFormats,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)
    const internalRef = React.useRef<HTMLDivElement>(null)
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    // Use formatting hook when toolbar is enabled
    const { formatState, handleFormatClick } = useTextAreaFormatting(
      showToolbar,
      internalRef
    )

    // Combine refs
    React.useImperativeHandle(ref, () => internalRef.current!)

    // Sync contentEditable with value prop
    React.useEffect(() => {
      syncContentWithValue(internalRef.current, currentValue, showToolbar)
    }, [currentValue, showToolbar])

    // Get the appropriate state variant
    const state = getTextAreaState(readOnly, hasError)

    // Handle placeholder visibility
    const showPlaceholder = !currentValue && placeholder

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
      const newValue = getContentValue(e.currentTarget, showToolbar)

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      // Prevent input when disabled or readOnly
      if (disabled || readOnly) {
        e.preventDefault()
        return
      }

      onKeyDown?.(e)
    }

    const handleLabelClick = () => {
      internalRef.current?.focus()
    }

    // Determine which formats to show
    const availableFormats: Array<{
      format: FormatType
      icon: typeof BoldIcon
      label: string
    }> = [
      { format: 'bold', icon: BoldIcon, label: 'Bold' },
      { format: 'italic', icon: ItalicIcon, label: 'Italic' },
      { format: 'underline', icon: UnderlineIcon, label: 'Underline' },
      {
        format: 'strikethrough',
        icon: StrikethroughIcon,
        label: 'Strikethrough',
      },
      { format: 'h1', icon: Heading1Icon, label: 'Heading 1' },
      { format: 'h2', icon: Heading2Icon, label: 'Heading 2' },
      { format: 'h3', icon: Heading3Icon, label: 'Heading 3' },
      { format: 'orderedList', icon: ListOrderedIcon, label: 'Ordered List' },
      { format: 'unorderedList', icon: ListIcon, label: 'Unordered List' },
      { format: 'link', icon: LinkIcon, label: 'Link' },
    ]

    const displayedFormats = allowedFormats
      ? availableFormats.filter(f => allowedFormats.includes(f.format))
      : availableFormats

    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className='block text-sm font-medium text-foreground mb-2 cursor-pointer'
            onClick={handleLabelClick}
          >
            {label}
            {required && (
              <span className='text-danger ml-1' aria-label='required'>
                *
              </span>
            )}
          </label>
        )}
        <div className={cn('relative w-full', className)}>
          {showToolbar && (
            <TextAreaInputToolbar>
              {displayedFormats.map(({ format, icon, label: formatLabel }) => (
                <TextAreaInputToolbarButton
                  key={format}
                  format={format}
                  icon={icon}
                  label={formatLabel}
                  isActive={formatState[format]}
                  disabled={disabled || readOnly}
                  onClick={handleFormatClick}
                />
              ))}
            </TextAreaInputToolbar>
          )}
          <div
            ref={internalRef}
            id={inputId}
            role='textbox'
            aria-multiline='true'
            aria-invalid={hasError}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            aria-required={required}
            aria-label={typeof label === 'string' ? label : undefined}
            contentEditable={!disabled && !readOnly}
            data-name={name}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onPaste={e =>
              !showToolbar && handlePlainTextPaste(e, disabled, readOnly)
            }
            onBlur={onBlur}
            onFocus={onFocus}
            suppressContentEditableWarning
            style={{
              minHeight: `${row * 1.5 + 1}rem`,
              maxHeight: `${row * 1.5 + 1}rem`,
            }}
            className={cn(
              textAreaInputVariants({ state }),
              'px-3 py-2',
              showToolbar && 'rounded-t-none',
              showPlaceholder &&
                'empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400',
              // Apply shared formatting styles when toolbar is enabled
              showToolbar && formattedContentStyles
            )}
            data-placeholder={placeholder}
            {...props}
          />
        </div>
        {hasError && (
          <div className='mt-1 text-sm text-danger' role='alert'>
            {error}
          </div>
        )}
        {!hasError && helperText && (
          <div className='mt-1 text-sm text-gray-600'>{helperText}</div>
        )}
      </div>
    )
  }
)

TextAreaInput.displayName = 'TextAreaInput'
