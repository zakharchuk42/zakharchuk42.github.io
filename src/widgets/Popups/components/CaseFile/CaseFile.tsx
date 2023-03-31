import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoExpandOutline } from 'react-icons/io5'
import { IoContractOutline } from 'react-icons/io5'
import { IoCloseOutline } from 'react-icons/io5'
import { IoAddOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import s from './CaseFile.module.scss'
import { Block } from '../../../../Ui/Block/Block'
import { useOpenState } from '../../../../helpers/hooks/useOpenState'
import { useActions } from '../../../../helpers/hooks/useActions'
import { CaseFilesTypes } from '../../../../store/slices/dataSlice'
import { iconStyle } from '../../../../helpers/utils/iconStyle'

export const CaseFile = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { addFileOnTable, deleteFileFromTable } = useActions()

  const {
    boolean: isZoome,
    handleTrue: zoomIn,
    handleFalse: zoomOut,
  } = useOpenState()

  useEffect(() => {
    setCaseFile(state)
  }, [])

  const [caseFile, setCaseFile] = useState<CaseFilesTypes>()

  const addOnTable = () => {
    navigate(-1)
    if (caseFile) {
      addFileOnTable({ ...caseFile, isOnTable: true })
    }
  }

  const removeFromTable = () => {
    navigate(-1)
    if (caseFile) {
      deleteFileFromTable({ id: caseFile.id, chapter: caseFile.chapter })
    }
  }

  const imageClass = clsx(s.caseImage, {
    [s.caseImageZoom]: isZoome,
  })

  return (
    <div className={s.caseImageWrapper}>
      <img
        className={imageClass}
        src={`${window.location.origin}/images/${caseFile?.imgPath}`}
        alt='Newspaper'
        onClick={(e) => e.stopPropagation()}
      />
      <div className={s.buttonsWrapper} onClick={(e) => e.stopPropagation()}>
        <Block direction='column' align='center' gap='xxl'>
          {caseFile?.isOnTable ? (
            <IoTrashOutline
              {...iconStyle('Remove from table')}
              onClick={removeFromTable}
            />
          ) : (
            <IoAddOutline {...iconStyle('Add on table')} onClick={addOnTable} />
          )}
          <IoExpandOutline {...iconStyle('Zoom in')} onClick={zoomIn} />
          <IoContractOutline {...iconStyle('Zoom out')} onClick={zoomOut} />
          <IoCloseOutline
            {...iconStyle('Close popup')}
            onClick={() => navigate(-1)}
          />
        </Block>
      </div>
    </div>
  )
}
