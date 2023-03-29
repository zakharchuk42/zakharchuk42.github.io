import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {},
})

export const notesReducer = notesSlice.reducer
