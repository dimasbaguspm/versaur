import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Popover } from '../popover'
import { usePopover } from '../use-popover'
import { calculatePopoverPosition } from '../helpers'
import { useRef, useState } from 'react'

import * as stories from '../popover.stories'
import { composeStories } from '@storybook/react'

const { Placements, Controlled, WithHook } = composeStories(stories)

// Mock requestAnimationFrame for tests
beforeEach(() => {
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
    cb(0)
    return 0
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Popover', () => {
  it('renders correctly with required props', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)

      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover id='test-popover' triggerRef={triggerRef}>
            <p>Popover content</p>
          </Popover>
        </>
      )
    }

    render(<TestComponent />)

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    const popover = document.getElementById('test-popover')
    expect(popover).toBeInTheDocument()
    expect(popover).toHaveAttribute('popover', 'auto')
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover id='test-popover' triggerRef={triggerRef}>
            <p>Content</p>
          </Popover>
        </>
      )
    }

    const { asFragment } = render(<TestComponent />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('applies correct popover attribute', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover id='manual-popover' triggerRef={triggerRef} popover='manual'>
            Content
          </Popover>
        </>
      )
    }

    render(<TestComponent />)
    const popover = document.getElementById('manual-popover')
    expect(popover).toHaveAttribute('popover', 'manual')
  })

  it('applies custom className', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover
            id='styled-popover'
            triggerRef={triggerRef}
            className='custom-class'
          >
            Content
          </Popover>
        </>
      )
    }
    render(<TestComponent />)
    const popover = document.getElementById('styled-popover')
    expect(popover).toHaveClass('custom-class')
  })

  it('applies inline styles', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover
            id='styled-popover'
            triggerRef={triggerRef}
            style={{ zIndex: 9999 }}
          >
            Content
          </Popover>
        </>
      )
    }

    render(<TestComponent />)
    const popover = document.getElementById('styled-popover')
    expect(popover).toHaveStyle({ zIndex: '9999' })
  })

  it('forwards ref correctly', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      const popoverRef = useRef<HTMLDivElement>(null)

      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover id='test-popover' triggerRef={triggerRef} ref={popoverRef}>
            Content
          </Popover>
        </>
      )
    }

    render(<TestComponent />)
    const popover = document.getElementById('test-popover')
    expect(popover).toBeInTheDocument()
  })

  it('generates trigger props with getTriggerProps', () => {
    const props = Popover.getTriggerProps('my-popover')
    expect(props).toEqual({
      popoverTarget: 'my-popover',
      popoverTargetAction: 'toggle',
    })
  })

  it('generates trigger props with custom action', () => {
    const showProps = Popover.getTriggerProps('my-popover', 'show')
    expect(showProps).toEqual({
      popoverTarget: 'my-popover',
      popoverTargetAction: 'show',
    })

    const hideProps = Popover.getTriggerProps('my-popover', 'hide')
    expect(hideProps).toEqual({
      popoverTarget: 'my-popover',
      popoverTargetAction: 'hide',
    })
  })

  it('handles controlled state', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button ref={triggerRef} onClick={() => setIsOpen(true)}>
            Open
          </button>
          <Popover
            id='controlled-popover'
            triggerRef={triggerRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            Content
          </Popover>
        </>
      )
    }

    render(<TestComponent />)
    const popover = document.getElementById('controlled-popover')
    expect(popover).toBeInTheDocument()
  })

  it('accepts anchor attribute', () => {
    const TestComponent = () => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={triggerRef}>Trigger</button>
          <Popover
            id='anchored-popover'
            triggerRef={triggerRef}
            anchor='--my-anchor'
          >
            Content
          </Popover>
        </>
      )
    }

    render(<TestComponent />)
    const popover = document.getElementById('anchored-popover')
    expect(popover).toHaveAttribute('anchor', '--my-anchor')
  })

  it('calculates position for all placements', async () => {
    const placements = ['top', 'right', 'bottom', 'left'] as const

    for (const placement of placements) {
      const TestComponent = () => {
        const triggerRef = useRef<HTMLButtonElement>(null)
        return (
          <>
            <button ref={triggerRef}>Trigger</button>
            <Popover
              id={`popover-${placement}`}
              triggerRef={triggerRef}
              placement={placement}
            >
              Content
            </Popover>
          </>
        )
      }

      const { unmount } = render(<TestComponent />)
      const popover = document.getElementById(`popover-${placement}`)
      expect(popover).toBeInTheDocument()

      // Position should be set in style attribute
      await waitFor(() => {
        expect(popover).toHaveAttribute('style')
        const style = popover?.getAttribute('style') || ''
        expect(style).toContain('top:')
        expect(style).toContain('left:')
      })

      unmount()
    }
  })

  it('renders Placements story correctly', () => {
    render(<Placements />)

    // Check section headers
    expect(screen.getByText('Top Placements')).toBeInTheDocument()
    expect(screen.getByText('Right Placements')).toBeInTheDocument()
    expect(screen.getByText('Bottom Placements')).toBeInTheDocument()
    expect(screen.getByText('Left Placements')).toBeInTheDocument()

    // Check all placement buttons are rendered
    // Top placements
    expect(screen.getByText('Top Left')).toBeInTheDocument()
    expect(screen.getByText('Top')).toBeInTheDocument()
    expect(screen.getByText('Top Right')).toBeInTheDocument()

    // Right placements
    expect(screen.getByText('Right Top')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
    expect(screen.getByText('Right Bottom')).toBeInTheDocument()

    // Bottom placements
    expect(screen.getByText('Bottom Left')).toBeInTheDocument()
    expect(screen.getByText('Bottom')).toBeInTheDocument()
    expect(screen.getByText('Bottom Right')).toBeInTheDocument()

    // Left placements
    expect(screen.getByText('Left Top')).toBeInTheDocument()
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Left Bottom')).toBeInTheDocument()

    // Check all popover contents
    expect(screen.getByText('Top-left aligned')).toBeInTheDocument()
    expect(screen.getByText('Top centered')).toBeInTheDocument()
    expect(screen.getByText('Top-right aligned')).toBeInTheDocument()
    expect(screen.getByText('Right-top aligned')).toBeInTheDocument()
    expect(screen.getByText('Right centered')).toBeInTheDocument()
    expect(screen.getByText('Right-bottom aligned')).toBeInTheDocument()
    expect(screen.getByText('Bottom-left aligned')).toBeInTheDocument()
    expect(screen.getByText('Bottom centered')).toBeInTheDocument()
    expect(screen.getByText('Bottom-right aligned')).toBeInTheDocument()
    expect(screen.getByText('Left-top aligned')).toBeInTheDocument()
    expect(screen.getByText('Left centered')).toBeInTheDocument()
    expect(screen.getByText('Left-bottom aligned')).toBeInTheDocument()
  })

  it('renders Controlled story correctly', () => {
    render(<Controlled />)
    expect(screen.getByText('Open')).toBeInTheDocument()
    expect(screen.getByText('Show')).toBeInTheDocument()
    expect(screen.getByText('Hide')).toBeInTheDocument()
    expect(screen.getByText('Controlled popover')).toBeInTheDocument()
  })

  it('renders WithHook story correctly', () => {
    render(<WithHook />)
    expect(screen.getByText('Toggle')).toBeInTheDocument()
    expect(screen.getByText('Show')).toBeInTheDocument()
    expect(screen.getByText('Hide')).toBeInTheDocument()
    expect(screen.getByText('usePopover hook example')).toBeInTheDocument()
  })
})

describe('usePopover', () => {
  it('returns correct interface', () => {
    const TestComponent = () => {
      const popover = usePopover('test-id')

      expect(popover).toHaveProperty('popoverRef')
      expect(popover).toHaveProperty('isOpen')
      expect(popover).toHaveProperty('show')
      expect(popover).toHaveProperty('hide')
      expect(popover).toHaveProperty('toggle')
      expect(popover).toHaveProperty('getTriggerProps')

      expect(typeof popover.show).toBe('function')
      expect(typeof popover.hide).toBe('function')
      expect(typeof popover.toggle).toBe('function')
      expect(typeof popover.getTriggerProps).toBe('function')

      return <div>Test</div>
    }

    render(<TestComponent />)
  })

  it('generates trigger props', () => {
    const TestComponent = () => {
      const popover = usePopover('test-id')
      const props = popover.getTriggerProps()

      expect(props).toEqual({
        popoverTarget: 'test-id',
        popoverTargetAction: 'toggle',
      })

      return <div>Test</div>
    }

    render(<TestComponent />)
  })

  it('generates trigger props with custom action', () => {
    const TestComponent = () => {
      const popover = usePopover('test-id')

      const showProps = popover.getTriggerProps('show')
      expect(showProps).toEqual({
        popoverTarget: 'test-id',
        popoverTargetAction: 'show',
      })

      const hideProps = popover.getTriggerProps('hide')
      expect(hideProps).toEqual({
        popoverTarget: 'test-id',
        popoverTargetAction: 'hide',
      })

      return <div>Test</div>
    }

    render(<TestComponent />)
  })

  it('handles controlled state', () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)
      const popover = usePopover(
        'test-id',
        isOpen,
        () => setIsOpen(true),
        () => setIsOpen(false)
      )

      expect(popover.isOpen).toBe(false)

      return <div>Test</div>
    }

    render(<TestComponent />)
  })
})

describe('calculatePopoverPosition', () => {
  const mockTrigger = {
    getBoundingClientRect: () => ({
      top: 100,
      left: 100,
      bottom: 150,
      right: 200,
      width: 100,
      height: 50,
      x: 100,
      y: 100,
      toJSON: () => {},
    }),
  } as HTMLElement

  const mockPopover = {
    getBoundingClientRect: () => ({
      top: 0,
      left: 0,
      bottom: 100,
      right: 200,
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    }),
  } as HTMLDivElement

  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })
  })

  it('calculates position for bottom placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'bottom',
      8
    )

    expect(position).toHaveProperty('top')
    expect(position).toHaveProperty('left')
    expect(position.margin).toBe(0)

    // Bottom: top = triggerBottom + gap = 150 + 8 = 158
    expect(position.top).toBe('158px')
    // Centered: left = triggerLeft + (triggerWidth / 2) - (popoverWidth / 2)
    // = 100 + 50 - 100 = 50
    expect(position.left).toBe('50px')
  })

  it('calculates position for top placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'top',
      8
    )

    // Top: top = triggerTop - popoverHeight - gap = 100 - 100 - 8 = -8
    // Should be adjusted to viewport edge
    expect(position).toHaveProperty('top')
    expect(position).toHaveProperty('left')
  })

  it('calculates position for right placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'right',
      8
    )

    // Right: left = triggerRight + gap = 200 + 8 = 208
    expect(position.left).toBe('208px')
    // Centered vertically
    expect(position).toHaveProperty('top')
  })

  it('calculates position for left placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'left',
      8
    )

    // Left: left = triggerLeft - popoverWidth - gap = 100 - 200 - 8 = -108
    // Should be adjusted to viewport edge
    expect(position).toHaveProperty('top')
    expect(position).toHaveProperty('left')
  })

  it('handles viewport boundary detection', () => {
    // Create trigger near right edge
    const edgeTrigger = {
      getBoundingClientRect: () => ({
        top: 100,
        left: 900,
        bottom: 150,
        right: 1000,
        width: 100,
        height: 50,
        x: 900,
        y: 100,
        toJSON: () => {},
      }),
    } as HTMLElement

    const position = calculatePopoverPosition(
      edgeTrigger,
      mockPopover,
      'bottom',
      8
    )

    // Position should be adjusted to not overflow viewport
    expect(position).toHaveProperty('left')
    expect(position).toHaveProperty('top')
    expect(position.margin).toBe(0)
  })

  it('respects custom gap', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'bottom',
      16
    )

    // Bottom with gap 16: top = 150 + 16 = 166
    expect(position.top).toBe('166px')
  })

  it('calculates position for top-left placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'top-left',
      8
    )

    // Top-left: left aligned with trigger left
    expect(position.left).toBe('100px')
    expect(position).toHaveProperty('top')
  })

  it('calculates position for top-right placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'top-right',
      8
    )

    // Top-right: left = triggerRight - popoverWidth = 200 - 200 = 0
    expect(position.left).toBe('8px') // Adjusted to viewport edge with margin
    expect(position).toHaveProperty('top')
  })

  it('calculates position for bottom-left placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'bottom-left',
      8
    )

    // Bottom-left: left aligned with trigger left
    expect(position.left).toBe('100px')
    // Bottom: top = triggerBottom + gap = 150 + 8 = 158
    expect(position.top).toBe('158px')
  })

  it('calculates position for bottom-right placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'bottom-right',
      8
    )

    // Bottom-right: left = triggerRight - popoverWidth = 200 - 200 = 0
    expect(position.left).toBe('8px') // Adjusted to viewport edge with margin
    expect(position.top).toBe('158px')
  })

  it('calculates position for right-top placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'right-top',
      8
    )

    // Right-top: top aligned with trigger top
    expect(position.top).toBe('100px')
    // Right: left = triggerRight + gap = 200 + 8 = 208
    expect(position.left).toBe('208px')
  })

  it('calculates position for right-bottom placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'right-bottom',
      8
    )

    // Right-bottom: top = triggerBottom - popoverHeight = 150 - 100 = 50
    expect(position.top).toBe('50px')
    expect(position.left).toBe('208px')
  })

  it('calculates position for left-top placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'left-top',
      8
    )

    // Left-top: top aligned with trigger top
    expect(position.top).toBe('100px')
    // Left: left = triggerLeft - popoverWidth - gap = 100 - 200 - 8 = -108
    // Should be adjusted to viewport edge
    expect(position.left).toBe('8px')
  })

  it('calculates position for left-bottom placement', () => {
    const position = calculatePopoverPosition(
      mockTrigger,
      mockPopover,
      'left-bottom',
      8
    )

    // Left-bottom: top = triggerBottom - popoverHeight = 150 - 100 = 50
    expect(position.top).toBe('50px')
    // Adjusted to viewport edge
    expect(position.left).toBe('8px')
  })
})
