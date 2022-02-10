import { createSlice } from '@reduxjs/toolkit'

export const web3reducer = createSlice({
  name: 'web3reducer',
  initialState: {
    account: null,
    web3: null
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    },
  },
})

export const { setAccount } = web3reducer.actions

export default web3reducer.reducer