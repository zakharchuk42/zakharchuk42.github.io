import { useState, useEffect, useMemo } from 'react'

import { GET_PARAMS } from '../../../helpers/constants/allPopups'
import { useGetParameter } from '../../../helpers/hooks/useGetParameter'

let timeout: any

export const useGetPopupState = () => {
  const popupName = useGetParameter(GET_PARAMS.popup)
  const [mountedPopup, setMountedPopup] = useState(popupName)

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout)
      setMountedPopup(popupName)
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null)
      }, 300)
    }
  }, [popupName])

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [])

  const isOpened = useMemo(() => Boolean(popupName), [popupName])

  return {
    mountedPopup,
    isOpened,
  }
}
