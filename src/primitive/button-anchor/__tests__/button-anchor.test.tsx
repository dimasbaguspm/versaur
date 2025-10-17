import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonAnchor } from '../button-anchor'

import * as stories from '../button-anchor.stories'
import { composeStories } from '@storybook/react'

const { Variants, Sizes, States } = composeStories(stories)

describe('ButtonAnchor', () => {
  it('renders correctly', () => {
    render(<ButtonAnchor href='#test'>Click me</ButtonAnchor>)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies href attribute when enabled', () => {
    render(<ButtonAnchor href='/test'>Link</ButtonAnchor>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('removes href attribute when disabled', () => {
    render(
      <ButtonAnchor disabled href='/test'>
        Disabled Link
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('href')
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <ButtonAnchor variant='primary' href='#'>
        Primary
      </ButtonAnchor>
    )
    let link = screen.getByRole('link')
    expect(link).toHaveClass('bg-primary')

    rerender(
      <ButtonAnchor variant='ghost' href='#'>
        Ghost
      </ButtonAnchor>
    )
    link = screen.getByRole('link')
    expect(link).toHaveClass('bg-white')

    rerender(
      <ButtonAnchor variant='outline' href='#'>
        Outline
      </ButtonAnchor>
    )
    link = screen.getByRole('link')
    expect(link).toHaveClass('border')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <ButtonAnchor size='sm' href='#'>
        Small
      </ButtonAnchor>
    )
    let link = screen.getByRole('link')
    expect(link).toHaveClass('h-7')

    rerender(
      <ButtonAnchor size='md' href='#'>
        Medium
      </ButtonAnchor>
    )
    link = screen.getByRole('link')
    expect(link).toHaveClass('h-9')

    rerender(
      <ButtonAnchor size='lg' href='#'>
        Large
      </ButtonAnchor>
    )
    link = screen.getByRole('link')
    expect(link).toHaveClass('h-10')
  })

  it('handles disabled state correctly', () => {
    render(
      <ButtonAnchor disabled href='/test'>
        Disabled
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveClass('disabled:opacity-50')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).toHaveAttribute('tabindex', '-1')
    expect(link).not.toHaveAttribute('href')
  })

  it('prevents navigation when disabled', () => {
    const handleClick = vi.fn()
    render(
      <ButtonAnchor disabled href='/test' onClick={handleClick}>
        Disabled
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    fireEvent.click(link)
    // Click event should be prevented, so onClick should not be called
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('allows navigation when enabled', () => {
    const handleClick = vi.fn(e => e.preventDefault()) // Prevent actual navigation in test
    render(
      <ButtonAnchor href='/test' onClick={handleClick}>
        Enabled
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    fireEvent.click(link)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('accepts custom className', () => {
    render(
      <ButtonAnchor className='custom-class' href='#'>
        Custom
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveClass('custom-class')
  })

  it('supports target and rel attributes', () => {
    render(
      <ButtonAnchor href='https://example.com' target='_blank' rel='noopener'>
        External
      </ButtonAnchor>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener')
  })

  it('renders story: Variants', () => {
    render(<Variants />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3) // 3 variants: primary, ghost, outline
    expect(links[0]).toHaveTextContent('Primary')
    expect(links[1]).toHaveTextContent('Ghost')
    expect(links[2]).toHaveTextContent('Outline')
  })

  it('renders story: Sizes', () => {
    render(<Sizes />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3) // 3 sizes: sm, md, lg
    expect(links[0]).toHaveClass('h-7') // sm
    expect(links[1]).toHaveClass('h-9') // md
    expect(links[2]).toHaveClass('h-10') // lg
  })

  it('renders story: States', () => {
    render(<States />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6) // 3 variants × 2 states (normal, disabled)

    // Check for disabled states
    const disabledLinks = links.filter(link =>
      link.hasAttribute('aria-disabled')
    )
    expect(disabledLinks).toHaveLength(3)

    // Verify disabled links have no href
    disabledLinks.forEach(link => {
      expect(link).not.toHaveAttribute('href')
    })
  })

  it('applies no-underline class for button appearance', () => {
    render(<ButtonAnchor href='#'>No Underline</ButtonAnchor>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('no-underline')
  })

  it('has cursor-pointer class', () => {
    render(<ButtonAnchor href='#'>Pointer</ButtonAnchor>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('cursor-pointer')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <ButtonAnchor href='#test'>Snapshot Test</ButtonAnchor>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
