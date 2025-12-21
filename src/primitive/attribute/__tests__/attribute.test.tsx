import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../attribute.stories'

const { Default, LongContent } = composeStories(stories)

describe('Attribute', () => {
  it('should render with correct HTML structure', () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot()
  })

  it('should render with long content', () => {
    const { getByText, getByRole } = render(<LongContent />)
    expect(getByRole('heading', { level: 6 })).toHaveTextContent('Description')
    expect(getByText(/This is a longer description/)).toBeInTheDocument()
  })
})
