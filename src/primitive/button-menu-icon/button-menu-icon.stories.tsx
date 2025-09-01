import { FilterIcon } from 'lucide-react'
import { ButtonMenuIcon } from './button-menu-icon'

export default {
  title: 'Primitive/ButtonMenuIcon',
  component: ButtonMenuIcon,
}

export const Basic = () => {
  return (
    <ButtonMenuIcon aria-label='Open Filter' as={FilterIcon} variant='outline'>
      <ButtonMenuIcon.Item>Profile</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item>Settings</ButtonMenuIcon.Item>
      <ButtonMenuIcon.Item disabled>Logout</ButtonMenuIcon.Item>
    </ButtonMenuIcon>
  )
}
