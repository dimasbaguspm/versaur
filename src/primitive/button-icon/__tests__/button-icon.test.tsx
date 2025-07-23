import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import { Plus } from 'lucide-react'
import { ButtonIcon } from '../button-icon'
import * as stories from '../button-icon.stories'

// Compose stories for testing
const {
  Default,
  AllVariants,
  OutlineVariants,
  GhostVariants,
  AllSizes,
  AllShapes,
  DisabledStates,
} = composeStories(stories)

// Simple test icon component using Lucide React
const TestIcon = Plus

describe('ButtonIcon', () => {
  it('renders with default props', () => {
    render(<Default />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'Add item')
  })

  it('renders with custom aria-label', () => {
    render(<ButtonIcon as={TestIcon} aria-label='Custom action' />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Custom action')
  })

  it('renders with primary variant by default', () => {
    render(<ButtonIcon as={TestIcon} aria-label='Test' />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-coral')
  })

  it('renders with custom variant', () => {
    render(<ButtonIcon as={TestIcon} variant='secondary' aria-label='Test' />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-sage')
  })

  it('renders with outline variant', () => {
    render(
      <ButtonIcon as={TestIcon} variant='primary-outline' aria-label='Test' />
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-coral')
  })

  it('renders with ghost variant', () => {
    render(
      <ButtonIcon as={TestIcon} variant='primary-ghost' aria-label='Test' />
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-coral')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(
      <ButtonIcon as={TestIcon} size='sm' aria-label='Test' />
    )
    expect(screen.getByRole('button')).toHaveClass('h-8', 'w-8')

    rerender(<ButtonIcon as={TestIcon} size='md' aria-label='Test' />)
    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10')

    rerender(<ButtonIcon as={TestIcon} size='lg' aria-label='Test' />)
    expect(screen.getByRole('button')).toHaveClass('h-12', 'w-12')
  })

  it('renders with different shapes', () => {
    const { rerender } = render(
      <ButtonIcon as={TestIcon} shape='rounded' aria-label='Test' />
    )
    expect(screen.getByRole('button')).toHaveClass('rounded-md')

    rerender(<ButtonIcon as={TestIcon} shape='square' aria-label='Test' />)
    expect(screen.getByRole('button')).toHaveClass('rounded-sm')

    rerender(<ButtonIcon as={TestIcon} shape='circle' aria-label='Test' />)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })

  it('renders disabled state correctly', () => {
    render(<ButtonIcon as={TestIcon} disabled aria-label='Test' />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-disabled', 'true')
    expect(button).toHaveClass(
      'disabled:opacity-50',
      'disabled:pointer-events-none'
    )
  })

  it('renders icon via as prop', () => {
    render(<ButtonIcon as={TestIcon} aria-label='Test' />)
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <ButtonIcon as={TestIcon} className='custom-class' aria-label='Test' />
    )
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<ButtonIcon as={TestIcon} ref={ref} aria-label='Test' />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('passes through additional props', () => {
    render(
      <ButtonIcon as={TestIcon} data-testid='custom-button' aria-label='Test' />
    )
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })

  describe('Story rendering', () => {
    it('renders AllVariants story', () => {
      render(<AllVariants />)
      // Should render multiple buttons with different variants
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(9) // 9 variants in the story
    })

    it('renders OutlineVariants story', () => {
      render(<OutlineVariants />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(5) // 5 outline variants
    })

    it('renders GhostVariants story', () => {
      render(<GhostVariants />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(5) // 5 ghost variants
    })

    it('renders AllSizes story', () => {
      render(<AllSizes />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(5) // 5 sizes
    })

    it('renders AllShapes story', () => {
      render(<AllShapes />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(3) // 3 shapes
    })

    it('renders DisabledStates story', () => {
      render(<DisabledStates />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4) // 4 disabled buttons
      buttons.forEach(button => {
        expect(button).toBeDisabled()
      })
    })
  })

  describe('Accessibility', () => {
    it('requires aria-label prop', () => {
      // TypeScript should enforce this, but we can test the runtime behavior
      render(<ButtonIcon as={TestIcon} aria-label='Required label' />)
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        'Required label'
      )
    })

    it('supports keyboard interaction', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Test' />)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('has proper focus-visible styles', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'focus-visible:outline-none',
        'focus-visible:ring-2'
      )
    })
  })

  describe('Semantic variants', () => {
    it('renders success variant', () => {
      render(<ButtonIcon as={TestIcon} variant='success' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('bg-success')
    })

    it('renders info variant', () => {
      render(<ButtonIcon as={TestIcon} variant='info' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('bg-info')
    })

    it('renders warning variant', () => {
      render(<ButtonIcon as={TestIcon} variant='warning' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('bg-warning')
    })

    it('renders danger variant', () => {
      render(<ButtonIcon as={TestIcon} variant='danger' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('bg-danger')
    })
  })
})
