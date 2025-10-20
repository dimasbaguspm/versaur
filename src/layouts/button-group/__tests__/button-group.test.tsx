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

  it('should render with role group and default classes', () => {
    render(
      <ButtonGroup data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toBeInTheDocument()
    expect(buttonGroup).toHaveAttribute('role', 'group')
    expect(buttonGroup).toHaveClass('flex', 'flex-wrap')
  })

  it('should apply orientation variants', () => {
    const { rerender } = render(
      <ButtonGroup orientation='horizontal' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    let buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('flex-row')

    rerender(
      <ButtonGroup orientation='vertical' data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('flex-col')
  })

  it('should apply overlay mode', () => {
    render(
      <ButtonGroup overlay data-testid='button-group'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('flex-nowrap', 'overflow-x-auto')
  })

  it('should apply fluid behavior', () => {
    render(
      <ButtonGroup fluid data-testid='button-group'>
        <Button>Button 1</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveClass('[&>*]:flex-1')
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

  describe('Stories', () => {
    Object.entries(composedStories).forEach(([name, Story]) => {
      it(`should render ${name} story`, () => {
        const { container } = render(<Story />)
        expect(container.firstChild).toBeInTheDocument()
      })
    })
  })
})
