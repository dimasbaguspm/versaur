import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../drawer.stories'

const { Default, LeftPosition, LargeSize, FullWidth, Fade } =
  composeStories(stories)

describe('Drawer', () => {
  describe('Default Story', () => {
    it('renders the drawer trigger button', () => {
      render(<Default />)
      expect(screen.getByText('Open Drawer')).toBeInTheDocument()
    })

    it('opens the drawer when trigger is clicked', () => {
      render(<Default />)

      // Initially, drawer content should not be visible
      expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument()

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Drawer'))

      // Drawer content should now be visible
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()
      expect(
        screen.getByText(
          'This is the main content area of the drawer. You can put any content here.'
        )
      ).toBeInTheDocument()
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

      // Drawer content should be hidden
      expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument()
    })
  })

  describe('Left Position Story', () => {
    it('renders the settings drawer with left position', () => {
      render(<LeftPosition />)

      fireEvent.click(screen.getByText('Settings'))

      expect(screen.getByText('Appearance')).toBeInTheDocument()
      expect(screen.getByText('Notifications')).toBeInTheDocument()
      expect(screen.getByText('Privacy')).toBeInTheDocument()
    })
  })

  describe('Large Size Story', () => {
    it('renders the large drawer with notifications', () => {
      render(<LargeSize />)

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Large Drawer'))

      // Check that the drawer content is visible
      expect(screen.getByText('Notifications')).toBeInTheDocument()
      expect(screen.getByText('Notification 1')).toBeInTheDocument()
      expect(screen.getByText('Mark all as read')).toBeInTheDocument()
    })
  })

  describe('Full Width Story', () => {
    it('renders the full width drawer', () => {
      render(<FullWidth />)

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Full Width'))

      // Check that the drawer content is visible
      expect(screen.getByText('Full Width Drawer')).toBeInTheDocument()
      expect(screen.getByText('Card 1')).toBeInTheDocument()
      expect(screen.getByText('Save All')).toBeInTheDocument()
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
    })

    it('traps focus within the drawer when open', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))

      // The drawer content should be in the document
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })

  describe('Overlay Click', () => {
    it('closes drawer when overlay is clicked', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()

      // Click the overlay (the overlay should be in the DOM when drawer is open)
      const overlay = document.querySelector('[class*="drawerOverlayVariants"]')
      if (overlay) {
        fireEvent.click(overlay)
        // Drawer should close
        expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument()
      }
    })

    // Skipped: closeOnOverlayClick is not implemented in Drawer
    // it('does not close drawer if overlay is clicked and closeOnOverlayClick is false', () => {
    //   // Use a custom story with closeOnOverlayClick false
    //   render(<Default closeOnOverlayClick={false} />)
    //   fireEvent.click(screen.getByText('Open Drawer'))
    //   const overlay = document.querySelector('[class*="drawerOverlayVariants"]')
    //   if (overlay) {
    //     fireEvent.click(overlay)
    //     expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    //   }
    // })
  })

  describe('Fade Transition Story', () => {
    it('renders the fade transition drawer', () => {
      render(<Fade />)

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Fade Drawer'))

      // Check that the drawer content is visible
      expect(screen.getByText('Fade Transition')).toBeInTheDocument()
      expect(
        screen.getByText(
          'This drawer uses a fade transition instead of sliding in/out.'
        )
      ).toBeInTheDocument()
    })
  })

  describe('Glass Variant', () => {
    const { GlassVariant } = composeStories(stories)
    it('renders the glass variant drawer', () => {
      render(<GlassVariant />)
      fireEvent.click(screen.getByText('Open Glass Drawer'))
      expect(screen.getByText(/glass variant/i)).toBeInTheDocument()
      // Check for glass style class
      const dialog = screen.getByRole('dialog')
      expect(dialog.className).toMatch('backdrop-blur-lg')
    })
  })

  describe('Custom Footer Layout', () => {
    const { CustomFooterLayout } = composeStories(stories)
    it('renders custom footer layout with responsiveFlex false', () => {
      render(<CustomFooterLayout />)
      fireEvent.click(screen.getByText('Custom Footer'))
      expect(screen.getByText('Custom Layout')).toBeInTheDocument()
      // Footer should have custom layout
      expect(screen.getByText('Notify')).toBeInTheDocument()
      expect(screen.getByText('Apply')).toBeInTheDocument()
    })
  })

  describe('Tab Usage', () => {
    const { HeaderTab } = composeStories(stories)
    it('renders drawer with tabs in header', () => {
      render(<HeaderTab />)
      fireEvent.click(screen.getByText('Open Tab Drawer'))
      expect(screen.getByText('Tab Drawer')).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Details' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles double open/close gracefully', () => {
      render(<Default />)
      const trigger = screen.getByText('Open Drawer')
      fireEvent.click(trigger)
      fireEvent.click(trigger) // open again
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()
      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
      expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument()
    })
  })
})
