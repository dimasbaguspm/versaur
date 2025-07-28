import React, { useState } from 'react'
import { Modal } from '@/overlays/modal'
import { TextInput } from '@/forms/text-input'
import { Button } from '@/primitive/button'
import { TimeField, AmPmSegment } from './time-picker-input.atoms'
import type { TimePickerInputProps } from './types'
import { Text } from '@/primitive/text'
import { Icon } from '@/primitive/icon'
import { Clock } from 'lucide-react'

/**
 * TimePickerInput component for Versaur UI
 *
 * Provides a modal-based time picker with hour, minute, and AM/PM selection
 * Follows Material 3 guidelines (no clock UI)
 */
export const TimePickerInput: React.FC<TimePickerInputProps> = ({
  value,
  onChange,
  label,
  helperText,
  disabled,
  error,
  placement = 'top',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  // Local state for hour, minute, period
  const parseTime = (val: string) => {
    const match = val.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i)
    if (!match) return { hour: '', minute: '', period: 'AM' }
    return {
      hour: match[1],
      minute: match[2],
      period: match[3].toUpperCase() as 'AM' | 'PM',
    }
  }
  const [{ hour, minute, period }, setTime] = useState(() => parseTime(value))

  // Open modal and sync state
  const handleInputClick = () => {
    if (!disabled) {
      setTime(parseTime(value))
      setModalOpen(true)
    }
  }
  // Allow empty string, no forced padding until confirm
  const handleHourChange = (val: string) => {
    let v = val.replace(/[^\d]/g, '')
    if (v.length > 2) v = v.slice(0, 2)
    if (Number(v) > 12) v = '12'
    setTime(t => ({ ...t, hour: v }))
  }
  const handleMinuteChange = (val: string) => {
    let v = val.replace(/[^\d]/g, '')
    if (v.length > 2) v = v.slice(0, 2)
    if (Number(v) > 59) v = '59'
    setTime(t => ({ ...t, minute: v }))
  }
  const handlePeriodChange = (next: 'AM' | 'PM') => {
    setTime(t => ({ ...t, period: next }))
  }
  const handleCancel = () => {
    setTime(parseTime(value))
    setModalOpen(false)
  }
  const handleConfirm = () => {
    // Pad and validate
    const h = hour.padStart(2, '0') || '12'
    const m = minute.padStart(2, '0') || '00'
    onChange(`${h}:${m} ${period}`)
    setModalOpen(false)
  }

  return (
    <>
      <TextInput
        label={label}
        value={value}
        onClick={handleInputClick}
        readOnly
        disabled={disabled}
        error={error}
        helperText={helperText}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        className={'cursor-pointer bg-white'}
        leftContent={<Icon as={Clock} size='sm' color='inherit' />}
      />
      <Modal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        placement={placement}
        size='fit-content'
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        <Modal.Header>
          <Text as='span' fontSize='lg' fontWeight='semibold'>
            Select time
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className={'flex items-center gap-2 justify-center py-2'}>
            <TimeField
              value={hour}
              onChange={handleHourChange}
              label='Hour'
              aria-label='Hour'
              disabled={disabled}
            />
            <Text as='span' fontSize='2xl' className='select-none'>
              :
            </Text>
            <TimeField
              value={minute}
              onChange={handleMinuteChange}
              label='Minute'
              aria-label='Minute'
              disabled={disabled}
            />
            <AmPmSegment
              value={period === 'AM' ? 'AM' : 'PM'}
              onChange={handlePeriodChange}
              disabled={disabled}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='ghost' size='sm' onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant='primary-ghost' size='sm' onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
