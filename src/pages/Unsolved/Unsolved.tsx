import { useEffect } from 'react'
import { STORAGE_KEY } from '../../helpers/constants/localStorageKey'
import { useActions } from '../../helpers/hooks/useActions'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'

import { UnsolvedScreen } from '../../widgets/UnsolvedScreen/UnsolvedScreen'

export const Unsolved = () => {
  const { value } = useLocalStorage(STORAGE_KEY.NAME)
  const { logIn } = useActions()

  useEffect(() => {
    logIn({ name: value })
  }, [])

  return <UnsolvedScreen />
}
