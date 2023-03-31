import { Divider } from '../../../../Ui/Divider/Divider'
import { Drawer } from '../../../../Ui/Drawer/Drawer'
import { Body } from './Body/Body'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import s from './SideInfo.module.scss'

export const SideInfo = () => {
  return (
    <Drawer right label='Information'>
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
