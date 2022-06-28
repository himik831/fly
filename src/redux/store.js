import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../redux/rootReducer'

export default configureStore({
  reducer: {
    language: languageReducer,
  },
})