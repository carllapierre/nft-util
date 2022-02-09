import { configureStore } from '@reduxjs/toolkit'
import web3Reducer from './web3Reducer'

export default configureStore({
  reducer: {
      web3: web3Reducer
  },
})