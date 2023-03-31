import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useActions } from '../../../helpers/hooks/useActions'
import { CaseFilesTypes } from '../../../store/slices/dataSlice'
import { NoteType } from '../../../store/slices/notesSlice'

type DraggableType = (
  file: CaseFilesTypes | null | undefined,
  setFile: (file: CaseFilesTypes | null) => void
) => {
  onDragStart: (e: any, isBlocked: boolean) => void
  onDragEnd: (
    e: any,
    file: CaseFilesTypes | NoteType,
    action:
      | ActionCreatorWithPayload<any, 'Notes/moveNoteArrountTable'>
      | ActionCreatorWithPayload<
          CaseFilesTypes,
          'Case Files/moveFileArroundTable'
        >
  ) => void
  onDrop: (e: any) => void
}

type ShiftTye = {
  shiftX: number
  shiftY: number
}

export const useDraggable: DraggableType = (dropFile, setFile) => {
  const { addFileOnTable } = useActions()

  const [shift, setShift] = useState<ShiftTye | null>(null)

  const onDrop = (e: any) => {
    if (dropFile?.id) {
      const payload = {
        ...dropFile,
        position: {
          x: e.pageX - dropFile.position!.x,
          y: e.pageY - dropFile.position!.y,
          positionItem: true,
        },
      }

      addFileOnTable({ ...payload, isOnTable: true })
      setFile(null)
    }
  }

  const onDragStart = (e: any, isBlocked: boolean) => {
    if (isBlocked) return
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e: any, item: CaseFilesTypes | NoteType, action: any) => {
    if (item.isBlocked) return
    const payload = {
      ...item,
      position: {
        ...item.position,
        x: e.pageX - shift!.shiftX,
        y: e.pageY - shift!.shiftY,
        positionItem: true,
      },
    }

    action({ ...payload })

    setShift(null)
  }

  return { onDragStart, onDragEnd, onDrop }
}
