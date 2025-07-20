import { useRef, useState } from 'react'
import type { FC } from 'react'
import { TextInput } from '@/components/text-input'
import type { CalculatorInputProps } from './types'
import { Calculator } from '@/components/calculator'
import { Modal } from '@/components/modal'
import { Icon } from '../icon'
import { CalculatorIcon } from 'lucide-react'

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

  // Helper to handle calculator done
  const handleCalculatorDone = (v: string) => {
    // If empty or invalid, treat as ''
    const trimmed = v.trim()
    if (trimmed === '' || isNaN(Number(trimmed))) {
      onChange('')
    } else {
      onChange(Number(trimmed))
    }
    setOpen(false)
  }

  return (
    <>
      <TextInput
        ref={inputRef}
        type='text'
        label={label}
        value={value === '' ? '' : value}
        onClick={!disabled ? () => setOpen(true) : undefined}
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
        <Modal.Body className='flex flex-col items-center justify-center p-0'>
          <Calculator
            initialValue={typeof value === 'number' ? value : ''}
            onChange={handleCalculatorDone}
            disabled={disabled}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
