import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import * as stories from '../menu.stories'
import { composeStories } from '@storybook/react'

const { Basic, Sizes, ScrollableContainer } = composeStories(stories)

describe('Menu', () => {
  it('renders basic menu correctly', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders menu with different sizes', () => {
    const { asFragment } = render(<Sizes />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('disables menu item', () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')
    fireEvent.click(trigger)
    expect(screen.getByText('Logout')).toBeDisabled()
  })

  it('renders scrollable container menu correctly', () => {
    const { asFragment } = render(<ScrollableContainer />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('handles scroll events in scrollable containers', async () => {
    render(<ScrollableContainer />)

    // Find the trigger button within the scrollable container
    const trigger = screen.getByLabelText('Open menu')

    // Open the menu
    fireEvent.click(trigger)

    // Wait for menu to appear
    await waitFor(() => {
      expect(screen.getByText('View Details')).toBeInTheDocument()
    })

    // Simulate scroll event on the scrollable container
    const scrollableContainer = screen
      .getByText('Scrollable Container Example')
      .parentElement?.querySelector('[class*="overflow-y-auto"]')
    if (scrollableContainer) {
      fireEvent.scroll(scrollableContainer, { target: { scrollTop: 500 } })
    }

    // Menu should still be accessible (position updated)
    expect(screen.getByText('View Details')).toBeInTheDocument()
  })

  it('closes menu when clicking outside', () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')

    // Open menu
    fireEvent.click(trigger)
    expect(screen.getByText('Profile')).toBeInTheDocument()

    // Click outside
    fireEvent.mouseDown(document.body)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })
})
