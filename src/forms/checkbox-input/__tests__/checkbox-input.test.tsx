import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { describe, expect, it } from 'vitest'
import * as stories from '../checkbox-input.stories'

const { Default, WithDescriptions, WithError, Disabled } =
  composeStories(stories)

describe('CheckboxInput', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Basic functionality', () => {
    it('renders checkbox options correctly with fieldset/legend', () => {
      render(<Default />)

      const fieldset = screen.getByRole('group')
      expect(fieldset).toBeInTheDocument()
      expect(fieldset.tagName).toBe('FIELDSET')

      expect(screen.getByText('Choose your preferences')).toBeInTheDocument()
      expect(
        screen.getByLabelText('Newsletter subscription')
      ).toBeInTheDocument()
      expect(screen.getByLabelText('Marketing emails')).toBeInTheDocument()
      expect(screen.getByLabelText('Product updates')).toBeInTheDocument()
    })

    it('allows checking and unchecking options', async () => {
      const user = userEvent.setup()
      render(<Default />)

      const newsletter = screen.getByLabelText('Newsletter subscription')
      const marketing = screen.getByLabelText('Marketing emails')

      expect(newsletter).not.toBeChecked()
      expect(marketing).not.toBeChecked()

      await user.click(newsletter)
      expect(newsletter).toBeChecked()

      await user.click(marketing)
      expect(marketing).toBeChecked()

      await user.click(newsletter)
      expect(newsletter).not.toBeChecked()
      expect(marketing).toBeChecked()
    })
  })

  describe('With descriptions and required indicator', () => {
    it('renders option descriptions', () => {
      render(<WithDescriptions />)

      expect(
        screen.getByText('Help us improve by sharing anonymous usage data')
      ).toBeInTheDocument()
      expect(
        screen.getByText('Receive personalized offers and recommendations')
      ).toBeInTheDocument()
      expect(
        screen.getByText('Required for core functionality and security')
      ).toBeInTheDocument()
    })

    it('displays required asterisk', () => {
      render(<WithDescriptions />)

      const asterisk = screen.getByLabelText('required')
      expect(asterisk).toBeInTheDocument()
      expect(asterisk).toHaveClass('text-danger')
    })

    it('handles disabled options correctly', () => {
      render(<WithDescriptions />)

      const essentialCookies = screen.getByLabelText('Essential cookies')
      expect(essentialCookies).toBeDisabled()
      expect(essentialCookies).toBeChecked()
    })
  })

  describe('Error states', () => {
    it('displays error message', () => {
      render(<WithError />)

      const errorMessage = screen.getByRole('alert')
      expect(errorMessage).toHaveTextContent(
        'You must accept the terms to continue'
      )
    })

    it('error does not affect checkbox styling, only error text', () => {
      render(<WithError />)

      const checkbox = screen.getByLabelText(
        'I accept the terms and conditions'
      )
      // Checkbox should still have primary styling
      expect(checkbox).toHaveClass(/border-primary/)
      expect(checkbox).not.toHaveClass(/danger/)

      // Error text should be displayed
      expect(screen.getByRole('alert')).toHaveClass('text-danger')
    })
  })

  describe('Disabled state', () => {
    it('disables all options when fieldset is disabled', () => {
      render(<Disabled />)

      const option1 = screen.getByLabelText('Disabled option 1')
      const option2 = screen.getByLabelText('Disabled option 2')

      expect(option1).toBeDisabled()
      expect(option2).toBeDisabled()

      // Fieldset should be disabled
      const fieldset = screen.getByRole('group')
      expect(fieldset).toBeDisabled()
    })

    it('shows helper text for disabled state', () => {
      render(<Disabled />)

      expect(
        screen.getByText('These options are currently unavailable')
      ).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Default />)

      const checkboxes = screen.getAllByRole('checkbox')
      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAttribute('type', 'checkbox')
      })
    })

    it('uses fieldset and legend for proper semantics', () => {
      render(<Default />)

      const fieldset = screen.getByRole('group')
      expect(fieldset.tagName).toBe('FIELDSET')

      const legend = fieldset.querySelector('legend')
      expect(legend).toBeInTheDocument()
      expect(legend).toHaveTextContent('Choose your preferences')
    })

    it('associates labels with checkboxes correctly', () => {
      render(<Default />)

      const newsletter = screen.getByLabelText('Newsletter subscription')
      const marketing = screen.getByLabelText('Marketing emails')

      expect(newsletter).toBeInstanceOf(HTMLInputElement)
      expect(marketing).toBeInstanceOf(HTMLInputElement)
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<Default />)

      const newsletter = screen.getByLabelText('Newsletter subscription')

      await user.tab()
      expect(newsletter).toHaveFocus()

      await user.keyboard('[Space]')
      expect(newsletter).toBeChecked()
    })
  })
})
