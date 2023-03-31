import { Typography } from '../Typography/Typography'
import s from './PopupBox.module.scss'
import { PopupBoxPops } from './types'

export const PopupBox: React.FC<PopupBoxPops> = ({ children, title }) => {
  return (
    <div className={s.box} onClick={(e) => e.stopPropagation()}>
      <div className={s.boxTitle}>
        <Typography font='subtitle' color='white'>
          {title}
        </Typography>
      </div>
      {children}
    </div>
  )
}
