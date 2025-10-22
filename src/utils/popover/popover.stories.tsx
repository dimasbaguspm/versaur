/**
 * Popover stories for Storybook
 * Group: Utils/Popover
 */

import { useState, useRef } from 'react'
import { Popover, usePopover } from './index'

export default {
  title: 'Utils/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Browser native Popover API wrapper. Positioned relative to trigger element with intelligent viewport boundary detection.',
      },
    },
  },
}

/**
 * Uncontrolled - Basic usage with all 12 placement options.
 * Uses browser's native popover behavior with popovertarget attribute.
 * Shows center-aligned, left-aligned, and right-aligned variations for each side.
 */
export const Placements = () => {
  // Top placements
  const triggerTopRef = useRef<HTMLButtonElement>(null)
  const triggerTopLeftRef = useRef<HTMLButtonElement>(null)
  const triggerTopRightRef = useRef<HTMLButtonElement>(null)

  // Right placements
  const triggerRightRef = useRef<HTMLButtonElement>(null)
  const triggerRightTopRef = useRef<HTMLButtonElement>(null)
  const triggerRightBottomRef = useRef<HTMLButtonElement>(null)

  // Bottom placements
  const triggerBottomRef = useRef<HTMLButtonElement>(null)
  const triggerBottomLeftRef = useRef<HTMLButtonElement>(null)
  const triggerBottomRightRef = useRef<HTMLButtonElement>(null)

  // Left placements
  const triggerLeftRef = useRef<HTMLButtonElement>(null)
  const triggerLeftTopRef = useRef<HTMLButtonElement>(null)
  const triggerLeftBottomRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      style={{
        padding: '250px',
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          marginBottom: '16px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Click buttons to see all 12 positioned popovers
      </p>

      {/* Top Placements */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>
          Top Placements
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            ref={triggerTopLeftRef}
            {...Popover.getTriggerProps('popover-top-left')}
          >
            Top Left
          </button>
          <Popover
            id='popover-top-left'
            placement='top-left'
            triggerRef={triggerTopLeftRef}
            className='bg-primary text-background border border-primary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Top-left aligned
            </div>
          </Popover>

          <button
            ref={triggerTopRef}
            {...Popover.getTriggerProps('popover-top')}
          >
            Top
          </button>
          <Popover
            id='popover-top'
            placement='top'
            triggerRef={triggerTopRef}
            className='bg-primary text-background border border-primary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Top centered
            </div>
          </Popover>

          <button
            ref={triggerTopRightRef}
            {...Popover.getTriggerProps('popover-top-right')}
          >
            Top Right
          </button>
          <Popover
            id='popover-top-right'
            placement='top-right'
            triggerRef={triggerTopRightRef}
            className='bg-primary text-background border border-primary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Top-right aligned
            </div>
          </Popover>
        </div>
      </div>

      {/* Right Placements */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>
          Right Placements
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            ref={triggerRightTopRef}
            {...Popover.getTriggerProps('popover-right-top')}
          >
            Right Top
          </button>
          <Popover
            id='popover-right-top'
            placement='right-top'
            triggerRef={triggerRightTopRef}
            className='bg-secondary text-background border border-secondary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Right-top aligned
            </div>
          </Popover>

          <button
            ref={triggerRightRef}
            {...Popover.getTriggerProps('popover-right')}
          >
            Right
          </button>
          <Popover
            id='popover-right'
            placement='right'
            triggerRef={triggerRightRef}
            className='bg-secondary text-background border border-secondary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Right centered
            </div>
          </Popover>

          <button
            ref={triggerRightBottomRef}
            {...Popover.getTriggerProps('popover-right-bottom')}
          >
            Right Bottom
          </button>
          <Popover
            id='popover-right-bottom'
            placement='right-bottom'
            triggerRef={triggerRightBottomRef}
            className='bg-secondary text-background border border-secondary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Right-bottom aligned
            </div>
          </Popover>
        </div>
      </div>

      {/* Bottom Placements */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>
          Bottom Placements
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            ref={triggerBottomLeftRef}
            {...Popover.getTriggerProps('popover-bottom-left')}
          >
            Bottom Left
          </button>
          <Popover
            id='popover-bottom-left'
            placement='bottom-left'
            triggerRef={triggerBottomLeftRef}
            className='bg-tertiary text-background border border-tertiary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Bottom-left aligned
            </div>
          </Popover>

          <button
            ref={triggerBottomRef}
            {...Popover.getTriggerProps('popover-bottom')}
          >
            Bottom
          </button>
          <Popover
            id='popover-bottom'
            placement='bottom'
            triggerRef={triggerBottomRef}
            className='bg-tertiary text-background border border-tertiary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Bottom centered
            </div>
          </Popover>

          <button
            ref={triggerBottomRightRef}
            {...Popover.getTriggerProps('popover-bottom-right')}
          >
            Bottom Right
          </button>
          <Popover
            id='popover-bottom-right'
            placement='bottom-right'
            triggerRef={triggerBottomRightRef}
            className='bg-tertiary text-background border border-tertiary-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Bottom-right aligned
            </div>
          </Popover>
        </div>
      </div>

      {/* Left Placements */}
      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>
          Left Placements
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            ref={triggerLeftTopRef}
            {...Popover.getTriggerProps('popover-left-top')}
          >
            Left Top
          </button>
          <Popover
            id='popover-left-top'
            placement='left-top'
            triggerRef={triggerLeftTopRef}
            className='bg-ghost text-background border border-ghost-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Left-top aligned
            </div>
          </Popover>

          <button
            ref={triggerLeftRef}
            {...Popover.getTriggerProps('popover-left')}
          >
            Left
          </button>
          <Popover
            id='popover-left'
            placement='left'
            triggerRef={triggerLeftRef}
            className='bg-ghost text-background border border-ghost-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Left centered
            </div>
          </Popover>

          <button
            ref={triggerLeftBottomRef}
            {...Popover.getTriggerProps('popover-left-bottom')}
          >
            Left Bottom
          </button>
          <Popover
            id='popover-left-bottom'
            placement='left-bottom'
            triggerRef={triggerLeftBottomRef}
            className='bg-ghost text-background border border-ghost-bold rounded-lg shadow-lg'
          >
            <div style={{ padding: '12px', minWidth: '150px' }}>
              Left-bottom aligned
            </div>
          </Popover>
        </div>
      </div>
    </div>
  )
}

/**
 * Controlled - Full programmatic control with useState.
 * Shows how to manage popover state externally.
 */
export const Controlled = () => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ padding: '100px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <button onClick={() => setIsOpen(true)} disabled={isOpen}>
          Show
        </button>
        <button onClick={() => setIsOpen(false)} disabled={!isOpen}>
          Hide
        </button>
      </div>

      <p>Status: {isOpen ? 'Open' : 'Closed'}</p>

      <Popover
        id='controlled-popover'
        placement='bottom'
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        className='bg-info text-background border-info-bold'
      >
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <p style={{ margin: '0 0 12px 0' }}>Controlled popover</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', opacity: 0.7 }}>
            State is managed externally
          </p>
          <button onClick={() => setIsOpen(false)}>Close from inside</button>
        </div>
      </Popover>
    </div>
  )
}

/**
 * With usePopover hook - Leverages the built-in hook for state management.
 * Provides programmatic controls (show, hide, toggle) and state tracking.
 */
export const WithHook = () => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const popover = usePopover(
    'popover-with-hook',
    isOpen,
    () => setIsOpen(true),
    () => setIsOpen(false)
  )

  return (
    <div style={{ padding: '100px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button ref={triggerRef} {...popover.getTriggerProps()}>
          Toggle
        </button>
        <button onClick={popover.show}>Show</button>
        <button onClick={popover.hide}>Hide</button>
      </div>

      <p>Hook status: {popover.isOpen ? 'Open' : 'Closed'}</p>
      <p>State status: {isOpen ? 'Open' : 'Closed'}</p>

      <Popover
        id='popover-with-hook'
        placement='bottom'
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        className='bg-success text-background border-success-bold'
      >
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <p style={{ margin: '0 0 12px 0' }}>usePopover hook example</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', opacity: 0.7 }}>
            Provides show(), hide(), toggle() methods
          </p>
          <button onClick={popover.hide}>Close</button>
        </div>
      </Popover>
    </div>
  )
}
