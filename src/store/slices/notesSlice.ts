import { createSlice } from '@reduxjs/toolkit'

export type NotesSliceType = {
  id: number
  text: string
  isBlocked: boolean
  position: {
    x: number
    y: number
  }
}

const initialState = {
  notes: [
    {
      id: null,
      text: '',
      position: {
        x: null,
        y: null,
      },
      isBlocked: false,
    },
  ],
}

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    addNote: (state, action) => {},
    dellNote: (state, action) => {},
    removeAllNotesFromTable: (state) => {
      state.notes = []
    },
    blockAllNotesOnTable: (state) => {
      state.notes = state.notes.map((file) =>
        file.isBlocked ? file : { ...file, isBlocked: true }
      )
    },
    unblockAllNotesOnTable: (state) => {
      state.notes = state.notes.map((file) =>
        file.isBlocked ? { ...file, isBlocked: false } : file
      )
    },
  },
})

export const notesReducer = notesSlice.reducer
export const notesActions = notesSlice.actions
