import {
  createContext,
  useContext,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from 'react'

export interface ModalInputContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
  value: InputHTMLAttributes<HTMLInputElement>['value']
}

export const ModalInputContext = createContext<ModalInputContextValue | null>(
  null
)

export const useModalInputContext = (): ModalInputContextValue => {
  const context = useContext(ModalInputContext)
  if (!context) {
    throw new Error(
      'useModalInputContext must be used within a ModalInputContext.Provider'
    )
  }
  return context
}
