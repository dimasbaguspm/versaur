import { render } from '@testing-library/react'
import { PageHeader } from '../index'
import { composeStories } from '@storybook/react'
import * as stories from '../page-header.stories'

const { Simple, Complete, Minimal } = composeStories(stories)

describe('PageHeader', () => {
  it('renders correctly with simple props', () => {
    const { container, getByText } = render(<Simple />)
    expect(getByText('Dashboard')).toBeInTheDocument()
    expect(getByText('Welcome back, John')).toBeInTheDocument()
    expect(getByText('New Project')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders complete layout with all elements', () => {
    const { container, getByText } = render(<Complete />)
    expect(getByText('User Management')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('All Users')).toBeInTheDocument()
    expect(getByText('Add User')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders minimal layout', () => {
    const { container, getByText } = render(<Minimal />)
    expect(getByText('Simple Page')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('has correct semantic structure', () => {
    const { container } = render(<Simple />)
    const header = container.querySelector('header[role="banner"]')
    expect(header).toBeInTheDocument()
  })

  it('renders both compound children and simplified props correctly', () => {
    const { getByText } = render(
      <PageHeader title='Prop Title'>
        <div>Custom Child Content</div>
      </PageHeader>
    )
    expect(getByText('Prop Title')).toBeInTheDocument()
    expect(getByText('Custom Child Content')).toBeInTheDocument()
  })
})
