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

  it('should render with default props', () => {
    render(
      <FilterChipGroup data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
        <FilterChip>Filter 2</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toBeInTheDocument()
    expect(filterChipGroup).toHaveAttribute('role', 'group')
    expect(filterChipGroup).toHaveClass(
      'flex',
      'flex-wrap',
      'items-center',
      'flex-row',
      'justify-start',
      'gap-3'
    )
  })

  it('should apply vertical orientation', () => {
    render(
      <FilterChipGroup orientation='vertical' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
        <FilterChip>Filter 2</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('flex-col')
  })

  it('should apply different alignments', () => {
    const { rerender } = render(
      <FilterChipGroup alignment='center' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    let filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('justify-center')

    rerender(
      <FilterChipGroup alignment='end' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('justify-end')

    rerender(
      <FilterChipGroup alignment='between' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('justify-between')

    rerender(
      <FilterChipGroup alignment='around' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('justify-around')

    rerender(
      <FilterChipGroup alignment='evenly' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('justify-evenly')
  })

  it('should apply fluid behavior', () => {
    render(
      <FilterChipGroup fluid data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
        <FilterChip>Filter 2</FilterChip>
      </FilterChipGroup>
    )

    const filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('[&>*]:flex-1')
  })

  it('should apply different gap sizes', () => {
    const { rerender } = render(
      <FilterChipGroup gap='xs' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    let filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('gap-1')

    rerender(
      <FilterChipGroup gap='sm' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('gap-2')

    rerender(
      <FilterChipGroup gap='md' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('gap-3')

    rerender(
      <FilterChipGroup gap='lg' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('gap-4')

    rerender(
      <FilterChipGroup gap='xl' data-testid='filter-chip-group'>
        <FilterChip>Filter 1</FilterChip>
      </FilterChipGroup>
    )

    filterChipGroup = screen.getByTestId('filter-chip-group')
    expect(filterChipGroup).toHaveClass('gap-6')
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

  it('should render children correctly', () => {
    render(
      <FilterChipGroup>
        <FilterChip>Category</FilterChip>
        <FilterChip>Brand</FilterChip>
        <Button variant='ghost'>Clear All</Button>
      </FilterChipGroup>
    )

    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Brand')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Clear All' })
    ).toBeInTheDocument()
  })

  it('should render mixed content (FilterChips and Buttons)', () => {
    render(
      <FilterChipGroup>
        <FilterChip>Active Filter</FilterChip>
        <Button variant='ghost' size='sm'>
          Clear
        </Button>
      </FilterChipGroup>
    )

    expect(screen.getByText('Active Filter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument()
  })

  describe('Stories', () => {
    it('should render Default story', () => {
      const { container } = render(<composedStories.Default />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render CenterAligned story', () => {
      const { container } = render(<composedStories.CenterAligned />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render SpaceBetween story', () => {
      const { container } = render(<composedStories.SpaceBetween />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render Vertical story', () => {
      const { container } = render(<composedStories.Vertical />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render Fluid story', () => {
      const { container } = render(<composedStories.Fluid />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render VerticalFluid story', () => {
      const { container } = render(<composedStories.VerticalFluid />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render GapVariations story', () => {
      const { container } = render(<composedStories.GapVariations />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render MixedVariants story', () => {
      const { container } = render(<composedStories.MixedVariants />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render EcommerceFilters story', () => {
      const { container } = render(<composedStories.EcommerceFilters />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })
})
