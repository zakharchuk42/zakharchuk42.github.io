import { POPUPS } from '../../helpers/constants/allPopups'
import { callPopup } from '../../helpers/utils/callPopup'
import { Block } from '../../Ui/Block/Block'
import { CustomLink } from '../../Ui/CustomLink/CustomLink'
import { Typography } from '../../Ui/Typography/Typography'
import s from './Register.module.scss'

export const Register = () => {
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
        <Block>
          <CustomLink to={callPopup(POPUPS.ENTER_NAME)}>
            Solve a murder
          </CustomLink>
        </Block>
      </div>
    </>
  )
}
