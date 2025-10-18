import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../text-input.stories'

describe('TextInput', () => {
  const {
    Default,
    WithHelperText,
    WithLeftIcon,
    WithError,
    Disabled,
    ReadOnly,
    Required,
  } = composeStories(stories)

  it('matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders default input', () => {
    render(<Default />)
    expect(
      screen.getByPlaceholderText('Enter your full name')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
  })

  it('renders with helper text', () => {
    render(<WithHelperText />)
    expect(
      screen.getByText('We will never share your email with anyone else')
    ).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    render(<WithLeftIcon />)
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument()
    expect(screen.getByTestId('left-content')).toBeInTheDocument()
  })

  it('shows error message and sets aria-invalid', () => {
    render(<WithError />)
    const input = screen.getByLabelText('Email Address')
    expect(
      screen.getByText('Please enter a valid email address')
    ).toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('hides helper text when error is present', () => {
    const { rerender } = render(<WithHelperText />)
    expect(
      screen.getByText('We will never share your email with anyone else')
    ).toBeInTheDocument()

    rerender(<WithError />)
    expect(
      screen.queryByText('We will never share your email with anyone else')
    ).not.toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<Disabled />)
    const input = screen.getByLabelText('Account ID')
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute('disabled')
  })

  it('renders readOnly state', () => {
    render(<ReadOnly />)
    const input = screen.getByLabelText('Transaction ID')
    expect(input).toHaveAttribute('readOnly')
    expect(input).toHaveValue('TXN-98765-ABCD')
  })

  it('renders required field with asterisk', () => {
    render(<Required />)
    expect(screen.getByText('*')).toBeInTheDocument()
    const input = screen.getByPlaceholderText('Acme Inc.')
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('required')
  })

  it('generates automatic id when none provided', () => {
    render(<Default />)
    const input = screen.getByLabelText('Full Name')
    const label = screen.getByText('Full Name')
    const inputId = input.getAttribute('id')
    expect(inputId).toBeTruthy()
    expect(label).toHaveAttribute('for', inputId)
  })

  it('sets aria-describedby with helper text', () => {
    render(<WithHelperText />)
    const input = screen.getByLabelText('Email Address')
    const ariaDescribedBy = input.getAttribute('aria-describedby')
    expect(ariaDescribedBy).toBeTruthy()
    expect(document.getElementById(ariaDescribedBy!)).toHaveTextContent(
      'We will never share your email with anyone else'
    )
  })

  it('sets aria-describedby and aria-errormessage with error', () => {
    render(<WithError />)
    const input = screen.getByLabelText('Email Address')
    const ariaDescribedBy = input.getAttribute('aria-describedby')
    const ariaErrorMessage = input.getAttribute('aria-errormessage')
    expect(ariaDescribedBy).toBeTruthy()
    expect(ariaErrorMessage).toBeTruthy()
    expect(ariaDescribedBy).toBe(ariaErrorMessage)
    expect(document.getElementById(ariaErrorMessage!)).toHaveTextContent(
      'Please enter a valid email address'
    )
  })
})
