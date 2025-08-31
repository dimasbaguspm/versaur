import * as stories from '../button-menu-icon.stories'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ButtonMenu', () => {
  const { Basic } = composeStories(stories)

  it('renders trigger button with provided aria-label', () => {
    render(<Basic />)
    expect(
      screen.getByRole('button', {
        name: /open filter/i,
      })
    ).toBeInTheDocument()
  })

  it('opens menu and shows items when clicked', async () => {
    const user = userEvent.setup()
    const { asFragment } = render(<Basic />)

    const trigger = screen.getByRole('button', {
      name: /open filter/i,
    })
    await user.click(trigger)

    // menu should render items
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /profile/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /settings/i,
      })
    ).toBeInTheDocument()

    // disabled item should be rendered but disabled
    const logout = screen.getByRole('button', {
      name: /logout/i,
    })
    expect(logout).toBeInTheDocument()
    expect(logout).toBeDisabled()

    expect(asFragment()).toMatchSnapshot()
  })
})
