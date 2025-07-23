import { useRef, useState } from 'react'
import type { FC } from 'react'
import { TextInput } from '@/forms/text-input'
import type { CalculatorInputProps } from './types'
import { Calculator } from '@/primitive/calculator'
import { Modal } from '@/overlays/modal'
import { Icon } from '@/primitive/icon'
import { CalculatorIcon } from 'lucide-react'
import { Button } from '@/primitive/button'

/**
 * Default label for the modal header
 */
const DEFAULT_HEADER = 'Enter Amount'

/**
 * CalculatorInput is an input field with a modal calculator picker
 */
export const CalculatorInput: FC<
  CalculatorInputProps & { headerLabel?: string }
> = ({
  value,
  onChange,
  placeholder,
  disabled,
  modalProps,
  headerLabel,
  label,
  helperText,
  error,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [calculatorValue, setCalculatorValue] = useState(
    value === '' ? '' : String(value)
  )
  const [lastValidValue, setLastValidValue] = useState(value ?? '')

  // Only update local state, not parent, during calculator input
  const handleCalculatorChange = (v: string) => {
    setCalculatorValue(v)
    // Try to evaluate the value for local lastValidValue
    let result: number | null = null
    try {
      if (/^[\d+\-*/.\s]+$/.test(v)) {
        const evalResult = eval(v)
        if (typeof evalResult === 'number' && !isNaN(evalResult)) {
          result = evalResult
        }
      }
    } catch {
      // ignore invalid expressions
    }
    if (result !== null) {
      setLastValidValue(result)
    }
  }

  // Sync calculatorValue with value when modal opens
  const handleOpen = () => {
    setCalculatorValue(value === '' ? '' : String(value))
    setOpen(true)
  }

  // Only call parent onChange when OK is pressed
  const handleOk = () => {
    const trimmed = calculatorValue.trim()
    let result: number | null = null
    try {
      if (/^[\d+\-*/.\s]+$/.test(trimmed)) {
        const evalResult = eval(trimmed)
        if (typeof evalResult === 'number' && !isNaN(evalResult)) {
          result = evalResult
        }
      }
    } catch {
      // ignore invalid expressions
    }
    if (result !== null) {
      onChange(result)
      setLastValidValue(result)
    } else {
      onChange(lastValidValue)
    }
    setOpen(false)
  }

  const handleClear = () => {
    setCalculatorValue('')
    setLastValidValue('')
    onChange('')
  }

  return (
    <>
      <TextInput
        ref={inputRef}
        type='text'
        label={label}
        value={value === '' ? '' : value}
        onClick={!disabled ? handleOpen : undefined}
        readOnly
        disabled={disabled}
        error={error}
        helperText={helperText}
        rightContent={<Icon as={CalculatorIcon} size='sm' color='ghost' />}
        placeholder={placeholder}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-labelledby']}
        aria-describedby={rest['aria-describedby']}
        className='cursor-pointer bg-white'
      />
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        disableOverlayClose={!!disabled}
        disableEscClose={!!disabled}
        size='sm'
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-labelledby']}
        aria-describedby={rest['aria-describedby']}
        {...modalProps}
      >
        <Modal.Header>{headerLabel ?? DEFAULT_HEADER}</Modal.Header>
        <Modal.Body className='flex flex-col items-center justify-center pb-0'>
          <Calculator
            initialValue={typeof value === 'number' ? value : ''}
            onChange={handleCalculatorChange}
            disabled={disabled}
          />
        </Modal.Body>
        <Modal.Footer className='pb-4 pt-0'>
          <Button
            variant='neutral-ghost'
            onClick={handleClear}
            disabled={disabled}
          >
            Clear
          </Button>
          <Button
            variant='primary-ghost'
            onClick={handleOk}
            disabled={disabled}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
