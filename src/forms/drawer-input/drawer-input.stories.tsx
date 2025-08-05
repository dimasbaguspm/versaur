/**
 * DrawerInput stories
 * Demonstrates usage and variations of DrawerInput for form selection in a drawer overlay
 * @group Forms/DrawerInput
 */
import { useState } from 'react'
import { DrawerInput } from './drawer-input'
import { Button } from '@/primitive/button/button'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../search-input'

const meta: Meta<typeof DrawerInput> = {
  title: 'Forms/DrawerInput',
  component: DrawerInput,
}
export default meta

type Story = StoryObj<typeof DrawerInput>

function BasicStory() {
  const [value, setValue] = useState('')
  return (
    <DrawerInput
      label='Select value'
      value={value}
      placeholder='Click to open modal'
      onChange={e => setValue(e.target.value)}
      size='lg'
    >
      {ctx => (
        <>
          <DrawerInput.Body>
            <SearchInput
              autoFocus
              label='Search Transactions'
              value={value}
              onChange={ctx.onChange}
              placeholder='Type something...'
            />
          </DrawerInput.Body>
          <DrawerInput.Footer>
            <Button onClick={() => ctx.setIsOpen(false)}>Confirm</Button>
          </DrawerInput.Footer>
        </>
      )}
    </DrawerInput>
  )
}

export const Basic: Story = {
  render: BasicStory,
}
