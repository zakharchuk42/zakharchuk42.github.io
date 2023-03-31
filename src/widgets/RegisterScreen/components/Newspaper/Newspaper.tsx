import { getImageUrl } from '../../../../helpers/utils/getImageUrl'
import { Block } from '../../../../Ui/Block/Block'
import s from './Newspaper.module.scss'

export const Newspaper = () => {
  const newspaperImage = getImageUrl('victim/newspaper.png')
  return (
    <Block width='280px' height align='center'>
      <img className={s.newspaper} src={newspaperImage} alt='Newspaper' />
    </Block>
  )
}
