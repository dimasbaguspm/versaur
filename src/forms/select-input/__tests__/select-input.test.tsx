import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../select-input.stories'

const { Default, WithError, WithHelperText, Required, Disabled, ReadOnly } =
  composeStories(stories)

describe('SelectInput', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with label and options', () => {
    render(<Default />)

    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    render(<WithHelperText />)

    expect(
      screen.getByText('Select your primary department')
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

  it('shows required asterisk when required prop is true', () => {
    render(<Required />)

    const asterisk = screen.getByLabelText('required')
    expect(asterisk).toBeInTheDocument()
    expect(asterisk).toHaveClass('text-danger')

    const select = screen.getByRole('combobox')
    expect(select).toBeRequired()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Disabled />)

    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('is disabled when readOnly prop is true', () => {
    render(<ReadOnly />)

    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('generates unique ID when not provided', () => {
    render(<Default />)

    const select = screen.getByRole('combobox')
    const label = screen.getByText('Country')

    expect(select).toHaveAttribute('id')
    expect(label).toHaveAttribute('for', select.getAttribute('id'))
  })

  it('uses provided ID when given', () => {
    render(<Default id='custom-select-id' />)

    const select = screen.getByRole('combobox')
    const label = screen.getByText('Country')

    expect(select).toHaveAttribute('id', 'custom-select-id')
    expect(label).toHaveAttribute('for', 'custom-select-id')
  })

  it('shows placeholder option when provided', () => {
    render(<Default />)

    expect(screen.getByText('Select a country')).toBeInTheDocument()
  })

  it('renders all provided options using SelectInput.Option', () => {
    render(<Default />)

    expect(screen.getByText('United States')).toBeInTheDocument()
    expect(screen.getByText('Canada')).toBeInTheDocument()
    expect(screen.getByText('United Kingdom')).toBeInTheDocument()
    expect(screen.getByText('Germany')).toBeInTheDocument()
    expect(screen.getByText('France')).toBeInTheDocument()
  })

  it('does not show helper text when error is present', () => {
    render(<WithError helperText='This should not be visible' />)

    expect(
      screen.queryByText('This should not be visible')
    ).not.toBeInTheDocument()
    expect(
      screen.getByText('Please select a plan to continue')
    ).toBeInTheDocument()
  })

  it('sets aria-describedby when helper text is present', () => {
    render(<WithHelperText />)

    const select = screen.getByRole('combobox')
    const helperId = `${select.id}-helper`
    expect(select).toHaveAttribute('aria-describedby', helperId)
  })

  it('sets aria-describedby and aria-errormessage when error is present', () => {
    render(<WithError />)

    const select = screen.getByRole('combobox')
    const errorId = `${select.id}-error`
    expect(select).toHaveAttribute('aria-describedby', errorId)
    expect(select).toHaveAttribute('aria-errormessage', errorId)
  })
})
