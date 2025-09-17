import { render, screen, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { describe, it, expect, vi } from 'vitest'
import { PinVerifierDrawer } from '../pin-verifier-drawer'
import * as stories from '../pin-verifier-drawer.stories'

const { Default, DrawerWithKeypad, WithError } = composeStories(stories)

describe('PinVerifierDrawer', () => {
  it('should render modal variant correctly', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render drawer variant correctly', () => {
    const { asFragment } = render(<DrawerWithKeypad />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should handle PIN input correctly', async () => {
    const user = userEvent.setup()
    const onChangeMock = vi.fn()
    const onCompleteMock = vi.fn()

    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        onChange={onChangeMock}
        onComplete={onCompleteMock}
        secure={false}
      />
    )

    const pinInputs = screen.getAllByRole('textbox')

    // Type in first input
    await user.type(pinInputs[0], '1')
    expect(onChangeMock).toHaveBeenCalledWith('1')

    // Type a complete PIN
    await user.clear(pinInputs[0])
    await user.type(pinInputs[0], '123456')
    expect(onCompleteMock).toHaveBeenCalledWith('123456')
  })

  it('should handle keypad input in drawer mode', async () => {
    const user = userEvent.setup()
    const onChangeMock = vi.fn()

    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        onChange={onChangeMock}
        as='drawer'
        showKeypad={true}
      />
    )

    // Click on number 1 in keypad
    const keypad1 = screen.getByLabelText('Digit 1')
    await user.click(keypad1)
    expect(onChangeMock).toHaveBeenCalledWith('1')

    // Click on number 2
    const keypad2 = screen.getByLabelText('Digit 2')
    await user.click(keypad2)
    expect(onChangeMock).toHaveBeenCalledWith('12')
  })

  it('should handle delete button in keypad', async () => {
    const user = userEvent.setup()
    const onChangeMock = vi.fn()

    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        value='123'
        onChange={onChangeMock}
        as='drawer'
        showKeypad={true}
      />
    )

    // Click delete button
    const deleteButton = screen.getByLabelText('Delete')
    await user.click(deleteButton)
    expect(onChangeMock).toHaveBeenCalledWith('12')
  })

  it('should call onVerify when verify button is clicked with complete PIN', async () => {
    const user = userEvent.setup()
    const onVerifyMock = vi.fn()

    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        value='123456'
        onVerify={onVerifyMock}
      />
    )

    const verifyButton = screen.getByText('Verify')
    await user.click(verifyButton)
    expect(onVerifyMock).toHaveBeenCalledWith('123456')
  })

  it('should disable verify button when PIN is incomplete', () => {
    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        value='123'
        onVerify={() => {}}
      />
    )

    const verifyButton = screen.getByText('Verify')
    expect(verifyButton).toBeDisabled()
  })

  it('should show error state correctly', () => {
    render(<WithError />)
    fireEvent.click(screen.getByText('Open PIN Verifier'))
    expect(
      screen.getByText('Invalid PIN. Please try again.')
    ).toBeInTheDocument()
  })

  it('should show loading state correctly', () => {
    render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        value='123456'
        loading={true}
      />
    )

    const verifyButton = screen.getByText('Verifying...')
    expect(verifyButton).toBeDisabled()
  })

  it('should show keypad only in drawer mode when showKeypad is true', () => {
    const { rerender } = render(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        as='modal'
        showKeypad={true}
      />
    )

    // Keypad should not be shown in modal mode
    expect(screen.queryByLabelText('Digit 1')).not.toBeInTheDocument()

    rerender(
      <PinVerifierDrawer
        isOpen={true}
        onClose={() => {}}
        as='drawer'
        showKeypad={true}
      />
    )

    // Keypad should be shown in drawer mode
    expect(screen.getByLabelText('Digit 1')).toBeInTheDocument()
  })
})
