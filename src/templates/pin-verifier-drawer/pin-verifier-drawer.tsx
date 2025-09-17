import React from 'react'
import { cn } from '@/utils/cn'
import { PinField } from '@/forms/pin-field'
import { Drawer } from '@/overlays/drawer'
import { Modal } from '@/overlays/modal'
import { Button } from '@/primitive/button'
import { Heading } from '@/primitive/heading'
import { NumericKeypad } from './pin-verifier-drawer.atoms'
import { formatPinInput, isPinComplete } from './helpers'
import type { PinVerifierDrawerProps } from './types'
import { ButtonGroup } from '@/layouts'

/**
 * PinVerifierDrawer - A responsive PIN verification component
 *
 * Adapts between Modal (desktop) and Drawer (mobile) based on the `as` prop.
 * For drawer mode, includes a numeric keypad for touch-friendly PIN entry.
 * Provides complete PIN verification flow with proper accessibility and UX.
 */
export const PinVerifierDrawer: React.FC<PinVerifierDrawerProps> = ({
  isOpen,
  onClose,
  title = 'Enter PIN',
  value,
  defaultValue,
  onChange,
  onComplete,
  onVerify,
  secure = true,
  loading = false,
  error,
  showKeypad = true,
  as = 'modal',
  verifyButtonText = 'Verify',
  variant = 'primary',
  modalProps,
  drawerProps,
}) => {
  const [internalValue, setInternalValue] = React.useState(() =>
    formatPinInput(defaultValue || '')
  )

  const currentValue =
    value !== undefined ? formatPinInput(value) : internalValue
  const isComplete = isPinComplete(currentValue)

  const handleChange = React.useCallback(
    (newValue: string) => {
      const formattedValue = formatPinInput(newValue)

      if (value === undefined) {
        setInternalValue(formattedValue)
      }

      onChange?.(formattedValue)

      if (isPinComplete(formattedValue)) {
        onComplete?.(formattedValue)
      }
    },
    [value, onChange, onComplete]
  )

  const handleNumberPress = React.useCallback(
    (digit: string) => {
      if (currentValue.length < 6) {
        handleChange(currentValue + digit)
      }
    },
    [currentValue, handleChange]
  )

  const handleDelete = React.useCallback(() => {
    handleChange(currentValue.slice(0, -1))
  }, [currentValue, handleChange])

  const handleVerify = React.useCallback(() => {
    if (isComplete) {
      onVerify?.(currentValue)
    }
  }, [isComplete, currentValue, onVerify])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (as === 'drawer' && showKeypad) {
        // For drawer with keypad, handle keyboard input
        if (e.key >= '0' && e.key <= '9') {
          e.preventDefault()
          handleNumberPress(e.key)
        } else if (e.key === 'Backspace') {
          e.preventDefault()
          handleDelete()
        } else if (e.key === 'Enter' && isComplete) {
          e.preventDefault()
          handleVerify()
        }
      }
    },
    [as, showKeypad, handleNumberPress, handleDelete, isComplete, handleVerify]
  )

  const content = (
    <div
      className={cn(
        'flex flex-col max-w-sm mx-auto',
        as === 'drawer' && showKeypad ? 'h-full justify-between' : 'space-y-4'
      )}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* PIN Field */}
      <div
        className={cn(as === 'drawer' && showKeypad ? 'pt-8' : '', 'space-y-4')}
      >
        <PinField
          value={currentValue}
          onChange={handleChange}
          onComplete={onComplete}
          secure={secure}
          error={error}
          variant={variant}
          disabled={loading}
        />
      </div>

      {/* Numeric Keypad (only for drawer) */}
      {as === 'drawer' && showKeypad && (
        <div className='w-full pb-4'>
          <NumericKeypad
            onNumberPress={handleNumberPress}
            onDelete={handleDelete}
            disabled={loading}
            size='md'
          />
        </div>
      )}
    </div>
  )

  if (as === 'drawer') {
    return (
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        position='right'
        size='md'
        disableEscapeKeyDown
        disableOverlayClickToClose
        {...drawerProps}
      >
        <Drawer.Header>
          <Drawer.Title>{title}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>{content}</Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup fluid>
            <Button
              variant='primary'
              onClick={handleVerify}
              disabled={!isComplete || loading}
            >
              {loading ? 'Verifying...' : verifyButtonText}
            </Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='sm'
      placement='center'
      disableEscapeKeyDown
      disableOverlayClickToClose
      {...modalProps}
    >
      <Modal.Header>
        <Heading level={3}>{title}</Heading>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <ButtonGroup fluid>
          <Button
            variant='primary'
            onClick={handleVerify}
            disabled={!isComplete || loading}
          >
            {loading ? 'Verifying...' : verifyButtonText}
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  )
}
