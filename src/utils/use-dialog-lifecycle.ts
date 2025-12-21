import { useEffect, useMemo, useRef } from 'react'

interface UseDialogLifecycleParams {
  isOpen: boolean
}

export const useDialogLifecycle = ({ isOpen }: UseDialogLifecycleParams) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dataState = useMemo(() => (isOpen ? 'open' : 'closed'), [isOpen])

  useEffect(() => {
    const dialogEl = dialogRef.current
    if (!dialogEl) return

    if (isOpen && !dialogEl.open) {
      dialogEl.showModal()
    } else if (!isOpen && dialogEl.open) {
      dialogEl.close()
    }
  }, [isOpen])

  return {
    dialogRef,
    dataState,
  }
}
