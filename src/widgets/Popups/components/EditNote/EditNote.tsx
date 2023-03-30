import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../../../helpers/hooks/useActions'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { CustomInput } from '../../../../Ui/CustomInput/CustomInput'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import s from './EditNote.module.scss'

export const EditNote = () => {
  const [note, setNote] = useState<string>('')
  const { addNote } = useActions()
  const navigate = useNavigate()

  const submit = () => {
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
          <CustomInput
            placeholder={'Type you note'}
            value={note}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setNote(e.target.value)
            }
          />
        </div>
        <Block justify='end' gap='lg'>
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button onClick={submit}>Add note</Button>
        </Block>
      </Block>
    </PopupBox>
  )
}
