import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../../../helpers/constants/allPopups'
import { callPopup } from '../../../../helpers/utils/callPopup'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './Register.module.scss'

export const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={s.register}>
        <Block direction='column'>
          <p className={s.registerTitle}>Unsolved case</p>
          <Typography color='grey' maxWidth='580px'>
            Unsolved Case is a game that lets you solve a fictional crime using
            the evidence and documentation from the cold case file.
          </Typography>
        </Block>
        <Block gap='xl'>
          <Button onClick={() => navigate(callPopup(POPUPS.HOW_TO_PLAY))}>
            How to play?
          </Button>
          <Button onClick={() => navigate(callPopup(POPUPS.ENTER_NAME))}>
            Solve a murder
          </Button>
        </Block>
      </div>
    </>
  )
}
