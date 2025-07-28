import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../anchor.stories'

describe('Anchor', () => {
  const {
    Primary,
    PrimaryQuiet,
    Secondary,
    SecondaryQuiet,
    Ghost,
    GhostQuiet,
    Danger,
    DangerQuiet,
    Neutral,
    NeutralQuiet,
    FontUtilities,
  } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    expect(render(<Primary />).asFragment()).toMatchSnapshot()
    expect(render(<PrimaryQuiet />).asFragment()).toMatchSnapshot()
    expect(render(<Secondary />).asFragment()).toMatchSnapshot()
    expect(render(<SecondaryQuiet />).asFragment()).toMatchSnapshot()
    expect(render(<Ghost />).asFragment()).toMatchSnapshot()
    expect(render(<GhostQuiet />).asFragment()).toMatchSnapshot()
    expect(render(<Danger />).asFragment()).toMatchSnapshot()
    expect(render(<DangerQuiet />).asFragment()).toMatchSnapshot()
    expect(render(<Neutral />).asFragment()).toMatchSnapshot()
    expect(render(<NeutralQuiet />).asFragment()).toMatchSnapshot()
  })

  it('renders all color roles and quiet variants', () => {
    expect(render(<Primary />).getByText('Primary Anchor')).toBeInTheDocument()
    expect(
      render(<PrimaryQuiet />).getByText('Primary Quiet Anchor')
    ).toBeInTheDocument()
    expect(
      render(<Secondary />).getByText('Secondary Anchor')
    ).toBeInTheDocument()
    expect(
      render(<SecondaryQuiet />).getByText('Secondary Quiet Anchor')
    ).toBeInTheDocument()
    expect(render(<Ghost />).getByText('Ghost Anchor')).toBeInTheDocument()
    expect(
      render(<GhostQuiet />).getByText('Ghost Quiet Anchor')
    ).toBeInTheDocument()
    expect(render(<Danger />).getByText('Danger Anchor')).toBeInTheDocument()
    expect(
      render(<DangerQuiet />).getByText('Danger Quiet Anchor')
    ).toBeInTheDocument()
    expect(render(<Neutral />).getByText('Neutral Anchor')).toBeInTheDocument()
    expect(
      render(<NeutralQuiet />).getByText('Neutral Quiet Anchor')
    ).toBeInTheDocument()
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

    const { getAllByRole: getAllByRoleQuiet } = render(<PrimaryQuiet />)
    const [, anchorQuiet] = getAllByRoleQuiet('link')
    expect(anchorQuiet).toHaveAttribute('href', '#')
    expect(anchorQuiet).not.toHaveClass('underline')
  })
})
