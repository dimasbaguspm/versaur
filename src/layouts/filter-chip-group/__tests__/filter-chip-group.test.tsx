import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../filter-chip-group.stories'
import { FilterChipGroup } from '../filter-chip-group'
import { FilterChip } from '@/primitive/filter-chip'
import { Button } from '@/primitive/button'

const composedStories = composeStories(stories)

describe('FilterChipGroup', () => {
  it('should render HTML correctly', () => {
    const { asFragment } = render(
      <FilterChipGroup>
        <FilterChip>Active Filter 1</FilterChip>
        <FilterChip>Active Filter 2</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with role group and default classes', () => {
    render(
      <FilterChipGroup data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
        <FilterChip>Filter 2</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toBeInTheDocument()
    expect(filterChipGroup).toHaveAttribute('role', 'group')
    expect(filterChipGroup).toHaveClass('flex', 'flex-wrap', 'items-center')
  })

  it('should apply orientation variants', () => {
    const { rerender } = render(
      <FilterChipGroup orientation='horizontal' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    let filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('flex-row')

    rerender(
      <FilterChipGroup orientation='vertical' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('flex-col')
  })

  it('should apply overlay mode', () => {
    render(
      <FilterChipGroup overlay data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
        <FilterChip>Filter 2</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('flex-nowrap', 'overflow-x-auto')
  })

  it('should apply fluid behavior', () => {
    render(
      <FilterChipGroup fluid data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('[&>*]:flex-1')
  })

  it('should forward ref correctly', () => {
    const ref = { current: null }
    render(
      <FilterChipGroup ref={ref}>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('should accept custom className', () => {
    render(
      <FilterChipGroup className='custom-class' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('custom-class')
  })

  describe('Stories', () => {
    Object.entries(composedStories).forEach(([name, Story]) => {
      it(`should render ${name} story`, () => {
        const { container } = render(<Story />)
        expect(container.firstChild).toBeInTheDocument()
      })
    })
  })
})
