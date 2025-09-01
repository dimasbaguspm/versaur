import { createContext, useContext } from 'react'

interface BottomSheetContextModel {
  onClose: VoidFunction
}

const BottomSheetContext = createContext<BottomSheetContextModel | null>(null)

export const BottomSheetProvider = BottomSheetContext.Provider

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext)
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider')
  }
  return context
}
