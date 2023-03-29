import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { dataActions } from '../../store/slices/dataSlice'
import { notesActions } from '../../store/slices/notesSlice'
import { userActions } from '../../store/slices/userSlice'

const allActions = {
  ...userActions,
  ...dataActions,
  ...notesActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}
