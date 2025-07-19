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
  const { asFragment } = render(<Icon as={Circle} />)
  expect(asFragment()).toMatchSnapshot()
})

describe('Icon props', () => {
  it('passes native svg props', () => {
    render(<Icon as={Circle} id='custom-id' aria-label='icon-label' />)
    const icon = screen.getByLabelText('icon-label')
    expect(icon).toHaveAttribute('id', 'custom-id')
  })
})
