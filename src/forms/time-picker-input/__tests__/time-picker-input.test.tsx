import * as stories from '../time-picker-input.stories'
import { composeStories } from '@storybook/react'
import { render, screen, fireEvent } from '@testing-library/react'

describe('TimePickerInput', () => {
  const { Basic, WithError } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders as a native time input and updates value', () => {
    render(<Basic />)
    const input = screen.getByLabelText(/select time/i)
    expect(input).toHaveAttribute('type', 'time')
    expect(input).toHaveValue('02:30')
    fireEvent.change(input, { target: { value: '13:45' } })
    expect(input).toHaveValue('13:45')
  })

  it('shows error state', () => {
    render(<WithError />)
    expect(screen.getByText(/time is required/i)).toBeInTheDocument()
  })
})
