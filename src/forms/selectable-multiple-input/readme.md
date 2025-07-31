# SelectableMultipleInput

A multiple-choice input component for Versaur, following the same UI and API as SelectableSingleInput but supporting multiple selections (checkbox).

## Usage

```tsx
import { SelectableMultipleInput } from '@/forms/selectable-multiple-input'

<SelectableMultipleInput
  value="option1"
  label="Option 1"
  checked={selected.includes('option1')}
  onChange={handleChange}
/>
```

- Uses the same style and accessibility patterns as SelectableSingleInput
- Use for multiple-choice selection UIs
