import * as stories from '../time-picker-input.stories'
import { composeStories } from '@storybook/react'
import { render, screen, fireEvent } from '@testing-library/react'

describe('TimePickerModalInput', () => {
  const { Basic, WithError } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens modal on input click and allows time selection', () => {
    render(<Basic />)
    const input = screen.getByLabelText(/select time/i)
    fireEvent.click(input)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    // Change hour
    const hourInput = screen.getByLabelText(/hour/i)
    fireEvent.change(hourInput, { target: { value: '11' } })
    expect(hourInput).toHaveValue('11')
    // Change minute
    const minuteInput = screen.getByLabelText(/minute/i)
    fireEvent.change(minuteInput, { target: { value: '45' } })
    expect(minuteInput).toHaveValue('45')
    // Select PM
    const pmButton = screen.getByRole('button', { name: /pm/i })
    fireEvent.click(pmButton)
    expect(pmButton).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows error state', () => {
    render(<WithError />)
    expect(screen.getByText(/time is required/i)).toBeInTheDocument()
  })
})
