import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import { Plus } from 'lucide-react'
import { ButtonIcon } from '../button-icon'
import * as stories from '../button-icon.stories'

// Compose stories for testing
const {
  Playground,
  Variants,
  Sizes,
  Shapes,
  States,
  ToolbarExample,
  LoadingStates,
  CircularButtons,
} = composeStories(stories)

// Test icon component
const TestIcon = Plus

describe('ButtonIcon', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Playground />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('aria-label', 'Add item')
    })

    it('renders with custom aria-label', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Custom action' />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Custom action')
    })

    it('renders icon via as prop', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Test' />)
      expect(
        screen.getByRole('button').querySelector('svg')
      ).toBeInTheDocument()
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
        <ButtonIcon
          as={TestIcon}
          data-testid='custom-button'
          aria-label='Test'
        />
      )
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })

    it('matches snapshot', () => {
      const { asFragment } = render(
        <ButtonIcon as={TestIcon} aria-label='Test' />
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('Variants', () => {
    it('renders with primary variant by default', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary')
    })

    it('renders with ghost variant', () => {
      render(<ButtonIcon as={TestIcon} variant='ghost' aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-white', 'text-foreground')
    })

    it('renders with outline variant', () => {
      render(<ButtonIcon as={TestIcon} variant='outline' aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border', 'border-border')
    })

    it('renders with destructive variant', () => {
      render(
        <ButtonIcon as={TestIcon} variant='destructive' aria-label='Test' />
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-danger')
    })
  })

  describe('Sizes', () => {
    it('renders with small size', () => {
      render(<ButtonIcon as={TestIcon} size='sm' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('h-7', 'w-7')
    })

    it('renders with medium size (default)', () => {
      render(<ButtonIcon as={TestIcon} size='md' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('h-9', 'w-9')
    })

    it('renders with large size', () => {
      render(<ButtonIcon as={TestIcon} size='lg' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10')
    })
  })

  describe('Shapes', () => {
    it('renders with rounded shape (default)', () => {
      render(<ButtonIcon as={TestIcon} shape='rounded' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('rounded-md')
    })

    it('renders with square shape', () => {
      render(<ButtonIcon as={TestIcon} shape='square' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('rounded-sm')
    })

    it('renders with circle shape', () => {
      render(<ButtonIcon as={TestIcon} shape='circle' aria-label='Test' />)
      expect(screen.getByRole('button')).toHaveClass('rounded-full')
    })
  })

  describe('States', () => {
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

    it('renders busy state with spinner', () => {
      render(<ButtonIcon as={TestIcon} busy aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(button).toHaveAttribute('aria-disabled', 'true')
      // Spinner should be present
      expect(button.querySelector('svg')).toBeInTheDocument()
    })

    it('disables interaction when busy', () => {
      render(<ButtonIcon as={TestIcon} busy aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('inert')
    })

    it('sets inert attribute when disabled', () => {
      render(<ButtonIcon as={TestIcon} disabled aria-label='Test' />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('inert')
    })
  })

  describe('Story rendering', () => {
    it('renders Variants story', () => {
      render(<Variants />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4) // 4 variants
    })

    it('renders Sizes story', () => {
      render(<Sizes />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(3) // 3 sizes
    })

    it('renders Shapes story', () => {
      render(<Shapes />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(3) // 3 shapes
    })

    it('renders States story', () => {
      render(<States />)
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)
      // Check that some buttons are disabled
      const disabledButtons = buttons.filter(btn =>
        btn.hasAttribute('disabled')
      )
      expect(disabledButtons.length).toBeGreaterThan(0)
    })

    it('renders LoadingStates story', () => {
      render(<LoadingStates />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4)
      // All should be busy/disabled
      buttons.forEach(button => {
        expect(button).toHaveAttribute('aria-busy', 'true')
        expect(button).toBeDisabled()
      })
    })

    it('renders CircularButtons story', () => {
      render(<CircularButtons />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4)
      buttons.forEach(button => {
        expect(button).toHaveClass('rounded-full')
      })
    })

    it('renders ToolbarExample story', () => {
      render(<ToolbarExample />)
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility', () => {
    it('requires aria-label prop', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Required label' />)
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        'Required label'
      )
    })

    it('has button role', () => {
      render(<ButtonIcon as={TestIcon} aria-label='Test' />)
      expect(screen.getByRole('button')).toBeInTheDocument()
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

    it('announces busy state to screen readers', () => {
      render(<ButtonIcon as={TestIcon} busy aria-label='Loading' />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-busy', 'true')
    })

    it('announces disabled state to screen readers', () => {
      render(<ButtonIcon as={TestIcon} disabled aria-label='Disabled' />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('Integration', () => {
    it('works with different icon components', () => {
      const { rerender } = render(<ButtonIcon as={Plus} aria-label='Plus' />)
      expect(screen.getByRole('button')).toBeInTheDocument()

      // Test that different icons can be used
      rerender(<ButtonIcon as={Plus} aria-label='Settings' />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('combines size and shape variants', () => {
      render(
        <ButtonIcon
          as={TestIcon}
          size='lg'
          shape='circle'
          aria-label='Large circle'
        />
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'w-10', 'rounded-full')
    })

    it('combines variant and size', () => {
      render(
        <ButtonIcon
          as={TestIcon}
          variant='destructive'
          size='sm'
          aria-label='Small destructive'
        />
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-danger', 'h-7', 'w-7')
    })
  })
})
