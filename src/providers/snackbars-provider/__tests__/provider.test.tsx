import { render, screen, act } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../provider.stories'
import { vi } from 'vitest'

const { Basic } = composeStories(stories)

describe('SnackbarsProvider', () => {
  it('renders the provider and children', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
    expect(
      screen.getByRole('button', { name: /show success/i })
    ).toBeInTheDocument()
  })

  it('stacks multiple snackbars', () => {
    render(<Basic />)
    act(() => {
      screen.getByRole('button', { name: /show stack/i }).click()
    })
    expect(screen.getByText('Stacked 1')).toBeInTheDocument()
    expect(screen.getByText('Stacked 2')).toBeInTheDocument()
    expect(screen.getByText('Stacked 3')).toBeInTheDocument()
  })

  it('respects custom duration', () => {
    vi.useFakeTimers()
    render(<Basic />)
    act(() => {
      screen.getByRole('button', { name: /show custom duration/i }).click()
    })
    expect(screen.getByText('Custom Duration')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(4000)
    })

    expect(screen.getByText('Custom Duration')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(150000)
    })

    expect(screen.queryByText('Custom Duration')).not.toBeInTheDocument()
    vi.useRealTimers()
  })
})
