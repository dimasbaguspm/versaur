import { FilterIcon } from 'lucide-react'
import { ButtonMenuIcon } from './button-menu-icon'
import { useRef } from 'react'

export default {
  title: 'Primitive/ButtonMenuIcon',
  component: ButtonMenuIcon,
}

/**
 * Basic ButtonMenuIcon with default placement (bottom-start).
 * Demonstrates menu opening and item interactions.
 */
export const Basic = () => {
  return (
    <div className='h-80 w-96 border border-primary p-4 relative bg-cream-soft flex justify-end'>
      <ButtonMenuIcon
        aria-label='Open Filter'
        as={FilterIcon}
        variant='outline'
        placement='bottom-end'
      >
        <ButtonMenuIcon.Item>Profile</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Settings</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item disabled>Logout</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
    </div>
  )
}

/**
 * ButtonMenuIcon with constrained container positioning.
 * The menu respects the container boundaries and adjusts placement automatically.
 */
export const WithContainerConstraints = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className='h-80 w-96 border border-primary p-4 relative overflow-hidden bg-cream-soft flex justify-end'
    >
      <ButtonMenuIcon
        aria-label='Open Filter'
        as={FilterIcon}
        variant='outline'
        placement='bottom-end'
        container={containerRef.current}
      >
        <ButtonMenuIcon.Item>Profile</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item>Settings</ButtonMenuIcon.Item>
        <ButtonMenuIcon.Item disabled>Logout</ButtonMenuIcon.Item>
      </ButtonMenuIcon>
    </div>
  )
}

/**
 * ButtonMenuIcon with different placement options.
 * Shows how placement affects menu positioning relative to the trigger.
 */
export const PlacementVariants = () => {
  return (
    <div className='grid grid-cols-2 gap-8 p-8'>
      <div className='space-y-4'>
        <h3 className='text-sm font-medium text-foreground'>
          Bottom Placements
        </h3>
        <div className='flex gap-4'>
          <ButtonMenuIcon
            aria-label='Bottom Start'
            as={FilterIcon}
            variant='outline'
            placement='bottom-start'
          >
            <ButtonMenuIcon.Item>Bottom Start</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
          <ButtonMenuIcon
            aria-label='Bottom End'
            as={FilterIcon}
            variant='outline'
            placement='bottom-end'
          >
            <ButtonMenuIcon.Item>Bottom End</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-sm font-medium text-foreground'>Top Placements</h3>
        <div className='flex gap-4 pt-16'>
          <ButtonMenuIcon
            aria-label='Top Start'
            as={FilterIcon}
            variant='outline'
            placement='top-start'
          >
            <ButtonMenuIcon.Item>Top Start</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
          <ButtonMenuIcon
            aria-label='Top End'
            as={FilterIcon}
            variant='outline'
            placement='top-end'
          >
            <ButtonMenuIcon.Item>Top End</ButtonMenuIcon.Item>
            <ButtonMenuIcon.Item>Option 2</ButtonMenuIcon.Item>
          </ButtonMenuIcon>
        </div>
      </div>
    </div>
  )
}

/**
 * ButtonMenuIcon with auto placement that adapts based on available space.
 * The menu automatically chooses the best position to avoid clipping.
 */
export const AutoPlacement = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className='space-y-4'>
      <div
        ref={containerRef}
        className='h-48 w-80 border border-primary p-4 relative overflow-hidden bg-cream-soft flex justify-end items-end'
      >
        <ButtonMenuIcon
          aria-label='Auto Placement Menu'
          as={FilterIcon}
          variant='outline'
          placement='top-end'
          container={containerRef.current}
        >
          <ButtonMenuIcon.Item>This menu</ButtonMenuIcon.Item>
          <ButtonMenuIcon.Item>auto-adjusts position</ButtonMenuIcon.Item>
          <ButtonMenuIcon.Item>based on available space</ButtonMenuIcon.Item>
          <ButtonMenuIcon.Item disabled>Disabled item</ButtonMenuIcon.Item>
        </ButtonMenuIcon>
      </div>
      <p className='text-sm text-foreground-light'>
        The menu above uses auto placement and will position itself optimally
        within the constrained container.
      </p>
    </div>
  )
}
