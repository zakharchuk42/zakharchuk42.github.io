import { CaseFilesTypes } from '../../../../store/slices/dataSlice'

export interface CaseFilesProps {
  setFile: (file: CaseFilesTypes) => void
}
