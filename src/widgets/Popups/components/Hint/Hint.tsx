import clsx from 'clsx'
import { useState } from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../../../helpers/hooks/useTypedSelector'
import { iconStyle } from '../../../../helpers/utils/iconStyle'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './Hint.module.scss'

export const Hint = () => {
  const { hint } = useTypedSelector((s) => s.helperText)
  const navigate = useNavigate()

  const [counter, setCounter] = useState(0)

  const prevCounter = () => counter === 0 || setCounter(counter - 1)

  const nextCounter = () => counter === 2 || setCounter(counter + 1)

  return (
    <PopupBox title={`Hint №${counter + 1}`}>
      <Block grow gap='xxl'>
        <div
          className={clsx(s.slideButton, {
            [s.slideButtonDisabled]: counter === 0,
          })}
          onClick={prevCounter}
        >
          <IoChevronBack {...iconStyle()} />
          <Typography font='small'>Prev</Typography>
        </div>
        <Block grow>
          <Typography color='white'>{hint[counter]}</Typography>
        </Block>
        <div
          className={clsx(s.slideButton, s.slideButtonRight, {
            [s.slideButtonDisabled]: counter === 2,
          })}
          onClick={nextCounter}
        >
          <IoChevronBack {...iconStyle()} />
          <Typography font='small'>Next</Typography>
        </div>
      </Block>
      <Block justify='end'>
        <Button onClick={() => navigate(-1)}>Close</Button>
      </Block>
    </PopupBox>
  )
}
