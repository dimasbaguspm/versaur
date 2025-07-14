import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { composeStories } from '@storybook/react'
import * as AlertStories from '../alert.stories'

// Compose stories for testing
const {
  Default,
  RecordNotAvailable,
  Success,
  Warning,
  Info,
  OutlineVariants,
  AllColors,
  WithoutIcon,
} = composeStories(AlertStories)

describe('Alert Component', () => {
  describe('Basic functionality', () => {
    it('renders default alert correctly', () => {
      render(<Default />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(
        screen.getByText('This is a general information message.')
      ).toBeInTheDocument()
    })

    it('renders record not available alert', () => {
      render(<RecordNotAvailable />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText(/Record Not Available/)).toBeInTheDocument()
      expect(
        screen.getByText(/The requested record could not be found/)
      ).toBeInTheDocument()
    })

    it('renders success alert', () => {
      render(<Success />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText(/Success/)).toBeInTheDocument()
      expect(
        screen.getByText(/Your data has been saved successfully/)
      ).toBeInTheDocument()
    })

    it('renders warning alert', () => {
      render(<Warning />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText(/Warning/)).toBeInTheDocument()
      expect(
        screen.getByText(/Please review your input before continuing/)
      ).toBeInTheDocument()
    })

    it('renders info alert', () => {
      render(<Info />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText(/System Update/)).toBeInTheDocument()
      expect(
        screen.getByText(/A system update will be performed tonight/)
      ).toBeInTheDocument()
    })
  })

  describe('Variants and styling', () => {
    it('renders outline variants correctly', () => {
      render(<OutlineVariants />)

      // Check for multiple alerts in outline variant
      const alerts = screen.getAllByRole('alert')
      expect(alerts).toHaveLength(3)
    })

    it('renders all color variations', () => {
      render(<AllColors />)

      // Check for all color variants
      const alerts = screen.getAllByRole('alert')
      expect(alerts).toHaveLength(5)
    })
  })

  describe('Composition patterns', () => {
    it('renders alert without icon', () => {
      render(<WithoutIcon />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText(/No Icon Alert/gi)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has correct ARIA role', () => {
      render(<Default />)

      const alert = screen.getByRole('alert')
      expect(alert).toHaveAttribute('role', 'alert')
    })

    it('maintains accessibility across all variants', () => {
      render(<OutlineVariants />)

      const alerts = screen.getAllByRole('alert')
      alerts.forEach(alert => {
        expect(alert).toHaveAttribute('role', 'alert')
      })
    })
  })
})
