import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AlertIcon } from '../alert.atoms'

describe('Alert Atoms', () => {
  describe('AlertIcon', () => {
    it('renders icon content correctly', () => {
      render(
        <AlertIcon data-testid='alert-icon'>
          <svg>
            <title>Test Icon</title>
          </svg>
        </AlertIcon>
      )

      const icon = screen.getByTestId('alert-icon')
      expect(icon).toBeInTheDocument()
      expect(screen.getByTitle('Test Icon')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <AlertIcon className='custom-class' data-testid='alert-icon'>
          Icon content
        </AlertIcon>
      )

      const icon = screen.getByTestId('alert-icon')
      expect(icon).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      let ref: HTMLDivElement | null = null
      render(
        <AlertIcon
          ref={el => {
            ref = el
          }}
          data-testid='alert-icon'
        >
          Icon content
        </AlertIcon>
      )

      expect(ref).toBeInstanceOf(HTMLDivElement)
    })

    it('applies default sizing classes', () => {
      render(<AlertIcon data-testid='alert-icon'>Icon</AlertIcon>)

      const icon = screen.getByTestId('alert-icon')
      expect(icon).toHaveClass('flex-shrink-0')
    })
  })

  describe('Integration', () => {
    it('works in alert structure', () => {
      render(
        <div role='alert'>
          <AlertIcon data-testid='icon'>
            <svg>
              <title>Warning</title>
            </svg>
          </AlertIcon>
          <div>
            <p>Warning message content</p>
          </div>
        </div>
      )

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByText('Warning message content')).toBeInTheDocument()
    })
  })
})
