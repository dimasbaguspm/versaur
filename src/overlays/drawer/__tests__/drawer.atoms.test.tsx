import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { DrawerContext } from '../context'
import {
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '../drawer.atoms'
import type { DrawerContextValue } from '../types'

// Mock context value for testing
const mockContextValue: DrawerContextValue = {
  isOpen: false,
  onClose: vi.fn(),
  position: 'right',
  size: 'md',
  variant: 'default',
  transitionType: 'slide',
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
  describe('DrawerOverlay', () => {
    it('renders with correct class when closed', () => {
      render(
        <ContextWrapper>
          <DrawerOverlay data-testid='overlay' />
        </ContextWrapper>
      )

      const overlay = screen.getByTestId('overlay')
      expect(overlay).toHaveClass('opacity-0', 'pointer-events-none')
    })

    it('renders with correct class when open', () => {
      render(
        <ContextWrapper contextValue={{ ...mockContextValue, isOpen: true }}>
          <DrawerOverlay data-testid='overlay' />
        </ContextWrapper>
      )

      const overlay = screen.getByTestId('overlay')
      expect(overlay).toHaveClass('opacity-100')
    })

    it('calls onClose when clicked', () => {
      const onClose = vi.fn()

      render(
        <ContextWrapper
          contextValue={{
            ...mockContextValue,
            isOpen: true,
            onClose,
          }}
        >
          <DrawerOverlay data-testid='overlay' />
        </ContextWrapper>
      )

      fireEvent.click(screen.getByTestId('overlay'))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('DrawerHeader', () => {
    it('renders children correctly', () => {
      render(
        <ContextWrapper>
          <DrawerHeader>Header Content</DrawerHeader>
        </ContextWrapper>
      )

      expect(screen.getByText('Header Content')).toBeInTheDocument()
    })

    it('applies variant classes correctly', () => {
      render(
        <ContextWrapper
          contextValue={{ ...mockContextValue, variant: 'glass' }}
        >
          <DrawerHeader data-testid='header'>Header Content</DrawerHeader>
        </ContextWrapper>
      )

      const header = screen.getByTestId('header')
      expect(header).toHaveClass('bg-transparent')
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

    it('applies variant classes correctly', () => {
      render(
        <ContextWrapper
          contextValue={{ ...mockContextValue, variant: 'glass' }}
        >
          <DrawerBody data-testid='body'>Body Content</DrawerBody>
        </ContextWrapper>
      )

      const body = screen.getByTestId('body')
      expect(body).toHaveClass('bg-transparent')
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

    it('applies variant classes correctly', () => {
      render(
        <ContextWrapper
          contextValue={{ ...mockContextValue, variant: 'glass' }}
        >
          <DrawerFooter data-testid='footer'>Footer Content</DrawerFooter>
        </ContextWrapper>
      )

      const footer = screen.getByTestId('footer')
      expect(footer).toHaveClass('bg-transparent')
    })
  })
})
