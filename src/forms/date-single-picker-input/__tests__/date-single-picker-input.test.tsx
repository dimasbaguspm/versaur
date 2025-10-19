import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../date-single-picker-input.stories'

describe('DateSinglePickerInput', () => {
  const { Default, WithError, WithCustomFormatter, WithMinMax } =
    composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows label and helper text', () => {
    render(<Default />)
    const dateInputs = screen.getAllByLabelText('Date of Birth')
    expect(dateInputs.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Select your birth date')).toBeInTheDocument()
  })

  it('calls onChange with correct value', () => {
    render(<Default />)
    const dateInputs = screen.getAllByLabelText(
      'Date of Birth'
    ) as HTMLInputElement[]
    // The hidden input is type="date"
    const input = dateInputs.find(i => i.type === 'date')!
    fireEvent.change(input, { target: { value: '2025-08-01' } })
    expect(input.value).toBe('2025-08-01')
    // The visible button should show the formatted value
    const visibleButton = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLButtonElement
    expect(visibleButton.textContent).toBe('Aug 1, 2025')
  })

  it('shows error when value is empty and required', () => {
    render(<WithError />)
    expect(screen.getByText('Date is required')).toBeInTheDocument()
  })

  it('supports custom formatter', () => {
    render(<WithCustomFormatter />)
    // The visible button should use the custom formatted value
    const visibleButton = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLButtonElement
    expect(visibleButton.textContent).toBe('Friday, August 1, 2025')
  })

  it('visible button is interactive and accessible', () => {
    render(<Default />)
    const visibleButton = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLButtonElement
    expect(visibleButton.tagName).toBe('BUTTON')
    expect(visibleButton.type).toBe('button')
    // Button should be accessible (not aria-hidden)
    expect(visibleButton).not.toHaveAttribute('aria-hidden')
  })

  it('hidden input is accessible and receives focus', () => {
    render(<Default />)
    const dateInputs = screen.getAllByLabelText(
      'Date of Birth'
    ) as HTMLInputElement[]
    const input = dateInputs.find(i => i.type === 'date')!
    input.focus()
    expect(document.activeElement).toBe(input)
  })

  it('supports min and max validation attributes', () => {
    render(<WithMinMax />)
    const dateInputs = screen.getAllByLabelText(
      'Appointment Date'
    ) as HTMLInputElement[]
    const input = dateInputs.find(i => i.type === 'date')!
    expect(input).toHaveAttribute('min', '2025-08-01')
    expect(input).toHaveAttribute('max', '2025-08-31')
  })
})
