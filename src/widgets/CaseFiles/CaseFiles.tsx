import React from 'react'
import {
  IoFingerPrintOutline,
  IoFolderOpenOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoClipboardOutline,
} from 'react-icons/io5'
import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { iconStyle } from '../../helpers/utils/iconStyle'
import { Block } from '../../Ui/Block/Block'
import { Divider } from '../../Ui/Divider/Divider'
import { Drawer } from '../../Ui/Drawer/Drawer'
import { Typography } from '../../Ui/Typography/Typography'
import { CaseChapter } from './CaseChapter/CaseChapter'
import s from './CaseFiles.module.scss'
import { CaseFilesProps } from './types'

export const CaseFiles: React.FC<CaseFilesProps> = ({ setFile }) => {
  const caseFiles = useTypedSelector((s) => s.data)

  const icons = [
    <IoPersonOutline {...iconStyle('Suspects', '#fff')} />,
    <IoFingerPrintOutline {...iconStyle('Suspects', '#fff')} />,
    <IoClipboardOutline {...iconStyle('Suspects', '#fff')} />,
    <IoSearchOutline {...iconStyle('Suspects', '#fff')} />,
  ]

  return (
    <Drawer left label='Case files'>
      <div className={s.caseFiles}>
        <Block justify='between'>
          <Typography font='subtitle' color='white'>
            Case files
          </Typography>
          <IoFolderOpenOutline {...iconStyle('Case files', '#fff')} />
        </Block>
        <Divider />
        {caseFiles.chapter.map((chapter: string, idx: number) => {
          const chapterFiles = caseFiles.caseFiles[chapter]
          return (
            <React.Fragment key={chapter}>
              <Block direction='column'>
                <Block justify='between' align='center'>
                  <Typography color='white' font='subtitle'>
                    {chapter}
                  </Typography>
                  {icons[idx]}
                </Block>
                <CaseChapter chapterFiles={chapterFiles} setFile={setFile} />
              </Block>
            </React.Fragment>
          )
        })}
      </div>
    </Drawer>
  )
}
