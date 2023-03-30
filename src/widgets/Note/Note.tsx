import { NoteProps } from './types'
import s from './Note.module.scss'
import { OptionalPanel } from '../OptionalPanel/OptionalPanel'
import { useOpenState } from '../../helpers/hooks/useOpenState'
import { useNoteOptional } from './hooks/useNoteOptional'
import { IoLockClosedOutline } from 'react-icons/io5'
import { getImageUrl } from '../../helpers/utils/getImageUrl'

export const Note: React.FC<NoteProps> = ({ item }) => {
  const { boolean: isHover, handleFalse, handleTrue } = useOpenState()

  const caseFile = useNoteOptional(item)

  return (
    <div
      className={s.noteOnTable}
      onMouseEnter={handleTrue}
      onMouseLeave={handleFalse}
    >
      <OptionalPanel isHover={isHover} optionalPanel={caseFile} />
      <>
        <img className={s.pin} src={getImageUrl('pin.png')} alt='pin' />
        <div className={s.note}>{item.note}</div>
      </>
      {item.isBlocked && (
        <div className={s.button}>
          <IoLockClosedOutline
            title={'File is block!'}
            size='16px'
            color='#DC143C'
          />
        </div>
      )}
    </div>
  )
}
