import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../calendar.stories'

describe('Calendar', () => {
  const { Default } = composeStories(stories)

  it('renders correctly', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('selects a date', () => {
    const { getByLabelText } = render(<Default />)
    const dayButton = getByLabelText('Select 2025-7-17')
    fireEvent.click(dayButton)
    expect(dayButton).toHaveAttribute('aria-current', 'date')
  })
})
