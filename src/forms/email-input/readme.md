# EmailInput

A wrapper component for `TextInput` that enforces HTML email input standards.

## Usage
```tsx
import { EmailInput } from '@/forms/email-input'

<EmailInput label="Email" required />
```

## Props
- Inherits all `TextInput` props except `type` (always set to "email")
- Adds `autoComplete="email"` and `inputMode="email"` for best browser support
