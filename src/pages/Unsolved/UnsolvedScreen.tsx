import { useEffect } from 'react'
import { STORAGE_KEY } from '../../helpers/constants/localStorageKey'
import { useActions } from '../../helpers/hooks/useActions'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'

import { MainTable } from '../../widgets/MainTable/MainTable'

export const UnsolvedScreen = () => {
  const { value } = useLocalStorage(STORAGE_KEY.NAME)
  const { logIn } = useActions()

  useEffect(() => {
    logIn({ name: value })
  }, [])

  return <MainTable />
}
