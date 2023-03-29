import { useLayoutEffect } from 'react'
import { useActions } from '../../helpers/hooks/useActions'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'
import { CaseFiles } from '../../widgets/CaseFiles/CaseFiles'
import { MainTable } from '../../widgets/MainTable/MainTable'

export const UnsolvedScreen = () => {
  const [value] = useLocalStorage('playerName', '')
  const { logIn } = useActions()

  useLayoutEffect(() => {
    logIn({ name: value })
  }, [])

  return (
    <>
      <CaseFiles />
      <MainTable />
    </>
  )
}
