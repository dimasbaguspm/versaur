/**
 * Unit tests for Icon component
 * Uses Vitest and React Testing Library
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon } from '../icon'
import { Circle } from 'lucide-react'

// Basic render test
it('renders Icon with default props', () => {
  const { asFragment } = render(
    <Icon>
      <Circle />
    </Icon>
  )
  expect(asFragment()).toMatchSnapshot()
})

describe('Icon props', () => {
  it('applies color and size classes', () => {
    render(
      <Icon color='danger' size='lg' data-testid='icon'>
        <Circle />
      </Icon>
    )
    const icon = screen.getByTestId('icon')
    expect(icon.className).toContain('text-danger')
    expect(icon.className).toContain('w-6')
    expect(icon.className).toContain('h-6')
  })

  it('passes native span props', () => {
    render(
      <Icon id='custom-id' aria-label='icon-label'>
        <Circle />
      </Icon>
    )
    const icon = screen.getByLabelText('icon-label')
    expect(icon).toHaveAttribute('id', 'custom-id')
  })
})
