import { composeStories } from '@storybook/react'
import * as stories from '../selectable-single-input.stories'
import { render, screen, fireEvent } from '@testing-library/react'

describe('SelectableSingleInput', () => {
  const { Basic, DynamicContent, CheckboxPlacement, HiddenCheckbox, Disabled } =
    composeStories(stories)

  it('renders basic options and allows selection', () => {
    const { getByLabelText, asFragment } = render(<Basic />)
    // Snapshot for html output
    expect(asFragment()).toMatchSnapshot()

    // All options should be rendered
    expect(getByLabelText('Select option1')).toBeInTheDocument()
    expect(getByLabelText('Select option2')).toBeInTheDocument()
    expect(getByLabelText('Select option3')).toBeInTheDocument()

    // Option 1 should be checked by default
    const option1 = getByLabelText('Select option1') as HTMLLabelElement
    expect(option1.getAttribute('aria-checked')).toBe('true')

    // Simulate selecting option 2
    const option2 = getByLabelText('Select option2') as HTMLLabelElement
    fireEvent.click(option2)
    // After click, option2 should be checked
    expect(option2.getAttribute('aria-checked')).toBe('true')
  })

  it('renders dynamic content based on checked state', () => {
    const { getByLabelText } = render(<DynamicContent />)

    // Premium should be checked by default
    const premium = getByLabelText('Select premium') as HTMLLabelElement
    expect(premium.getAttribute('aria-checked')).toBe('true')
    expect(premium.textContent).toContain('✓ Currently selected')

    // Free should not be checked
    const free = getByLabelText('Select free') as HTMLLabelElement
    expect(free.getAttribute('aria-checked')).toBe('false')
    expect(free.textContent).toContain('Basic features')

    // Click free option
    fireEvent.click(free)
    expect(free.getAttribute('aria-checked')).toBe('true')
    expect(free.textContent).toContain('✓ Currently selected')
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

    // Center should be checked by default
    expect(centerOption.getAttribute('aria-checked')).toBe('true')

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
    const disabledOption = screen.getByLabelText('Select disabled')
    const enabledOption = screen.getByLabelText('Select enabled')

    expect(disabledOption).toHaveAttribute('aria-checked', 'false')
    expect(disabledOption).toHaveClass('opacity-50')
    expect(disabledOption).toHaveAttribute('tabindex', '-1')

    expect(enabledOption).toHaveAttribute('aria-checked', 'true')
    expect(enabledOption).not.toHaveClass('opacity-50')
    expect(enabledOption).toHaveAttribute('tabindex', '0')
  })

  it('renders children as function correctly', () => {
    const { container } = render(<DynamicContent />)

    // Should render the dynamic content from function-as-children
    expect(container.textContent).toContain('Free Plan')
    expect(container.textContent).toContain('Premium Plan')
  })

  it('has proper accessibility attributes', () => {
    const { getByLabelText } = render(<Basic />)

    const option = getByLabelText('Select option1') as HTMLLabelElement
    expect(option).toHaveAttribute('role', 'radio')
    expect(option).toHaveAttribute('aria-checked')
    expect(option).toHaveAttribute('aria-label', 'Select option1')
  })
})
