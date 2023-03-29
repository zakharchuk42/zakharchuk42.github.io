import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserSlice {
  name: string
}

const initialState = {
  name: '',
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logIn: (state, actions: PayloadAction<IUserSlice>) => {
      state.name = actions.payload.name
    },
  },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
