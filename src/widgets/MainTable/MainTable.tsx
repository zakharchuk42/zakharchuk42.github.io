import { useState } from 'react'
import { useActions } from '../../helpers/hooks/useActions'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { addStyleFilePosition } from '../../helpers/utils/addStyleFilePosition'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { CaseFiles } from '../CaseFiles/CaseFiles'
import { FuncPanelOnTable } from '../FuncPanelOnTable/FuncPanelOnTable'
import { FileOnTable } from '../FileOnTable/FileOnTable'
import { useDraggable } from './hooks/useDraggable'
import s from './MainTable.module.scss'
import { NoteOnTable } from '../NoteOnTable/NoteOnTable'

export const MainTable = () => {
  const { data, notes } = useTypedSelector((state) => state)
  const [file, setFile] = useState<CaseFilesTypes | null>()
  const { onDrop, onDragStart, onDragEnd } = useDraggable(file, setFile)
  const { moveFileArroundTable, moveNoteArrountTable } = useActions()

  return (
    <>
      <CaseFiles setFile={setFile} />
      <div
        className={s.mainTable}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
      >
        {data.filesOnTable.map((file) => {
          const stylePosition = addStyleFilePosition(file?.position)
          return (
            <div
              key={file.alt}
              onDragStart={(e) => onDragStart(e, file.isBlocked)}
              onDragEnd={(e) => onDragEnd(e, file, moveFileArroundTable)}
              style={stylePosition}
              draggable={true}
            >
              <FileOnTable file={file} />
            </div>
          )
        })}
        {notes.notes.map((note) => {
          const stylePosition = addStyleFilePosition(note.position)
          return (
            <div
              key={note.id}
              onDragStart={(e) => onDragStart(e, note.isBlocked)}
              onDragEnd={(e) => onDragEnd(e, note, moveNoteArrountTable)}
              style={stylePosition}
              draggable={true}
            >
              <NoteOnTable note={note} />
            </div>
          )
        })}
      </div>
      <FuncPanelOnTable />
    </>
  )
}
