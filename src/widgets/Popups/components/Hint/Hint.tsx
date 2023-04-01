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

  const isPrev = counter === 0
  const isNext = counter === hint.length - 1

  const prevCounter = () => isPrev || setCounter(counter - 1)
  const nextCounter = () => isNext || setCounter(counter + 1)

  return (
    <PopupBox
      title={
        <Block justify='between'>
          <Typography font='subtitle' color='white'>
            {`Hint №${counter + 1}`}
          </Typography>
          <Block gap='xl'>
            <div
              className={clsx(s.slideButton, {
                [s.slideButtonDisabled]: isPrev,
              })}
              onClick={prevCounter}
            >
              <IoChevronBack {...iconStyle()} />
              <Typography font='small'>Prev</Typography>
            </div>
            <div
              className={clsx(s.slideButton, s.slideButtonRight, {
                [s.slideButtonDisabled]: isNext,
              })}
              onClick={nextCounter}
            >
              <IoChevronBack {...iconStyle()} />
              <Typography font='small'>Next</Typography>
            </div>
          </Block>
        </Block>
      }
    >
      <Block grow gap='xxl'>
        <Block grow align='center'>
          <Typography color='white'>{hint[counter]}</Typography>
        </Block>
      </Block>
      <Block justify='end'>
        <Button onClick={() => navigate(-1)}>Close</Button>
      </Block>
    </PopupBox>
  )
}
