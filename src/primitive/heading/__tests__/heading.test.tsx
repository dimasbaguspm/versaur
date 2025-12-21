import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../heading.stories'

describe('Heading', () => {
  const {
    Default,
    PrimaryWithFeatures,
    SecondaryWithClamp,
    TertiaryWithEllipsis,
    SuccessHeading,
    WarningCapitalize,
    DangerItalicUnderline,
    AllLevels,
    ColorVariants,
    AlignmentVariants,
  } = composeStories(stories)

  it('renders default heading correctly', () => {
    const { getByText } = render(<Default />)
    const el = getByText('Default Heading')
    expect(el.tagName).toBe('H1')
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-2xl')
    expect(el.className).toContain('leading-loose')
    expect(el.className).toContain('text-ghost')
  })

  it('renders primary heading with all features', () => {
    const { getByText } = render(<PrimaryWithFeatures />)
    const el = getByText(
      /Primary Heading: Underline, Capitalize, Center, Margin/i
    )
    expect(el.tagName).toBe('H1')
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-2xl')
    expect(el.className).toContain('leading-loose')
    expect(el.className).toContain('text-primary')
    expect(el.className).toContain('underline')
    expect(el.className).toContain('capitalize')
    expect(el.className).toContain('text-center')
    expect(el.className).toContain('mb-4')
  })

  it('renders secondary heading with clamp and right alignment', () => {
    const { getByText } = render(<SecondaryWithClamp />)
    const el = getByText(/Secondary Heading: Right aligned with line clamp/i)
    expect(el.tagName).toBe('H2')
    expect(el.className).toContain('font-semibold')
    expect(el.className).toContain('text-2xl')
    expect(el.className).toContain('leading-relaxed')
    expect(el.className).toContain('text-secondary')
    expect(el.className).toContain('text-right')
    expect(el.className).toContain('line-clamp-2')
    expect(el.className).toContain('mb-4')
  })

  it('renders tertiary heading with ellipsis and underline', () => {
    const { getByText } = render(<TertiaryWithEllipsis />)
    const el = getByText(/Tertiary Heading: This is a very long text/i)
    expect(el.tagName).toBe('H3')
    expect(el.className).toContain('font-medium')
    expect(el.className).toContain('text-2xl')
    expect(el.className).toContain('leading-relaxed')
    expect(el.className).toContain('text-tertiary')
    expect(el.className).toContain('truncate')
    expect(el.className).toContain('underline')
    expect(el.className).toContain('mb-4')
  })

  it('renders success heading correctly', () => {
    const { getByText } = render(<SuccessHeading />)
    const el = getByText(/Success Heading/i)
    expect(el.tagName).toBe('H4')
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-xl')
    expect(el.className).toContain('leading-normal')
    expect(el.className).toContain('text-success')
    expect(el.className).toContain('mb-4')
  })

  it('renders warning heading with capitalize and justify alignment', () => {
    const { getByText } = render(<WarningCapitalize />)
    const el = getByText(/warning heading with capitalize and justify/i)
    expect(el.tagName).toBe('H5')
    expect(el.className).toContain('font-semibold')
    expect(el.className).toContain('text-lg')
    expect(el.className).toContain('leading-normal')
    expect(el.className).toContain('text-warning')
    expect(el.className).toContain('capitalize')
    expect(el.className).toContain('text-justify')
    expect(el.className).toContain('mb-4')
  })

  it('renders danger heading with italic and underline', () => {
    const { getByText } = render(<DangerItalicUnderline />)
    const el = getByText(/Danger Heading: Uppercase and Underlined/i)
    expect(el.tagName).toBe('H6')
    expect(el.className).toContain('font-medium')
    expect(el.className).toContain('text-base')
    expect(el.className).toContain('leading-normal')
    expect(el.className).toContain('text-danger')
    expect(el.className).toContain('uppercase')
    expect(el.className).toContain('underline')
    expect(el.className).toContain('mb-4')
  })

  it('renders all heading levels correctly', () => {
    const { container } = render(<AllLevels />)
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    expect(headings).toHaveLength(6)

    // Check each heading level
    expect(container.querySelector('h1')).toHaveTextContent(
      'H1 Heading - Primary Color'
    )
    expect(container.querySelector('h2')).toHaveTextContent(
      'H2 Heading - Secondary Color'
    )
    expect(container.querySelector('h3')).toHaveTextContent(
      'H3 Heading - Tertiary Color'
    )
    expect(container.querySelector('h4')).toHaveTextContent(
      'H4 Heading - Success Color'
    )
    expect(container.querySelector('h5')).toHaveTextContent(
      'H5 Heading - Warning Color'
    )
    expect(container.querySelector('h6')).toHaveTextContent(
      'H6 Heading - Danger Color'
    )
  })

  it('renders color variants correctly', () => {
    const { container } = render(<ColorVariants />)
    const headings = container.querySelectorAll('h3')
    expect(headings).toHaveLength(9)

    // Check color classes
    expect(headings[0]).toHaveClass('text-primary')
    expect(headings[1]).toHaveClass('text-secondary')
    expect(headings[2]).toHaveClass('text-tertiary')
    expect(headings[3]).toHaveClass('text-ghost')
    expect(headings[4]).toHaveClass('text-ghost') // neutral maps to ghost
    expect(headings[5]).toHaveClass('text-success')
    expect(headings[6]).toHaveClass('text-info')
    expect(headings[7]).toHaveClass('text-warning')
    expect(headings[8]).toHaveClass('text-danger')
  })

  it('renders alignment variants correctly', () => {
    const { container } = render(<AlignmentVariants />)
    const headings = container.querySelectorAll('h3')
    expect(headings).toHaveLength(4)

    // Check alignment classes
    expect(headings[0]).toHaveClass('text-left')
    expect(headings[1]).toHaveClass('text-center')
    expect(headings[2]).toHaveClass('text-right')
    expect(headings[3]).toHaveClass('text-justify')
  })

  it('matches snapshot', () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for primary with all features', () => {
    expect(render(<PrimaryWithFeatures />).asFragment()).toMatchSnapshot()
  })
})
