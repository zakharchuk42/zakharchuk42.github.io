import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { IoInformationSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../helpers/constants/allPopups'
import { useActions } from '../../helpers/hooks/useActions'
import { callPopup } from '../../helpers/utils/callPopup'
import s from './FuncPanelOnTable.module.scss'

export const FuncPanelOnTable = () => {
  const navigate = useNavigate()
  const {
    removeAllFilesFromTable,
    removeAllNotesFromTable,
    blockAllFilesOnTable,
    unblockAllFilesOnTable,
  } = useActions()

  const editNote = () => navigate(callPopup(POPUPS.EDIT_NOTE))
  const removeAllFiles = () => {
    removeAllFilesFromTable()
    removeAllNotesFromTable()
  }
  const blockAll = () => {
    blockAllFilesOnTable()
  }
  const unblockAll = () => {
    unblockAllFilesOnTable()
  }

  return (
    <div className={s.funcPanelOnTable}>
      <IoCreateOutline
        title={'Add note'}
        size='34px'
        color='#DC143C'
        onClick={editNote}
      />
      <IoTrashOutline
        title={'Remove all files'}
        size='34px'
        color='#DC143C'
        onClick={removeAllFiles}
      />
      <IoLockClosedOutline
        title={'Block all files'}
        size='32px'
        color='#DC143C'
        onClick={blockAll}
      />
      <IoLockOpenOutline
        title={'Unlock all files'}
        size='32px'
        color='#DC143C'
        onClick={unblockAll}
      />
      <IoInformationSharp
        title={'Open instruction'}
        size='38px'
        color='#DC143C'
        onClick={() => console.log('Open instr')}
      />
    </div>
  )
}
