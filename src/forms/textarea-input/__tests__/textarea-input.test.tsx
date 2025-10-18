import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import * as stories from '../textarea-input.stories'

const { Default, WithError, Disabled, ReadOnly, WithDefaultValue } =
  composeStories(stories)

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

  describe('Custom Row Height', () => {
    it('applies custom row height calculation', () => {
      const { container } = render(<Default row={10} />)
      const textbox = container.querySelector('[role="textbox"]')
      // Formula: row * 1.5 + 1 = 10 * 1.5 + 1 = 16rem
      expect(textbox).toHaveStyle({ minHeight: '16rem' })
    })

    it('uses default height calculation when row prop is not provided', () => {
      const { container } = render(<Default />)
      const textbox = container.querySelector('[role="textbox"]')
      // Formula: 3 * 1.5 + 1 = 5.5rem (default row is 3)
      expect(textbox).toHaveStyle({ minHeight: '5.5rem' })
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
})
