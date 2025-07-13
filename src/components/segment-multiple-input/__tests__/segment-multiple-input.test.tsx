import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { SegmentMultipleInput } from '../segment-multiple-input'
import * as stories from '../segment-multiple-input.stories'

const { Default, MultipleSelected, WithError, Disabled } =
  composeStories(stories)

describe('SegmentMultipleInput', () => {
  describe('Basic Functionality', () => {
    it('renders with label and helper text', () => {
      render(<Default />)

      expect(screen.getByText('Content Preferences')).toBeInTheDocument()
      expect(
        screen.getByText("Select all types of content you're interested in")
      ).toBeInTheDocument()
    })

    it('renders all option children', () => {
      render(<Default />)

      expect(screen.getByText('Technology')).toBeInTheDocument()
      expect(screen.getByText('Design')).toBeInTheDocument()
      expect(screen.getByText('Business')).toBeInTheDocument()
      expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    })

    it('shows initial selected values', () => {
      render(<Default />)

      const techCheckbox = screen.getByRole('checkbox', { name: 'Technology' })
      expect(techCheckbox).toBeChecked()
    })
  })

  describe('Multiple Selection', () => {
    it('allows multiple options to be selected', () => {
      render(<MultipleSelected />)

      const jsCheckbox = screen.getByRole('checkbox', { name: 'JavaScript' })
      const pythonCheckbox = screen.getByRole('checkbox', { name: 'Python' })
      const tsCheckbox = screen.getByRole('checkbox', { name: 'TypeScript' })

      expect(jsCheckbox).toBeChecked()
      expect(pythonCheckbox).toBeChecked()
      expect(tsCheckbox).toBeChecked()
    })

    it('can select additional options', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SegmentMultipleInput
          name='test-preferences'
          value={['tech']}
          onChange={handleChange}
        >
          <SegmentMultipleInput.Option value='tech'>
            Technology
          </SegmentMultipleInput.Option>
          <SegmentMultipleInput.Option value='design'>
            Design
          </SegmentMultipleInput.Option>
        </SegmentMultipleInput>
      )

      const designOption = screen.getByText('Design')
      await user.click(designOption)

      expect(handleChange).toHaveBeenCalledWith(['tech', 'design'])
    })

    it('can unselect selected options', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SegmentMultipleInput
          name='test-preferences'
          value={['tech', 'design']}
          onChange={handleChange}
        >
          <SegmentMultipleInput.Option value='tech'>
            Technology
          </SegmentMultipleInput.Option>
          <SegmentMultipleInput.Option value='design'>
            Design
          </SegmentMultipleInput.Option>
        </SegmentMultipleInput>
      )

      const techOption = screen.getByText('Technology')
      await user.click(techOption)

      expect(handleChange).toHaveBeenCalledWith(['design'])
    })

    it('handles empty initial value', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SegmentMultipleInput
          name='test-preferences'
          value={[]}
          onChange={handleChange}
        >
          <SegmentMultipleInput.Option value='tech'>
            Technology
          </SegmentMultipleInput.Option>
        </SegmentMultipleInput>
      )

      const techOption = screen.getByText('Technology')
      await user.click(techOption)

      expect(handleChange).toHaveBeenCalledWith(['tech'])
    })
  })

  describe('Error State', () => {
    it('displays error message', () => {
      render(<WithError />)

      expect(
        screen.getByText('You must select at least one option')
      ).toBeInTheDocument()
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('applies error styling to the segment group', () => {
      render(<WithError />)

      // Find the segment group container that should have error border styling
      const segmentGroups = document.querySelectorAll(
        '[class*="border-danger"]'
      )
      expect(segmentGroups.length).toBeGreaterThan(0)
    })
  })

  describe('Disabled State', () => {
    it('disables all options when component is disabled', () => {
      render(<Disabled />)

      const checkboxes = screen.getAllByRole('checkbox')
      checkboxes.forEach(checkbox => {
        expect(checkbox).toBeDisabled()
      })
    })

    it('does not trigger onChange when disabled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SegmentMultipleInput
          name='test-disabled'
          disabled
          value={['option2']}
          onChange={handleChange}
        >
          <SegmentMultipleInput.Option value='option1'>
            Option 1
          </SegmentMultipleInput.Option>
          <SegmentMultipleInput.Option value='option2'>
            Option 2
          </SegmentMultipleInput.Option>
        </SegmentMultipleInput>
      )

      const option = screen.getByText('Option 1')
      await user.click(option)

      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('uses checkbox input type for multiple selection', () => {
      render(<Default />)

      const checkboxes = screen.getAllByRole('checkbox')
      expect(checkboxes).toHaveLength(4)
    })

    it('associates labels with inputs correctly', () => {
      render(<Default />)

      const techCheckbox = screen.getByRole('checkbox', { name: 'Technology' })
      expect(techCheckbox).toBeInTheDocument()
    })

    it('uses proper name attributes for form submission', () => {
      render(<Default />)

      const checkboxes = screen.getAllByRole('checkbox')
      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAttribute('name', 'content-preferences[]')
      })
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<Default />)

      const firstCheckbox = screen.getByRole('checkbox', { name: 'Technology' })

      // Focus first checkbox
      await user.tab()
      expect(firstCheckbox).toHaveFocus()

      // Toggle with space
      await user.keyboard(' ')
      // Since it starts checked, it should now be unchecked
      expect(firstCheckbox).not.toBeChecked()
    })
  })

  describe('Form Integration', () => {
    it('includes value in form data when selected', () => {
      render(<Default />)

      const techCheckbox = screen.getByRole('checkbox', { name: 'Technology' })
      expect(techCheckbox).toHaveAttribute('value', 'tech')
      expect(techCheckbox).toBeChecked()
    })

    it('excludes value from form data when not selected', () => {
      render(<Default />)

      const designCheckbox = screen.getByRole('checkbox', { name: 'Design' })
      expect(designCheckbox).toHaveAttribute('value', 'design')
      expect(designCheckbox).not.toBeChecked()
    })
  })
})
