import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../snackbar.stories'

describe('Snackbar', () => {
  const { Default, AllColors, WithAction } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the message text', () => {
    render(<Default />)
    expect(screen.getByTestId('snackbar-text')).toHaveTextContent(
      'Single line snackbar with close'
    )
  })

  it('renders all color variants', () => {
    render(<AllColors />)
    expect(screen.getAllByRole('status')).toHaveLength(4)
  })

  it('renders action button and triggers action', () => {
    render(<WithAction />)
    const actionBtn = screen.getByRole('button', {
      name: /copy/i,
    })
    expect(actionBtn).toBeInTheDocument()
    fireEvent.click(actionBtn)
  })
})
