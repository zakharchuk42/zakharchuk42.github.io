import { Body } from './Body/Body'
import { Drawer } from '../../Ui/Drawer/Drawer'
import { Divider } from '../../Ui/Divider/Divider'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import s from './SideInfo.module.scss'

export const SideInfo = () => {
  return (
    <Drawer right>
      <div className={s.sideInfo}>
        <Header />
        <Divider />
        <Body />
        <Divider />
        <Footer />
      </div>
    </Drawer>
  )
}
