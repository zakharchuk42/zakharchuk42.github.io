import { useState } from 'react'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { CaseFiles } from '../CaseFiles/CaseFiles'
import { FuncPanelOnTable } from '../FuncPanelOnTable/FuncPanelOnTable'
import { ItemOnTable } from '../ItemOnTable/ItemOnTable'
import { useDraggable } from './hooks/useDraggable'
import s from './MainTable.module.scss'

export const MainTable = () => {
  const { filesOnTable } = useTypedSelector((state) => state.data)
  const [file, setFile] = useState<CaseFilesTypes | null>()
  const { onDrop, onDragStart, onDragEnd } = useDraggable(file, setFile)

  return (
    <>
      <CaseFiles setFile={setFile} />
      <div
        className={s.mainTable}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
      >
        {filesOnTable.map((file) => {
          return (
            <div
              key={file.alt}
              onDragStart={(e) => onDragStart(e, file)}
              onDragEnd={(e) => onDragEnd(e, file)}
              style={{
                position: 'absolute',
                left: file.position ? `${file.position.x}px` : '',
                top: file.position ? `${file.position.y}px` : '',
              }}
            >
              <ItemOnTable file={file} />
            </div>
          )
        })}
      </div>
      <FuncPanelOnTable />
    </>
  )
}
