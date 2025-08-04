/**
 * Tooltip unit tests for Versaur UI
 * - Uses Vitest + React Testing Library
 * - Asserts accessibility, interaction, and snapshot
 * - Uses composeStories from Storybook for reliability
 */
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import * as stories from '../tooltip.stories'
import { composeStories } from '@storybook/react'

const { Default, Position, Delay } = composeStories(stories)

describe('Tooltip', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows tooltip on hover and hides on mouse leave, respects aria-hidden', async () => {
    render(<Default />)
    const button = screen.getByRole('button')

    let tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')

    fireEvent.mouseEnter(button)

    tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toHaveAttribute('aria-hidden', 'false')
    expect(tooltip).toBeVisible()

    fireEvent.mouseLeave(button)

    tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')
    expect(tooltip).toHaveClass('opacity-0')
  })

  it('is accessible via keyboard (focus/blur), respects aria-hidden', () => {
    render(<Default />)
    const button = screen.getByRole('button')
    let tooltip = screen.getByRole('tooltip', { hidden: true })
    // Initially hidden
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')

    fireEvent.focus(button)

    tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toHaveAttribute('aria-hidden', 'false')
    expect(tooltip).toBeVisible()

    fireEvent.blur(button)

    tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')
    expect(tooltip).toHaveClass('opacity-0')
  })

  it('respects position prop', () => {
    render(<Position />)
    // Should render 4 tooltips for each position (all hidden initially)
    const tooltips = screen.getAllByRole('tooltip', { hidden: true })
    expect(tooltips).toHaveLength(4)
    tooltips.forEach(t => {
      expect(t).toHaveAttribute('aria-hidden', 'true')
      expect(t).toHaveClass('opacity-0')
    })

    const buttons = screen.getAllByRole('button')
    buttons.forEach((btn, i) => {
      fireEvent.mouseEnter(btn)
      expect(tooltips[i]).toHaveAttribute('aria-hidden', 'false')
      expect(tooltips[i]).toBeVisible()

      fireEvent.mouseLeave(btn)

      expect(tooltips[i]).toHaveAttribute('aria-hidden', 'true')
      expect(tooltips[i]).toHaveClass('opacity-0')
      expect(tooltips[i]).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('respects delay prop', async () => {
    render(<Delay />)
    const buttons = screen.getAllByRole('button')
    const tooltips = screen.getAllByRole('tooltip', { hidden: true })
    // No delay
    fireEvent.mouseEnter(buttons[0])
    expect(tooltips[0]).toBeVisible()
    // 300ms delay
    fireEvent.mouseEnter(buttons[1])
    expect(tooltips[1]).toHaveClass('opacity-0')
    // 1s delay
    fireEvent.mouseEnter(buttons[2])
    expect(tooltips[2]).toHaveClass('opacity-0')
    expect(tooltips[2]).toHaveAttribute('aria-hidden', 'true')
  })
})
