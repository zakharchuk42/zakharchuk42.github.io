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
    editNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id
          ? { ...note, note: action.payload.note }
          : note
      )
    },
    dellNote: (state, action) => {
      state.notes = state.notes.filter((note) => {
        if (note.isBlocked) {
          return note
        }
        return action.payload.id !== note.id
      })
    },
    removeAllNotesFromTable: (state) => {
      state.notes = state.notes.filter((note) => (note.isBlocked ? note : null))
    },
    toggleBlockNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id
          ? { ...note, isBlocked: !note.isBlocked }
          : note
      )
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
