import { useState } from 'react'
import { useActions } from '../../../helpers/hooks/useActions'
import { CaseFilesTypes } from '../../../store/slices/dataSlice'

type DraggableType = (
  file: CaseFilesTypes | null | undefined,
  setFile: (file: CaseFilesTypes | null) => void
) => {
  onDragStart: (e: any, file: CaseFilesTypes) => void
  onDragEnd: (e: any, file: CaseFilesTypes) => void
  onDrop: (e: any) => void
}

type ShiftTye = {
  shiftX: number
  shiftY: number
}

export const useDraggable: DraggableType = (file, setFile) => {
  const { moveArroundTable, addFileOnTable } = useActions()

  const [shift, setShift] = useState<ShiftTye | null>(null)

  const onDragStart = (e: any, file: CaseFilesTypes) => {
    if (file.isBlocked) return
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e: any, file: CaseFilesTypes) => {
    if (file.isBlocked) return
    const payload = {
      ...file,
      position: { x: e.pageX - shift!.shiftX, y: e.pageY - shift!.shiftY },
    }
    moveArroundTable({ ...payload })
    setShift(null)
  }

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

  return { onDragStart, onDragEnd, onDrop }
}
