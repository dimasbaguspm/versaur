import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../button'

import * as stories from '../button.stories'
import { composeStories } from '@storybook/react'

const { SemanticColors, SizeComparison, DisabledComparison } =
  composeStories(stories)

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    render(<Button variant='secondary'>Secondary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-secondary')
  })

  it('applies size classes correctly', () => {
    render(<Button size='sm'>Small</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-7')
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })

  it('accepts custom className', () => {
    render(<Button className='custom-class'>Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('renders all semantic variants correctly', () => {
    const variants = [
      { variant: 'primary', expectedClass: 'bg-primary' },
      { variant: 'secondary', expectedClass: 'bg-secondary' },
      { variant: 'tertiary', expectedClass: 'bg-tertiary' },
      { variant: 'success', expectedClass: 'bg-success' },
      { variant: 'info', expectedClass: 'bg-info' },
      { variant: 'warning', expectedClass: 'bg-warning' },
      { variant: 'danger', expectedClass: 'bg-danger' },
    ] as const

    variants.forEach(({ variant, expectedClass }) => {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(expectedClass)
      unmount()
    })
  })

  it('renders outline variants correctly', () => {
    const outlineVariants = [
      'primary-outline',
      'secondary-outline',
      'tertiary-outline',
      'success-outline',
      'info-outline',
      'warning-outline',
      'danger-outline',
    ] as const

    outlineVariants.forEach(variant => {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border')
      expect(button).toHaveClass('bg-white')
      unmount()
    })
  })

  it('renders ghost variants correctly', () => {
    const ghostVariants = [
      'primary-ghost',
      'secondary-ghost',
      'tertiary-ghost',
      'success-ghost',
      'info-ghost',
      'warning-ghost',
      'danger-ghost',
    ] as const

    ghostVariants.forEach(variant => {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-white')
      unmount()
    })
  })

  it('renders all sizes correctly', () => {
    const sizes = [
      { size: 'sm', expectedClass: 'h-7' },
      { size: 'md', expectedClass: 'h-9' },
      { size: 'lg', expectedClass: 'h-10' },
    ] as const

    sizes.forEach(({ size, expectedClass }) => {
      const { unmount } = render(<Button size={size}>{size}</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(expectedClass)
      unmount()
    })
  })

  it('renders story components correctly', () => {
    const { unmount: unmountSemantic } = render(<SemanticColors />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4) // 4 semantic colors (success, info, warning, danger)
    unmountSemantic()

    const { unmount: unmountSizeComparison } = render(<SizeComparison />)
    const sizeButtons = screen.getAllByRole('button')
    expect(sizeButtons).toHaveLength(3) // 3 sizes
    unmountSizeComparison()

    const { unmount: unmountDisabledComparison } = render(
      <DisabledComparison />
    )
    const disabledButtons = screen.getAllByRole('button')
    expect(disabledButtons.length).toBeGreaterThan(0)
    unmountDisabledComparison()
  })
})
