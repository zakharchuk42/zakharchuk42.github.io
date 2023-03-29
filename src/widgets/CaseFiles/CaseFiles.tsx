import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { Block } from '../../Ui/Block/Block'
import { Drawer } from '../../Ui/Drawer/Drawer'
import { Typography } from '../../Ui/Typography/Typography'
import { CaseChapte } from './CaseChapter/CaseChapter'
import s from './CaseFiles.module.scss'

type CaseType = 'Victim' | 'Suspects' | 'Testimony' | 'Evidence'

export const CaseFiles = () => {
  const caseFiles = useTypedSelector((s) => s.data)

  return (
    <>
      <Drawer left>
        {caseFiles.chapter.map((chapter: string) => {
          const chapterFiles = caseFiles.caseFiles[chapter as CaseType]
          return (
            <div key={chapter}>
              <Block align='center' direction='column'>
                <div className={s.title}>
                  <Typography color='red' uppercase>
                    {chapter}
                  </Typography>
                </div>
                <CaseChapte chapterFiles={chapterFiles} />
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
