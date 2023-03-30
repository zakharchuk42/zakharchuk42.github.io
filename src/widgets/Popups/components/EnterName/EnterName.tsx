import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../helpers/constants/allRoutes'
import { useActions } from '../../../../helpers/hooks/useActions'
import { useLocalStorage } from '../../../../helpers/hooks/useLocalStorage'
import { Block } from '../../../../Ui/Block/Block'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Button } from '../../../../Ui/Button/Button'
import { CustomInput } from '../../../../Ui/CustomInput/CustomInput'

import s from './EnterName.module.scss'

export const EnterName = () => {
  const [name, setName] = useState<string>('')
  const { logIn } = useActions()
  const navigate = useNavigate()
  const [value, setValue] = useLocalStorage('playerName', '')

  const submitName = () => {
    setValue(name)
    setName('')
    logIn({ name })
    navigate(ROUTES.UNSOLVED)
  }

  return (
    <PopupBox title='How can I call you?'>
      <Block gap='xxl' direction='column'>
        <div className={s.inputWrapper}>
          <CustomInput
            placeholder={'Enter you name, please'}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setName(e.target.value)
            }
          />
        </div>
        <Block justify='end'>
          <Button onClick={submitName}>Enter Name</Button>
        </Block>
      </Block>
    </PopupBox>
  )
}
