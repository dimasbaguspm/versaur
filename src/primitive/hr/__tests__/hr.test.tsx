import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../hr.stories'

const { Default, WithMargin } = composeStories(stories)

describe('Hr', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Default />)
    const hr = container.querySelector('hr')

    expect(hr).toBeInTheDocument()
    expect(hr).toHaveClass('h-px', 'w-full', 'bg-border', 'border-0')
    expect(hr).not.toHaveClass('mb-4')
  })

  it('renders with margin when hasMargin is true', () => {
    const { container } = render(<WithMargin />)
    const hr = container.querySelector('hr')

    expect(hr).toBeInTheDocument()
    expect(hr).toHaveClass('h-px', 'w-full', 'bg-border', 'border-0', 'mb-4')
  })

  it('applies custom className correctly', () => {
    const { container } = render(<Default className='my-custom-class' />)
    const hr = container.querySelector('hr')

    expect(hr).toHaveClass('my-custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Default ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLHRElement)
  })

  it('matches snapshot', () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot()
  })
})
