/**
 * Tabs component stories for Versaur UI
 * Follows Material Design guidelines and Versaur codebase standards
 * Demonstrates vertical orientation, color variants, and accessibility
 * Includes interactive controlled example
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
 * Example: Basic vertical tabs, content rendered externally
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
      <div className='mt-4'>
        {tab === 'tab1' && <div>Content for Tab 1</div>}
        {tab === 'tab2' && <div>Content for Tab 2</div>}
        {tab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </>
  )
}

/**
 * Basic vertical tabs
 */
export const Basic: Story = {
  render: () => <BasicExample />,
}

/**
 * Example: Tabs with all color variants
 */
function ColorVariantsExample() {
  const [tab, setTab] = useState('primary')
  const colors: Array<{
    key: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'neutral'
    label: string
  }> = [
    { key: 'primary', label: 'Coral' },
    { key: 'secondary', label: 'Sage' },
    { key: 'tertiary', label: 'Mist' },
    { key: 'ghost', label: 'Slate' },
    { key: 'neutral', label: 'Light Gray' },
  ]
  return (
    <div className='space-y-6'>
      {colors.map(({ key, label }) => (
        <div key={key}>
          <div className='mb-2 font-semibold text-sm'>{label}</div>
          <Tabs value={tab} onValueChange={setTab} color={key}>
            <Tabs.Trigger value='primary'>Primary</Tabs.Trigger>
            <Tabs.Trigger value='secondary'>Secondary</Tabs.Trigger>
            <Tabs.Trigger value='tertiary'>Tertiary</Tabs.Trigger>
            <Tabs.Trigger value='ghost'>Ghost</Tabs.Trigger>
            <Tabs.Trigger value='neutral'>Neutral</Tabs.Trigger>
          </Tabs>
        </div>
      ))}
    </div>
  )
}

/**
 * Tabs with color variants
 */
export const ColorVariants: Story = {
  render: () => <ColorVariantsExample />,
}

/**
 * Example: Tabs with scroll behavior and many items
 */
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

/**
 * Tabs with scroll behavior
 */
export const ScrollBehavior: Story = {
  render: () => <ScrollBehaviorExample />,
}
