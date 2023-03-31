import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { dataReducer } from './slices/dataSlice'
import { notesReducer } from './slices/notesSlice'
import { helperTextReducer } from './slices/helperTextSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      data: dataReducer,
      notes: notesReducer,
      helperText: helperTextReducer,
    },
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = typeof store.dispatch
