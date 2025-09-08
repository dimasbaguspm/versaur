import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../brand.stories'

describe('Brand', () => {
  const { Default, Name, Sizes } = composeStories(stories)

  it('renders default brand (rounded)', () => {
    const { container } = render(<Default />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders all shape variants in Name story', () => {
    const { container } = render(<Name />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(6)
    expect(container).toMatchSnapshot()
  })

  it('renders all size variants in Sizes story', () => {
    const { container } = render(<Sizes />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(10)
    expect(container).toMatchSnapshot()
  })
})
