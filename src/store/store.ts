import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { dataReducer } from './slices/dataSlice'
import { notesReducer } from './slices/notesSlice'
import { guideReducer } from './slices/guideSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      data: dataReducer,
      notes: notesReducer,
      guide: guideReducer,
    },
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = typeof store.dispatch
