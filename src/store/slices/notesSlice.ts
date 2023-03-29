import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    removeAllNotesFromTable: (state) => {
      state.notes = []
    },
  },
})

export const notesReducer = notesSlice.reducer
export const notesActions = notesSlice.actions
