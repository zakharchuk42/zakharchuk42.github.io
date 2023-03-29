import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { Block } from '../../Ui/Block/Block'
import { Drawer } from '../../Ui/Drawer/Drawer'
import { Typography } from '../../Ui/Typography/Typography'
import { CaseChapter } from './CaseChapter/CaseChapter'
import s from './CaseFiles.module.scss'

export interface CaseFilesProps {
  setFile: any
}

export const CaseFiles: React.FC<CaseFilesProps> = ({ setFile }) => {
  const caseFiles = useTypedSelector((s) => s.data)

  return (
    <>
      <Drawer left>
        {caseFiles.chapter.map((chapter: string) => {
          const chapterFiles = caseFiles.caseFiles[chapter]

          return (
            <div key={chapter}>
              <Block align='center' direction='column'>
                <div className={s.title}>
                  <Typography color='red' uppercase>
                    {chapter}
                  </Typography>
                </div>
                <CaseChapter chapterFiles={chapterFiles} setFile={setFile} />
              </Block>
            </div>
          )
        })}
      </Drawer>

      <Drawer right>
        <>adsdasda</>
      </Drawer>
    </>
  )
}
