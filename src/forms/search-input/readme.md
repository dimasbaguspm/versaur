# SearchInput

A wrapper component for Versaur's `TextInput` that enforces HTML search input standards.

## Features
- Extends `TextInput` API
- Always uses `type='search'` and proper HTML search attributes
- Supports all standard search input props (autocomplete, spellcheck, inputMode, etc.)
- Follows browser accessibility and native behavior

## Usage
```tsx
import { SearchInput } from '@/forms/search-input'

<SearchInput
  placeholder="Search..."
  value={search}
  onChange={handleChange}
  autoComplete="on"
  spellCheck={true}
  inputMode="search"
/>
```
