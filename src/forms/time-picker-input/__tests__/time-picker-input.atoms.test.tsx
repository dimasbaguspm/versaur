import { render, screen, fireEvent } from '@testing-library/react'
import { TimePickerInput } from '../time-picker-input'

describe('TimePickerInput Atoms', () => {
  it('renders hour and minute inputs and AM/PM buttons', () => {
    render(<TimePickerInput value={'10:15 AM'} onChange={() => {}} />)
    // Open the modal
    fireEvent.click(screen.getByDisplayValue('10:15 AM'))
    expect(screen.getByLabelText(/hour/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/minute/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /am/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /pm/i })).toBeInTheDocument()
  })

  it('calls onChange with correct value on confirm', () => {
    const handleChange = vi.fn()
    render(<TimePickerInput value={'01:00 PM'} onChange={handleChange} />)
    // Open the modal
    fireEvent.click(screen.getByDisplayValue('01:00 PM'))
    fireEvent.change(screen.getByLabelText(/hour/i), {
      target: { value: '09' },
    })
    fireEvent.change(screen.getByLabelText(/minute/i), {
      target: { value: '45' },
    })
    fireEvent.click(screen.getByRole('button', { name: /am/i }))
    fireEvent.click(screen.getByText(/confirm/i))
    expect(handleChange).toHaveBeenCalledWith('09:45 AM')
  })
})
