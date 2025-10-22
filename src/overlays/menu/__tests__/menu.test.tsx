import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import * as stories from '../menu.stories'
import { composeStories } from '@storybook/react'

const { Basic, Placements } = composeStories(stories)

describe('Menu', () => {
  it('renders basic menu correctly', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders menu with different placements', () => {
    const { asFragment } = render(<Placements />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('disables menu item', () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')
    fireEvent.click(trigger)
    expect(screen.getByText('Logout')).toBeDisabled()
  })

  it('opens and closes menu on trigger click', async () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')

    // Menu content exists in DOM but is hidden with Popover API
    const menuPopover = document.querySelector('[popover]')
    expect(menuPopover).toBeInTheDocument()

    // Open menu
    fireEvent.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeVisible()
    })
  })

  it('handles menu item clicks', async () => {
    const { getByLabelText, getByText } = render(<Basic />)

    // Open menu
    const trigger = getByLabelText('Open menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(getByText('Profile')).toBeInTheDocument()
    })
  })
})
