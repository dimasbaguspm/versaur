import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Card } from '../card'
import { Avatar } from '../../avatar'
import { Badge } from '../../badge'

import * as stories from '../card.stories'
import { composeStories } from '@storybook/react'

const { Default, AccountCard, UserProfile, SimpleCard, AvatarCard } =
  composeStories(stories)

describe('Card', () => {
  it('renders with required title prop', () => {
    render(<Card title='Card Title' />)
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })

  it('renders with all props provided', () => {
    render(
      <Card
        title='John Doe'
        subtitle='Software Engineer'
        avatar={<Avatar shape='rounded'>JD</Avatar>}
        badge={<Badge color='secondary'>Available</Badge>}
        supplementaryInfo='$2,847.32'
      />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('JD')).toBeInTheDocument()
    expect(screen.getByText('Available')).toBeInTheDocument()
    expect(screen.getByText('$2,847.32')).toBeInTheDocument()
  })

  it('renders without optional props', () => {
    render(<Card title='Simple Card' />)
    expect(screen.getByText('Simple Card')).toBeInTheDocument()
    // Should not have subtitle, avatar, badge, or supplementary info
    expect(screen.queryByText('Software Engineer')).not.toBeInTheDocument()
  })

  it('applies correct size classes', () => {
    render(<Card title='Large Card' size='lg' data-testid='card' />)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('p-6')
  })

  it('applies correct shape classes', () => {
    render(<Card title='Square Card' shape='square' data-testid='card' />)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('rounded-none')
  })

  it('is clickable by default and handles click events', () => {
    const handleClick = vi.fn()
    render(
      <Card title='Clickable Card' onClick={handleClick} data-testid='card' />
    )

    const card = screen.getByTestId('card')
    expect(card).toHaveClass('cursor-pointer')

    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className to root element', () => {
    render(
      <Card title='Custom Card' className='custom-class' data-testid='card' />
    )
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('custom-class')
  })

  it('handles forwardRef correctly', () => {
    const ref = vi.fn()
    render(<Card title='Ref Card' ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('renders with only title and badge', () => {
    render(
      <Card
        title='Card with Badge'
        badge={<Badge color='primary'>New</Badge>}
        data-testid='card'
      />
    )

    expect(screen.getByText('Card with Badge')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders with only supplementary info', () => {
    render(
      <Card
        title='Card with Info'
        supplementaryInfo='Online'
        data-testid='card'
      />
    )

    expect(screen.getByText('Card with Info')).toBeInTheDocument()
    expect(screen.getByText('Online')).toBeInTheDocument()
  })

  it('handles complex supplementary info as ReactNode', () => {
    render(
      <Card
        title='Account Card'
        supplementaryInfo={
          <span className='text-green-600 font-medium'>$1,234.56</span>
        }
      />
    )

    expect(screen.getByText('Account Card')).toBeInTheDocument()
    const supplementaryElement = screen.getByText('$1,234.56')
    expect(supplementaryElement).toHaveClass('text-green-600', 'font-medium')
  })

  it('adjusts layout when avatar is not provided', () => {
    render(<Card title='No Avatar Card' data-testid='card' />)
    const card = screen.getByTestId('card')
    // Should not have the avatar container div
    expect(card.querySelector('.flex-shrink-0')).not.toBeInTheDocument()
  })

  it('adjusts spacing when no badge or supplementary info', () => {
    render(
      <Card
        title='Simple Title'
        subtitle='Simple Subtitle'
        data-testid='card'
      />
    )
    expect(screen.getByText('Simple Title')).toBeInTheDocument()
    expect(screen.getByText('Simple Subtitle')).toBeInTheDocument()
  })

  it('renders story components correctly', () => {
    // Test Default story
    const { unmount: unmountDefault } = render(<Default />)
    expect(screen.getByText('Alice Cooper')).toBeInTheDocument()
    expect(screen.getByText('Product Manager • New York')).toBeInTheDocument()
    unmountDefault()

    // Test AccountCard story
    const { unmount: unmountAccount } = render(<AccountCard />)
    expect(screen.getByText('Primary checking account')).toBeInTheDocument()
    unmountAccount()

    // Test UserProfile story
    const { unmount: unmountProfile } = render(<UserProfile />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(
      screen.getByText('Software Engineer • San Francisco')
    ).toBeInTheDocument()
    unmountProfile()

    // Test SimpleCard story
    const { unmount: unmountSimple } = render(<SimpleCard />)
    expect(screen.getByText('Simple Card')).toBeInTheDocument()
    unmountSimple()

    // Test AvatarCard story
    const { unmount: unmountAvatar } = render(<AvatarCard />)
    expect(screen.getByText('Alice Brown')).toBeInTheDocument()
    unmountAvatar()
  })

  it('matches snapshot for default card', () => {
    const { asFragment } = render(
      <Card
        title='Default Card'
        subtitle='This is a subtitle'
        avatar={<Avatar>DC</Avatar>}
        badge={<Badge color='secondary'>Status</Badge>}
        supplementaryInfo='Info'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
