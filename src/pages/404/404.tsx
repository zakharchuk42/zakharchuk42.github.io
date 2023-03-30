import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../helpers/constants/allRoutes'
import { Button } from '../../Ui/Button/Button'
import s from './404.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(ROUTES.REGISTER)
  return (
    <div className={s.notFound}>
      <div className={s.title}>404</div>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  )
}
