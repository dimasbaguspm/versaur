/**
 * DrawerInput stories
 * Demonstrates usage and variations of DrawerInput for form selection in a drawer overlay
 * @group Forms/DrawerInput
 */
import { useState } from 'react'
import { DrawerInput } from './drawer-input'
import { Button } from '@/primitive/button/button'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/primitive'
import { TextInput } from '../text-input'

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
      onChange={e => setValue(e.target.value)}
    >
      {ctx => (
        <>
          <DrawerInput.Header>
            <Text fontSize='lg' fontWeight='bold'>
              Drawer Input Example
            </Text>
          </DrawerInput.Header>

          <DrawerInput.Body>
            <TextInput
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
