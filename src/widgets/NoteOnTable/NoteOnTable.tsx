import { NoteOnTableProps } from './types'
import s from './NoteOnTable.module.scss'
import { OptionalPanel } from '../OptionalPanel/OptionalPanel'
import { useOpenState } from '../../helpers/hooks/useOpenState'
import { useNoteOptional } from './hooks/useNoteOptional'
import { IoLockClosedOutline } from 'react-icons/io5'
import { getImageUrl } from '../../helpers/utils/getImageUrl'

export const NoteOnTable: React.FC<NoteOnTableProps> = ({ note }) => {
  const { boolean: isHover, handleFalse, handleTrue } = useOpenState()

  const caseFile = useNoteOptional(note)

  return (
    <div
      className={s.noteOnTable}
      onMouseEnter={handleTrue}
      onMouseLeave={handleFalse}
    >
      <OptionalPanel isHover={isHover} optionalPanel={caseFile} />
      <>
        <img className={s.pin} src={getImageUrl('pin.png')} alt='pin' />
        <div className={s.note}>{note.note}</div>
      </>
      {note.isBlocked && (
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
