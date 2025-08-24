import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FilterChip } from '../filter-chip'

import * as stories from '../filter-chip.stories'
import { composeStories } from '@storybook/react'

const {
  Default,
  Variants,
  SemanticColors,
  Sizes,
  RemovableVariants,
  Disabled,
} = composeStories(stories)

describe('FilterChip', () => {
  it('renders correctly', () => {
    const result = render(<FilterChip>Test Chip</FilterChip>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Test Chip')).toBeInTheDocument()
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('applies variant classes correctly', () => {
    render(<FilterChip variant='primary'>Primary Chip</FilterChip>)
    const chip = screen.getByRole('button')
    expect(chip).toHaveClass('bg-primary')
  })

  it('applies size classes correctly', () => {
    render(<FilterChip size='sm'>Small Chip</FilterChip>)
    const chip = screen.getByRole('button')
    expect(chip).toHaveClass('h-7')
  })

  it('handles disabled state', () => {
    render(<FilterChip disabled>Disabled Chip</FilterChip>)
    const chip = screen.getByRole('button')
    expect(chip).toBeDisabled()
    expect(chip).toHaveAttribute('aria-disabled', 'true')
    expect(chip).toHaveAttribute('inert')
  })

  it('always shows remove icon', () => {
    render(<FilterChip>Chip with Icon</FilterChip>)
    const icon = screen.getByRole('button').querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('calls onClick when chip is clicked', () => {
    const onClick = vi.fn()
    render(<FilterChip onClick={onClick}>Clickable Chip</FilterChip>)

    const chip = screen.getByRole('button')
    fireEvent.click(chip)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('has correct accessibility attributes', () => {
    render(<FilterChip>Accessible Chip</FilterChip>)
    const chip = screen.getByRole('button')
    expect(chip).toHaveAttribute('aria-label', 'Accessible Chip, removable')
  })

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn()
    render(
      <FilterChip disabled onClick={onClick}>
        Disabled Chip
      </FilterChip>
    )

    const chip = screen.getByRole('button')
    fireEvent.click(chip)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders default story correctly', () => {
    const result = render(<Default />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('renders all variants correctly', () => {
    const result = render(<Variants />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('renders semantic color variants correctly', () => {
    const result = render(<SemanticColors />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('renders different sizes correctly', () => {
    const result = render(<Sizes />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('renders removable variants correctly', () => {
    const result = render(<RemovableVariants />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('renders disabled state correctly', () => {
    const result = render(<Disabled />)
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('applies custom className', () => {
    render(<FilterChip className='custom-class'>Custom Chip</FilterChip>)
    const chip = screen.getByRole('button')
    expect(chip).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<FilterChip ref={ref}>Ref Chip</FilterChip>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
