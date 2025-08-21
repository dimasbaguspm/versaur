import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../button-group.stories'
import { ButtonGroup } from '../button-group'
import { Button } from '@/primitive/button'

const composedStories = composeStories(stories)

describe('ButtonGroup', () => {
  it('should render HTML correctly', () => {
    const { asFragment } = render(
      <ButtonGroup>
        <Button variant='primary'>Save</Button>
        <Button variant='ghost'>Cancel</Button>
      </ButtonGroup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with default props', () => {
    render(
      <ButtonGroup data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toBeInTheDocument()
    expect(buttonGroup).toHaveAttribute('role', 'group')
    expect(buttonGroup).toHaveClass(
      'flex',
      'flex-row',
      'justify-start',
      'gap-3'
    )
  })

  it('should apply vertical orientation', () => {
    render(
      <ButtonGroup orientation='vertical' data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('flex-col')
  })

  it('should apply different alignments', () => {
    const { rerender } = render(
      <ButtonGroup alignment='center' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    let buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('justify-center')

    rerender(
      <ButtonGroup alignment='end' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('justify-end')

    rerender(
      <ButtonGroup alignment='between' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('justify-between')
  })

  it('should apply fluid behavior', () => {
    render(
      <ButtonGroup fluid data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('[&>*]:flex-1')
  })

  it('should apply different gap sizes', () => {
    const { rerender } = render(
      <ButtonGroup gap='xs' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    let buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('gap-1')

    rerender(
      <ButtonGroup gap='xl' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('gap-6')
  })

  it('should forward ref correctly', () => {
    const ref = { current: null }
    render(
      <ButtonGroup ref={ref}>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('should accept custom className', () => {
    render(
      <ButtonGroup className='custom-class' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('custom-class')
  })

  it('should render children correctly', () => {
    render(
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <Button>Reset</Button>
      </ButtonGroup>
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

    it('should render ComplexExample story', () => {
      const { container } = render(<composedStories.ComplexExample />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })
})
