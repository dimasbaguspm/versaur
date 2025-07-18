import { render } from '@testing-library/react'
import { BreadcrumbsItem, BreadcrumbsSeparator } from '../breadcrumbs.atoms'

describe('BreadcrumbsItem', () => {
  it('renders with label and icon', () => {
    const { getByText } = render(
      <BreadcrumbsItem href='/foo' icon={<span data-testid='icon'>*</span>}>
        Foo
      </BreadcrumbsItem>
    )
    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByText('*')).toBeInTheDocument()
  })

  it('sets aria-current when isCurrent', () => {
    const { getByRole } = render(
      <BreadcrumbsItem href='/bar' isCurrent>
        Bar
      </BreadcrumbsItem>
    )
    expect(getByRole('link')).toHaveAttribute('aria-current', 'page')
  })
})

describe('BreadcrumbsSeparator', () => {
  it('renders separator', () => {
    const { getByText } = render(<BreadcrumbsSeparator />)
    expect(getByText('/')).toBeInTheDocument()
  })
})
