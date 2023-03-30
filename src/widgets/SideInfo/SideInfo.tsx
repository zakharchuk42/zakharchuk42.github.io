import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { Drawer } from '../../Ui/Drawer/Drawer'
import { Typography } from '../../Ui/Typography/Typography'
import { IoExitOutline } from 'react-icons/io5'
import { useLocalStorage } from '../../helpers/hooks/useLocalStorage'
import { ROUTES } from '../../helpers/constants/allRoutes'
import s from './SideInfo.module.scss'
import { useNavigate } from 'react-router-dom'
import { STORAGE_KEY } from '../../helpers/constants/localStorageKey'

export const SideInfo = () => {
  const { name } = useTypedSelector((s) => s.user)
  const { setValue } = useLocalStorage(STORAGE_KEY.NAME)
  const navigate = useNavigate()

  const logout = () => {
    setValue('')
    setTimeout(() => {
      navigate(ROUTES.REGISTER)
    }, 50)
  }

  return (
    <Drawer right>
      <div className={s.sideInfo}>
        <Typography font='subtitle' color='red'>{`Hi, ${name} !`}</Typography>
        <IoExitOutline
          title={'Exit'}
          size='34px'
          color='#DC143C'
          onClick={logout}
        />
      </div>
    </Drawer>
  )
}
