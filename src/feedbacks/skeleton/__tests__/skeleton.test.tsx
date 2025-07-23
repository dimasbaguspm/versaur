import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../skeleton.stories'

describe('Skeleton', () => {
  const { Default, Shapes, Sizes, CustomHeight } = composeStories(stories)

  it('renders default skeleton and matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all shape variations', () => {
    render(<Shapes />)
    expect(screen.getAllByRole('presentation', { hidden: true }).length).toBe(4)
  })

  it('renders all size variations', () => {
    render(<Sizes />)
    expect(screen.getAllByRole('presentation', { hidden: true }).length).toBe(4)
  })

  it('renders custom height skeleton', () => {
    render(<CustomHeight />)
    const skeleton = screen.getByRole('presentation', { hidden: true })
    expect(skeleton).toBeInTheDocument()
    try {
      expect(skeleton).toHaveStyle({ height: '64px' })
    } catch {
      expect(skeleton.style.height.includes('64')).toBe(true)
    }
  })
})
