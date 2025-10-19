import { cva } from '@/utils/variants'
import type React from 'react'

export const textAreaInputVariants = cva(
  'block w-full rounded-md border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-50 overflow-y-auto whitespace-pre-wrap break-words',
  {
    variants: {
      state: {
        default:
          'border-primary/30 text-foreground focus:border-primary focus:ring-primary/20',
        error:
          'border-danger bg-danger/5 text-foreground focus:border-danger focus:ring-danger/20',
        readOnly:
          'border-gray-300 bg-gray-50 text-foreground cursor-default focus:ring-0 focus:border-gray-300',
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
  readOnly?: boolean,
  hasError?: boolean
): 'default' | 'error' | 'readOnly' => {
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
