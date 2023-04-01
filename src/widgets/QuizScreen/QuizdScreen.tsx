import { Block } from '../../Ui/Block/Block'
import { Divider } from '../../Ui/Divider/Divider'
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import s from './QuizdScreen.module.scss'

export const QuizdScreen = () => {
  return (
    <div className={s.quizScreen}>
      <Block height align='center' direction='column' width='70%' gap='xxl'>
        <Header />
        <Body />
        <Divider />
        <Footer />
      </Block>
    </div>
  )
}
