import { useMemo, type FC } from 'react'
import { SnackbarsContext } from './context'
import type { SnackbarsProviderProps } from './types'

import { Snackbar } from '@/primitive/snackbar'
import {
  snackbarPlacementVariants,
  snackbarTransitionVariants,
} from './helpers'
import { useSnackbarsQueue } from './use-snackbars-queue'

/**
 * SnackbarsProvider manages a queue of snackbars and provides showSnack
 * Placement: full width bottom for mobile, bottom left for desktop/tablet
 */
export const SnackbarsProvider: FC<SnackbarsProviderProps> = ({ children }) => {
  const { queue, showSnack, removeSnack } = useSnackbarsQueue()
  const contextValue = useMemo(() => ({ showSnack }), [showSnack])

  return (
    <SnackbarsContext.Provider value={contextValue}>
      {children}
      <div
        className={snackbarPlacementVariants()}
        aria-live='polite'
        aria-atomic='true'
      >
        {queue.map((snack, idx) => (
          <div
            key={snack.id}
            className={snackbarTransitionVariants({
              placement: window.innerWidth >= 640 ? 'desktop' : 'mobile',
            })}
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <Snackbar
              color={snack.color}
              action={snack.action}
              onClose={() => {
                removeSnack(snack.id)
              }}
            >
              {snack.message}
            </Snackbar>
          </div>
        ))}
      </div>
    </SnackbarsContext.Provider>
  )
}
