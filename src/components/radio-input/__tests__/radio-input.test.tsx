import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import * as stories from '../radio-input.stories'

const { Default, WithDescriptions, WithError, Disabled } =
  composeStories(stories)

describe('RadioInput', () => {
  it('renders default story correctly', () => {
    render(<Default />)

    expect(screen.getByText('Payment Method')).toBeInTheDocument()
    expect(
      screen.getByText('Choose your preferred payment method')
    ).toBeInTheDocument()
    expect(screen.getByDisplayValue('credit-card')).toBeInTheDocument()
    expect(screen.getByDisplayValue('paypal')).toBeInTheDocument()
    expect(screen.getByDisplayValue('bank-transfer')).toBeInTheDocument()
  })

  it('renders with descriptions', () => {
    render(<WithDescriptions />)

    expect(screen.getByText('Subscription Plan')).toBeInTheDocument()
    expect(
      screen.getByText('Perfect for individuals getting started')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Great for growing teams and businesses')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Advanced features for large organizations')
    ).toBeInTheDocument()
  })

  it('displays error message when error is provided', () => {
    render(<WithError />)

    expect(
      screen.getByText('Please select an option to continue')
    ).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('disables all options when disabled prop is true', () => {
    render(<Disabled />)

    const radioOptions = screen.getAllByRole('radio')
    radioOptions.forEach(option => {
      expect(option).toBeDisabled()
    })
  })

  it('groups radio options with the same name attribute', () => {
    render(<Default />)

    const radioOptions = screen.getAllByRole('radio')
    radioOptions.forEach(option => {
      expect(option).toHaveAttribute('name', 'payment-method')
    })
  })

  it('renders radio inputs instead of checkboxes', () => {
    render(<Default />)

    const radioOptions = screen.getAllByRole('radio')
    expect(radioOptions).toHaveLength(3)

    // Ensure no checkboxes are present
    const checkboxes = screen.queryAllByRole('checkbox')
    expect(checkboxes).toHaveLength(0)
  })
})
