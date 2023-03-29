import { Block } from '../../Ui/Block/Block'
import { Newspaper } from '../../widgets/Newspaper/Newspaper'
import { Register } from '../../widgets/Register/Register'

export const RegisterScreen = () => {
  return (
    <Block width='100vw'>
      <Register />
      <Newspaper />
    </Block>
  )
}
