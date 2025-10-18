import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../drawer.stories'

const { Default, LeftPosition, LargeSize, WithTabs } = composeStories(stories)

describe('Drawer', () => {
  describe('Default Story', () => {
    it('renders the drawer trigger button', () => {
      render(<Default />)
      expect(screen.getByText('Open Drawer')).toBeInTheDocument()
    })

    it('opens the drawer when trigger is clicked', () => {
      render(<Default />)

      // Initially, drawer should be hidden (use querySelector since aria-hidden=true makes it inaccessible)
      const initialDialog = document.querySelector('[role="dialog"]')
      expect(initialDialog).toHaveAttribute('aria-hidden', 'true')

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Drawer'))

      // Drawer should now be visible with proper ARIA attributes
      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
      expect(dialog).toHaveAttribute('aria-modal', 'true')
      expect(dialog).toHaveAttribute('aria-hidden', 'false')
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    })

    it('uses semantic HTML elements', () => {
      render(<Default />)
      fireEvent.click(screen.getByText('Open Drawer'))

      const dialog = screen.getByRole('dialog')

      // Check for semantic elements
      expect(dialog.querySelector('header')).toBeInTheDocument()
      expect(dialog.querySelector('main')).toBeInTheDocument()
      expect(dialog.querySelector('footer')).toBeInTheDocument()
    })

    it('has proper ARIA labeling', () => {
      render(<Default />)
      fireEvent.click(screen.getByText('Open Drawer'))

      const dialog = screen.getByRole('dialog')
      const titleId = dialog.getAttribute('aria-labelledby')
      const descriptionId = dialog.getAttribute('aria-describedby')

      expect(titleId).toBeTruthy()
      expect(descriptionId).toBeTruthy()

      // Verify the IDs match actual elements
      expect(document.getElementById(titleId!)).toBeInTheDocument()
      expect(document.getElementById(descriptionId!)).toBeInTheDocument()
    })

    it('matches snapshot when open', () => {
      const { asFragment } = render(<Default />)
      fireEvent.click(screen.getByText('Open Drawer'))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })

    it('closes the drawer when escape key is pressed', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()

      // Press escape key
      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })

      // Drawer should close (use querySelector since aria-hidden=true makes it inaccessible)
      const dialog = document.querySelector('[role="dialog"]')
      expect(dialog).toHaveAttribute('aria-hidden', 'true')
    })

    it('closes when close button is clicked', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()

      // Click close button
      const closeButton = screen.getByLabelText('Close drawer')
      fireEvent.click(closeButton)

      // Drawer should close (use querySelector since aria-hidden=true makes it inaccessible)
      const dialog = document.querySelector('[role="dialog"]')
      expect(dialog).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Left Position Story', () => {
    it('renders the left position drawer', () => {
      render(<LeftPosition />)

      // Click the trigger button
      fireEvent.click(screen.getByRole('button', { name: 'Settings' }))

      // Check that the drawer content is visible
      expect(
        screen.getByRole('heading', { name: 'Settings' })
      ).toBeInTheDocument()
      expect(screen.getByText('Appearance')).toBeInTheDocument()
    })
  })

  describe('Large Size Story', () => {
    it('renders the large size drawer with scrollable content', () => {
      render(<LargeSize />)

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Notifications'))

      // Check that the drawer content is visible
      expect(screen.getByText('Notifications')).toBeInTheDocument()
      expect(screen.getByText('Notification 1')).toBeInTheDocument()
      expect(screen.getByText('Mark all as read')).toBeInTheDocument()
    })
  })

  describe('With Tabs Story', () => {
    it('renders the drawer with tabs', () => {
      render(<WithTabs />)

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Tabbed Drawer'))

      // Check that the drawer content is visible
      expect(screen.getByText('Tabbed Content')).toBeInTheDocument()
      expect(screen.getByText('Details')).toBeInTheDocument()
      expect(screen.getByText('Settings')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))

      // Check ARIA attributes
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-modal', 'true')
      expect(dialog).toHaveAttribute('aria-labelledby')
      expect(dialog).toHaveAttribute('aria-describedby')
    })

    it('has overlay with aria-hidden', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))

      // Check overlay has aria-hidden (overlay is the first child of the portal container)
      const portalContainer = document.querySelector('.fixed.z-50.inset-0')
      const overlay = portalContainer?.querySelector('[aria-hidden="true"]')
      expect(overlay).toBeInTheDocument()
      expect(overlay).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Overlay Click', () => {
    it('closes drawer when overlay is clicked', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      let dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-hidden', 'false')

      // Click the overlay (first div with backdrop-blur class)
      const overlay = document.querySelector('.backdrop-blur-md')
      if (overlay) {
        fireEvent.click(overlay)

        // Drawer should close (use querySelector since aria-hidden=true makes it inaccessible)
        dialog = document.querySelector('[role="dialog"]') as HTMLElement
        expect(dialog).toHaveAttribute('aria-hidden', 'true')
      }
    })
  })
})
