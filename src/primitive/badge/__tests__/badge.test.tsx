describe('Sizes', () => {
  it('applies small size styles', () => {
    render(<Badge size='sm'>Small</Badge>)
    const badge = screen.getByText('Small')
    expect(badge).toHaveClass('text-xs', 'px-1', 'py-0.25', 'h-3')
  })
  it('applies medium size styles (default)', () => {
    render(<Badge size='md'>Medium</Badge>)
    const badge = screen.getByText('Medium')
    expect(badge).toHaveClass('text-xs', 'px-1.5', 'py-0.5', 'h-4')
  })
  it('applies large size styles', () => {
    render(<Badge size='lg'>Large</Badge>)
    const badge = screen.getByText('Large')
    expect(badge).toHaveClass('text-sm', 'px-2', 'py-1', 'h-6')
  })
  it('applies icon-only size for small', () => {
    render(<Badge size='sm' iconLeft={<span data-testid='icon-sm'>👍</span>} />)
    const badge = screen.getByTestId('icon-sm').parentElement
    expect(badge).toHaveClass('w-5', 'h-5')
  })
  it('applies icon-only size for medium', () => {
    render(<Badge size='md' iconLeft={<span data-testid='icon-md'>👍</span>} />)
    const badge = screen.getByTestId('icon-md').parentElement
    expect(badge).toHaveClass('w-6', 'h-6')
  })
  it('applies icon-only size for large', () => {
    render(<Badge size='lg' iconLeft={<span data-testid='icon-lg'>👍</span>} />)
    const badge = screen.getByTestId('icon-lg').parentElement
    expect(badge).toHaveClass('w-7', 'h-7')
  })
})
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from '../badge'

describe('Badge Component', () => {
  describe('Basic Functionality', () => {
    it('renders with default props', () => {
      render(<Badge>Test Badge</Badge>)
      const badge = screen.getByText('Test Badge')
      expect(badge).toBeInTheDocument()
      expect(badge).toHaveClass('inline-flex', 'items-center', 'justify-center')
    })

    it('renders children content correctly', () => {
      render(<Badge>Custom Content</Badge>)
      expect(screen.getByText('Custom Content')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<Badge ref={ref}>Test</Badge>)
      expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    })
  })

  describe('Variants', () => {
    it('applies default variant styles', () => {
      render(<Badge variant='default'>Default</Badge>)
      const badge = screen.getByText('Default')
      expect(badge).not.toHaveClass('border', 'bg-transparent')
    })

    it('applies outline variant styles', () => {
      render(<Badge variant='outline'>Outline</Badge>)
      const badge = screen.getByText('Outline')
      expect(badge).toHaveClass('border', 'bg-background')
    })
  })

  describe('Colors', () => {
    it('applies primary color by default', () => {
      render(<Badge>Primary</Badge>)
      const badge = screen.getByText('Primary')
      expect(badge).toHaveClass('bg-primary-light/60', 'text-primary')
    })

    it('applies secondary color correctly', () => {
      render(<Badge color='secondary'>Secondary</Badge>)
      const badge = screen.getByText('Secondary')
      expect(badge).toHaveClass('bg-secondary-light/70', 'text-secondary')
    })

    it('applies success color correctly', () => {
      render(<Badge color='success'>Success</Badge>)
      const badge = screen.getByText('Success')
      expect(badge).toHaveClass('bg-success-light/40', 'text-success')
    })

    it('applies outline color correctly', () => {
      render(
        <Badge variant='outline' color='danger'>
          Danger
        </Badge>
      )
      const badge = screen.getByText('Danger')
      expect(badge).toHaveClass('border-danger', 'text-danger')
    })
  })

  describe('Shapes', () => {
    it('applies square shape by default', () => {
      render(<Badge>Square</Badge>)
      const badge = screen.getByText('Square')
      expect(badge).toHaveClass('rounded-xs')
    })

    it('applies rounded shape correctly', () => {
      render(<Badge shape='rounded'>Rounded</Badge>)
      const badge = screen.getByText('Rounded')
      expect(badge).toHaveClass('rounded-full')
    })
  })

  describe('Icons', () => {
    it('renders left icon correctly', () => {
      render(
        <Badge iconLeft={<span data-testid='left-icon'>👍</span>}>
          With Icon
        </Badge>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('renders right icon correctly', () => {
      render(
        <Badge iconRight={<span data-testid='right-icon'>👍</span>}>
          With Icon
        </Badge>
      )
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('renders icon-only badge correctly when no children provided', () => {
      render(<Badge iconLeft={<span data-testid='only-icon'>👍</span>} />)
      expect(screen.getByTestId('only-icon')).toBeInTheDocument()
      // Should be in icon-only mode since no children are provided
    })

    it('renders both icon and text when children are provided', () => {
      render(
        <Badge iconLeft={<span data-testid='icon-with-text'>👍</span>}>
          Badge Text
        </Badge>
      )
      expect(screen.getByTestId('icon-with-text')).toBeInTheDocument()
      expect(screen.getByText('Badge Text')).toBeInTheDocument()
    })

    it('applies icon-only size adjustments', () => {
      render(<Badge iconLeft={<span data-testid='icon'>👍</span>} />)
      const badge = screen.getByTestId('icon').parentElement
      expect(badge).toHaveClass('w-6', 'h-6')
    })

    it('uses iconRight when iconLeft is not provided in icon only mode', () => {
      render(<Badge iconRight={<span data-testid='right-only'>👍</span>} />)
      expect(screen.getByTestId('right-only')).toBeInTheDocument()
    })
  })

  describe('Custom Props', () => {
    it('applies custom className', () => {
      render(<Badge className='custom-class'>Custom</Badge>)
      const badge = screen.getByText('Custom')
      expect(badge).toHaveClass('custom-class')
    })

    it('passes through HTML attributes', () => {
      render(
        <Badge data-testid='custom-badge' title='Custom Title'>
          Custom
        </Badge>
      )
      const badge = screen.getByTestId('custom-badge')
      expect(badge).toHaveAttribute('title', 'Custom Title')
    })
  })

  describe('Accessibility', () => {
    it('uses span element by default', () => {
      render(<Badge>Accessible</Badge>)
      const badge = screen.getByText('Accessible')
      expect(badge.tagName).toBe('SPAN')
    })

    it('supports role attribute', () => {
      render(<Badge role='status'>Status</Badge>)
      const badge = screen.getByRole('status')
      expect(badge).toBeInTheDocument()
    })

    it('supports aria-label attribute', () => {
      render(<Badge aria-label='Custom label'>Badge</Badge>)
      const badge = screen.getByLabelText('Custom label')
      expect(badge).toBeInTheDocument()
    })
  })
})
