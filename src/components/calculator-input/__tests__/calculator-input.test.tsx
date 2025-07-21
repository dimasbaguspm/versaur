import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../calculator-input.stories'
import { CalculatorInput } from '../calculator-input'

describe('CalculatorInput', () => {
  const { Basic, WithError, Disabled } = composeStories(stories)

  it('renders correctly', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows helper text and label', () => {
    render(<Basic />)
    expect(screen.getByLabelText('Enter amount')).toBeInTheDocument()
    expect(
      screen.getByText('Enter a value using the calculator')
    ).toBeInTheDocument()
  })

  it('shows error when value is empty', () => {
    render(<WithError />)
    expect(screen.getByText('Amount')).toBeInTheDocument()
    expect(screen.getByText('Amount is required')).toBeInTheDocument()
  })

  it('opens modal on click', () => {
    render(<Basic />)
    const input = screen.getByLabelText('Enter amount')
    fireEvent.click(input)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Disabled />)
    const input = screen.getByLabelText('Disabled')
    expect(input).toBeDisabled()
  })

  it('performs basic addition and saves result on OK', () => {
    const handleChange = vi.fn()
    render(
      <CalculatorInput
        value={''}
        onChange={handleChange}
        label='Enter amount'
        helperText='Enter a value using the calculator'
      />
    )
    const input = screen.getByLabelText('Enter amount')
    fireEvent.click(input)
    // Simulate calculator button presses: 1 + 2
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('2'))
    // Press OK to save
    fireEvent.click(screen.getByText('OK'))
    expect(handleChange).toHaveBeenCalledWith(3)
  })
})
