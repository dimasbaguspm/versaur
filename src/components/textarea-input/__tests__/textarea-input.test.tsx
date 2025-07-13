import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import * as stories from '../textarea-input.stories'

const { Default, AutoResize, WithError, Disabled } = composeStories(stories)

describe('TextAreaInput', () => {
  describe('Basic Functionality', () => {
    it('renders with label and placeholder', () => {
      render(<Default />)
      expect(screen.getByLabelText('Description')).toBeInTheDocument()
      expect(
        screen.getByPlaceholderText('Enter your description here...')
      ).toBeInTheDocument()
    })

    it('accepts user input', async () => {
      const user = userEvent.setup()
      render(<Default />)
      const textarea = screen.getByRole('textbox')
      await user.type(textarea, 'This is test content')
      expect(textarea).toHaveValue('This is test content')
    })
  })

  describe('Auto-resize Functionality', () => {
    it('applies resize-none class when fieldSizing is content', () => {
      render(<AutoResize />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize-none')
    })

    it('applies resize-y class when fieldSizing is fixed', () => {
      render(<Default />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize-y')
    })
  })

  describe('Error States', () => {
    it('displays error message when error prop is provided', () => {
      render(<WithError />)
      const errorMessage = screen.getByRole('alert')
      expect(errorMessage).toBeInTheDocument()
    })
  })

  describe('Disabled State', () => {
    it('disables textarea when disabled prop is true', () => {
      render(<Disabled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeDisabled()
    })
  })
})
