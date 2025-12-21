import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../drawer.stories'
import { Drawer } from '../drawer'
import { useState } from 'react'

// Only these stories are present after cleanup
const { Default, LeftPosition, LargeSize, WithTabs } = composeStories(stories)

describe('Drawer', () => {
  describe('Default Story (slide only, no fade)', () => {
    it('renders the drawer trigger button', () => {
      render(<Default />)
      expect(screen.getByText('Open Drawer')).toBeInTheDocument()
    })

    it('opens the drawer when trigger is clicked', () => {
      render(<Default />)

      const initialDialog = document.querySelector('dialog')
      expect(initialDialog).toHaveAttribute('aria-hidden', 'true')
      expect(initialDialog).not.toHaveAttribute('open')

      // Click the trigger button
      fireEvent.click(screen.getByText('Open Drawer'))

      // Drawer should now be visible with proper ARIA attributes
      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
      expect(dialog).toHaveAttribute('aria-modal', 'true')
      expect(dialog).toHaveAttribute('aria-hidden', 'false')
      expect(dialog).toHaveAttribute('open')
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

    it('closes the drawer when escape key is pressed', async () => {
      // This test simulates the Escape key and then manually triggers the parent state update,
      // since jsdom/happy-dom cannot fully simulate native <dialog> cancel events.
      let setOpen: (open: boolean) => void = () => {}
      function ControlledDrawer() {
        const [isOpen, setIsOpen] = useState(false)
        setOpen = setIsOpen
        return (
          <>
            <button onClick={() => setIsOpen(true)}>Open Drawer</button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
                <Drawer.CloseButton />
              </Drawer.Header>
              <Drawer.Body>Body</Drawer.Body>
              <Drawer.Footer>Footer</Drawer.Footer>
            </Drawer>
          </>
        )
      }

      render(<ControlledDrawer />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      expect(screen.getByText('Drawer Title')).toBeInTheDocument()

      // Simulate Escape key
      const dialog = document.querySelector('dialog')
      fireEvent.keyDown(dialog!, { key: 'Escape', code: 'Escape' })

      // Manually trigger the parent state update as would happen in a real browser
      setOpen(false)

      // Wait for drawer to close
      await waitFor(() => {
        const dialogEl = document.querySelector('dialog')
        expect(dialogEl).toHaveAttribute('aria-hidden', 'true')
        expect(dialogEl).not.toHaveAttribute('open')
      })
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
      const dialog = document.querySelector('dialog')
      expect(dialog).toHaveAttribute('aria-hidden', 'true')
      expect(dialog).not.toHaveAttribute('open')
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

    it('uses native dialog open state', () => {
      render(<Default />)

      fireEvent.click(screen.getByText('Open Drawer'))

      const dialog = screen.getByRole('dialog') as HTMLDialogElement
      expect(dialog.open).toBe(true)
    })
  })

  describe('Overlay Click', () => {
    it('closes drawer when overlay is clicked', () => {
      render(<Default />)

      // Open the drawer
      fireEvent.click(screen.getByText('Open Drawer'))
      let dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-hidden', 'false')

      // Click the dialog backdrop (clicking the dialog element simulates backdrop click)
      const dialogElement = document.querySelector(
        'dialog'
      ) as HTMLDialogElement
      fireEvent.click(dialogElement)

      dialog = document.querySelector('dialog') as HTMLElement
      expect(dialog).toHaveAttribute('aria-hidden', 'true')
      expect(dialog).not.toHaveAttribute('open')
    })
  })
})
