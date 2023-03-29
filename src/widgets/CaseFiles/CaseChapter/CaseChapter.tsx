import { Link } from 'react-router-dom'
import { getImageUrl } from '../../../helpers/utils/getImageUrl'
import { Block } from '../../../Ui/Block/Block'
import s from './CaseChapter.module.scss'
import { CaseChapterProps } from './types'

export const CaseChapte: React.FC<CaseChapterProps> = ({ chapterFiles }) => {
  return (
    <Block justify='between' width='100%'>
      {chapterFiles.map((file) => {
        const caseImage = getImageUrl(file.imgPath)
        return (
          <div key={file.alt}>
            <Block>
              <Link className={s.link} to={'?=lol'}>
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
