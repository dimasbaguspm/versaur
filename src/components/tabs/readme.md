# Tabs

Compound/context Tabs component for Versaur UI. Follows Material Design guidelines and Versaur
codebase standards.

## Features

- Compound/context pattern: Tabs.Trigger
- Strictly typed props and context
- ARIA roles and attributes for accessibility
- Mobile-first, responsive, and themeable
- Supports horizontal and vertical orientation
- Color and size variants via Versaur system
- Scroll behavior for large tab lists

## Usage

```tsx
import { Tabs } from '@/components/tabs'

// Basic controlled tabs
function BasicExample() {
  const [tab, setTab] = useState('tab1')
  return (
    <>
      <Tabs value={tab} onValueChange={setTab}>
        <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
        <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
      </Tabs>
      <div className='mt-4'>
        {tab === 'tab1' && <div>Content for Tab 1</div>}
        {tab === 'tab2' && <div>Content for Tab 2</div>}
        {tab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </>
  )
}

// Color variants
function ColorVariantsExample() {
  const [tab, setTab] = useState('primary')
  return (
    <Tabs value={tab} onValueChange={setTab} color={tab}>
      <Tabs.Trigger value='primary'>Primary</Tabs.Trigger>
      <Tabs.Trigger value='secondary'>Secondary</Tabs.Trigger>
      <Tabs.Trigger value='tertiary'>Tertiary</Tabs.Trigger>
      <Tabs.Trigger value='ghost'>Ghost</Tabs.Trigger>
      <Tabs.Trigger value='neutral'>Neutral</Tabs.Trigger>
    </Tabs>
  )
}

// Scroll behavior for many tabs
function ScrollBehaviorExample() {
  const [tab, setTab] = useState('tab5')
  const tabItems = Array.from({ length: 15 }, (_, i) => `tab${i + 1}`)
  return (
    <div className='max-w-xl border p-4'>
      <Tabs value={tab} onValueChange={setTab}>
        {tabItems.map(key => (
          <Tabs.Trigger key={key} value={key}>
            {`Tab ${key.replace('tab', '')}`}
          </Tabs.Trigger>
        ))}
      </Tabs>
      <div className='mt-4'>{`Content for ${tab}`}</div>
    </div>
  )
}
```

## Props

See `types.ts` for full prop documentation.
