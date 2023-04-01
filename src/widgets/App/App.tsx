import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../helpers/constants/allRoutes'
import { CloseRoute } from '../../helpers/hoc/CloseRoute'
import PrivateRoute from '../../helpers/hoc/PrivateRoute'
import { NotFound } from '../../pages/404/404'
import { Quiz } from '../../pages/Quiz/Quiz'
import { Register } from '../../pages/Register/Register'
import { Unsolved } from '../../pages/Unsolved/Unsolved'
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
                <Register />
              </CloseRoute>
            }
          />
          <Route
            path={ROUTES.UNSOLVED}
            element={
              <PrivateRoute>
                <Unsolved />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.QUIZ}
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Block>
      <Popups />
    </>
  )
}

export default App
