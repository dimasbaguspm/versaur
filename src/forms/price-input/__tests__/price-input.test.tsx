import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { composeStories } from '@storybook/react'
import * as stories from '../price-input.stories'

describe('PriceInput', () => {
  const { Default, WithError } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('accepts digits, comma, dot, minus', () => {
    render(<Default />)
    const input = screen.getByLabelText(/amount/i)
    fireEvent.change(input, { target: { value: '12,345.67' } })
    expect(input).toHaveValue('12,345.67')
  })

  it('shows error state', () => {
    render(<WithError />)
    expect(screen.getByText(/invalid price/i)).toBeInTheDocument()
  })

  it('calls onChange with raw string', () => {
    const handleChange = vi.fn()
    render(<Default onChange={handleChange} />)
    const input = screen.getByLabelText(/amount/i)
    fireEvent.change(input, { target: { value: '5000' } })
    expect(handleChange).toHaveBeenCalledWith('5000')
    fireEvent.change(input, { target: { value: '12,345.67' } })
    expect(handleChange).toHaveBeenCalledWith('12,345.67')
  })
})
