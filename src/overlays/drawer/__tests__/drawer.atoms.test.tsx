import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { DrawerContext } from '../context'
import { DrawerHeader, DrawerBody, DrawerFooter } from '../drawer.atoms'
import type { DrawerContextValue } from '../types'

// Mock context value for testing
const mockContextValue: DrawerContextValue = {
  isOpen: false,
  onClose: vi.fn(),
  position: 'right',
  size: 'md',
  disableEscapeKeyDown: false,
  disableOverlayClickToClose: false,
  titleId: 'test-title-id',
  descriptionId: 'test-description-id',
}

// Helper component to provide context
const ContextWrapper = ({
  children,
  contextValue = mockContextValue,
}: {
  children: React.ReactNode
  contextValue?: DrawerContextValue
}) => (
  <DrawerContext.Provider value={contextValue}>
    {children}
  </DrawerContext.Provider>
)

describe('Drawer Atoms', () => {
  describe('DrawerHeader', () => {
    it('renders children correctly', () => {
      render(
        <ContextWrapper>
          <DrawerHeader>Header Content</DrawerHeader>
        </ContextWrapper>
      )

      expect(screen.getByText('Header Content')).toBeInTheDocument()
    })

    it('uses semantic header element', () => {
      const { container } = render(
        <ContextWrapper>
          <DrawerHeader>Header Content</DrawerHeader>
        </ContextWrapper>
      )

      expect(container.querySelector('header')).toBeInTheDocument()
    })
  })

  describe('DrawerBody', () => {
    it('renders children correctly', () => {
      render(
        <ContextWrapper>
          <DrawerBody>Body Content</DrawerBody>
        </ContextWrapper>
      )

      expect(screen.getByText('Body Content')).toBeInTheDocument()
    })

    it('uses semantic main element', () => {
      const { container } = render(
        <ContextWrapper>
          <DrawerBody>Body Content</DrawerBody>
        </ContextWrapper>
      )

      expect(container.querySelector('main')).toBeInTheDocument()
    })

    it('has description ID from context', () => {
      render(
        <ContextWrapper>
          <DrawerBody data-testid='body'>Body Content</DrawerBody>
        </ContextWrapper>
      )

      const body = screen.getByTestId('body')
      expect(body).toHaveAttribute('id', 'test-description-id')
    })
  })

  describe('DrawerFooter', () => {
    it('renders children correctly', () => {
      render(
        <ContextWrapper>
          <DrawerFooter>Footer Content</DrawerFooter>
        </ContextWrapper>
      )

      expect(screen.getByText('Footer Content')).toBeInTheDocument()
    })

    it('uses semantic footer element', () => {
      const { container } = render(
        <ContextWrapper>
          <DrawerFooter>Footer Content</DrawerFooter>
        </ContextWrapper>
      )

      expect(container.querySelector('footer')).toBeInTheDocument()
    })
  })
})
