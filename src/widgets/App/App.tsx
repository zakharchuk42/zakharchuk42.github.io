import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../helpers/constants/allRoutes'
import { CloseRoute } from '../../helpers/hoc/CloseRoute'
import PrivateRoute from '../../helpers/hoc/PrivateRoute'
import { RegisterScreen } from '../../pages/Register/Register'
import { UnsolvedScreen } from '../../pages/Unsolved/UnsolvedScreen'
import { Block } from '../../Ui/Block/Block'
import Popups from '../Popups/Popups'

export const App = () => {
  return (
    <>
      <Block width='100%' height>
        <Routes>
          <Route
            path={ROUTES.REGISTER}
            element={
              <CloseRoute>
                <RegisterScreen />
              </CloseRoute>
            }
          />
          <Route
            path={ROUTES.UNSOLVED}
            element={
              <PrivateRoute>
                <UnsolvedScreen />
              </PrivateRoute>
            }
          />
          {/* <Route path={ROUTES.NOT_FOUND} element={<NotFound />} /> */}
        </Routes>
        {/* <ResponsiveRoutesPage /> */}
      </Block>
      <Popups />
    </>
  )
}

export default App
