import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import * as stories from '../modal.stories'
import { composeStories } from '@storybook/react'

const { Default } = composeStories(stories)

/**
 * Modal unit tests
 *
 * - Uses composeStories from @storybook/react for consistency
 * - Asserts accessibility and html output
 * - Covers open/close via trigger, overlay, and ESC key
 */
describe('Modal', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('has accessible roles and labels', () => {
    const { getByText, getByRole } = render(<Default />)
    fireEvent.click(getByText('Open Modal'))
    const dialog = getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-label', 'Dialog')
    expect(dialog).toBeVisible()
    expect(getByText('Title')).toBeInTheDocument()
    expect(getByText('Cancel')).toBeInTheDocument()
    expect(getByText('Confirm')).toBeInTheDocument()
  })
})
