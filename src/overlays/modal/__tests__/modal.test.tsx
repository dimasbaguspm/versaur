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

  it('opens and closes on trigger and overlay click', () => {
    const { getByText, queryByRole } = render(<Default />)
    fireEvent.click(getByText('Open Modal'))
    expect(queryByRole('dialog')).toBeInTheDocument()
    fireEvent.click(document.querySelector('[role="presentation"]')!)
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on ESC key', () => {
    const { getByText, queryByRole } = render(<Default />)
    fireEvent.click(getByText('Open Modal'))
    expect(queryByRole('dialog')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(queryByRole('dialog')).not.toBeInTheDocument()
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
