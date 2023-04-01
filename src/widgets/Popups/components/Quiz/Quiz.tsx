import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../helpers/constants/allRoutes'
import { useTypedSelector } from '../../../../helpers/hooks/useTypedSelector'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './Quiz.module.scss'

export const Quiz = () => {
  const { quiz } = useTypedSelector((s) => s.helperText)
  const navigate = useNavigate()

  const [counter, setCounter] = useState(0)

  const nextCounter = (idx: number) => {
    if (counter === quiz.length - 1) {
      return navigate(ROUTES.QUIZ)
    }
    if (block.answears[idx] === block.correct) {
      setCounter(counter + 1)
    }
  }

  const block = quiz[counter]

  return (
    <PopupBox
      title={
        <Block justify='between'>
          <Typography font='subtitle' color='white'>
            {block.title}
          </Typography>
        </Block>
      }
    >
      <Block style={s.answearWrapper} gap='sm' direction='column'>
        <Typography color='red'>{block.subtitle}</Typography>
        {block.answears.map((answear: string | boolean, idx: number) => (
          <Block key={idx} style={s.answear} onClick={() => nextCounter(idx)}>
            <Typography>{`${idx + 1}. ${answear}`}</Typography>
          </Block>
        ))}
      </Block>
      <Block justify='end'>
        <Button onClick={() => navigate(-1)}>I need bit a time</Button>
      </Block>
    </PopupBox>
  )
}
