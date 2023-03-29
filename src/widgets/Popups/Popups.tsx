import { useGetPopupState } from './hooks/useGetPopupState'

// import Register from './Popups/Register/Register'
// import CaseFile from './Popups/CaseFile/CaseFile'
// import EditNote from './Popups/EditNote/EditNote'
// import NotePopup from './Popups/NotePopup/NotePopup'
import { POPUPS } from '../../helpers/constants/allPopups'
import { EnterName } from './components/EnterName/EnterName'
import { BackDrop } from '../../Ui/BackDrop/BackDrop'
import { Block } from '../../Ui/Block/Block'

const popups = {
  [POPUPS.ENTER_NAME]: EnterName,
  // [POPUPS.caseFile]: CaseFile,
  // [POPUPS.editNote]: EditNote,
  // [POPUPS.note]: NotePopup,
}

const Popups = () => {
  const { mountedPopup, isOpened } = useGetPopupState()

  const Component = popups[mountedPopup as string]

  if (!Component) {
    return null
  }

  return (
    <BackDrop isOpened={isOpened}>
      <Block justify='center' align='center' height>
        <Component />
      </Block>
    </BackDrop>
  )
}

export default Popups
