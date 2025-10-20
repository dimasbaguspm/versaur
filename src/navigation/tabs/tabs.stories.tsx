/**
 * Tabs component stories for Versaur UI
 * Demonstrates semantic HTML structure (nav > ul > li > a)
 * Follows WCAG 2.1 AA accessibility standards
 * Uses primary color with underline style only
 */
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tabs>

/**
 * Basic tabs with semantic HTML structure
 * Uses nav > ul > li > a for proper navigation semantics
 */
function BasicExample() {
  const [tab, setTab] = useState('tab1')
  return (
    <>
      <Tabs value={tab} onValueChange={setTab}>
        <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
        <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
      </Tabs>
      <div className='mt-4 p-4 border rounded-lg'>
        {tab === 'tab1' && <div>Content for Tab 1</div>}
        {tab === 'tab2' && <div>Content for Tab 2</div>}
        {tab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </>
  )
}

/**
 * Basic tabs example with content panels
 */
export const Basic: Story = {
  render: () => <BasicExample />,
}

/**
 * Tabs with many items demonstrating scroll behavior
 * Active tab automatically scrolls into view
 */
function ScrollBehaviorExample() {
  const [tab, setTab] = useState('tab8')
  const tabItems = Array.from({ length: 15 }, (_, i) => `tab${i + 1}`)

  return (
    <div className='max-w-2xl border rounded-lg p-4'>
      <Tabs value={tab} onValueChange={setTab}>
        {tabItems.map(key => (
          <Tabs.Trigger key={key} value={key}>
            {`Tab ${key.replace('tab', '')}`}
          </Tabs.Trigger>
        ))}
      </Tabs>
      <div className='mt-4 p-4 bg-neutral-soft rounded-lg'>
        <p className='text-sm text-foreground'>
          Active tab: <strong>{tab.replace('tab', '')}</strong>
        </p>
        <p className='text-xs text-foreground-light mt-2'>
          The active tab automatically scrolls into view for better UX
        </p>
      </div>
    </div>
  )
}

/**
 * Tabs with horizontal scrolling for many items
 */
export const ScrollBehavior: Story = {
  render: () => <ScrollBehaviorExample />,
}

/**
 * Tabs with long labels demonstrating text wrapping
 */
function LongLabelsExample() {
  const [tab, setTab] = useState('short')

  return (
    <>
      <Tabs value={tab} onValueChange={setTab}>
        <Tabs.Trigger value='short'>Short</Tabs.Trigger>
        <Tabs.Trigger value='medium'>Medium Label</Tabs.Trigger>
        <Tabs.Trigger value='long'>This is a very long tab label</Tabs.Trigger>
      </Tabs>
      <div className='mt-4 p-4 border rounded-lg'>
        {tab === 'short' && <div>Content for short tab</div>}
        {tab === 'medium' && <div>Content for medium label tab</div>}
        {tab === 'long' && <div>Content for very long tab label</div>}
      </div>
    </>
  )
}

/**
 * Tabs with varying label lengths
 */
export const LongLabels: Story = {
  render: () => <LongLabelsExample />,
}

/**
 * Tabs demonstrating keyboard navigation
 * Use Tab key to focus, arrow keys to navigate (browser default behavior)
 */
function KeyboardNavigationExample() {
  const [tab, setTab] = useState('home')

  return (
    <div className='space-y-4'>
      <div className='p-4 bg-info-soft rounded-lg border border-info-light'>
        <p className='text-sm text-info-bold font-medium'>
          Keyboard Navigation:
        </p>
        <ul className='text-xs text-info mt-2 space-y-1 list-disc list-inside'>
          <li>Press Tab to focus the active tab</li>
          <li>Use Left/Right arrow keys to navigate between tabs</li>
          <li>Press Enter or Space to activate a tab</li>
        </ul>
      </div>
      <Tabs value={tab} onValueChange={setTab}>
        <Tabs.Trigger value='home'>Home</Tabs.Trigger>
        <Tabs.Trigger value='products'>Products</Tabs.Trigger>
        <Tabs.Trigger value='about'>About</Tabs.Trigger>
        <Tabs.Trigger value='contact'>Contact</Tabs.Trigger>
      </Tabs>
      <div className='p-4 border rounded-lg'>
        {tab === 'home' && <div>Home content</div>}
        {tab === 'products' && <div>Products content</div>}
        {tab === 'about' && <div>About content</div>}
        {tab === 'contact' && <div>Contact content</div>}
      </div>
    </div>
  )
}

/**
 * Tabs with keyboard navigation instructions
 */
export const KeyboardNavigation: Story = {
  render: () => <KeyboardNavigationExample />,
}

/**
 * Tabs with full width triggers
 * Each tab trigger fills the available width equally using flex
 * Perfect for mobile layouts or when you want evenly distributed tabs
 */
function FullWidthExample() {
  const [tab, setTab] = useState('tab1')

  return (
    <div className='space-y-8'>
      {/* Two tabs - 50% each */}
      <div>
        <h3 className='text-sm font-medium mb-2 text-foreground'>
          Two tabs (50% each)
        </h3>
        <Tabs value={tab} onValueChange={setTab} fullWidth>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        </Tabs>
        <div className='mt-4 p-4 border rounded-lg'>
          {tab === 'tab1' && <div>Content for Tab 1</div>}
          {tab === 'tab2' && <div>Content for Tab 2</div>}
        </div>
      </div>

      {/* Three tabs - 33.33% each */}
      <div>
        <h3 className='text-sm font-medium mb-2 text-foreground'>
          Three tabs (33.33% each)
        </h3>
        <Tabs value={tab} onValueChange={setTab} fullWidth>
          <Tabs.Trigger value='tab1'>Overview</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Details</Tabs.Trigger>
          <Tabs.Trigger value='tab3'>Settings</Tabs.Trigger>
        </Tabs>
        <div className='mt-4 p-4 border rounded-lg'>
          {tab === 'tab1' && <div>Overview content</div>}
          {tab === 'tab2' && <div>Details content</div>}
          {tab === 'tab3' && <div>Settings content</div>}
        </div>
      </div>

      {/* Four tabs - 25% each */}
      <div>
        <h3 className='text-sm font-medium mb-2 text-foreground'>
          Four tabs (25% each)
        </h3>
        <Tabs value={tab} onValueChange={setTab} fullWidth>
          <Tabs.Trigger value='tab1'>Home</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Products</Tabs.Trigger>
          <Tabs.Trigger value='tab3'>About</Tabs.Trigger>
          <Tabs.Trigger value='tab4'>Contact</Tabs.Trigger>
        </Tabs>
        <div className='mt-4 p-4 border rounded-lg'>
          {tab === 'tab1' && <div>Home content</div>}
          {tab === 'tab2' && <div>Products content</div>}
          {tab === 'tab3' && <div>About content</div>}
          {tab === 'tab4' && <div>Contact content</div>}
        </div>
      </div>

      <div className='p-4 bg-info-soft rounded-lg border border-info-light'>
        <p className='text-sm text-info-bold font-medium'>Full Width Usage:</p>
        <ul className='text-xs text-info mt-2 space-y-1 list-disc list-inside'>
          <li>Each tab trigger fills available width equally using flex-1</li>
          <li>Perfect for mobile layouts or card-based designs</li>
          <li>Great for navigation with limited number of tabs (2-4)</li>
          <li>Works best when all tabs have similar label lengths</li>
        </ul>
      </div>
    </div>
  )
}

/**
 * Tabs with full width triggers for evenly distributed layout
 */
export const FullWidth: Story = {
  render: () => <FullWidthExample />,
}
