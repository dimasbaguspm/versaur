# Popover Component Specification

## Overview

The Popover component is a lightweight wrapper around the browser's native Popover API for Versaur
UI. It provides intelligent positioning relative to a trigger element with automatic viewport
boundary detection.

## Component Pattern

**Pattern Type**: Regular  
**Reasoning**: Popover is a simple component that enhances browser standard behavior with
positioning logic. It doesn't require sub-components or complex state management beyond what the
browser provides.

## Architecture

### File Structure

```
popover/
├── popover.tsx           # Main component
├── use-popover.ts        # State management hook
├── helpers.ts            # Positioning calculations and variants
├── types.ts              # TypeScript interfaces
├── popover.d.ts          # Global type declarations
├── index.ts              # Public API exports
├── popover.spec.md       # This specification
├── popover.stories.tsx   # Storybook stories
└── __tests__/
    └── popover.test.tsx  # Component tests
```

## Public API

### Exports

```typescript
export { Popover } from './popover'
export { usePopover } from './use-popover'
export type {
  PopoverProps,
  PopoverTriggerProps,
  UsePopoverReturn,
  PopoverPlacement,
  PopoverMaxWidth,
} from './types'
```

## Component Specifications

### Popover

Positioned popover overlay using browser's native Popover API.

#### Props Interface

```typescript
interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  id: string // Required: Unique popover identifier
  children: ReactNode // Required: Popover content
  triggerRef: RefObject<HTMLElement | null> // Required: Trigger element ref
  isOpen?: boolean // Optional: Controlled open state
  onOpen?: () => void // Optional: Open callback
  onClose?: () => void // Optional: Close callback
  anchor?: string // Optional: CSS anchor positioning
  popover?: 'auto' | 'manual' // Optional: Popover mode
  placement?: PopoverPlacement // Optional: Position relative to trigger
  gap?: number // Optional: Distance from trigger in pixels
  maxWidth?: PopoverMaxWidth // Optional: Maximum width of popover container
}

type PopoverPlacement =
  | 'top' // Top center-aligned
  | 'top-left' // Top left-aligned
  | 'top-right' // Top right-aligned
  | 'right' // Right center-aligned
  | 'right-top' // Right top-aligned
  | 'right-bottom' // Right bottom-aligned
  | 'bottom' // Bottom center-aligned
  | 'bottom-left' // Bottom left-aligned
  | 'bottom-right' // Bottom right-aligned
  | 'left' // Left center-aligned
  | 'left-top' // Left top-aligned
  | 'left-bottom' // Left bottom-aligned

type PopoverMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
```

#### Default Values

- `popover`: `'auto'`
- `placement`: `'bottom'`
- `gap`: `8`
- `maxWidth`: `'sm'`

#### Behavior

1. **Positioning Strategy**:

   - Calculates position on mount using closed popover dimensions
   - Positions relative to trigger element based on `placement` prop
   - Automatically adjusts when hitting viewport boundaries
   - Centers horizontally/vertically depending on placement

2. **Opening Animation**:

   - Hides popover initially with `opacity: 0` and `pointer-events: none`
   - Disables transitions during positioning with `transition: none`
   - On open, uses triple `requestAnimationFrame` to ensure accurate positioning
   - Shows popover after position is calculated (prevents flash)
   - No CSS animations or transitions by default

3. **Scroll & Resize Handling**:

   - Listens to window scroll and resize events
   - Recalculates position only when popover is open
   - Prevents unnecessary calculations when closed

4. **State Management**:
   - Supports both controlled and uncontrolled usage
   - Uses `usePopover` hook internally for state tracking
   - Browser manages actual DOM state via Popover API

#### ARIA & Accessibility

The component leverages browser's native Popover API which provides:

- **Keyboard Support**:
  - `Escape` key closes popover (auto mode)
  - Focus management handled by browser
- **Light Dismiss** (auto mode):
  - Click outside closes popover
  - Opening another popover closes current one
- **Manual Mode**:
  - Requires explicit close action
  - Shows backdrop via `::backdrop` pseudo-element
  - Supports multiple open popovers

#### Static Methods

```typescript
Popover.getTriggerProps(id: string, action?: 'toggle' | 'show' | 'hide'): PopoverTriggerProps
```

Returns props to spread on trigger button for uncontrolled usage:

```typescript
{
  popoverTarget: string,      // Links to popover via id
  popoverTargetAction: string // Action to perform (toggle/show/hide)
}
```

## Hook: usePopover

Custom hook for managing popover state and programmatic control.

### Signature

```typescript
function usePopover(
  id: string,
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void
): UsePopoverReturn

interface UsePopoverReturn {
  popoverRef: RefObject<HTMLDivElement | null>
  isOpen: boolean
  show: () => void
  hide: () => void
  toggle: () => void
  getTriggerProps: (action?: 'toggle' | 'show' | 'hide') => PopoverTriggerProps
}
```

### Behavior

1. **Controlled/Uncontrolled Support**:

   - If `isOpen` provided, uses controlled mode
   - Otherwise maintains internal state

2. **Event Listening**:

   - Listens to browser's `toggle` event on popover element
   - Syncs state when popover opens/closes
   - Calls `onOpen`/`onClose` callbacks

3. **Programmatic Control**:

   - `show()`: Opens popover via `showPopover()` API
   - `hide()`: Closes popover via `hidePopover()` API
   - `toggle()`: Toggles popover via `togglePopover()` API

4. **State Synchronization**:
   - In controlled mode, syncs external state with popover element
   - Uses `:popover-open` pseudo-class to check actual state
   - Handles environments without pseudo-class support (e.g., jsdom)

## Positioning Algorithm

### calculatePopoverPosition

Calculates optimal popover position relative to trigger with viewport boundary detection.

#### Algorithm

1. **Base Position Calculation**:

   The component supports 12 placement options organized into 4 primary directions with 3 alignment
   variations each:

   **Top Placements** (above trigger):

   ```typescript
   case 'top':
     top = triggerTop - popoverHeight - gap
     left = triggerLeft + triggerWidth / 2 - popoverWidth / 2  // Center-aligned
   case 'top-left':
     top = triggerTop - popoverHeight - gap
     left = triggerLeft  // Left-aligned
   case 'top-right':
     top = triggerTop - popoverHeight - gap
     left = triggerRight - popoverWidth  // Right-aligned
   ```

   **Right Placements** (right of trigger):

   ```typescript
   case 'right':
     top = triggerTop + triggerHeight / 2 - popoverHeight / 2  // Center-aligned
     left = triggerRight + gap
   case 'right-top':
     top = triggerTop  // Top-aligned
     left = triggerRight + gap
   case 'right-bottom':
     top = triggerBottom - popoverHeight  // Bottom-aligned
     left = triggerRight + gap
   ```

   **Bottom Placements** (below trigger):

   ```typescript
   case 'bottom':
     top = triggerBottom + gap
     left = triggerLeft + triggerWidth / 2 - popoverWidth / 2  // Center-aligned
   case 'bottom-left':
     top = triggerBottom + gap
     left = triggerLeft  // Left-aligned
   case 'bottom-right':
     top = triggerBottom + gap
     left = triggerRight - popoverWidth  // Right-aligned
   ```

   **Left Placements** (left of trigger):

   ```typescript
   case 'left':
     top = triggerTop + triggerHeight / 2 - popoverHeight / 2  // Center-aligned
     left = triggerLeft - popoverWidth - gap
   case 'left-top':
     top = triggerTop  // Top-aligned
     left = triggerLeft - popoverWidth - gap
   case 'left-bottom':
     top = triggerBottom - popoverHeight  // Bottom-aligned
     left = triggerLeft - popoverWidth - gap
   ```

2. **Horizontal Boundary Detection**:

   - If `left + popoverWidth > viewport.width`, adjust left to fit within viewport
   - If `left < 0`, adjust to viewport edge with 8px margin
   - Ensures popover never extends beyond viewport horizontally

3. **Vertical Boundary Detection**:

   - If `top + popoverHeight > viewport.height`, try flipping for top/bottom placements
   - If `top < 0`, try flipping to opposite side or adjust to viewport edge
   - Maintains 8px margin from all viewport edges
   - Smart flipping: `bottom*` placements flip to `top`, `top*` placements flip to `bottom`

4. **Returns**:
   ```typescript
   {
     top: `${top}px`,
     left: `${left}px`,
     margin: 0
   }
   ```

#### Placement Selection Guidelines

- **Center-aligned** (`top`, `right`, `bottom`, `left`): Use when trigger is wide/tall enough for
  center alignment to look natural
- **Corner-aligned** (`top-left`, `top-right`, etc.): Use when you need precise alignment with
  trigger edges
- **Edge-aligned** (`right-top`, `right-bottom`, etc.): Use when popover should align with specific
  trigger edges for menus or dropdowns

## Usage Examples

### Uncontrolled (Basic)

```tsx
const triggerRef = useRef(null)

<button ref={triggerRef} {...Popover.getTriggerProps('my-popover')}>
  Open
</button>

<Popover id="my-popover" triggerRef={triggerRef} placement="bottom">
  <p>Popover content</p>
</Popover>
```

### Controlled

```tsx
const [isOpen, setIsOpen] = useState(false)
const triggerRef = useRef(null)

<button ref={triggerRef} onClick={() => setIsOpen(true)}>
  Open
</button>

<Popover
  id="my-popover"
  triggerRef={triggerRef}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <p>Popover content</p>
</Popover>
```

### With usePopover Hook

```tsx
const triggerRef = useRef(null)
const [isOpen, setIsOpen] = useState(false)

const popover = usePopover('my-popover', isOpen,
  () => setIsOpen(true),
  () => setIsOpen(false)
)

<button ref={triggerRef} {...popover.getTriggerProps()}>
  Toggle
</button>
<button onClick={popover.show}>Show</button>
<button onClick={popover.hide}>Hide</button>

<Popover
  id="my-popover"
  triggerRef={triggerRef}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <p>Popover content</p>
</Popover>
```

### With Different Placements

```tsx
// Center-aligned placements (default behavior)
<Popover id="top" triggerRef={ref} placement="top">Top</Popover>
<Popover id="right" triggerRef={ref} placement="right">Right</Popover>
<Popover id="bottom" triggerRef={ref} placement="bottom">Bottom</Popover>
<Popover id="left" triggerRef={ref} placement="left">Left</Popover>

// Left/Top-aligned placements
<Popover id="top-left" triggerRef={ref} placement="top-left">Top Left</Popover>
<Popover id="right-top" triggerRef={ref} placement="right-top">Right Top</Popover>
<Popover id="bottom-left" triggerRef={ref} placement="bottom-left">Bottom Left</Popover>
<Popover id="left-top" triggerRef={ref} placement="left-top">Left Top</Popover>

// Right/Bottom-aligned placements
<Popover id="top-right" triggerRef={ref} placement="top-right">Top Right</Popover>
<Popover id="right-bottom" triggerRef={ref} placement="right-bottom">Right Bottom</Popover>
<Popover id="bottom-right" triggerRef={ref} placement="bottom-right">Bottom Right</Popover>
<Popover id="left-bottom" triggerRef={ref} placement="left-bottom">Left Bottom</Popover>
```

### Manual Mode with Backdrop

```tsx
const [isOpen, setIsOpen] = useState(false)
const triggerRef = useRef(null)

<button onClick={() => setIsOpen(true)}>
  Open
</button>

<Popover
  id="manual-popover"
  triggerRef={triggerRef}
  popover="manual"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <p>Manual popover with backdrop</p>
  <button onClick={() => setIsOpen(false)}>Close</button>
</Popover>
```

## Styling

### Base Styles (via CVA)

Applied automatically:

- `fixed` positioning
- Default padding (`p-4`)
- Default max-width based on `maxWidth` prop
- Overflow handling (`overflow-auto`)

Available `maxWidth` variants:

- `xs`: `max-w-xs` (320px)
- `sm`: `max-w-sm` (384px) - default
- `md`: `max-w-md` (448px)
- `lg`: `max-w-lg` (512px)
- `xl`: `max-w-xl` (576px)
- `full`: `max-w-full` (100%)

### Custom Styling

Override with `className`:

```tsx
<Popover className="bg-primary text-background p-6 rounded-2xl border border-primary-bold" {...}>
  <p>Custom styled</p>
</Popover>
```

### Max Width Control

Use the `maxWidth` prop:

```tsx
<Popover maxWidth="lg" {...}>
  <p>Larger popover</p>
</Popover>

<Popover maxWidth="xs" {...}>
  <p>Compact popover</p>
</Popover>
```

### Custom Positioning

Override with `style`:

```tsx
<Popover style={{ top: '100px', left: '200px' }} {...}>
  <p>Custom position</p>
</Popover>
```

## Design Considerations

### No Default Styling

The Popover component intentionally provides minimal base styling to allow maximum flexibility:

- No default border, background, or text colors
- No box shadow or rounded corners
- No animations or transitions
- Consumers should add their own styling via `className` prop

### Positioning Strategy

The component uses a sophisticated positioning algorithm:

1. **Wait for popover to open** - Browser makes it visible in DOM
2. **Hide visually** - Apply `opacity: 0`, `pointer-events: none`, `transition: none`
3. **Triple RAF cycle** - Ensures popover is fully rendered with accurate dimensions
4. **Calculate position** - Use actual dimensions to compute optimal placement
5. **Show popover** - Remove hiding styles, popover appears at correct position
6. **No flash** - User never sees the intermediate positioning state

## Browser Compatibility

- **Popover API**: Chrome 114+, Edge 114+, Safari 17+
- **Graceful Degradation**: Component works but without native popover benefits in unsupported
  browsers
- **Testing**: jsdom doesn't support `:popover-open` pseudo-class; component handles gracefully

## Performance Considerations

1. **Position Calculation**: Only runs when popover is open
2. **Event Listeners**: Added/removed based on open state
3. **RAF Usage**: Triple RAF prevents layout thrashing and ensures accurate dimensions
4. **Opacity Control**: Prevents painting until positioned (no visual flash)
5. **Transition Disable**: Temporarily disables transitions during positioning phase

## Testing Strategy

1. **Unit Tests**:

   - Render with required props
   - Controlled/uncontrolled state management
   - Trigger props generation
   - Position calculation logic
   - Hook functionality

2. **Integration Tests**:

   - Opening/closing behavior
   - Keyboard interactions (Escape)
   - Outside click (auto mode)
   - Multiple popovers
   - Scroll/resize handling

3. **Visual Tests**:
   - All 12 placement options (top, top-left, top-right, right, right-top, right-bottom, bottom,
     bottom-left, bottom-right, left, left-top, left-bottom)
   - Viewport boundary detection and smart flipping
   - No position flash on open
   - Max-width variants
   - Custom styling with different colors
   - Alignment accuracy for corner and edge placements
