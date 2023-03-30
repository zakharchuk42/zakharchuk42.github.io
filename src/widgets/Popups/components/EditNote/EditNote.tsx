import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../../../helpers/hooks/useActions'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { CustomInput } from '../../../../Ui/CustomInput/CustomInput'
import { CustomTextarea } from '../../../../Ui/CustomTextarea/CustomTextarea'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './EditNote.module.scss'

export const EditNote = () => {
  const [note, setNote] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const { addNote } = useActions()
  const navigate = useNavigate()

  const submit = () => {
    if (note.length < 5) {
      setIsError(true)
      return
    }
    const rotate = Math.floor(-4 + Math.random() * (3 + 1 - -4))
    const payload = {
      id: Math.floor(Math.random() * 100000),
      note,
      position: {
        x: null,
        y: null,
        rotate,
        positionItem: false,
      },
      isBlocked: false,
    }
    addNote({ ...payload })
    setNote('')
    navigate(-1)
  }

  return (
    <PopupBox title='Add note'>
      <Block gap='xxl' direction='column'>
        <div className={s.inputWrapper}>
          <CustomTextarea
            placeholder={'Type you note'}
            value={note}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setNote(e.target.value)
            }
          />
          {isError && (
            <Typography font='small'>*type min 5 characters</Typography>
          )}
        </div>
        <Block justify='end' gap='lg'>
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button onClick={submit}>Add note</Button>
        </Block>
      </Block>
    </PopupBox>
  )
}
