import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ActionCard } from '../action-card'
import { Badge } from '../../badge'
import { Icon } from '../../icon'
import { Wallet, Settings } from 'lucide-react'

describe('ActionCard', () => {
  test('renders basic ActionCard with title', () => {
    render(<ActionCard title='Test Action' />)
    expect(screen.getByText('Test Action')).toBeInTheDocument()
  })

  test('renders ActionCard with icon', () => {
    render(
      <ActionCard
        title='Test Action'
        icon={<Icon as={Wallet} data-testid='wallet-icon' />}
      />
    )
    expect(screen.getByTestId('wallet-icon')).toBeInTheDocument()
  })

  test('renders ActionCard with subtitle', () => {
    render(
      <ActionCard title='Test Action' subtitle='This is a test subtitle' />
    )
    expect(screen.getByText('Test Action')).toBeInTheDocument()
    expect(screen.getByText('This is a test subtitle')).toBeInTheDocument()
  })

  test('renders ActionCard with badge', () => {
    render(
      <ActionCard
        title='Test Action'
        badge={<Badge data-testid='test-badge'>Popular</Badge>}
      />
    )
    expect(screen.getByTestId('test-badge')).toBeInTheDocument()
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  test('renders arrow by default', () => {
    render(<ActionCard title='Test Action' />)
    // Check for chevron icon (hidden from screen readers but present in DOM)
    const chevronIcon = document.querySelector('[aria-hidden="true"]')
    expect(chevronIcon).toBeInTheDocument()
  })

  test('hides arrow when showArrow is false', () => {
    render(<ActionCard title='Test Action' showArrow={false} />)
    // Check that no chevron icon is present
    const chevronIcon = document.querySelector('[aria-hidden="true"]')
    expect(chevronIcon).not.toBeInTheDocument()
  })

  test('handles click events', () => {
    const handleClick = vi.fn()
    render(<ActionCard title='Test Action' onClick={handleClick} />)

    fireEvent.click(screen.getByText('Test Action'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders as button by default', () => {
    render(<ActionCard title='Test Action' />)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('BUTTON')
  })

  test('renders as div when as="div"', () => {
    render(<ActionCard title='Test Action' as='div' />)
    // When rendered as div, it won't have button role
    const element = screen.getByText('Test Action').closest('div')
    expect(element).toBeInTheDocument()
  })

  test('applies custom className', () => {
    render(<ActionCard title='Test Action' className='custom-class' />)
    const element = screen.getByRole('button')
    expect(element).toHaveClass('custom-class')
  })

  test('applies different sizes', () => {
    const { rerender } = render(<ActionCard title='Test Action' size='sm' />)
    let element = screen.getByRole('button')
    expect(element).toHaveClass('p-3') // small size padding

    rerender(<ActionCard title='Test Action' size='md' />)
    element = screen.getByRole('button')
    expect(element).toHaveClass('p-4') // medium size padding

    rerender(<ActionCard title='Test Action' size='lg' />)
    element = screen.getByRole('button')
    expect(element).toHaveClass('p-5') // large size padding
  })

  test('renders complete ActionCard with all props', () => {
    const handleClick = vi.fn()
    render(
      <ActionCard
        title='Complete Action'
        subtitle='This is a complete action card'
        icon={<Icon as={Settings} data-testid='settings-icon' />}
        badge={<Badge data-testid='complete-badge'>New</Badge>}
        size='lg'
        onClick={handleClick}
        className='test-class'
      />
    )

    expect(screen.getByText('Complete Action')).toBeInTheDocument()
    expect(
      screen.getByText('This is a complete action card')
    ).toBeInTheDocument()
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument()
    expect(screen.getByTestId('complete-badge')).toBeInTheDocument()

    const element = screen.getByRole('button')
    expect(element).toHaveClass('test-class')
    expect(element).toHaveClass('p-5') // large size

    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('ActionCard.Group', () => {
  test('renders ActionCard.Group with children', () => {
    render(
      <ActionCard.Group>
        <ActionCard title='Action 1' />
        <ActionCard title='Action 2' />
        <ActionCard title='Action 3' />
      </ActionCard.Group>
    )

    expect(screen.getByText('Action 1')).toBeInTheDocument()
    expect(screen.getByText('Action 2')).toBeInTheDocument()
    expect(screen.getByText('Action 3')).toBeInTheDocument()
  })

  test('applies group role for accessibility', () => {
    render(
      <ActionCard.Group>
        <ActionCard title='Action 1' />
      </ActionCard.Group>
    )

    const groupElement = screen.getByRole('group')
    expect(groupElement).toBeInTheDocument()
  })

  test('applies custom className to group', () => {
    render(
      <ActionCard.Group className='custom-group-class'>
        <ActionCard title='Action 1' />
      </ActionCard.Group>
    )

    const groupElement = screen.getByRole('group')
    expect(groupElement).toHaveClass('custom-group-class')
  })

  test('has proper styling classes for group container', () => {
    render(
      <ActionCard.Group>
        <ActionCard title='Action 1' />
      </ActionCard.Group>
    )

    const groupElement = screen.getByRole('group')
    expect(groupElement).toHaveClass('bg-background')
    expect(groupElement).toHaveClass('border')
    expect(groupElement).toHaveClass('border-border')
    expect(groupElement).toHaveClass('rounded-lg')
    expect(groupElement).toHaveClass('overflow-hidden')
    expect(groupElement).toHaveClass('divide-y')
    expect(groupElement).toHaveClass('divide-border')
  })

  test('handles multiple ActionCards with different props in group', () => {
    const handleClick1 = vi.fn()
    const handleClick2 = vi.fn()

    render(
      <ActionCard.Group>
        <ActionCard
          title='Account Groups'
          icon={<Icon as={Wallet} data-testid='wallet-icon' />}
          badge={<Badge data-testid='popular-badge'>Popular</Badge>}
          onClick={handleClick1}
        />
        <ActionCard
          title='Settings'
          subtitle='Configure your preferences'
          icon={<Icon as={Settings} data-testid='settings-icon' />}
          showArrow={false}
          onClick={handleClick2}
        />
      </ActionCard.Group>
    )

    // Check first card
    expect(screen.getByText('Account Groups')).toBeInTheDocument()
    expect(screen.getByTestId('wallet-icon')).toBeInTheDocument()
    expect(screen.getByTestId('popular-badge')).toBeInTheDocument()

    // Check second card
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Configure your preferences')).toBeInTheDocument()
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument()

    // Test clicks
    fireEvent.click(screen.getByText('Account Groups'))
    expect(handleClick1).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Settings'))
    expect(handleClick2).toHaveBeenCalledTimes(1)
  })
})
