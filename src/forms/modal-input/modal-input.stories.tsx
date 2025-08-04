import { ModalInput } from './modal-input'
import { TextInput } from '../text-input'
import { useState } from 'react'
import { Button, Text } from '@/primitive'

export default {
  title: 'Forms/ModalInput',
  component: ModalInput,
}

export const Basic = () => {
  const [value, setValue] = useState('')

  return (
    <ModalInput
      label='Pick a value'
      placeholder='Click to open modal'
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      {ctx => (
        <>
          <ModalInput.Header>
            <Text fontSize='lg' fontWeight='bold'>
              Modal Input Example
            </Text>
          </ModalInput.Header>
          <ModalInput.Body>
            <TextInput
              onChange={ctx.onChange}
              value={ctx.value}
              label='Type something'
            />
          </ModalInput.Body>
          <ModalInput.Footer>
            <Button
              onClick={() => ctx.setIsOpen(false)}
              className='btn btn-primary'
            >
              Confirm
            </Button>
          </ModalInput.Footer>
        </>
      )}
    </ModalInput>
  )
}
