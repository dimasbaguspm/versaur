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
 * Uncontrolled - Basic usage with all placement options.
 * Uses browser's native popover behavior with popovertarget attribute.
 */
export const Placements = () => {
  const triggerBottomRef = useRef<HTMLButtonElement>(null)
  const triggerTopRef = useRef<HTMLButtonElement>(null)
  const triggerLeftRef = useRef<HTMLButtonElement>(null)
  const triggerRightRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      style={{
        padding: '200px',
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{ marginBottom: '16px', textAlign: 'center' }}>
        Click buttons to see positioned popovers
      </p>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
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
          className='bg-primary text-background border-primary-bold'
        >
          <div style={{ padding: '12px', minWidth: '150px' }}>
            Positioned below trigger
          </div>
        </Popover>

        <button ref={triggerTopRef} {...Popover.getTriggerProps('popover-top')}>
          Top
        </button>
        <Popover
          id='popover-top'
          placement='top'
          triggerRef={triggerTopRef}
          className='bg-secondary text-background border-secondary-bold'
        >
          <div style={{ padding: '12px', minWidth: '150px' }}>
            Positioned above trigger
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
          className='bg-tertiary text-background border-tertiary-bold'
        >
          <div style={{ padding: '12px', minWidth: '150px' }}>
            Positioned left of trigger
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
          className='bg-ghost text-background border-ghost-bold'
        >
          <div style={{ padding: '12px', minWidth: '150px' }}>
            Positioned right of trigger
          </div>
        </Popover>
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
