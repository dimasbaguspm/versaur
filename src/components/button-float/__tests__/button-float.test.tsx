import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../button-float.stories'

describe('ButtonFloat', () => {
  const { Default, LeftSide, AllVariants, SizeComparison } =
    composeStories(stories)

  it('renders the default floating button (right)', () => {
    render(<Default />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveStyle({
      bottom: '1rem',
      position: 'absolute',
    })
    expect(btn).toHaveClass('rounded-lg')
    expect(btn).toHaveAttribute('aria-label', 'Chat')
  })

  it('renders the floating button on the left', () => {
    render(<LeftSide />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveStyle({
      bottom: '1rem',
      position: 'absolute',
    })
    expect(btn).toHaveClass('rounded-lg')
    expect(btn).toHaveAttribute('aria-label', 'Help')
  })

  it('renders all variants', () => {
    render(<AllVariants />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(1)
    buttons.forEach(btn => {
      expect(btn).toHaveClass('rounded-lg')
    })
  })

  it('renders all sizes', () => {
    render(<SizeComparison />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(3)
    buttons.forEach(btn => {
      expect(btn).toHaveClass('rounded-lg')
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })
})
