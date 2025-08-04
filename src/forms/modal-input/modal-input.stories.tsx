import { ModalInput } from './modal-input'
import { TextInput } from '../text-input'
import { useState } from 'react'

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
      <ModalInput.Modal>
        {ctx => (
          <TextInput
            onChange={ctx.onChange}
            value={ctx.value}
            label='Type something'
          />
        )}
      </ModalInput.Modal>
    </ModalInput>
  )
}
