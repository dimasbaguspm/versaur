import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import { PageLoader } from '../page-loader'
import * as stories from '../page-loader.stories'

const { Default, WithMessage, Minimal, BarType, Fullscreen } =
  composeStories(stories)

describe('PageLoader', () => {
  it('should render PageLoader with default props', () => {
    const rendered = render(<Default />)
    expect(rendered.asFragment()).toMatchSnapshot()
  })

  it('should render the loading indicator', () => {
    render(<PageLoader ariaLabel='Loading test content' />)
    expect(screen.getByLabelText('Loading test content')).toBeInTheDocument()
  })

  it('should display loading message when provided', () => {
    render(<WithMessage />)
    expect(screen.getByText('Loading your dashboard...')).toBeInTheDocument()
  })

  it('should render minimal variant', () => {
    const rendered = render(<Minimal />)
    expect(rendered.asFragment()).toMatchSnapshot()
  })

  it('should render bar type loading indicator', () => {
    const rendered = render(<BarType />)
    expect(rendered.asFragment()).toMatchSnapshot()
  })

  it('should support all loading indicator props', () => {
    render(
      <PageLoader
        type='spinner'
        size='lg'
        color='success'
        ariaLabel='Custom loading'
        message='Custom message'
      />
    )

    expect(screen.getByLabelText('Custom loading')).toBeInTheDocument()
    expect(screen.getByText('Custom message')).toBeInTheDocument()
  })

  it('should render children when provided', () => {
    render(
      <PageLoader>
        <div>Custom content</div>
      </PageLoader>
    )

    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <PageLoader className='custom-class' ariaLabel='Loading' />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should use flex-grow and center content', () => {
    const { container } = render(<PageLoader ariaLabel='Loading' />)
    const pageLoader = container.firstChild as HTMLElement

    expect(pageLoader).toHaveClass('flex-grow')
    expect(pageLoader).toHaveClass('flex')
    expect(pageLoader).toHaveClass('items-center')
    expect(pageLoader).toHaveClass('justify-center')
  })

  it('should apply minimal height styles when minimal is true', () => {
    const { container } = render(<PageLoader minimal ariaLabel='Loading' />)
    const pageLoader = container.firstChild as HTMLElement

    expect(pageLoader).toHaveClass('min-h-32')
    expect(pageLoader).toHaveClass('py-8')
  })

  it('should apply full height styles when minimal is false', () => {
    const { container } = render(
      <PageLoader minimal={false} ariaLabel='Loading' />
    )
    const pageLoader = container.firstChild as HTMLElement

    expect(pageLoader).toHaveClass('min-h-96')
    expect(pageLoader).toHaveClass('h-full')
  })

  it('should have proper ARIA attributes for accessibility', () => {
    render(<PageLoader message='Loading content' ariaLabel='Loading page' />)

    // Loading indicator should have aria-label
    expect(screen.getByLabelText('Loading page')).toBeInTheDocument()

    // Message should have aria-live for screen reader announcements
    const message = screen.getByText('Loading content')
    expect(message).toHaveAttribute('aria-live', 'polite')
  })
  it('should render fullscreen variant correctly', () => {
    const { container } = render(<Fullscreen />)
    expect(container.firstChild).toHaveClass('fixed')
    expect(container.firstChild).toHaveClass('inset-0')
    expect(container.firstChild).toHaveClass('z-100')
    expect(container.firstChild).toHaveClass('bg-background')
  })
})
