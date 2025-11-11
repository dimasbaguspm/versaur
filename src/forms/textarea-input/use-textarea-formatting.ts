import { useState, useEffect } from 'react'
import type { FormatType } from './types'
import { applyFormat, getFormatState } from './helpers'

/**
 * Custom hook for managing rich text formatting in TextAreaInput
 *
 * Handles toolbar state, format application, and selection tracking
 */
export const useTextAreaFormatting = (
  enabled: boolean,
  contentRef: React.RefObject<HTMLDivElement | null>
) => {
  const [formatState, setFormatState] = useState(getFormatState())

  /**
   * Update format state based on current selection
   */
  const updateFormatState = () => {
    const newFormatState = getFormatState()
    setFormatState(newFormatState)
  }

  /**
   * Handle format button click
   */
  const handleFormatClick = (format: FormatType) => {
    // Focus the contentEditable div
    contentRef.current?.focus()

    // Special handling for link format
    if (format === 'link') {
      handleLinkFormat()
    } else {
      applyFormat(format)
    }

    // Update format state after applying format
    updateFormatState()

    // Trigger input event to update component value
    triggerInputEvent()
  }

  /**
   * Handle link format with prompts for URL and text
   */
  const handleLinkFormat = () => {
    const url = window.prompt('Enter URL:')
    if (!url) {
      // If URL prompt was cancelled/empty, remove link if possible
      applyFormat('link')
      return
    }

    const selection = window.getSelection()
    const hasSelection = !!selection && selection.toString().length > 0

    if (!hasSelection) {
      // No selection: prompt for link text
      const label = window.prompt('Enter link text (optional):') || url
      const safeUrl = url.replace(/"/g, '%22')
      document.execCommand(
        'insertHTML',
        false,
        `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`
      )
    } else {
      // Has selection: create link on selected text
      applyFormat('link', url)
    }
  }

  /**
   * Trigger input event on contentEditable to update component state
   */
  const triggerInputEvent = () => {
    if (contentRef.current) {
      const inputEvent = new Event('input', { bubbles: true })
      contentRef.current.dispatchEvent(inputEvent)
    }
  }

  /**
   * Handle selection change to update format state
   */
  const handleSelectionChange = () => {
    if (enabled && contentRef.current?.contains(document.activeElement)) {
      updateFormatState()
    }
  }

  // Listen to selection changes when formatting is enabled
  useEffect(() => {
    if (enabled) {
      document.addEventListener('selectionchange', handleSelectionChange)
      return () => {
        document.removeEventListener('selectionchange', handleSelectionChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  return {
    formatState,
    handleFormatClick,
  }
}
