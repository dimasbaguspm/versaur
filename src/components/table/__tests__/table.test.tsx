import { composeStories } from '@storybook/react'
import * as stories from '../table.stories'
import { render, screen } from '@testing-library/react'

describe('Table', () => {
  const { Basic, Alignment } = composeStories(stories)

  it('renders table structure and content correctly', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Date')).toBeInTheDocument()
    // There are two 'Income' cells (header and body), check at least one exists
    expect(screen.getAllByText('Income').length).toBeGreaterThan(0)
    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(5) // header, 3 body, footer
    expect(screen.getAllByRole('cell').length).toBeGreaterThan(0)
  })

  it('renders alignment correctly for TableColumn', () => {
    render(<Alignment />)
    // Check left, center, right header
    // Header alignment
    const [leftHeader, centerHeader, rightHeader] = [
      ...screen.getAllByText('Left'),
      ...screen.getAllByText('Center'),
      ...screen.getAllByText('Right'),
    ]
    expect(leftHeader.className).toMatch(/text-left/)
    expect(centerHeader.className).toMatch(/text-center/)
    expect(rightHeader.className).toMatch(/text-right/)
    // Check left, center, right body
    // Body alignment
    const [dateCell] = screen.getAllByText('2025-07-01')
    const [centeredCell] = screen.getAllByText('Centered')
    const [rightCell] = screen.getAllByText('$2,000')
    expect(dateCell.className).toMatch(/text-left/)
    expect(centeredCell.className).toMatch(/text-center/)
    expect(rightCell.className).toMatch(/text-right/)
    // Default align (should be left)
    const [defaultLeftCell] = screen.getAllByText('Default (left)')
    expect(defaultLeftCell.className).toMatch(/text-left/)
  })
})
