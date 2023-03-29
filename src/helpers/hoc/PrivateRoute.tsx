import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/allRoutes'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [value] = useLocalStorage('playerName', '')

  if (!value) {
    return <Navigate to={ROUTES.REGISTER} />
  }

  return children
}

export default PrivateRoute
