import { IoSearchOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoPencil } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../../helpers/constants/allPopups'
import { ITEM_TYPE } from '../../../helpers/constants/optionalPanel'
import { useActions } from '../../../helpers/hooks/useActions'
import { callPopup } from '../../../helpers/utils/callPopup'
import { CaseFilesTypes } from '../../../store/slices/dataSlice'

export const useOptionalPanel = (file: CaseFilesTypes) => {
  const navigate = useNavigate()
  const openPopup = (path: string) => navigate(callPopup(path), { state: file })
  const { deleteFileFromTable, blockToggleFileOnTable } = useActions()

  return {
    [ITEM_TYPE.FILE]: [
      {
        icon: IoSearchOutline,
        callBack: () => openPopup(POPUPS.CASE_FILE),
        title: 'Show file',
      },
      {
        icon: IoTrashOutline,
        callBack: () =>
          file.isBlocked ||
          deleteFileFromTable({ id: file.id, chapter: file.chapter }),
        title: 'Remove from table',
      },
      {
        icon: file.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
        callBack: () => blockToggleFileOnTable({ id: file.id }),
        title: file.isBlocked ? 'Block file' : 'Unlock file',
      },
    ],
    // [ITEM_TYPE.NOTE]: [
    //   {
    //     icon: IoSearchOutline,
    //     callBack: () => openPopup(POPUPS.note),
    //     title: 'Show note',
    //   },
    //   {
    //     icon: IoTrashOutline,
    //     callBack: () => callBack(NOTE_TYPES.REMOVE),
    //     title: 'Remove from table',
    //   },
    //   {
    //     icon: item.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
    //     callBack: () => callBack(NOTE_TYPES.TOGGLE_BLOCK_NOTE),
    //     title: item.isBlocked ? 'Block note' : 'Unlock note',
    //   },
    //   {
    //     icon: IoPencil,
    //     callBack: () => openPopup(POPUPS.editNote),
    //     title: 'Edit note',
    //   },
    // ],
  }
}
