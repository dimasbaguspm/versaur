import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion } from '../accordion'
import { Button } from '@/primitive/button'

describe('Accordion', () => {
  it('renders correctly with title', () => {
    render(
      <Accordion title={<Accordion.Title>Test Title</Accordion.Title>}>
        <p>Test content</p>
      </Accordion>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('starts closed by default', () => {
    render(
      <Accordion title={<Accordion.Title>Test Title</Accordion.Title>}>
        <p>Test content</p>
      </Accordion>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts open when isDefaultOpen is true', () => {
    render(
      <Accordion
        title={<Accordion.Title>Test Title</Accordion.Title>}
        isDefaultOpen={true}
      >
        <p>Test content</p>
      </Accordion>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles open/closed when clicked', () => {
    render(
      <Accordion title={<Accordion.Title>Test Title</Accordion.Title>}>
        <p>Test content</p>
      </Accordion>
    )

    const button = screen.getByRole('button')

    // Initially closed
    expect(button).toHaveAttribute('aria-expanded', 'false')

    // Click to open
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Click to close
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('does not toggle when disabled', () => {
    render(
      <Accordion
        title={<Accordion.Title>Test Title</Accordion.Title>}
        disabled={true}
      >
        <p>Test content</p>
      </Accordion>
    )

    const button = screen.getByRole('button')

    // Initially closed
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-disabled', 'true')

    // Click should not toggle
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders subtitle when provided', () => {
    render(
      <Accordion
        title={<Accordion.Title>Test Title</Accordion.Title>}
        subtitle={<Button>Clear</Button>}
      >
        <p>Test content</p>
      </Accordion>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })

  it('renders custom content with Accordion.Content', () => {
    render(
      <Accordion title={<Accordion.Title>Test Title</Accordion.Title>}>
        <Accordion.Content>
          <div data-testid='custom-content'>Custom content</div>
        </Accordion.Content>
      </Accordion>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Accordion
        title={<Accordion.Title>Test Title</Accordion.Title>}
        className='custom-class'
      >
        <p>Test content</p>
      </Accordion>
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Accordion
        ref={ref}
        title={<Accordion.Title>Test Title</Accordion.Title>}
      >
        <p>Test content</p>
      </Accordion>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has proper accessibility attributes', () => {
    render(
      <Accordion title={<Accordion.Title>Test Title</Accordion.Title>}>
        <p>Test content</p>
      </Accordion>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('role', 'button')
    expect(button).toHaveAttribute('aria-expanded')
    expect(button).toHaveAttribute('aria-disabled')
  })
})
