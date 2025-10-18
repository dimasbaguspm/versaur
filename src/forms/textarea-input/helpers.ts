import { cva } from '@/utils/variants'
import type React from 'react'

export const textAreaInputVariants = cva(
  'block w-full rounded-md border bg-white text-foreground transition-colors focus:outline-none overflow-y-auto whitespace-pre-wrap break-words',
  {
    variants: {
      state: {
        default:
          'border-primary/30 focus:ring-2 focus:ring-primary/20 focus:border-primary',
        error:
          'border-danger bg-danger/5 focus:ring-2 focus:border-danger focus:ring-danger/20',
        disabled:
          'opacity-50 pointer-events-none bg-gray-50 border-gray-300 cursor-not-allowed',
        readOnly:
          'bg-gray-50 cursor-default focus:ring-0 border-gray-300 focus:border-gray-300',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
)

/**
 * Get the appropriate state for the textarea based on props
 */
export const getTextAreaState = (
  disabled?: boolean,
  readOnly?: boolean,
  hasError?: boolean
): 'default' | 'error' | 'disabled' | 'readOnly' => {
  if (disabled) return 'disabled'
  if (readOnly) return 'readOnly'
  if (hasError) return 'error'
  return 'default'
}

/**
 * Handle paste event to insert plain text only
 */
export const handlePlainTextPaste = (
  e: React.ClipboardEvent<HTMLDivElement>,
  disabled?: boolean,
  readOnly?: boolean
) => {
  // Prevent paste when disabled or readOnly
  if (disabled || readOnly) {
    e.preventDefault()
    return
  }

  // Paste as plain text using modern API
  e.preventDefault()
  const text = e.clipboardData.getData('text/plain')

  // Use the modern Selection API instead of deprecated execCommand
  const selection = window.getSelection()
  if (!selection || !selection.rangeCount) return

  // Delete the current selection if any
  selection.deleteFromDocument()

  // Insert the plain text at the current position
  const range = selection.getRangeAt(0)
  const textNode = document.createTextNode(text)
  range.insertNode(textNode)

  // Move cursor to end of inserted text
  range.setStartAfter(textNode)
  range.setEndAfter(textNode)
  selection.removeAllRanges()
  selection.addRange(range)

  // Trigger input event to update state
  const inputEvent = new Event('input', { bubbles: true })
  e.currentTarget.dispatchEvent(inputEvent)
}
