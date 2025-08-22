import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, expect, it } from 'vitest'
import * as Stories from '../page-content.stories'

const { Default, WithFormElements, WithNoResults, WithSearchAndData } =
  composeStories(Stories)

describe('PageContent', () => {
  it('renders default story correctly', () => {
    const { container } = render(<Default />)
    expect(container.firstChild).toHaveClass(
      'w-full',
      'px-4',
      'sm:px-6',
      'py-6',
      'sm:py-8'
    )
  })

  it('renders with form elements story correctly', () => {
    const { container } = render(<WithFormElements />)
    expect(container.firstChild).toHaveClass(
      'w-full',
      'px-4',
      'sm:px-6',
      'py-6',
      'sm:py-8'
    )
  })

  it('renders minimal story correctly', () => {
    const { container } = render(<WithNoResults />)
    expect(container.firstChild).toHaveClass(
      'w-full',
      'px-4',
      'sm:px-6',
      'py-6',
      'sm:py-8'
    )
  })

  it('renders search and data story correctly', () => {
    const { container } = render(<WithSearchAndData />)
    expect(container.firstChild).toHaveClass(
      'w-full',
      'px-4',
      'sm:px-6',
      'py-6',
      'sm:py-8'
    )
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Default />)
    expect(getByText(/This is the main content area/)).toBeInTheDocument()
    expect(getByText('Card 1')).toBeInTheDocument()
  })

  it('renders NoResults story correctly', () => {
    const { getByText } = render(<WithNoResults />)
    expect(getByText('No Content Yet')).toBeInTheDocument()
    expect(getByText('Get Started')).toBeInTheDocument()
  })

  it('renders form elements story correctly', () => {
    const { getByText } = render(<WithFormElements />)
    expect(getByText('User Settings')).toBeInTheDocument()
    expect(getByText('Save Changes')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const customClass = 'custom-page-content'
    const { container } = render(<Default className={customClass} />)
    expect(container.firstChild).toHaveClass(customClass)
  })

  it('matches snapshot', () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot()
  })

  it('has correct semantic structure', () => {
    const { container } = render(<Default />)
    const element = container.firstChild as HTMLElement
    expect(element.tagName).toBe('DIV')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Default ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
