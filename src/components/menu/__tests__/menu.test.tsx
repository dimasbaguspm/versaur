import { render, fireEvent, screen } from '@testing-library/react'
import * as stories from '../menu.stories'
import { composeStories } from '@storybook/react'

const { Basic, Sizes } = composeStories(stories)

describe('Menu (compound/context)', () => {
  it('renders basic menu correctly', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders menu with different sizes', () => {
    const { asFragment } = render(<Sizes />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('focuses first item when opened', () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')
    fireEvent.click(trigger)
    expect(screen.getByText('Profile')).toHaveFocus()
  })

  it('disables menu item', () => {
    render(<Basic />)
    const trigger = screen.getByLabelText('Open menu')
    fireEvent.click(trigger)
    expect(screen.getByText('Logout')).toBeDisabled()
  })
})
