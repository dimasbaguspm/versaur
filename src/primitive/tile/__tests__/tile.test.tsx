import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import { Tile } from '../tile'
import * as stories from '../tile.stories'

const { Default, Variants, Sizes, Shapes, AsSection } = composeStories(stories)

describe('Tile', () => {
  it('renders default tile correctly', () => {
    render(<Default />)
    expect(
      screen.getByText('This is a default tile with white background')
    ).toBeInTheDocument()
  })

  it('renders with custom content', () => {
    render(<Tile>Custom content</Tile>)
    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    render(
      <Tile variant='primary' data-testid='tile'>
        Primary tile
      </Tile>
    )
    const tile = screen.getByTestId('tile')
    expect(tile).toHaveClass('bg-primary', 'border-primary')
  })

  it('applies correct size classes', () => {
    render(
      <Tile size='lg' data-testid='tile'>
        Large tile
      </Tile>
    )
    const tile = screen.getByTestId('tile')
    expect(tile).toHaveClass('p-6')
  })

  it('applies correct shape classes', () => {
    render(
      <Tile shape='square' data-testid='tile'>
        Square tile
      </Tile>
    )
    const tile = screen.getByTestId('tile')
    expect(tile).toHaveClass('rounded-none')
  })

  it('applies rounded shape by default', () => {
    render(<Tile data-testid='tile'>Default tile</Tile>)
    const tile = screen.getByTestId('tile')
    expect(tile).toHaveClass('rounded-lg')
  })

  it('applies custom className', () => {
    render(
      <Tile className='custom-class' data-testid='tile'>
        Custom tile
      </Tile>
    )
    const tile = screen.getByTestId('tile')
    expect(tile).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Tile ref={ref} data-testid='tile'>
        Ref tile
      </Tile>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders as a semantic section when specified', () => {
    render(<AsSection />)
    const sectionHeading = screen.getByText('Section Tile')
    const section = sectionHeading.closest('section')
    expect(section?.tagName.toLowerCase()).toBe('section')
  })

  it('renders all variants correctly', () => {
    render(<Variants />)
    expect(screen.getByText('White')).toBeInTheDocument()
    expect(screen.getByText('Neutral')).toBeInTheDocument()
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toBeInTheDocument()
    expect(screen.getByText('Tertiary')).toBeInTheDocument()
    expect(screen.getByText('Ghost')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('Danger')).toBeInTheDocument()
  })

  it('renders all sizes correctly', () => {
    render(<Sizes />)
    expect(screen.getByText('Extra Small Padding')).toBeInTheDocument()
    expect(screen.getByText('Small Padding')).toBeInTheDocument()
    expect(screen.getByText('Medium Padding')).toBeInTheDocument()
    expect(screen.getByText('Large Padding')).toBeInTheDocument()
    expect(screen.getByText('Extra Large Padding')).toBeInTheDocument()
  })

  it('renders shape options correctly', () => {
    render(<Shapes />)
    expect(screen.getByText('Rounded corners (default)')).toBeInTheDocument()
    expect(screen.getByText('Square corners')).toBeInTheDocument()
  })
})
