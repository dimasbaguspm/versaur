import React, { useEffect, useState } from 'react'
import { Modal } from '@/components/modal'
import { Calendar } from '@/components/calendar'
import { Button } from '../button'

interface DateSinglePickerModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  value: Date | undefined
  onChange: (date: Date) => void
  label?: string
  buttonRef: React.RefObject<HTMLButtonElement>
}

/**
 * Modal calendar atom for DateSinglePickerInput
 * Handles Modal, Calendar, and ModalFooter for modal type
 */
export const DateSinglePickerModal: React.FC<DateSinglePickerModalProps> = ({
  open,
  setOpen,
  value,
  onChange,
  label,
  buttonRef,
}) => {
  const [modalSelectedDate, setModalSelectedDate] = useState<Date | undefined>(
    value
  )

  useEffect(() => {
    setModalSelectedDate(value)
  }, [value, open])

  const handleOnCancel = () => {
    setOpen(false)
    setModalSelectedDate(value)
    buttonRef.current?.focus()
  }

  const handleOnConfirm = () => {
    if (modalSelectedDate) {
      onChange(modalSelectedDate)
      setOpen(false)
      buttonRef.current?.focus()
    }
  }

  return (
    <Modal
      isOpen={open}
      onOpenChange={setOpen}
      placement='top'
      size='md'
      aria-label={label ? String(label) : 'Select date'}
      disableOverlayClose={false}
      disableEscClose={false}
    >
      <Modal.Body className='px-2'>
        <Calendar value={modalSelectedDate} onChange={setModalSelectedDate} />
      </Modal.Body>
      <Modal.Footer className='px-6'>
        <Button
          onClick={handleOnCancel}
          variant='ghost'
          type='button'
          size='sm'
        >
          Cancel
        </Button>
        <Button
          onClick={handleOnConfirm}
          variant='primary'
          type='button'
          disabled={!modalSelectedDate}
          size='sm'
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
