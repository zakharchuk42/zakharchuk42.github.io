import { useCallback, useLayoutEffect, useRef } from 'react'

type CustomEventType = (handler: () => void) => () => void

export const useCustomEvent: CustomEventType = (handler) => {
  const handleRef = useRef<(() => void) | null>(null)

  useLayoutEffect(() => {
    handleRef.current = handler
  })

  return useCallback((...args: React.SyntheticEvent[]) => {
    const fn = handleRef.current
    if (fn) {
      return fn(...(args as []))
    }
  }, [])
}
