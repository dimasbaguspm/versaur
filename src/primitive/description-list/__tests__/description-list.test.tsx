import { render, screen } from '@testing-library/react'
import { DescriptionList } from '../description-list'

describe('DescriptionList', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(
      <DescriptionList>
        <DescriptionList.Item>
          <DescriptionList.Term>Name</DescriptionList.Term>
          <DescriptionList.Details>Jane Doe</DescriptionList.Details>
        </DescriptionList.Item>
        <DescriptionList.Item span={6}>
          <DescriptionList.Term>Email</DescriptionList.Term>
          <DescriptionList.Details color='primary'>
            jane@example.com
          </DescriptionList.Details>
        </DescriptionList.Item>
      </DescriptionList>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all terms and details as strings', () => {
    render(
      <DescriptionList>
        <DescriptionList.Item>
          <DescriptionList.Term>Name</DescriptionList.Term>
          <DescriptionList.Details>Jane Doe</DescriptionList.Details>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.Term>Email</DescriptionList.Term>
          <DescriptionList.Details>jane@example.com</DescriptionList.Details>
        </DescriptionList.Item>
      </DescriptionList>
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  })

  it('applies the correct col-span class for span prop', () => {
    render(
      <DescriptionList>
        <DescriptionList.Item span={6}>
          <DescriptionList.Term>Project</DescriptionList.Term>
          <DescriptionList.Details>Versaur UI</DescriptionList.Details>
        </DescriptionList.Item>
      </DescriptionList>
    )
    const item = screen.getByText('Project').closest('div')
    expect(item).toHaveClass('col-span-6')
  })

  it('applies the correct color to details', () => {
    render(
      <DescriptionList>
        <DescriptionList.Item>
          <DescriptionList.Term>Status</DescriptionList.Term>
          <DescriptionList.Details color='success'>
            Active
          </DescriptionList.Details>
        </DescriptionList.Item>
      </DescriptionList>
    )
    expect(screen.getByText('Active')).toBeInTheDocument()
  })
})
