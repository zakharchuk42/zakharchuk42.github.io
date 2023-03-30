import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { NoteType } from '../../store/slices/notesSlice'

export interface ItemOnTableProps {
  items: CaseFilesTypes[] | NoteType[]
  type: string
}
