# FormLayout

A responsive 12-column grid layout for forms and complex UI, following Versaur's design system and
code conventions. Use `FormLayout.Column` to control column span (1–12, default 4).

## Usage

```tsx
import { FormLayout } from '@/components/form-layout'
import { TextInput } from '@/components/text-input'
import { SelectInput } from '@/components/select-input'
import { CheckboxInput } from '@/components/checkbox-input'
import { RadioInput } from '@/components/radio-input'

;<FormLayout>
  <FormLayout.Column span={6}>
    <TextInput label='First Name' placeholder='First name' />
  </FormLayout.Column>
  <FormLayout.Column span={6}>
    <TextInput label='Last Name' placeholder='Last name' />
  </FormLayout.Column>
</FormLayout>
```

## Advanced Example

```tsx
<FormLayout>
  <FormLayout.Column span={3}>
    <SelectInput label='Country'>
      <option value='id'>Indonesia</option>
      <option value='us'>United States</option>
    </SelectInput>
  </FormLayout.Column>
  <FormLayout.Column span={3}>
    <CheckboxInput label='Preferences'>
      <CheckboxInput.Option value='email'>Email</CheckboxInput.Option>
      <CheckboxInput.Option value='sms'>SMS</CheckboxInput.Option>
    </CheckboxInput>
  </FormLayout.Column>
  <FormLayout.Column span={6}>
    <RadioInput label='Gender' name='gender'>
      <RadioInput.Option value='male'>Male</RadioInput.Option>
      <RadioInput.Option value='female'>Female</RadioInput.Option>
    </RadioInput>
  </FormLayout.Column>
</FormLayout>
```

- Always uses a 12-column grid
- Each column can span 1–12 columns (default 4)
- Mobile-first, accessible, and composable
- Works with all Versaur input components
- Follows WCAG 2.1 AA accessibility standards
