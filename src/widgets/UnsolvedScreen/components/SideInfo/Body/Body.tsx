import {
  IoHelpOutline,
  IoBulbOutline,
  IoCheckmarkDoneOutline,
} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { POPUPS } from '../../../../../helpers/constants/allPopups'
import { callPopup } from '../../../../../helpers/utils/callPopup'
import { iconStyle } from '../../../../../helpers/utils/iconStyle'
import { Block } from '../../../../../Ui/Block/Block'
import { Typography } from '../../../../../Ui/Typography/Typography'

import s from './Body.module.scss'

export const Body = () => {
  const navigate = useNavigate()

  const openHowToPlay = () => navigate(callPopup(POPUPS.HOW_TO_PLAY))
  const openHint = () => navigate(callPopup(POPUPS.HINT))
  return (
    <Block grow direction='column' gap='xl'>
      <Typography font='subtitle' color='white'>
        Additional information
      </Typography>
      <Block>
        <div className={s.buttonWrapper} onClick={openHowToPlay}>
          <IoHelpOutline {...iconStyle('How to play?')} />
          <Typography>How to play?</Typography>
        </div>
      </Block>
      <Block>
        <div className={s.buttonWrapper}>
          <IoCheckmarkDoneOutline {...iconStyle('I know!')} />
          <Typography>I know who killed!</Typography>
        </div>
      </Block>
      <Block>
        <div className={s.buttonWrapper} onClick={openHint}>
          <IoBulbOutline {...iconStyle('I want!')} />
          <Typography>I want a hint</Typography>
        </div>
      </Block>
    </Block>
  )
}
