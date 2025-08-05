import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../bottom-sheet-input.stories'

describe('BottomSheetInput', () => {
  const { Basic } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens bottom sheet on input click', () => {
    render(<Basic />)
    const input = screen.getByPlaceholderText('Click to open bottom sheet')
    fireEvent.click(input)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('closes bottom sheet on confirm', () => {
    render(<Basic />)
    const input = screen.getByPlaceholderText('Click to open bottom sheet')
    fireEvent.click(input)
    const confirmBtn = screen.getByText('Confirm')
    fireEvent.click(confirmBtn)
    expect(confirmBtn).not.toBeVisible()
  })
})
