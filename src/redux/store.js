import { configureStore } from '@reduxjs/toolkit'
import web3Reducer from './reducers/web3Reducer'
import themeReducer from './reducers/themeReducer'

export default configureStore({
  reducer: {
      web3: web3Reducer,
      theme: themeReducer
  },
})