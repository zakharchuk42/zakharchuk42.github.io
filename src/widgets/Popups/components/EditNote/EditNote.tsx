import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActions } from '../../../../helpers/hooks/useActions'
import { NoteType } from '../../../../store/slices/notesSlice'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { CustomTextarea } from '../../../../Ui/CustomTextarea/CustomTextarea'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './EditNote.module.scss'

type NoteStateType = {
  note: NoteType
  title: string
}

export const EditNote = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { addNote, editNote } = useActions()
  const [noteState, setNoteState] = useState<NoteStateType>()

  useEffect(() => {
    setNoteState(state)
    setText(state.note?.note || '')
  }, [])

  const [text, setText] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const submit = () => {
    if (text.length < 5) {
      setIsError(true)
      return
    }

    if (!noteState?.note) {
      const rotate = Math.floor(-4 + Math.random() * (3 + 1 - -4))
      const payload = {
        id: Math.floor(Math.random() * 100000),
        note: text,
        position: {
          x: null,
          y: null,
          rotate,
          positionItem: false,
        },
        isBlocked: false,
      }
      addNote({ ...payload })
    } else {
      editNote({ id: noteState.note.id, note: text })
    }

    setText('')
    navigate(-1)
  }

  if (!noteState) {
    return null
  }

  return (
    <PopupBox title={noteState.title}>
      <Block gap='xxl' direction='column'>
        <div className={s.inputWrapper}>
          <CustomTextarea
            placeholder={'Type you note'}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setText(e.target.value)
            }
          />
          {isError && (
            <Typography font='small'>*type min 5 characters</Typography>
          )}
        </div>
        <Block justify='end' gap='lg'>
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button onClick={submit}>{noteState.title}</Button>
        </Block>
      </Block>
    </PopupBox>
  )
}
