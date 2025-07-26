import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../calendar.stories'

describe('Calendar', () => {
  const { Single, Range } = composeStories(stories)

  it('renders single selection days and selects a date', () => {
    const { getByLabelText, asFragment } = render(<Single />)
    expect(asFragment()).toMatchSnapshot()
    const dayButton = getByLabelText('Select 2025-7-17')
    fireEvent.click(dayButton)
    expect(dayButton).toHaveAttribute('aria-current', 'date')
  })

  it('renders range selection days and selects a range', () => {
    const { getByLabelText, asFragment } = render(<Range />)
    expect(asFragment()).toMatchSnapshot()
    const startButton = getByLabelText('Select 2025-7-10')
    fireEvent.click(startButton)
    const endButton = getByLabelText('Select 2025-7-15')
    fireEvent.click(endButton)
    expect(startButton).toHaveAttribute('aria-current', 'date')
    expect(endButton).toHaveAttribute('aria-current', 'date')
  })

  it('handles reverse range selection (end before start)', () => {
    const { getByLabelText } = render(<Range />)
    const endButton = getByLabelText('Select 2025-7-20')
    fireEvent.click(endButton)
    const startButton = getByLabelText('Select 2025-7-10')
    fireEvent.click(startButton)
    expect(startButton).toHaveAttribute('aria-current', 'date')
    expect(endButton).toHaveAttribute('aria-current', 'date')
  })
})
