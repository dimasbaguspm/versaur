# Match Media Helpers - Technical Specification

## Overview

Responsive breakpoint detection utilities using the native `matchMedia` API for optimal performance
and browser compatibility.

## Architecture

### File Structure

```
match-media/
├── constants.ts                    # Breakpoint constant definitions
├── use-match-media.ts              # Base foundation hook
├── match-media.tsx                 # Generic MatchMedia component
├── test-helpers.ts                 # Shared test utilities
├── index.ts                        # Barrel export
├── match-media.stories.tsx         # Storybook documentation
├── match-media.spec.md             # This file
├── __tests__/                      # Tests for base foundation
│   ├── constants.test.ts
│   ├── use-match-media.test.ts
│   └── match-media.test.tsx
└── built-in/                       # Specialized breakpoint utilities
    ├── index.ts                    # Built-in barrel export
    ├── hooks/                      # Breakpoint detection hooks
    │   ├── index.ts
    │   ├── use-mobile-breakpoint.ts
    │   ├── use-tablet-breakpoint.ts
    │   ├── use-desktop-breakpoint.ts
    │   └── __tests__/
    │       ├── use-mobile-breakpoint.test.ts
    │       ├── use-tablet-breakpoint.test.ts
    │       └── use-desktop-breakpoint.test.ts
    └── components/                 # Declarative breakpoint components
        ├── index.ts
        ├── mobile-breakpoint.tsx
        ├── tablet-breakpoint.tsx
        ├── desktop-breakpoint.tsx
        └── __tests__/
            ├── mobile-breakpoint.test.tsx
            ├── tablet-breakpoint.test.tsx
            └── desktop-breakpoint.test.tsx
```

## Constants

### Breakpoint Definitions

Aligned with standard Tailwind CSS breakpoints:

- `BREAKPOINT_MOBILE`: `(max-width: 767px)` - Mobile devices (0-767px)
- `BREAKPOINT_TABLET`: `(min-width: 768px) and (max-width: 1023px)` - Tablet devices (768-1023px)
- `BREAKPOINT_DESKTOP`: `(min-width: 1024px)` - Desktop devices (1024px+)

**Rationale**: These breakpoints align with industry-standard responsive design patterns and
Tailwind's default breakpoint system.

## Base Hook: `useMatchMedia`

### Signature

```typescript
function useMatchMedia(query: string): boolean
```

### Implementation Details

- **API Used**: Native browser `matchMedia` API
- **SSR Safe**: Returns `false` when `window` is undefined
- **Event Handling**: Uses `addEventListener` for media query changes
- **Cleanup**: Properly removes event listeners on unmount

### Why matchMedia?

1. **Performance**: Browser-optimized, no polling or resize listeners
2. **Accuracy**: Directly matches CSS media queries
3. **Battery-friendly**: Native event-based system
4. **Consistency**: Same query syntax as CSS `@media`

### State Management

- Initial state set from `window.matchMedia(query).matches`
- Updates via `MediaQueryListEvent` listener
- Re-syncs on query change via `useEffect` dependency

## Built-in Utilities

The `built-in/` directory contains specialized breakpoint utilities that wrap the base foundation.

### Specialized Hooks (`built-in/hooks/`)

#### `useMobileBreakpoint()`

- **Purpose**: Detect mobile viewport
- **Implementation**: Wrapper around `useMatchMedia(BREAKPOINT_MOBILE)`
- **Returns**: `boolean`

#### `useTabletBreakpoint()`

- **Purpose**: Detect tablet viewport
- **Implementation**: Wrapper around `useMatchMedia(BREAKPOINT_TABLET)`
- **Returns**: `boolean`

#### `useDesktopBreakpoint()`

- **Purpose**: Detect desktop viewport
- **Implementation**: Wrapper around `useMatchMedia(BREAKPOINT_DESKTOP)`
- **Returns**: `boolean`

## Generic Component: `MatchMedia`

### Purpose

Provides a declarative way to conditionally render content based on any media query.

### Props

```typescript
interface MatchMediaProps {
  /** CSS media query string to match against */
  query: string
  /** Content to render when query matches */
  children: React.ReactNode
}
```

### Usage

```tsx
<MatchMedia query="(min-width: 1024px)">
  <DesktopContent />
</MatchMedia>

<MatchMedia query="(prefers-color-scheme: dark)">
  <DarkModeUI />
</MatchMedia>
```

### Implementation

- Uses `useMatchMedia` hook internally
- Returns `null` when query doesn't match
- No wrapper elements - children rendered directly

### Breakpoint Components (`built-in/components/`)

Specialized components that wrap `MatchMedia` with predefined breakpoint constants:

1. **`<MobileBreakpoint>`**: Uses `BREAKPOINT_MOBILE`
2. **`<TabletBreakpoint>`**: Uses `BREAKPOINT_TABLET`
3. **`<DesktopBreakpoint>`**: Uses `BREAKPOINT_DESKTOP`

#### Component Pattern

All breakpoint components use the `MatchMedia` component internally:

```typescript
interface BreakpointComponentProps {
  children: React.ReactNode
}

function XBreakpoint({ children }: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_X}>{children}</MatchMedia>
}
```

#### Available Components

1. **`<MobileBreakpoint>`**: Renders children only on mobile viewports
2. **`<TabletBreakpoint>`**: Renders children only on tablet viewports
3. **`<DesktopBreakpoint>`**: Renders children only on desktop viewports

#### Behavior

- **Conditional Rendering**: Returns `null` when breakpoint doesn't match
- **Accessibility**: Completely removes content from DOM (not hidden)
- **Performance**: No wrapper elements, minimal overhead
- **Implementation**: Delegates to `MatchMedia` component for consistency

### Benefits

- **Reusability**: All components use the same `MatchMedia` base
- **Consistency**: Centralized logic reduces code duplication
- **Maintainability**: Changes to `MatchMedia` benefit all components

### Behavior

- **Conditional Rendering**: Returns `null` when breakpoint doesn't match
- **Accessibility**: Completely removes content from DOM (not hidden)
- **Performance**: No wrapper elements, minimal overhead

## Usage Patterns

### Programmatic Detection

```tsx
function MyComponent() {
  const isMobile = useMobileBreakpoint()
  const isDesktop = useDesktopBreakpoint()

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  )
}
```

### Declarative Rendering

```tsx
function MyComponent() {
  return (
    <>
      <MobileBreakpoint>
        <MobileNav />
      </MobileBreakpoint>
      <DesktopBreakpoint>
        <DesktopNav />
      </DesktopBreakpoint>
    </>
  )
}
```

### Custom Media Queries (Hook)

```tsx
function MyComponent() {
  const isLargeScreen = useMatchMedia('(min-width: 1440px)')
  const prefersDark = useMatchMedia('(prefers-color-scheme: dark)')

  return <div>{isLargeScreen && prefersDark && <SpecialUI />}</div>
}
```

### Custom Media Queries (Component)

```tsx
function MyComponent() {
  return (
    <MatchMedia query='(min-width: 1440px)'>
      <MatchMedia query='(prefers-color-scheme: dark)'>
        <SpecialUI />
      </MatchMedia>
    </MatchMedia>
  )
}
```

### Generic MatchMedia Component

```tsx
function MyComponent() {
  return (
    <>
      <MatchMedia query='(min-width: 1440px)'>
        <LargeScreenContent />
      </MatchMedia>
      <MatchMedia query='(prefers-color-scheme: dark)'>
        <DarkModeUI />
      </MatchMedia>
    </>
  )
}
```

## Testing Strategy

### Unit Tests

Tests are organized by module:

- **Base Foundation** (`__tests__/`):

  - `constants.test.ts` - Verify exact media query strings
  - `use-match-media.test.ts` - Test matchMedia integration, event handling, cleanup
  - `match-media.test.tsx` - Test MatchMedia component rendering

- **Built-in Hooks** (`built-in/hooks/__tests__/`):

  - Verify each hook uses correct constant
  - Test integration with base `useMatchMedia`

- **Built-in Components** (`built-in/components/__tests__/`):
  - Test conditional rendering
  - Verify accessibility (DOM removal when hidden)
  - Snapshot tests for rendered output

### Mocking Strategy

Shared test utilities in `test-helpers.ts`:

- `createMatchMediaMock()` - Mock `window.matchMedia` with full MediaQueryList interface
- `setupMatchMediaMock()` - Setup/teardown helpers for beforeEach/afterEach
- Track `addEventListener`/`removeEventListener` calls
- Simulate media query changes via custom `_triggerChange` method

## Browser Compatibility

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Legacy Browsers**: Requires matchMedia polyfill (IE11 and below)
- **SSR**: Safe - returns `false` when window is undefined

## Performance Characteristics

- **Initialization**: O(1) - Single matchMedia call
- **Updates**: Event-driven - No polling
- **Memory**: Minimal - Single event listener per hook instance
- **Re-renders**: Only when breakpoint actually changes

## Future Considerations

### Potential Enhancements

1. **Debouncing**: Add optional debounce for rapid changes
2. **Server Hints**: Accept initial breakpoint from SSR context
3. **Breakpoint Context**: Provide app-level breakpoint state
4. **Custom Breakpoints**: Helper to define custom breakpoint sets

### Non-Goals

- CSS-in-JS styling (use Tailwind container queries instead)
- Element queries (use CSS `@container` instead)
- Orientation lock/detection (use CSS `@media (orientation)` directly)

## Dependencies

- **React**: `useEffect`, `useState`
- **Browser API**: `window.matchMedia`, `MediaQueryList`

## Export Strategy

### Main Barrel Export (`index.ts`)

```typescript
// Base foundation
export * from './constants'
export * from './use-match-media'
export * from './match-media'

// Built-in breakpoint utilities
export * from './built-in'
```

### Built-in Barrel Export (`built-in/index.ts`)

```typescript
export * from './hooks'
export * from './components'
```

This enables flexible import patterns:

```typescript
// Specific imports (recommended)
import { useMatchMedia, MatchMedia, BREAKPOINT_MOBILE } from '@/helpers/match-media'
import { useMobileBreakpoint, MobileBreakpoint } from '@/helpers/match-media'

// Base foundation only
import { useMatchMedia, MatchMedia } from '@/helpers/match-media'

// Wildcard import
import * as MatchMedia from '@/helpers/match-media'
```

### Organization Benefits

- **Clear Separation**: Base foundation vs built-in utilities
- **Tree-shaking**: Import only what you need
- **Scalability**: Easy to add new built-in utilities
- **Discoverability**: Logical grouping of related functionality

## Architecture Benefits

### Layered Design

1. **Foundation Layer**: `useMatchMedia` - Generic, reusable hook
2. **Generic Component Layer**: `MatchMedia` - Declarative component for any query
3. **Built-in Hooks Layer**: `useXBreakpoint` hooks - Predefined breakpoints
4. **Built-in Components Layer**: `XBreakpoint` components - Preconfigured components

### Code Reuse

- `MatchMedia` component encapsulates `useMatchMedia` hook
- All breakpoint components delegate to `MatchMedia`
- Single source of truth for media query logic
- Easy to extend with new breakpoints or queries
