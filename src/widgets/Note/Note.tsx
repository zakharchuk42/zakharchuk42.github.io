import { NoteProps } from './types'
import s from './Note.module.scss'
import { OptionalPanel } from '../OptionalPanel/OptionalPanel'
import { useOpenState } from '../../helpers/hooks/useOpenState'
import { useNoteOptional } from './hooks/useNoteOptional'
import { IoLockClosedOutline } from 'react-icons/io5'
import { getImageUrl } from '../../helpers/utils/getImageUrl'
import { iconStyle } from '../../helpers/utils/iconStyle'

export const Note: React.FC<NoteProps> = ({ item }) => {
  const { boolean: isHover, handleFalse, handleTrue } = useOpenState()

  const noteOptional = useNoteOptional(item)

  return (
    <div
      className={s.noteOnTable}
      onMouseEnter={handleTrue}
      onMouseLeave={handleFalse}
    >
      <OptionalPanel isHover={isHover} optionalPanel={noteOptional} />
      <>
        <img className={s.pin} src={getImageUrl('pin.png')} alt='pin' />
        <div className={s.note}>{item.note}</div>
      </>
      {item.isBlocked && (
        <div className={s.button}>
          <IoLockClosedOutline
            {...iconStyle('File is block!', '#fff', '16px')}
          />
        </div>
      )}
    </div>
  )
}
