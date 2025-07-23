import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { describe, it, expect } from 'vitest'
import * as stories from '../avatar.stories'
import { Avatar } from '../avatar'

// Compose stories for testing
const { Default, WithImage, WithFailedImage } = composeStories(stories)

describe('Avatar', () => {
  it('renders default avatar with fallback content', () => {
    render(<Default />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders avatar with image', () => {
    render(<WithImage />)
    expect(screen.getByAltText('John Doe')).toBeInTheDocument()
  })

  it('falls back to text when image fails to load', () => {
    render(<WithFailedImage />)
    expect(screen.getByText('FB')).toBeInTheDocument()
  })

  it('supports different variants', () => {
    render(<Avatar variant='secondary'>Test</Avatar>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('supports different sizes', () => {
    render(<Avatar size='lg'>Test</Avatar>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('supports different shapes', () => {
    render(<Avatar shape='square'>Test</Avatar>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('can be used with compound pattern', () => {
    render(
      <Avatar>
        <Avatar.Image src='/test.jpg' alt='Test' />
        Fallback
      </Avatar>
    )
    expect(screen.getByAltText('Test')).toBeInTheDocument()
    expect(screen.getByText('Fallback')).toBeInTheDocument()
  })

  it('resets error state when src changes', () => {
    const { rerender } = render(
      <Avatar>
        <Avatar.Image src='/invalid-image.jpg' alt='Test' />
        Fallback
      </Avatar>
    )

    // Initially, the image should be rendered (before error occurs)
    expect(screen.getByAltText('Test')).toBeInTheDocument()

    // Change to a different invalid src - should reset error state and show image again
    rerender(
      <Avatar>
        <Avatar.Image src='/another-invalid-image.jpg' alt='Test' />
        Fallback
      </Avatar>
    )

    // Image should be rendered again (error state was reset)
    expect(screen.getByAltText('Test')).toBeInTheDocument()
  })
})
