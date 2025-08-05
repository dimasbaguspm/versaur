# BottomSheetInput

A mobile-friendly input component that opens a BottomSheet overlay for custom content selection. Follows the same compound/context pattern as DrawerInput, but uses BottomSheet for mobile overlays.

## Usage

```tsx
import { BottomSheetInput } from '@/forms/bottom-sheet-input'

const [value, setValue] = useState('')

<BottomSheetInput
  label='Pick a value'
  placeholder='Click to open bottom sheet'
  value={value}
  onChange={e => setValue(e.target.value)}
>
  {ctx => (
    <>
      <BottomSheetInput.Header>
        <Text fontSize='lg' fontWeight='bold'>Bottom Sheet Input Example</Text>
      </BottomSheetInput.Header>
      <BottomSheetInput.Body>
        <SearchInput
          label='Search Transactions'
          value={value}
          onChange={ctx.onChange}
          placeholder='Type something...'
        />
      </BottomSheetInput.Body>
      <BottomSheetInput.Footer>
        <Button onClick={() => ctx.setIsOpen(false)} className='btn btn-primary'>Confirm</Button>
      </BottomSheetInput.Footer>
    </>
  )}
</BottomSheetInput>
```

## API

- All TextInput props except `readOnly` and `children`
- Compound pattern: `Header`, `Body`, `Footer`, `Title`
- Context: `{ isOpen, setIsOpen, onChange, value }`

## Accessibility

- Uses `aria-haspopup='dialog'` and `aria-expanded` on input
- Follows WCAG 2.1 AA standards

## Testing

- Colocate tests in `__tests__/bottom-sheet-input.test.tsx`
- Use Vitest + React Testing Library
- Assert HTML output and accessibility
