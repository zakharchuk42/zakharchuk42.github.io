import { Block } from '../../Ui/Block/Block'
import { Newspaper } from './components/Newspaper/Newspaper'
import { Register } from './components/Register/Register'

export const RegisterScreen = () => {
  return (
    <Block width='100vw'>
      <Register />
      <Newspaper />
    </Block>
  )
}
