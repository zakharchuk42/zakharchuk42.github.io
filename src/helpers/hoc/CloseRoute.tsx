import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/allRoutes'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ICloseRouteProps {
  children: JSX.Element
}

export const CloseRoute: React.FC<ICloseRouteProps> = ({ children }) => {
  const [value] = useLocalStorage('playerName', '')

  if (value) {
    return <Navigate to={ROUTES.UNSOLVED} />
  }

  return children
}
