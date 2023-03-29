import { CaseFilesTypes } from '../../../store/slices/dataSlice'

export interface CaseChapterProps {
  chapterFiles: CaseFilesTypes[]
  setFile: (file: CaseFilesTypes) => void
}
