# BottomSheet

A mobile-first, accessible bottom sheet overlay for actions, menus, or additional content. Follows Versaur's compound component pattern for consistency and flexibility.

## Usage

```tsx
import { BottomSheet } from '@/overlays/bottom-sheet'

const [open, setOpen] = useState(false)

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <BottomSheet isOpen={open} onBackdropClick={() => setOpen(false)}>
    <BottomSheet.Header>
      <BottomSheet.Title>Sheet Title</BottomSheet.Title>
      <ButtonIcon as={X} aria-label="Close" onClick={() => setOpen(false)} />
    </BottomSheet.Header>
    <BottomSheet.Body>
      <p>Sheet content here</p>
    </BottomSheet.Body>
    <BottomSheet.Footer>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </BottomSheet.Footer>
  </BottomSheet>
</>
```

## API

### `<BottomSheet />`
- **isOpen**: `boolean` — Controls open state (required)
- **onBackdropClick**: `() => void` — Called when backdrop is clicked
- **children**: React nodes (should use compound parts)

### Compound Parts
- `BottomSheet.Header` — Top section for title/actions
- `BottomSheet.Title` — Title text (new atom, for consistency)
- `BottomSheet.Body` — Main content area
- `BottomSheet.Footer` — Bottom section for actions

## Best Practices
- Use only on mobile/small viewports
- Place at root of page/app for accessibility
- Use `BottomSheet.Title` for headings (improves a11y)
- Use `ButtonIcon` for close actions

## Examples
See Storybook for more usage patterns: confirmation, menus, custom content, etc.

---

Follows Versaur UI guidelines for compound components, accessibility, and theming.
