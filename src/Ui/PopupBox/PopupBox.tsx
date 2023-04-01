import s from './PopupBox.module.scss'
import { PopupBoxPops } from './types'

export const PopupBox: React.FC<PopupBoxPops> = ({ children, title }) => {
  return (
    <div className={s.box} onClick={(e) => e.stopPropagation()}>
      {title}
      {children}
    </div>
  )
}
