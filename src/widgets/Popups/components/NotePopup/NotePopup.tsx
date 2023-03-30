import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getImageUrl } from '../../../../helpers/utils/getImageUrl'
import s from './NotePopup.module.scss'

export const NotePopup = () => {
  const { state } = useLocation()

  const [text, setText] = useState('')

  useEffect(() => {
    setText(state.note.note)
  }, [])

  return (
    <div className={s.noteWrapper}>
      <img className={s.pin} src={getImageUrl('pin.png')} alt='pin' />
      <div className={s.note}>{text}</div>
    </div>
  )
}
