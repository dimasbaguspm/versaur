import { FilterIcon } from 'lucide-react'
import { ButtonMenu } from './button-menu'

export default {
  title: 'Primitive/ButtonMenu',
  component: ButtonMenu,
}

export const Basic = () => {
  return (
    <ButtonMenu
      aria-label='Open Filter'
      as={FilterIcon}
      variant='outline'
      content={
        <>
          <ButtonMenu.Item>Profile</ButtonMenu.Item>
          <ButtonMenu.Item>Settings</ButtonMenu.Item>
          <ButtonMenu.Item disabled>Logout</ButtonMenu.Item>
        </>
      }
    />
  )
}
