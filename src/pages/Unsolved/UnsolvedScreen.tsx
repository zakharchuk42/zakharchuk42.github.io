import { useLayoutEffect } from 'react'
import { useActions } from '../../helpers/hooks/useActions'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { CaseFiles } from '../../widgets/CaseFiles/CaseFiles'

export const UnsolvedScreen = () => {
  const [value] = useLocalStorage('playerName', '')
  const { logIn } = useActions()

  const { name } = useTypedSelector((state) => state.user)

  useLayoutEffect(() => {
    logIn({ name: value })
  }, [])

  return <CaseFiles />
}
