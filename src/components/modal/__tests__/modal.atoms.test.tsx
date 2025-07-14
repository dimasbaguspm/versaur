/**
 * Modal atoms unit tests
 *
 * - Covers ModalHeader, ModalFooter, ModalOverlay
 * - Asserts rendering, props, and snapshot output
 */
import { describe, it, expect, vi } from 'vitest'
import { ModalHeader, ModalFooter, ModalOverlay } from '../modal.atoms'
import { render, fireEvent } from '@testing-library/react'

describe('ModalHeader', () => {
  it('renders header content', () => {
    const { getByText } = render(<ModalHeader>Header</ModalHeader>)
    expect(getByText('Header')).toBeInTheDocument()
  })
  it('matches snapshot', () => {
    const { asFragment } = render(<ModalHeader>Header</ModalHeader>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('ModalFooter', () => {
  it('renders footer content', () => {
    const { getByText } = render(<ModalFooter>Footer</ModalFooter>)
    expect(getByText('Footer')).toBeInTheDocument()
  })
  it('matches snapshot', () => {
    const { asFragment } = render(<ModalFooter>Footer</ModalFooter>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('ModalOverlay', () => {
  it('renders children and applies className', () => {
    const { getByText, container } = render(
      <ModalOverlay className='test-class'>Overlay</ModalOverlay>
    )
    expect(getByText('Overlay')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('test-class')
  })
  it('calls onOverlayClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByRole } = render(
      <ModalOverlay onOverlayClick={handleClick}>Overlay</ModalOverlay>
    )
    fireEvent.click(getByRole('presentation'))
    expect(handleClick).toHaveBeenCalled()
  })
  it('matches snapshot', () => {
    const { asFragment } = render(<ModalOverlay>Overlay</ModalOverlay>)
    expect(asFragment()).toMatchSnapshot()
  })
})
