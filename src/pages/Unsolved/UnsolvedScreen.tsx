import { useLayoutEffect, useState } from 'react'
import { useActions } from '../../helpers/hooks/useActions'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { CaseFiles } from '../../widgets/CaseFiles/CaseFiles'
import { MainTable } from '../../widgets/MainTable/MainTable'
import s from './Unsolved.module.scss'

export const UnsolvedScreen = () => {
  const [value] = useLocalStorage('playerName', '')
  const { logIn, addFileOnTable } = useActions()
  const [file, setFile] = useState<CaseFilesTypes | null>()

  useLayoutEffect(() => {
    logIn({ name: value })
  }, [])

  const onDrop = (e: any) => {
    if (file?.id) {
      const payload = {
        ...file,
        position: {
          x: e.pageX - file.position!.x,
          y: e.pageY - file.position!.y,
        },
      }
      addFileOnTable({ ...payload })
      setFile(null)
    }
  }

  return (
    <>
      <CaseFiles setFile={setFile} />
      <div
        className={s.unsolved}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
      >
        <MainTable />
      </div>
    </>
  )
}
