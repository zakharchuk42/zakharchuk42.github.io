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

export const CaseFile = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { addFileOnTable } = useActions()

  const {
    open: isZoome,
    handleOpen: zoomIn,
    handleClose: zoomOut,
  } = useOpenState()

  useEffect(() => {
    setCaseFile(state)
  }, [])

  const [caseFile, setCaseFile] = useState<CaseFilesTypes>()

  const addOnTable = () => {
    navigate(-1)
    if (caseFile) {
      addFileOnTable({ ...caseFile })
    }
  }

  const removeFromTable = () => {
    navigate(-1)
    // dispatch({
    //   type: CASE_FILES_TYPES.REMOVE_FROM_TABEL,
    //   payload: caseFile,
    // })
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
              title={'Remove from table'}
              size='36px'
              color='#DC143C'
              onClick={removeFromTable}
            />
          ) : (
            <IoAddOutline
              title={'Add on table'}
              size='36px'
              color='#DC143C'
              onClick={addOnTable}
            />
          )}
          <IoExpandOutline
            title={'Zoom in'}
            size='28px'
            color='#DC143C'
            onClick={zoomIn}
          />
          <IoContractOutline
            title={'Zoom out'}
            size='28px'
            color='#DC143C'
            onClick={zoomOut}
          />
          <IoCloseOutline
            title={'Close popup'}
            size='36px'
            color='#DC143C'
            onClick={() => navigate(-1)}
          />
        </Block>
      </div>
    </div>
  )
}
