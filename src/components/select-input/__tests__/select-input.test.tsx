import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../select-input.stories'

const { Default, WithError, WithHelperText, Disabled } = composeStories(stories)

describe('SelectInput', () => {
  it('renders with label and options', () => {
    render(<Default />)

    expect(
      screen.getByLabelText('Choose your favorite color')
    ).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    render(<WithHelperText />)

    expect(
      screen.getByText('This will be used for shipping calculations')
    ).toBeInTheDocument()
  })

  it('displays error message in error state', () => {
    render(<WithError />)

    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(
      screen.getByText('Please select a plan to continue')
    ).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Disabled />)

    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
    expect(select).toHaveAttribute('aria-disabled', 'true')
  })

  it('generates unique ID when not provided', () => {
    render(<Default />)

    const select = screen.getByRole('combobox')
    const label = screen.getByText('Choose your favorite color')

    expect(select).toHaveAttribute('id')
    expect(label).toHaveAttribute('for', select.getAttribute('id'))
  })

  it('uses provided ID when given', () => {
    render(<Default {...Default.args} id='custom-select-id' />)

    const select = screen.getByRole('combobox')
    const label = screen.getByText('Choose your favorite color')

    expect(select).toHaveAttribute('id', 'custom-select-id')
    expect(label).toHaveAttribute('for', 'custom-select-id')
  })

  it('shows placeholder option when provided', () => {
    render(<Default />)

    expect(screen.getByText('Select a color...')).toBeInTheDocument()
  })

  it('renders all provided options', () => {
    render(<Default />)

    expect(screen.getByText('Red')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
    expect(screen.getByText('Green')).toBeInTheDocument()
    expect(screen.getByText('Purple')).toBeInTheDocument()
    expect(screen.getByText('Orange')).toBeInTheDocument()
  })

  it('does not show helper text when error is present', () => {
    render(
      <WithError {...WithError.args} helperText='This should not be visible' />
    )

    expect(
      screen.queryByText('This should not be visible')
    ).not.toBeInTheDocument()
    expect(
      screen.getByText('Please select a plan to continue')
    ).toBeInTheDocument()
  })
})
