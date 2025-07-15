import * as stories from '../loading-indicator.stories'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'

describe('LoadingIndicator', () => {
  const { SpinnerVariants, BarVariants } = composeStories(stories)

  it('renders all spinner colors', () => {
    render(<SpinnerVariants />)
    expect(screen.getByLabelText('Loading spinner primary')).toBeInTheDocument()
    expect(
      screen.getByLabelText('Loading spinner secondary')
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Loading spinner tertiary')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Loading spinner success')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading spinner info')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading spinner danger')).toBeInTheDocument()
  })

  it('renders all bar colors', () => {
    render(<BarVariants />)
    expect(screen.getByLabelText('Loading bar primary')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading bar secondary')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading bar tertiary')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading bar success')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading bar info')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading bar danger')).toBeInTheDocument()
  })

  it('matches spinner snapshot', () => {
    const { asFragment } = render(<SpinnerVariants />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches bar snapshot', () => {
    const { asFragment } = render(<BarVariants />)
    expect(asFragment()).toMatchSnapshot()
  })
})
