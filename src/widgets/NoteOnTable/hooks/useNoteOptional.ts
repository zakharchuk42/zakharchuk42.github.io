import { IoSearchOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoPencil } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../../helpers/constants/allPopups'
import { useActions } from '../../../helpers/hooks/useActions'
import { callPopup } from '../../../helpers/utils/callPopup'
import { NoteType } from '../../../store/slices/notesSlice'

export const useNoteOptional = (note: NoteType) => {
  const navigate = useNavigate()
  const openPopup = (path: string) => navigate(callPopup(path), { state: note })
  const {} = useActions()

  return [
    {
      icon: IoSearchOutline,
      callBack: () => openPopup(POPUPS.NOTE_POPUP),
      title: 'Show note',
    },
    {
      icon: IoTrashOutline,
      callBack: () => '',
      title: 'Remove from table',
    },
    {
      icon: note.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
      callBack: () => '',
      title: note.isBlocked ? 'Block note' : 'Unlock note',
    },
    {
      icon: IoPencil,
      callBack: () => openPopup(POPUPS.EDIT_NOTE),
      title: 'Edit note',
    },
  ]
}
