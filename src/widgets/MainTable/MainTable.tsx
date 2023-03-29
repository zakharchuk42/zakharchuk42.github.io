import { useState } from 'react'
import { useActions } from '../../helpers/hooks/useActions'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { getImageUrl } from '../../helpers/utils/getImageUrl'
import s from './MainTable.module.scss'

type ShiftTye = {
  shiftX: number
  shiftY: number
}

export const MainTable = () => {
  const { filesOnTable } = useTypedSelector((state) => state.data)
  const { moveArroundTable } = useActions()

  const [shift, setShift] = useState<ShiftTye | null>(null)

  const onDragStart = (e: any, file: any) => {
    if (file.isBlocked) return
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e: any, file: any) => {
    if (file.isBlocked) return
    const payload = {
      ...file,
      position: { x: e.pageX - shift!.shiftX, y: e.pageY - shift!.shiftY },
    }
    moveArroundTable({ ...payload })
    setShift(null)
  }

  return (
    <div>
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
            <img
              className={s.image}
              src={getImageUrl(file.imgPath)}
              alt={file.alt}
            />
          </div>
        )
      })}
    </div>
  )
}
