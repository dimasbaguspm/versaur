/**
 * Calendar stories for interactive documentation and testing
 * Demonstrates month view, date selection, and navigation
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'
import { useState } from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'Primitive/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern, accessible calendar component for date picking',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Calendar>

const SingleComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 6, 17))
  return (
    <Calendar
      value={date}
      onChange={val => {
        if (val instanceof Date) setDate(val)
      }}
    />
  )
}
export const Single: Story = {
  render: SingleComponent,
}

/**
 * Range selection example for Calendar
 * Demonstrates selecting a date range (start and end)
 */
const RangeExample = () => {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null])
  return (
    <Calendar
      type='range'
      value={range}
      onChange={val => {
        if (Array.isArray(val) && val.length === 2)
          setRange(val as [Date | null, Date | null])
      }}
    />
  )
}
export const Range: Story = {
  name: 'Range',
  render: RangeExample,
}
