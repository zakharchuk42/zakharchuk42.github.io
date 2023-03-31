import { useState } from 'react'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { FuncPanelOnTable } from './components/FuncPanelOnTable/FuncPanelOnTable'
import { useDraggable } from './hooks/useDraggable'
import { ItemOnTable } from './components/ItemOnTable/ItemOnTable'
import { ITEM_TYPE } from '../../helpers/constants/itemType'
import s from './UnsolvedScreen.module.scss'
import { SideInfo } from './components/SideInfo/SideInfo'
import { CaseFiles } from './components/CaseFiles/CaseFiles'

export const UnsolvedScreen = () => {
  const { data, notes } = useTypedSelector((state) => state)
  const [file, setFile] = useState<CaseFilesTypes | null>()
  const { onDrop } = useDraggable(file, setFile)

  return (
    <>
      <CaseFiles setFile={setFile} />
      <div
        className={s.unsolvedScreen}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
      >
        <ItemOnTable items={data.filesOnTable} type={ITEM_TYPE.FILE} />
        <ItemOnTable items={notes.notes} type={ITEM_TYPE.NOTE} />
      </div>
      <FuncPanelOnTable />
      <SideInfo />
    </>
  )
}
