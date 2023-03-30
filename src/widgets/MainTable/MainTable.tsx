import { useState } from 'react'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { CaseFiles } from '../CaseFiles/CaseFiles'
import { FuncPanelOnTable } from '../FuncPanelOnTable/FuncPanelOnTable'
import { useDraggable } from './hooks/useDraggable'
import { ItemOnTable } from '../ItemOnTable/ItemOnTable'
import { ITEM_TYPE } from '../../helpers/constants/itemType'
import s from './MainTable.module.scss'
import { SideInfo } from '../SideInfo/SideInfo'

export const MainTable = () => {
  const { data, notes } = useTypedSelector((state) => state)
  const [file, setFile] = useState<CaseFilesTypes | null>()
  const { onDrop } = useDraggable(file, setFile)

  return (
    <>
      <CaseFiles setFile={setFile} />
      <div
        className={s.mainTable}
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
