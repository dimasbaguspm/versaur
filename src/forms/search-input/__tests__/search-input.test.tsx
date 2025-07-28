import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../search-input.stories'

describe('SearchInput', () => {
  const { Default, Disabled } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with placeholder', () => {
    render(<Default />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('accepts input and calls onChange', () => {
    render(<Default />)
    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'hello' } })
    expect(input.value).toBe('hello')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Disabled />)
    expect(screen.getByPlaceholderText('Search...')).toBeDisabled()
  })

  it('has type search and inputMode search', () => {
    render(<Default />)
    const input = screen.getByPlaceholderText('Search...')
    expect(input).toHaveAttribute('type', 'search')
    expect(input).toHaveAttribute('inputmode', 'search')
  })
})
