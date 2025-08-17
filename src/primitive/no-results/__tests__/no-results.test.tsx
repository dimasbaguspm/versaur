import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { composeStories } from '@storybook/react'
import { SearchIcon } from 'lucide-react'
import { NoResults } from '../no-results'
import * as stories from '../no-results.stories'

const { Default, WithSubtitleAndAction, SearchEmpty } = composeStories(stories)

describe('NoResults', () => {
  it('should render correctly with default props', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render icon, title, subtitle, and action when all props provided', () => {
    render(<WithSubtitleAndAction />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'No results found'
    )
    expect(
      screen.getByText(
        "We couldn't find any items matching your search criteria."
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Clear Search' })
    ).toBeInTheDocument()
  })

  it('should render only required props when optional props are not provided', () => {
    render(<NoResults icon={SearchIcon} title='No items found' />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'No items found'
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<SearchEmpty />)

    const section = screen.getByRole('status')
    expect(section).toHaveAttribute('aria-label', 'No results found')

    const iconContainer = screen.getByLabelText('No results found')
    expect(iconContainer.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    )

    const actionGroup = screen.getByRole('group', { name: 'Available actions' })
    expect(actionGroup).toBeInTheDocument()
  })

  it('should forward ref correctly', () => {
    const ref = { current: null as HTMLElement | null }
    render(<NoResults ref={ref} icon={SearchIcon} title='Test title' />)

    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('SECTION')
  })

  it('should apply custom className', () => {
    render(
      <NoResults
        icon={SearchIcon}
        title='Test title'
        className='custom-class'
      />
    )

    const section = screen.getByRole('status')
    expect(section).toHaveClass('custom-class')
  })

  it('should not render subtitle section when subtitle is not provided', () => {
    render(<NoResults icon={SearchIcon} title='Test title' />)

    // Should only have the header with icon and title, no subtitle paragraph
    const paragraphs = screen.queryAllByText(
      (_, element) => element?.tagName === 'P'
    )
    expect(paragraphs).toHaveLength(0)
  })

  it('should not render action group when action is not provided', () => {
    render(<NoResults icon={SearchIcon} title='Test title' />)

    expect(screen.queryByRole('group')).not.toBeInTheDocument()
  })
})
