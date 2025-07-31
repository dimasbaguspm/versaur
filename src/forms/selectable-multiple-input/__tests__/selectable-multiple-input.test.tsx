import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../selectable-multiple-input.stories'

describe('SelectableMultipleInput', () => {
  const { Basic } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
