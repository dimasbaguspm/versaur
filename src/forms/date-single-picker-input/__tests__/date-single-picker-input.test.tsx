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
    // The visible input should show the formatted value
    const visibleInput = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLInputElement
    expect(visibleInput.value).toBe('Aug 1, 2025')
  })

  it('shows error when value is empty and required', () => {
    render(<WithError />)
    expect(screen.getByText('Date is required')).toBeInTheDocument()
  })

  it('supports custom formatter', () => {
    render(<WithCustomFormatter />)
    // The visible input should use the custom formatted value
    const visibleInput = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLInputElement
    expect(visibleInput.value).toBe('Friday, August 1, 2025')
  })

  it('visible input is aria-hidden and not interactive', () => {
    render(<Default />)
    const visibleInput = screen.getByTestId(
      'date-single-picker-visible-input'
    ) as HTMLInputElement
    expect(visibleInput).toHaveAttribute('readonly')
    expect(visibleInput).not.toHaveAttribute('aria-label')
    expect(visibleInput).toHaveAttribute('aria-hidden', 'true')
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
