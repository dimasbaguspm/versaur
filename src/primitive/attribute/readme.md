# Attribute

The `Attribute` component is used to display structured information with a title-content pair

## Basic Usage

### Attribute Component

```tsx
import { Attribute } from '@versaur/primitive/attribute'

export default function UserProfile() {
  return (
    <div className='space-y-4'>
      <Attribute title='Name'>John Doe</Attribute>
      <Attribute title='Email'>john.doe@example.com</Attribute>
      <Attribute title='Location'>New York, NY</Attribute>
    </div>
  )
}
```
