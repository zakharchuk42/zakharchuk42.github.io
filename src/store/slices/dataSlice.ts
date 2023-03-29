import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CaseFilesTypes = {
  id: number
  isOnTable: boolean
  isBlocked: boolean
  imgPath: string
  alt: string
  chapter: string
  position?: {
    x: number
    y: number
  }
}

export type DataSliceType = {
  chapter: string[]
  caseFiles: {
    [key: string]: CaseFilesTypes[]
  }
  filesOnTable: CaseFilesTypes[]
}

const initialState: DataSliceType = {
  chapter: ['Victim', 'Suspects', 'Testimony', 'Evidence'],
  caseFiles: {
    Victim: [
      {
        id: 1,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'victim/newspaper.png',
        alt: 'Newspaper',
        chapter: 'Victim',
      },
      {
        id: 2,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'victim/JackLumberski.jpg',
        alt: 'Jack Lumberski',
        chapter: 'Victim',
      },
      {
        id: 3,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'victim/CrimeScene.jpg',
        alt: 'Crime scene',
        chapter: 'Victim',
      },
    ],
    Suspects: [
      {
        id: 4,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'suspects/JerryAndersen.png',
        alt: 'Jerry Andersen',
        chapter: 'Suspects',
      },
      {
        id: 5,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'suspects/MartinPark.png',
        alt: 'Martin Park',
        chapter: 'Suspects',
      },
      {
        id: 6,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'suspects/SamWilliams.png',
        alt: 'Sam Williams',
        chapter: 'Suspects',
      },
    ],
    Testimony: [
      {
        id: 7,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'testimony/JerryAndersen.jpg',
        alt: 'Andersen`s form',
        chapter: 'Testimony',
      },
      {
        id: 8,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'testimony/MartinPark.jpg',
        alt: 'Park`s form',
        chapter: 'Testimony',
      },
      {
        id: 9,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'testimony/SamWilliams.jpg',
        alt: 'Williams`es form',
        chapter: 'Testimony',
      },
    ],
    Evidence: [
      {
        id: 10,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'evidence/call911.jpg',
        alt: 'Call 911',
        chapter: 'Evidence',
      },
      {
        id: 11,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'evidence/letter.jpg',
        alt: 'Letter',
        chapter: 'Evidence',
      },
      {
        id: 12,
        isOnTable: false,
        isBlocked: false,
        imgPath: 'evidence/photo.jpg',
        alt: 'Tree stump',
        chapter: 'Evidence',
      },
    ],
  },
  filesOnTable: [],
}

const dataSlice = createSlice({
  name: 'Case Files',
  initialState,
  reducers: {
    addFileOnTable: (state, actions: PayloadAction<CaseFilesTypes>) => {
      state.filesOnTable.push(actions.payload)
      state.caseFiles[actions.payload.chapter] = state.caseFiles[
        actions.payload.chapter
      ].map((file) =>
        file.id === actions.payload.id ? { ...file, isOnTable: true } : file
      )
    },
    moveArroundTable: (state, actions: PayloadAction<CaseFilesTypes>) => {
      state.filesOnTable = state.filesOnTable.map((file) =>
        file.id === actions.payload.id ? actions.payload : file
      )
    },
  },
})

export const dataReducer = dataSlice.reducer
export const dataActions = dataSlice.actions
