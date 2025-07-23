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
        component:
          'A modern, accessible calendar component for date picking, following Material 3 specs and Versaur UI standards.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Calendar>

const ExampleComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 6, 17))
  return <Calendar value={date} onChange={setDate} />
}
export const Default: Story = {
  render: ExampleComponent,
}
