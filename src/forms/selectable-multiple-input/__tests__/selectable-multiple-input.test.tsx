import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../selectable-multiple-input.stories'

describe('SelectableMultipleInput', () => {
  const { Basic, DynamicContent, CheckboxPlacement, HiddenCheckbox, Disabled } =
    composeStories(stories)

  it('renders basic options and allows multiple selections', () => {
    const { getByLabelText, asFragment } = render(<Basic />)
    // Snapshot for html output
    expect(asFragment()).toMatchSnapshot()

    // All options should be rendered
    expect(getByLabelText('Select apple')).toBeInTheDocument()
    expect(getByLabelText('Select banana')).toBeInTheDocument()
    expect(getByLabelText('Select orange')).toBeInTheDocument()

    // Nothing should be checked by default
    const apple = getByLabelText('Select apple') as HTMLLabelElement
    expect(apple.getAttribute('aria-checked')).toBe('false')

    // Simulate selecting apple
    fireEvent.click(apple)
    // After click, apple should be checked
    expect(apple.getAttribute('aria-checked')).toBe('true')

    // Simulate selecting banana (multiple selection)
    const banana = getByLabelText('Select banana') as HTMLLabelElement
    fireEvent.click(banana)
    // Both should now be checked
    expect(apple.getAttribute('aria-checked')).toBe('true')
    expect(banana.getAttribute('aria-checked')).toBe('true')
  })

  it('renders dynamic content based on checked state', () => {
    const { getByLabelText } = render(<DynamicContent />)

    // Premium should be checked by default
    const premium = getByLabelText('Select premium') as HTMLLabelElement
    expect(premium.getAttribute('aria-checked')).toBe('true')
    expect(premium.textContent).toContain('✓ $9.99/month - Selected')

    // Free should not be checked
    const free = getByLabelText('Select free') as HTMLLabelElement
    expect(free.getAttribute('aria-checked')).toBe('false')
    expect(free.textContent).toContain('$0/month')
    expect(free.textContent).not.toContain('✓')

    // Click free option (multiple selection)
    fireEvent.click(free)
    expect(free.getAttribute('aria-checked')).toBe('true')
    expect(free.textContent).toContain('✓ $0/month - Selected')
    // Premium should still be checked
    expect(premium.getAttribute('aria-checked')).toBe('true')
  })

  it('renders checkbox at different placements', () => {
    const { getByLabelText } = render(<CheckboxPlacement />)

    const topOption = getByLabelText('Select top') as HTMLLabelElement
    const centerOption = getByLabelText('Select center') as HTMLLabelElement
    const bottomOption = getByLabelText('Select bottom') as HTMLLabelElement

    // Check that all options are rendered
    expect(topOption).toBeInTheDocument()
    expect(centerOption).toBeInTheDocument()
    expect(bottomOption).toBeInTheDocument()

    // Nothing should be checked by default
    expect(topOption.getAttribute('aria-checked')).toBe('false')
    expect(centerOption.getAttribute('aria-checked')).toBe('false')
    expect(bottomOption.getAttribute('aria-checked')).toBe('false')

    // Verify placement classes
    expect(topOption).toHaveClass('items-start')
    expect(centerOption).toHaveClass('items-center')
    expect(bottomOption).toHaveClass('items-end')
  })

  it('renders without checkbox when hideCheckbox is true', () => {
    const { container } = render(<HiddenCheckbox />)

    // Should not find checkbox indicators (the span with the checkbox styling)
    const checkboxIndicators = container.querySelectorAll(
      'span[aria-hidden="true"]'
    )
    // When hideCheckbox is true, the checkbox indicator span should not be rendered
    // But the sr-only input still has aria-hidden, so we check specifically for the indicator span
    // which has specific styling classes
    const styledCheckboxes = Array.from(checkboxIndicators).filter(el =>
      el.classList.contains('h-6')
    )
    expect(styledCheckboxes.length).toBe(0)
  })

  it('renders disabled state correctly', () => {
    render(<Disabled />)
    const disabledUnchecked = screen.getByLabelText('Select disabled-unchecked')
    const disabledChecked = screen.getByLabelText('Select disabled-checked')

    expect(disabledUnchecked).toHaveAttribute('aria-checked', 'false')
    expect(disabledUnchecked).toHaveClass('opacity-50')
    expect(disabledUnchecked).toHaveAttribute('tabindex', '-1')

    expect(disabledChecked).toHaveAttribute('aria-checked', 'true')
    expect(disabledChecked).toHaveClass('opacity-50')
    expect(disabledChecked).toHaveAttribute('tabindex', '-1')
  })

  it('renders children as function correctly', () => {
    const { container } = render(<DynamicContent />)

    // Should render the dynamic content from function-as-children
    expect(container.textContent).toContain('Free Plan')
    expect(container.textContent).toContain('Premium Plan')
    expect(container.textContent).toContain('Enterprise Plan')
  })

  it('has proper accessibility attributes', () => {
    const { getByLabelText } = render(<Basic />)

    const option = getByLabelText('Select apple') as HTMLLabelElement
    expect(option).toHaveAttribute('role', 'checkbox')
    expect(option).toHaveAttribute('aria-checked')
    expect(option).toHaveAttribute('aria-label', 'Select apple')
  })
})
