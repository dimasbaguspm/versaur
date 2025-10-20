import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../badge-group.stories'
import { BadgeGroup } from '../badge-group'
import { Badge } from '@/primitive/badge'

const composedStories = composeStories(stories)

describe('BadgeGroup', () => {
  it('should render HTML correctly', () => {
    const { asFragment } = render(
      <BadgeGroup>
        <Badge color='primary'>Primary</Badge>
        <Badge color='secondary'>Secondary</Badge>
      </BadgeGroup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with role group and default classes', () => {
    render(
      <BadgeGroup data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
        <Badge color='secondary'>Badge 2</Badge>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toBeInTheDocument()
    expect(badgeGroup).toHaveAttribute('role', 'group')
    expect(badgeGroup).toHaveClass('flex', 'flex-wrap')
  })

  it('should apply orientation variants', () => {
    const { rerender } = render(
      <BadgeGroup orientation='horizontal' data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
      </BadgeGroup>
    )

    let badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toHaveClass('flex-row')

    rerender(
      <BadgeGroup orientation='vertical' data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
      </BadgeGroup>
    )

    badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toHaveClass('flex-col')
  })

  it('should apply overlay mode', () => {
    render(
      <BadgeGroup overlay data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
        <Badge color='secondary'>Badge 2</Badge>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toHaveClass('flex-nowrap', 'overflow-x-auto')
  })

  it('should apply fluid behavior', () => {
    render(
      <BadgeGroup fluid data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toHaveClass('[&>*]:flex-1')
  })

  it('should forward ref correctly', () => {
    const ref = { current: null }
    render(
      <BadgeGroup ref={ref}>
        <Badge color='primary'>Badge 1</Badge>
      </BadgeGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('should accept custom className', () => {
    render(
      <BadgeGroup className='custom-class' data-testid='badge-group'>
        <Badge color='primary'>Badge 1</Badge>
      </BadgeGroup>
    )

    const badgeGroup = screen.getByTestId('badge-group')
    expect(badgeGroup).toHaveClass('custom-class')
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
