import { IoHelpOutline, IoBulbOutline } from 'react-icons/io5'
import { iconStyle } from '../../../helpers/utils/iconStyle'
import { Block } from '../../../Ui/Block/Block'
import { Typography } from '../../../Ui/Typography/Typography'
import s from './Body.module.scss'

export const Body = () => {
  return (
    <Block grow direction='column' gap='xl'>
      <Typography font='subtitle' color='white'>
        Additional information
      </Typography>
      <Block>
        <div className={s.buttonWrapper}>
          <IoHelpOutline {...iconStyle('How to play?')} />
          <Typography>How to play?</Typography>
        </div>
      </Block>
      <Block>
        <div className={s.buttonWrapper}>
          <IoHelpOutline {...iconStyle('I know!')} />
          <Typography>I know who killed!</Typography>
        </div>
      </Block>
      <Block>
        <div className={s.buttonWrapper}>
          <IoBulbOutline {...iconStyle('I want!')} />
          <Typography>I want a hint</Typography>
        </div>
      </Block>
    </Block>
  )
}
