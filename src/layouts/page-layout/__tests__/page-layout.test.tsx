// ...existing code...
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../page-layout.stories'

describe('PageLayout', () => {
  const {
    Default,
    WideContainer,
    NarrowContainer,
    TwoColumn,
    TwoColumnAsymmetricLeft,
    TwoColumnAsymmetricRight,
    GrayBackground,
  } = composeStories(stories)

  it('renders default layout and matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/sample content/i)).toBeInTheDocument()
  })

  it('renders wide container layout and matches snapshot', () => {
    const { asFragment } = render(<WideContainer />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Wide Container Content/)).toBeInTheDocument()
  })

  it('renders narrow container layout and matches snapshot', () => {
    const { asFragment } = render(<NarrowContainer />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Narrow Container Content/)).toBeInTheDocument()
  })

  it('renders two column layout and matches snapshot', () => {
    const { asFragment } = render(<TwoColumn />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Column 1/)).toBeInTheDocument()
    expect(screen.getByText(/Column 2/)).toBeInTheDocument()
  })

  it('renders two column asymmetric left layout and matches snapshot', () => {
    const { asFragment } = render(<TwoColumnAsymmetricLeft />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Main Content \(Wider\)/)).toBeInTheDocument()
    expect(screen.getByText(/Sidebar/)).toBeInTheDocument()
  })

  it('renders two column asymmetric right layout and matches snapshot', () => {
    const { asFragment } = render(<TwoColumnAsymmetricRight />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Main Content \(Wider\)/)).toBeInTheDocument()
    expect(screen.getByText(/Sidebar/)).toBeInTheDocument()
  })

  it('renders gray background layout and matches snapshot', () => {
    const { asFragment } = render(<GrayBackground />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Content on Gray Background/)).toBeInTheDocument()
  })
})
