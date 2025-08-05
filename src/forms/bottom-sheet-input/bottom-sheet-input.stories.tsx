import { BottomSheetInput } from './bottom-sheet-input'
import { useState } from 'react'
import { Button } from '@/primitive'
import { SearchInput } from '../search-input'

export default {
  title: 'Forms/BottomSheetInput',
  component: BottomSheetInput,
}

export const Basic = () => {
  const [value, setValue] = useState('')

  return (
    <BottomSheetInput
      label='Pick a value'
      placeholder='Click to open bottom sheet'
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      {ctx => (
        <>
          <BottomSheetInput.Body>
            <SearchInput
              autoFocus
              label='Search Transactions'
              value={value}
              onChange={ctx.onChange}
              placeholder='Type something...'
            />
          </BottomSheetInput.Body>
          <BottomSheetInput.Footer>
            <Button
              onClick={() => ctx.setIsOpen(false)}
              className='btn btn-primary'
            >
              Confirm
            </Button>
          </BottomSheetInput.Footer>
        </>
      )}
    </BottomSheetInput>
  )
}
