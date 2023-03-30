import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { POPUPS } from '../../../helpers/constants/allPopups'
import { callPopup } from '../../../helpers/utils/callPopup'
import { getImageUrl } from '../../../helpers/utils/getImageUrl'
import { CaseFilesTypes } from '../../../store/slices/dataSlice'
import { Block } from '../../../Ui/Block/Block'
import s from './CaseChapter.module.scss'
import { CaseChapterProps } from './types'

export const CaseChapter: React.FC<CaseChapterProps> = ({
  chapterFiles,
  setFile,
}) => {
  const onDragStart = (e: any, file: CaseFilesTypes) => {
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setFile({
      ...file,
      position: {
        x: shiftX,
        y: shiftY,
        positionItem: true,
      },
    })
  }

  return (
    <Block justify='between' width='100%'>
      {chapterFiles.map((file) => {
        const caseImage = getImageUrl(file.imgPath)
        return (
          <div
            className={clsx({
              [s.disabledBlock]: file.isOnTable,
            })}
            key={file.alt}
            draggable={true}
            onDragStart={(e) => onDragStart(e, file)}
          >
            <Block>
              <Link
                className={s.link}
                to={callPopup(POPUPS.CASE_FILE)}
                state={file}
              >
                <img className={s.caseImage} src={caseImage} alt='Newspaper' />
                <p>{file.alt}</p>
              </Link>
            </Block>
          </div>
        )
      })}
    </Block>
  )
}
