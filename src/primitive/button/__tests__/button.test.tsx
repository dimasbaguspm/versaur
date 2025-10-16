import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../button'

import * as stories from '../button.stories'
import { composeStories } from '@storybook/react'

const { Variants, Sizes, States } = composeStories(stories)

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant='primary'>Primary</Button>)
    let button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary')

    rerender(<Button variant='ghost'>Ghost</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('bg-white')

    rerender(<Button variant='outline'>Outline</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border')

    rerender(<Button variant='destructive'>Destructive</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('bg-danger')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>)
    let button = screen.getByRole('button')
    expect(button).toHaveClass('h-7')

    rerender(<Button size='md'>Medium</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('h-9')

    rerender(<Button size='lg'>Large</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('h-10')
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })

  it('handles busy state', () => {
    render(<Button busy>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled() // Button should be disabled when busy
    expect(button).toHaveAttribute('aria-busy', 'true')
    // Check for loader icon presence (SVG element)
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('animate-spin')
  })

  it('accepts custom className', () => {
    render(<Button className='custom-class'>Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('renders story: Variants', () => {
    render(<Variants />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4) // 4 variants: primary, ghost, outline, destructive
    expect(buttons[0]).toHaveTextContent('Primary')
    expect(buttons[1]).toHaveTextContent('Ghost')
    expect(buttons[2]).toHaveTextContent('Outline')
    expect(buttons[3]).toHaveTextContent('Destructive')
  })

  it('renders story: Sizes', () => {
    render(<Sizes />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3) // 3 sizes: sm, md, lg
    expect(buttons[0]).toHaveClass('h-7') // sm
    expect(buttons[1]).toHaveClass('h-9') // md
    expect(buttons[2]).toHaveClass('h-10') // lg
  })

  it('renders story: States', () => {
    render(<States />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(9) // 3 variants × 3 states (normal, busy, disabled)

    // Check for busy states with spinner
    const busyButtons = buttons.filter(btn => btn.hasAttribute('aria-busy'))
    expect(busyButtons).toHaveLength(3)

    // Check for disabled states
    const disabledButtons = buttons.filter(
      btn => btn.hasAttribute('disabled') && !btn.hasAttribute('aria-busy')
    )
    expect(disabledButtons).toHaveLength(3)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Button>Snapshot Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
