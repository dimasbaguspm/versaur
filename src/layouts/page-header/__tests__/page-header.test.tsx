import { render } from '@testing-library/react'
import { PageHeader } from '../index'
import { composeStories } from '@storybook/react'
import * as stories from '../page-header.stories'

const { Default, Complete, Narrow } = composeStories(stories)

describe('PageHeader', () => {
  it('renders correctly', () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })

  it('renders default layout with title and actions', () => {
    const { getByText } = render(<Default />)
    expect(getByText('Dashboard')).toBeInTheDocument()
    expect(getByText('Welcome back, John')).toBeInTheDocument()
    expect(getByText('New Project')).toBeInTheDocument()
  })

  it('renders complete layout with all elements', () => {
    const { getByText } = render(<Complete />)
    expect(getByText('User Management')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('All Users')).toBeInTheDocument()
    expect(getByText('Add User')).toBeInTheDocument()
  })

  it('renders narrow layout with size prop', () => {
    const { getByText } = render(<Narrow />)
    expect(getByText('Account Settings')).toBeInTheDocument()
    expect(getByText('Settings')).toBeInTheDocument()
  })

  it('has correct semantic structure', () => {
    const { container } = render(<Default />)
    const header = container.querySelector('header[role="banner"]')
    expect(header).toBeInTheDocument()
  })

  it('applies size and backgroundColor props correctly', () => {
    const { container } = render(
      <PageHeader
        title='Test'
        size='wide'
        backgroundColor='gray'
        data-testid='header'
      />
    )
    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-neutral')
  })

  it('renders both simplified props and children correctly', () => {
    const { getByText } = render(
      <PageHeader title='Prop Title'>
        <div>Custom Child Content</div>
      </PageHeader>
    )
    expect(getByText('Prop Title')).toBeInTheDocument()
    expect(getByText('Custom Child Content')).toBeInTheDocument()
  })
})
