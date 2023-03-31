import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../helpers/constants/allRoutes'
import { useLocalStorage } from '../../../../helpers/hooks/useLocalStorage'
import { Block } from '../../../../Ui/Block/Block'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Button } from '../../../../Ui/Button/Button'
import { CustomInput } from '../../../../Ui/CustomInput/CustomInput'

import s from './EnterName.module.scss'
import { STORAGE_KEY } from '../../../../helpers/constants/localStorageKey'
import { useCustomEvent } from '../../../../helpers/hooks/useCustomEvent'

export const EnterName = () => {
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()
  const { setValue } = useLocalStorage(STORAGE_KEY.NAME)

  const submitName = useCustomEvent(() => {
    setValue(name)
    setName('')
    navigate(ROUTES.UNSOLVED)
  })

  return (
    <PopupBox title='How can I call you?'>
      <Block direction='column'>
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
