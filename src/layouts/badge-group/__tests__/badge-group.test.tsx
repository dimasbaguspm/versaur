import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../badge-group.stories'
import { BadgeGroup } from '../badge-group'
import { Button } from '@/primitive/button'

const composedStories = composeStories(stories)

describe('BadgeGroup', () => {
  it('should render HTML correctly', () => {
    const { asFragment } = render(
      <BadgeGroup>
        <Button variant='primary'>Save</Button>
        <Button variant='ghost'>Cancel</Button>
      </BadgeGroup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with default props', () => {
    render(
      <BadgeGroup data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toBeInTheDocument()
    expect(badgeGroup).toHaveAttribute('role', 'group')
    expect(badgeGroup).toHaveClass('flex', 'flex-row', 'justify-start', 'gap-3')
  })

  it('should apply vertical orientation', () => {
    render(
      <BadgeGroup orientation='vertical' data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('flex-col')
  })

  it('should apply different alignments', () => {
    const { rerender } = render(
      <BadgeGroup alignment='center' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    let badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('justify-center')

    rerender(
      <BadgeGroup alignment='end' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('justify-end')

    rerender(
      <BadgeGroup alignment='between' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('justify-between')
  })

  it('should apply fluid behavior', () => {
    render(
      <BadgeGroup fluid data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('[&>*]:flex-1')
  })

  it('should apply different gap sizes', () => {
    const { rerender } = render(
      <BadgeGroup gap='xs' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    let badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('gap-1')

    rerender(
      <BadgeGroup gap='xl' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('gap-6')
  })

  it('should forward ref correctly', () => {
    const ref = { current: null }
    render(
      <BadgeGroup ref={ref}>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('should accept custom className', () => {
    render(
      <BadgeGroup className='custom-class' data-testid='button-group'>
        <Button>Button 1</Button>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('button-group')
    expect(badgeGroup).toHaveClass('custom-class')
  })

  it('should render children correctly', () => {
    render(
      <BadgeGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <Button>Reset</Button>
      </BadgeGroup>
    )

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
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
  })
})
