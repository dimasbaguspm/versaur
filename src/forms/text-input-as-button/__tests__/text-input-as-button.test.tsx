import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../text-input-as-button.stories'

describe('TextInputAsButton', () => {
  const {
    Default,
    WithValue,
    WithHelperText,
    WithLeftIcon,
    WithError,
    Disabled,
    Required,
    WithHiddenInput,
    WithForeignKeyValue,
    WithArrayValue,
    WithArrayValueAutoDisplay,
    WithObjectValue,
    WithNumberValue,
    WithBooleanValue,
  } = composeStories(stories)

  it('matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders button with placeholder', () => {
    render(<Default />)
    const button = screen.getByRole('button', { name: /select date/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click to select a date')
  })

  it('renders with value instead of placeholder', () => {
    render(<WithValue />)
    const button = screen.getByRole('button', { name: /selected date/i })
    expect(button).toHaveTextContent('January 15, 2025')
  })

  it('renders with helper text', () => {
    render(<WithHelperText />)
    expect(
      screen.getByText('Choose a date within the next 30 days')
    ).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    render(<WithLeftIcon />)
    expect(screen.getByTestId('left-content')).toBeInTheDocument()
  })

  it('shows error message and sets aria-invalid', () => {
    render(<WithError />)
    const button = screen.getByRole('button', { name: /required date/i })
    const errorMessage = screen.getByText('Please select a date')
    expect(errorMessage).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-invalid', 'true')
    expect(button).toHaveAttribute('aria-describedby', errorMessage.id)
  })

  it('hides helper text when error is present', () => {
    const { rerender } = render(<WithHelperText />)
    expect(
      screen.getByText('Choose a date within the next 30 days')
    ).toBeInTheDocument()

    rerender(<WithError />)
    expect(
      screen.queryByText('Choose a date within the next 30 days')
    ).not.toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<Disabled />)
    const button = screen.getByRole('button', { name: /locked date/i })
    expect(button).toBeDisabled()
  })

  it('renders required field with asterisk and aria-required', () => {
    render(<Required />)
    expect(screen.getByText('*')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /event date/i })
    expect(button).toHaveAttribute('aria-required', 'true')
  })

  it('generates automatic id and links label correctly', () => {
    render(<Default />)
    const button = screen.getByRole('button', { name: /select date/i })
    const buttonId = button.getAttribute('id')
    expect(buttonId).toBeTruthy()
  })

  it('sets aria-describedby with helper text', () => {
    render(<WithHelperText />)
    const button = screen.getByRole('button', { name: /appointment date/i })
    const ariaDescribedBy = button.getAttribute('aria-describedby')
    expect(ariaDescribedBy).toBeTruthy()
    const helperElement = document.getElementById(ariaDescribedBy!)
    expect(helperElement).toHaveTextContent(
      'Choose a date within the next 30 days'
    )
  })

  it('sets aria-describedby and aria-errormessage with error', () => {
    render(<WithError />)
    const button = screen.getByRole('button', { name: /required date/i })
    const ariaDescribedBy = button.getAttribute('aria-describedby')
    const ariaErrorMessage = button.getAttribute('aria-errormessage')
    expect(ariaDescribedBy).toBeTruthy()
    expect(ariaErrorMessage).toBeTruthy()
    expect(ariaDescribedBy).toBe(ariaErrorMessage)
    const errorElement = document.getElementById(ariaErrorMessage!)
    expect(errorElement).toHaveTextContent('Please select a date')
    expect(errorElement).toHaveAttribute('role', 'alert')
  })

  it('renders hidden input when name prop is provided', () => {
    render(<WithHiddenInput />)
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toBeInTheDocument()
    expect(hiddenInput).toHaveAttribute('type', 'hidden')
    expect(hiddenInput).toHaveAttribute('name', 'bookingDate')
    expect(hiddenInput).toHaveAttribute('readonly')
    expect(hiddenInput).toHaveValue('2025-01-15')
  })

  it('uses displayValue when both value and displayValue are provided', () => {
    render(<WithHiddenInput />)
    const button = screen.getByRole('button', { name: /booking date/i })
    expect(button).toHaveTextContent('January 15, 2025')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue('2025-01-15')
  })

  it('handles foreign key relationship with number value and display value', () => {
    render(<WithForeignKeyValue />)
    const button = screen.getByRole('button', { name: /assigned user/i })
    expect(button).toHaveTextContent('John Doe')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue('12345')
  })

  it('handles array value with custom display value', () => {
    render(<WithArrayValue />)
    const button = screen.getByRole('button', { name: /selected tags/i })
    expect(button).toHaveTextContent('React, TypeScript, Tailwind (3 selected)')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue(
      JSON.stringify(['react', 'typescript', 'tailwind'])
    )
  })

  it('auto-displays array value when no displayValue is provided', () => {
    render(<WithArrayValueAutoDisplay />)
    const button = screen.getByRole('button', { name: /categories/i })
    expect(button).toHaveTextContent('frontend, design, ui')
  })

  it('handles object value with custom display value', () => {
    render(<WithObjectValue />)
    const button = screen.getByRole('button', { name: /location/i })
    expect(button).toHaveTextContent('New York City, NY')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue(
      JSON.stringify({ lat: 40.7128, lng: -74.006 })
    )
  })

  it('handles number value', () => {
    render(<WithNumberValue />)
    const button = screen.getByRole('button', { name: /quantity/i })
    expect(button).toHaveTextContent('42')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue('42')
  })

  it('handles boolean value with display value', () => {
    render(<WithBooleanValue />)
    const button = screen.getByRole('button', { name: /active status/i })
    expect(button).toHaveTextContent('Active')
    const hiddenInput = screen.getByTestId('hidden-input')
    expect(hiddenInput).toHaveValue('true')
  })

  it('does not render hidden input when name prop is not provided', () => {
    render(<Default />)
    expect(screen.queryByTestId('hidden-input')).not.toBeInTheDocument()
  })

  it('applies placeholder styling when no value', () => {
    render(<Default />)
    const button = screen.getByRole('button', { name: /select date/i })
    expect(button).toHaveClass('text-gray-400')
  })

  it('does not apply placeholder styling when value exists', () => {
    render(<WithValue />)
    const button = screen.getByRole('button', { name: /selected date/i })
    expect(button).not.toHaveClass('text-gray-400')
  })

  it('does not set aria-invalid when no error', () => {
    render(<Default />)
    const button = screen.getByRole('button', { name: /select date/i })
    expect(button).not.toHaveAttribute('aria-invalid')
  })

  it('does not set aria-required when not required', () => {
    render(<Default />)
    const button = screen.getByRole('button', { name: /select date/i })
    expect(button).not.toHaveAttribute('aria-required')
  })
})
