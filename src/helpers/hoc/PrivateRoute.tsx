import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/allRoutes'
import { STORAGE_KEY } from '../constants/localStorageKey'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { value } = useLocalStorage(STORAGE_KEY.NAME)

  if (!value) {
    return <Navigate to={ROUTES.REGISTER} />
  }

  return children
}

export default PrivateRoute
