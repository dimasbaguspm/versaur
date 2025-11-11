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
 * Sync contentEditable content with value prop
 */
export const syncContentWithValue = (
  element: HTMLDivElement | null,
  value: string,
  isRichText: boolean
) => {
  if (!element) return

  const currentContent = isRichText ? element.innerHTML : element.textContent

  if (currentContent !== value) {
    if (isRichText) {
      element.innerHTML = value
    } else {
      element.textContent = value
    }
  }
}

/**
 * Get value from contentEditable element
 */
export const getContentValue = (
  element: HTMLDivElement,
  isRichText: boolean
): string => {
  return isRichText ? element.innerHTML : element.textContent || ''
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

/**
 * Apply formatting to the current selection
 */
export const applyFormat = (format: string, value?: string) => {
  // Use document.execCommand for formatting
  // Note: While deprecated, it's still the most reliable cross-browser solution for contentEditable
  // Modern alternatives like Selection API don't provide the same level of formatting support
  switch (format) {
    case 'bold':
      document.execCommand('bold', false)
      break
    case 'italic':
      document.execCommand('italic', false)
      break
    case 'underline':
      document.execCommand('underline', false)
      break
    case 'strikethrough':
      document.execCommand('strikeThrough', false)
      break
    case 'h1':
      document.execCommand('formatBlock', false, '<h1>')
      break
    case 'h2':
      document.execCommand('formatBlock', false, '<h2>')
      break
    case 'h3':
      document.execCommand('formatBlock', false, '<h3>')
      break
    case 'orderedList':
      document.execCommand('insertOrderedList', false)
      break
    case 'unorderedList':
      document.execCommand('insertUnorderedList', false)
      break
    case 'link':
      // If a value (URL) is provided, create or update the link.
      // If no value is provided, unlink the selection.
      if (value) {
        // Use createLink when there is a selection; otherwise insert an anchor element.
        const selection = window.getSelection()
        const hasSelection = !!selection && selection.toString().length > 0
        if (hasSelection) {
          document.execCommand('createLink', false, value)
        } else {
          // Insert a link with the URL as the text when nothing is selected
          const safeUrl = value.replace(/"/g, '%22')
          document.execCommand(
            'insertHTML',
            false,
            `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${value}</a>`
          )
        }
      } else {
        document.execCommand('unlink', false)
      }
      break
  }
}

/**
 * Check if a format is currently active in the selection
 */
export const isFormatActive = (format: string): boolean => {
  switch (format) {
    case 'bold':
      return document.queryCommandState('bold')
    case 'italic':
      return document.queryCommandState('italic')
    case 'underline':
      return document.queryCommandState('underline')
    case 'strikethrough':
      return document.queryCommandState('strikeThrough')
    case 'h1': {
      const v = document.queryCommandValue('formatBlock') || ''
      // normalize values like '<h1>' or 'h1'
      const norm = String(v)
        .replace(/<|>|\//g, '')
        .toLowerCase()
      return norm === 'h1'
    }
    case 'h2': {
      const v = document.queryCommandValue('formatBlock') || ''
      const norm = String(v)
        .replace(/<|>|\//g, '')
        .toLowerCase()
      return norm === 'h2'
    }
    case 'h3': {
      const v = document.queryCommandValue('formatBlock') || ''
      const norm = String(v)
        .replace(/<|>|\//g, '')
        .toLowerCase()
      return norm === 'h3'
    }
    case 'orderedList':
      return document.queryCommandState('insertOrderedList')
    case 'unorderedList':
      return document.queryCommandState('insertUnorderedList')
    case 'link':
      return document.queryCommandState('createLink')
    default:
      return false
  }
}

/**
 * Get the current format state for all formats
 */
export const getFormatState = () => ({
  bold: isFormatActive('bold'),
  italic: isFormatActive('italic'),
  underline: isFormatActive('underline'),
  strikethrough: isFormatActive('strikethrough'),
  h1: isFormatActive('h1'),
  h2: isFormatActive('h2'),
  h3: isFormatActive('h3'),
  orderedList: isFormatActive('orderedList'),
  unorderedList: isFormatActive('unorderedList'),
  link: isFormatActive('link'),
})
