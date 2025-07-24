import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../anchor.stories'

describe('Anchor', () => {
  const { Primary, Secondary, Ghost, Danger, Neutral, FontUtilities } =
    composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Primary />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all color roles', () => {
    expect(render(<Primary />).getByText('Primary Anchor')).toBeInTheDocument()
    expect(
      render(<Secondary />).getByText('Secondary Anchor')
    ).toBeInTheDocument()
    expect(render(<Ghost />).getByText('Ghost Anchor')).toBeInTheDocument()
    expect(render(<Danger />).getByText('Danger Anchor')).toBeInTheDocument()
    expect(render(<Neutral />).getByText('Neutral Anchor')).toBeInTheDocument()
  })

  it('renders font utilities', () => {
    const { getByText } = render(<FontUtilities />)
    expect(getByText('Small')).toHaveClass('text-sm')
    expect(getByText('Small')).toHaveClass('font-normal')
    expect(getByText('Medium')).toHaveClass('text-base')
    expect(getByText('Medium')).toHaveClass('font-medium')
    expect(getByText('Large')).toHaveClass('text-lg')
    expect(getByText('Large')).toHaveClass('font-bold')
  })

  it('has accessible role and attributes', () => {
    const { getByRole } = render(<Primary />)
    const anchor = getByRole('link')
    expect(anchor).toHaveAttribute('href', '#')
    expect(anchor).toHaveClass('underline')
  })
})
