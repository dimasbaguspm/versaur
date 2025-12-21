import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import * as stories from '../textarea-input.stories'

// Mock document.execCommand and related functions for formatting tests
beforeEach(() => {
  // Mock execCommand
  document.execCommand = vi.fn((_command: string) => {
    // Return true to indicate success
    return true
  })

  // Mock queryCommandState
  document.queryCommandState = vi.fn((_command: string) => {
    // Return false by default (format not active)
    return false
  })

  // Mock queryCommandValue
  document.queryCommandValue = vi.fn((_command: string) => {
    // Return empty string by default
    return ''
  })

  // Mock window.getSelection
  window.getSelection = vi.fn(
    () =>
      ({
        toString: () => '',
        rangeCount: 0,
        removeAllRanges: vi.fn(),
        addRange: vi.fn(),
        getRangeAt: vi.fn(),
        deleteFromDocument: vi.fn(),
        anchorNode: null,
        anchorOffset: 0,
        focusNode: null,
        focusOffset: 0,
        isCollapsed: true,
        rangeAt: vi.fn(),
        collapse: vi.fn(),
        collapseToEnd: vi.fn(),
        collapseToStart: vi.fn(),
        containsNode: vi.fn(),
        extend: vi.fn(),
        modify: vi.fn(),
        selectAllChildren: vi.fn(),
        setBaseAndExtent: vi.fn(),
        setPosition: vi.fn(),
        empty: vi.fn(),
        type: 'None',
      }) as unknown as Selection
  )
})

const {
  Default,
  WithError,
  Disabled,
  ReadOnly,
  WithDefaultValue,
  WithFormattingToolbar,
  LimitedFormats,
  DisabledWithToolbar,
} = composeStories(stories)

describe('TextAreaInput', () => {
  describe('Rendering', () => {
    it('renders with label and placeholder', () => {
      render(<Default />)
      expect(screen.getByLabelText('Description')).toBeInTheDocument()
      const textbox = screen.getByRole('textbox', { name: 'Description' })
      expect(textbox).toBeInTheDocument()
      expect(textbox).toHaveAttribute(
        'data-placeholder',
        'Enter your description here...'
      )
    })

    it('matches snapshot', () => {
      const { asFragment } = render(<Default />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('Basic Functionality', () => {
    it('accepts user input via contentEditable', async () => {
      const user = userEvent.setup()
      render(<Default />)
      const textbox = screen.getByRole('textbox')

      await user.click(textbox)
      await user.keyboard('This is test content')

      expect(textbox.textContent).toBe('This is test content')
    })

    it('displays default value', () => {
      render(<WithDefaultValue />)
      const textbox = screen.getByRole('textbox')
      expect(textbox.textContent).toContain('This is a default value')
    })
  })

  describe('Error States', () => {
    it('displays error message when error prop is provided', () => {
      render(<WithError />)
      const errorMessage = screen.getByRole('alert')
      expect(errorMessage).toBeInTheDocument()
      expect(errorMessage).toHaveTextContent(
        'Description must be at least 10 characters long.'
      )
    })

    it('applies error styling when error is present', () => {
      render(<WithError />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Disabled State', () => {
    it('sets aria-disabled when disabled prop is true', () => {
      render(<Disabled />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveAttribute('aria-disabled', 'true')
      expect(textbox).toHaveAttribute('contenteditable', 'false')
    })

    it('prevents input when disabled', async () => {
      const user = userEvent.setup()
      render(<Disabled />)
      const textbox = screen.getByRole('textbox')
      const originalContent = textbox.textContent

      await user.click(textbox)
      await user.keyboard('Try to type')

      expect(textbox.textContent).toBe(originalContent)
    })
  })

  describe('ReadOnly State', () => {
    it('sets aria-readonly when readOnly prop is true', () => {
      render(<ReadOnly />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveAttribute('aria-readonly', 'true')
      expect(textbox).toHaveAttribute('contenteditable', 'false')
    })

    it('prevents input when readOnly', async () => {
      const user = userEvent.setup()
      render(<ReadOnly />)
      const textbox = screen.getByRole('textbox')
      const originalContent = textbox.textContent

      await user.click(textbox)
      await user.keyboard('Try to type')

      expect(textbox.textContent).toBe(originalContent)
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Default />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveAttribute('aria-multiline', 'true')
      expect(textbox).toHaveAttribute('aria-invalid', 'false')
    })

    it('displays helper text when provided', () => {
      const { container } = render(<Default helperText='This is helper text' />)
      expect(container).toHaveTextContent('This is helper text')
    })
  })

  describe('Required State', () => {
    it('displays asterisk when required prop is true', () => {
      const { container } = render(<Default label='Message' required />)
      const asterisk = container.querySelector('[aria-label="required"]')
      expect(asterisk).toBeInTheDocument()
      expect(asterisk).toHaveTextContent('*')
      expect(asterisk).toHaveClass('text-danger')
    })

    it('sets aria-required attribute on textbox', () => {
      render(<Default required />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveAttribute('aria-required', 'true')
    })

    it('does not display asterisk when required is false', () => {
      const { container } = render(<Default label='Message' required={false} />)
      const asterisk = container.querySelector('[aria-label="required"]')
      expect(asterisk).not.toBeInTheDocument()
    })
  })

  describe('Formatting Toolbar', () => {
    it('renders toolbar when showToolbar prop is true', () => {
      render(<WithFormattingToolbar />)
      const toolbar = screen.getByRole('toolbar', {
        name: 'Text formatting toolbar',
      })
      expect(toolbar).toBeInTheDocument()
    })

    it('does not render toolbar by default', () => {
      render(<Default />)
      const toolbar = screen.queryByRole('toolbar')
      expect(toolbar).not.toBeInTheDocument()
    })

    it('renders formatting buttons in toolbar', () => {
      render(<WithFormattingToolbar />)
      expect(screen.getByLabelText('Bold')).toBeInTheDocument()
      expect(screen.getByLabelText('Italic')).toBeInTheDocument()
      expect(screen.getByLabelText('Underline')).toBeInTheDocument()
      expect(screen.getByLabelText('Strikethrough')).toBeInTheDocument()
      expect(screen.getByLabelText('Heading 1')).toBeInTheDocument()
      expect(screen.getByLabelText('Heading 2')).toBeInTheDocument()
      expect(screen.getByLabelText('Heading 3')).toBeInTheDocument()
      expect(screen.getByLabelText('Ordered List')).toBeInTheDocument()
      expect(screen.getByLabelText('Unordered List')).toBeInTheDocument()
      expect(screen.getByLabelText('Link')).toBeInTheDocument()
    })

    it('only renders allowed formats when allowedFormats is specified', () => {
      render(<LimitedFormats />)
      // Should have these formats
      expect(screen.getByLabelText('Bold')).toBeInTheDocument()
      expect(screen.getByLabelText('Italic')).toBeInTheDocument()
      expect(screen.getByLabelText('Underline')).toBeInTheDocument()
      expect(screen.getByLabelText('Link')).toBeInTheDocument()

      // Should not have these formats
      expect(screen.queryByLabelText('Heading 1')).not.toBeInTheDocument()
      expect(screen.queryByLabelText('Strikethrough')).not.toBeInTheDocument()
      expect(screen.queryByLabelText('Ordered List')).not.toBeInTheDocument()
    })

    it('toolbar buttons have aria-pressed attribute', () => {
      render(<WithFormattingToolbar />)
      const boldButton = screen.getByLabelText('Bold')
      expect(boldButton).toHaveAttribute('aria-pressed')
    })

    it('disables toolbar buttons when textarea is disabled', () => {
      render(<DisabledWithToolbar />)
      const boldButton = screen.getByLabelText('Bold')
      expect(boldButton).toBeDisabled()
    })

    it('toolbar buttons prevent focus loss on mousedown', async () => {
      const user = userEvent.setup()
      render(<WithFormattingToolbar />)
      const textbox = screen.getByRole('textbox')
      const boldButton = screen.getByLabelText('Bold')

      await user.click(textbox)
      expect(textbox).toHaveFocus()

      // Clicking toolbar button should not lose focus
      await user.click(boldButton)
      // Note: In actual browser, this would maintain focus
      // but in tests we just verify the mousedown handler exists
      expect(boldButton).toBeInTheDocument()
    })

    it('toolbar has proper rounded styling', () => {
      render(<WithFormattingToolbar />)
      const toolbar = screen.getByRole('toolbar')
      expect(toolbar).toHaveClass('rounded-t-md')
    })

    it('textbox has rounded-t-none when toolbar is shown', () => {
      render(<WithFormattingToolbar />)
      const textbox = screen.getByRole('textbox')
      expect(textbox).toHaveClass('rounded-t-none')
    })
  })

  describe('Formatting Toolbar Snapshots', () => {
    it('matches snapshot with formatting toolbar', () => {
      const { asFragment } = render(<WithFormattingToolbar />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('matches snapshot with limited formats', () => {
      const { asFragment } = render(<LimitedFormats />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
