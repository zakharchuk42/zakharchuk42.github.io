import { createSlice } from '@reduxjs/toolkit'

export type NoteType = {
  id: number
  note: string
  isBlocked: boolean
  position: {
    x: number
    y: number
    rotate: number
    positionItem: boolean
  }
}

export type NotesSliceType = {
  notes: NoteType[]
}

const initialState: NotesSliceType = {
  notes: [],
}

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload)
    },
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
    moveNoteArrountTable: (state, actions) => {
      state.notes = state.notes.map((file) =>
        file.id === actions.payload.id ? actions.payload : file
      )
    },
  },
})

export const notesReducer = notesSlice.reducer
export const notesActions = notesSlice.actions
