import React from 'react'
import { Menu } from '@/components/menu'
import { Calendar } from '@/components/calendar'

interface DateSinglePickerDockedProps {
  open: boolean
  value: Date | undefined
  onChange: (date: Date) => void
  inputId: string
  handleMenuClose: () => void
}

/**
 * Docked calendar atom for DateSinglePickerInput
 * Handles Menu and Calendar rendering for docked type
 */
export const DateSinglePickerDocked: React.FC<DateSinglePickerDockedProps> = ({
  open,
  value,
  onChange,
  handleMenuClose,
}) => (
  <Menu isOpen={open} onOutsideClick={handleMenuClose}>
    <Menu.Trigger className='absolute top-[90%] left-0'>
      <span aria-hidden='true' />
    </Menu.Trigger>
    <Menu.Content className='drop-shadow-lg rounded-lg bg-white border border-neutral'>
      <Calendar value={value} onChange={onChange} />
    </Menu.Content>
  </Menu>
)
