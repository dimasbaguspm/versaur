import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs } from '@/navigation/tabs'
import { useState } from 'react'

describe('Tabs', () => {
  it('renders tab triggers with semantic HTML structure (nav > ul > li > a)', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
          <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
        </Tabs>
      )
    }
    const { container } = render(<TestTabs />)

    // Check semantic structure
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()

    const ul = nav?.querySelector('ul[role="tablist"]')
    expect(ul).toBeInTheDocument()

    const listItems = ul?.querySelectorAll('li[role="presentation"]')
    expect(listItems).toHaveLength(3)

    const links = container.querySelectorAll('a[role="tab"]')
    expect(links).toHaveLength(3)

    // Check accessibility attributes
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute(
      'aria-selected',
      'false'
    )
  })

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

  it('sets correct tabIndex for keyboard navigation', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
          <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
        </Tabs>
      )
    }
    render(<TestTabs />)

    // All tabs should be accessible via keyboard Tab key (no tabIndex attribute)
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
    const tab3 = screen.getByRole('tab', { name: 'Tab 3' })

    // None should have explicit tabIndex (defaults to 0 for anchor elements)
    expect(tab1).not.toHaveAttribute('tabIndex')
    expect(tab2).not.toHaveAttribute('tabIndex')
    expect(tab3).not.toHaveAttribute('tabIndex')

    // Active tab should have aria-current
    expect(tab1).toHaveAttribute('aria-current', 'page')
    expect(tab2).not.toHaveAttribute('aria-current')
    expect(tab3).not.toHaveAttribute('aria-current')
  })

  it('renders indicator element with proper positioning', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        </Tabs>
      )
    }
    const { container } = render(<TestTabs />)

    // Check that indicator exists
    const indicator = container.querySelector('[aria-hidden="true"]')
    expect(indicator).toBeInTheDocument()
    expect(indicator).toHaveClass('bg-primary')
  })

  it('renders primary color with underline style (no variants)', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        </Tabs>
      )
    }
    const { container } = render(<TestTabs />)

    // Check primary color styling on active tab
    const activeTab = screen.getByRole('tab', { name: 'Tab 1' })
    expect(activeTab).toHaveClass('text-primary')

    // Check underline border structure
    const tablist = container.querySelector('[role="tablist"]')
    expect(tablist).toHaveClass('border-b')
  })

  it('has proper focus styles without cropping', () => {
    function TestTabs() {
      const [tab, setTab] = useState('tab1')
      return (
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        </Tabs>
      )
    }
    const { container } = render(<TestTabs />)

    // Check that container has overflow-y-visible to prevent focus ring cropping
    const tablist = container.querySelector('[role="tablist"]')
    expect(tablist).toHaveClass('overflow-y-visible')

    // Check that tabs have focus-visible styles
    const tab = screen.getByRole('tab', { name: 'Tab 1' })
    expect(tab).toHaveClass('focus-visible:ring-2')
    expect(tab).toHaveClass('focus-visible:ring-primary')
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
})
