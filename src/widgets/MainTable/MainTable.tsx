import { useState } from 'react'
import { Link } from 'react-router-dom'
import { POPUPS } from '../../helpers/constants/allPopups'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { callPopup } from '../../helpers/utils/callPopup'
import { getImageUrl } from '../../helpers/utils/getImageUrl'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { CaseFiles } from '../CaseFiles/CaseFiles'
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
              <Link
                className={s.link}
                to={callPopup(POPUPS.CASE_FILE)}
                state={file}
              >
                <img
                  className={s.image}
                  src={getImageUrl(file.imgPath)}
                  alt={file.alt}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
