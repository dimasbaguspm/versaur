import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../attribute.stories'

const { Default, Spans, TwoColumns, SixColumns } = composeStories(stories)

describe('AttributeList', () => {
  it('should render default AttributeList with correct HTML structure', () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot()
  })

  it('should render AttributeList with spans', () => {
    const { getAllByRole } = render(<Spans />)
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(6)

    const headings = getAllByRole('heading', { level: 6 })
    expect(headings[0]).toHaveTextContent('Full Width Description')
    expect(headings[1]).toHaveTextContent('Name')
    expect(headings[2]).toHaveTextContent('Email')
  })

  it('should render two-column AttributeList', () => {
    const { getByRole, getAllByRole } = render(<TwoColumns />)
    const list = getByRole('list')
    expect(list).toHaveClass('grid-cols-2')

    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(5)
  })

  it('should render six-column AttributeList', () => {
    const { getByRole, getAllByRole } = render(<SixColumns />)
    const list = getByRole('list')
    expect(list).toHaveClass('grid-cols-6')

    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(6)
  })

  it('should apply correct span classes', () => {
    const { getAllByRole } = render(<Spans />)
    const listItems = getAllByRole('listitem')

    // First item should span 4 columns
    expect(listItems[0]).toHaveClass('col-span-4')
    // Second and third items should span 2 columns each
    expect(listItems[1]).toHaveClass('col-span-2')
    expect(listItems[2]).toHaveClass('col-span-2')
    // Fourth and fifth items should span 1 column each
    expect(listItems[3]).toHaveClass('col-span-1')
    expect(listItems[4]).toHaveClass('col-span-1')
  })

  it('should have proper semantic structure', () => {
    const { getByRole, getAllByRole } = render(<Default />)

    // Should render as a list
    expect(getByRole('list')).toBeInTheDocument()

    // Should have list items
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(4)

    // Each list item should contain a heading and paragraph
    listItems.forEach(listItem => {
      const heading = listItem.querySelector('h6')
      const paragraph = listItem.querySelector('small')
      expect(heading).toBeInTheDocument()
      expect(paragraph).toBeInTheDocument()
    })
  })
})
