import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, expect, it } from 'vitest'
import * as stories from '../formatted-text.stories'

const {
  Default,
  WithHeadings,
  WithOrderedList,
  WithUnorderedList,
  Scrollable,
} = composeStories(stories)

describe('FormattedText', () => {
  it('should match snapshot for default story', () => {
    const { container } = render(<Default />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render HTML content correctly', () => {
    render(<Default />)
    expect(screen.getByText(/formatted text/i)).toBeInTheDocument()
    expect(screen.getByText(/various/i)).toBeInTheDocument()
  })

  it('should render headings correctly', () => {
    render(<WithHeadings />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Main Heading'
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Section Heading'
    )
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Subsection Heading'
    )
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Subsection Detail'
    )
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      'Minor Heading'
    )
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      'Note Heading'
    )
  })

  it('should render ordered lists correctly', () => {
    const { container } = render(<WithOrderedList />)
    const orderedList = container.querySelector('ol')
    expect(orderedList).toBeInTheDocument()
    expect(orderedList?.querySelectorAll('li')).toHaveLength(3)
  })

  it('should render unordered lists correctly', () => {
    const { container } = render(<WithUnorderedList />)
    const unorderedList = container.querySelector('ul')
    expect(unorderedList).toBeInTheDocument()
    expect(unorderedList?.querySelectorAll('li')).toHaveLength(4)
  })

  it('should render links with correct attributes', () => {
    const { container } = render(<WithHeadings />)
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should apply scrollable styles when scrollable prop is true', () => {
    const { container } = render(<Scrollable />)
    const formattedText = container.firstChild as HTMLElement
    expect(formattedText).toHaveClass('overflow-y-auto')
  })

  it('should apply max height when scrollable and maxHeight are provided', () => {
    const { container } = render(<Scrollable />)
    const formattedText = container.firstChild as HTMLElement
    expect(formattedText).toHaveStyle({ maxHeight: '15rem' })
  })

  it('should have proper accessibility role', () => {
    render(<Default />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <Default {...Default.args} className='custom-class' />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should render bold text correctly', () => {
    const { container } = render(<Default />)
    const strongElement = container.querySelector('strong')
    expect(strongElement).toBeInTheDocument()
    expect(strongElement).toHaveTextContent('formatted text')
  })

  it('should render italic text correctly', () => {
    const { container } = render(<Default />)
    const emElement = container.querySelector('em')
    expect(emElement).toBeInTheDocument()
    expect(emElement).toHaveTextContent('various')
  })

  it('should render underlined text correctly', () => {
    const { container } = render(<Default />)
    const uElement = container.querySelector('u')
    expect(uElement).toBeInTheDocument()
    expect(uElement).toHaveTextContent('formatting')
  })

  it('should render strikethrough text correctly', () => {
    const { container } = render(<Default />)
    const sElement = container.querySelector('s')
    expect(sElement).toBeInTheDocument()
    expect(sElement).toHaveTextContent('options')
  })
})
