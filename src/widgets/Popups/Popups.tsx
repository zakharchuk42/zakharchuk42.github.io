import { useGetPopupState } from './hooks/useGetPopupState'

import { POPUPS } from '../../helpers/constants/allPopups'
import { EnterName } from './components/EnterName/EnterName'
import { BackDrop } from '../../Ui/BackDrop/BackDrop'
import { Block } from '../../Ui/Block/Block'
import { CaseFile } from './components/CaseFile/CaseFile'

const popups = {
  [POPUPS.ENTER_NAME]: EnterName,
  [POPUPS.CASE_FILE]: CaseFile,
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
