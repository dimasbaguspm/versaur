import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs } from '@/components/tabs'
import { useState } from 'react'

describe('Tabs', () => {
  it('renders tab triggers and content (controlled)', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <>
          <Tabs value={tab} onValueChange={setTab}>
            <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
            <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
            <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
          </Tabs>
          <div data-testid='content'>
            {tab === 'tab1' && <div>Content for Tab 1</div>}
            {tab === 'tab2' && <div>Content for Tab 2</div>}
            {tab === 'tab3' && <div>Content for Tab 3</div>}
          </div>
        </>
      )
    }
    render(<TestTabs />)
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument()
    expect(screen.getByTestId('content')).toHaveTextContent('Content for Tab 1')
  })

  it('switches tab on trigger click (controlled)', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <>
          <Tabs value={tab} onValueChange={setTab}>
            <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
            <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
          </Tabs>
          <div data-testid='content'>
            {tab === 'tab1' && <div>Content for Tab 1</div>}
            {tab === 'tab2' && <div>Content for Tab 2</div>}
          </div>
        </>
      )
    }
    render(<TestTabs />)
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }))
    expect(screen.getByTestId('content')).toHaveTextContent('Content for Tab 2')
  })

  it('matches snapshot', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        </Tabs>
      )
    }
    const { asFragment } = render(<TestTabs />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders color variants', () => {
    function ColorTabs() {
      const [tab, setTab] = useState('primary')
      return (
        <Tabs value={tab} onValueChange={setTab} color={tab as 'primary'}>
          <Tabs.Trigger value='primary'>Primary</Tabs.Trigger>
          <Tabs.Trigger value='secondary'>Secondary</Tabs.Trigger>
          <Tabs.Trigger value='tertiary'>Tertiary</Tabs.Trigger>
          <Tabs.Trigger value='ghost'>Ghost</Tabs.Trigger>
          <Tabs.Trigger value='neutral'>Neutral</Tabs.Trigger>
        </Tabs>
      )
    }
    render(<ColorTabs />)
    expect(screen.getByRole('tab', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Secondary' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tertiary' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Ghost' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Neutral' })).toBeInTheDocument()
  })

  it('handles scroll behavior for many tabs', () => {
    function ScrollTabs() {
      const [tab, setTab] = useState('tab5')
      const tabItems = Array.from({ length: 15 }, (_, i) => `tab${i + 1}`)
      return (
        <Tabs value={tab} onValueChange={setTab}>
          {tabItems.map(key => (
            <Tabs.Trigger key={key} value={key}>
              {`Tab ${key.replace('tab', '')}`}
            </Tabs.Trigger>
          ))}
        </Tabs>
      )
    }
    render(<ScrollTabs />)
    expect(screen.getByRole('tab', { name: 'Tab 5' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 10' }))
    expect(screen.getByRole('tab', { name: 'Tab 10' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })
})
