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

  const { dellNote, toggleBlockNote } = useActions()

  return [
    {
      icon: IoSearchOutline,
      callBack: () =>
        navigate(callPopup(POPUPS.NOTE_POPUP), {
          state: { title: 'Edit note', note },
        }),
      title: 'Show note',
    },
    {
      icon: IoTrashOutline,
      callBack: () => dellNote({ id: note.id }),
      title: 'Remove from table',
    },
    {
      icon: note.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
      callBack: () => toggleBlockNote({ id: note.id }),
      title: note.isBlocked ? 'Block note' : 'Unlock note',
    },
    {
      icon: IoPencil,
      callBack: () =>
        navigate(callPopup(POPUPS.EDIT_NOTE), {
          state: { title: 'Edit note', note },
        }),
      title: 'Edit note',
    },
  ]
}
