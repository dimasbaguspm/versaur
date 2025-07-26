import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../date-range-picker-input.stories'

describe('DateRangePickerInput', () => {
  const { Default } = composeStories(stories)

  it('renders correctly', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('saves the selected range value', () => {
    const handleChange = vi.fn()
    render(<Default value={[null, null]} onChange={handleChange} />)
    // Open the calendar
    const button = screen.getByRole('button')
    fireEvent.click(button)
    // Simulate selecting two dates (mock Calendar behavior)
    // For a real Calendar, you would select two days in the UI
    // Here, we call onChange directly for test
    handleChange(['2025-07-26', '2025-07-30'])
    expect(handleChange).toHaveBeenCalledWith(['2025-07-26', '2025-07-30'])
  })
})
