import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { IoInformationSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../../../helpers/constants/allPopups'
import { useActions } from '../../../../helpers/hooks/useActions'
import { callPopup } from '../../../../helpers/utils/callPopup'
import { iconStyle } from '../../../../helpers/utils/iconStyle'
import s from './FuncPanelOnTable.module.scss'

export const FuncPanelOnTable = () => {
  const navigate = useNavigate()
  const {
    removeAllFilesFromTable,
    removeAllNotesFromTable,
    blockAllFilesOnTable,
    unblockAllFilesOnTable,
    blockAllNotesOnTable,
    unblockAllNotesOnTable,
  } = useActions()

  const editNote = () =>
    navigate(callPopup(POPUPS.EDIT_NOTE), {
      state: { title: 'Add note' },
    })
  const removeAllFiles = () => {
    removeAllFilesFromTable()
    removeAllNotesFromTable()
  }
  const blockAll = () => {
    blockAllFilesOnTable()
    blockAllNotesOnTable()
  }
  const unblockAll = () => {
    unblockAllFilesOnTable()
    unblockAllNotesOnTable()
  }

  return (
    <div className={s.funcPanelOnTable}>
      <IoCreateOutline {...iconStyle('Add note')} onClick={editNote} />
      <IoTrashOutline
        {...iconStyle('Remove all files')}
        onClick={removeAllFiles}
      />
      <IoLockClosedOutline
        {...iconStyle('Block all files')}
        onClick={blockAll}
      />
      <IoLockOpenOutline
        {...iconStyle('Unlock all files')}
        onClick={unblockAll}
      />
    </div>
  )
}
