import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../bottom-sheet.stories'

describe('BottomSheet', () => {
  const { Basic, Confirmation, Menu, CustomContent } = composeStories(stories)

  it('renders the basic bottom sheet and matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens and closes on button click', () => {
    render(<Basic />)
    const openBtn = screen.getByText('Open BottomSheet')
    fireEvent.click(openBtn)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    const closeBtn = screen.getByLabelText('Close')
    fireEvent.click(closeBtn)
  })

  it('renders confirmation sheet with correct content', () => {
    render(<Confirmation />)
    fireEvent.click(screen.getByRole('button', { name: 'Delete Item' }))
    expect(
      screen.getByText(
        'Are you sure you want to delete this item? This action cannot be undone.'
      )
    ).toBeInTheDocument()
  })

  it('renders menu sheet and menu items', () => {
    render(<Menu />)
    fireEvent.click(screen.getByText('Open Menu'))
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  it('renders custom content sheet and form fields', () => {
    render(<CustomContent />)
    fireEvent.click(screen.getByText('Show Custom Content'))
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })
})
