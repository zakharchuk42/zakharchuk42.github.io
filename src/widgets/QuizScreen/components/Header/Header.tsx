import { Block } from '../../../../Ui/Block/Block'
import s from './Header.module.scss'

export const Header = () => {
  return (
    <Block direction='column'>
      <div className={s.title}>
        <p>CONGRATULATION!!!</p>
      </div>
      <div className={s.subtitle}>
        <p>YOU SOLVED THE CASE!</p>
      </div>
    </Block>
  )
}
