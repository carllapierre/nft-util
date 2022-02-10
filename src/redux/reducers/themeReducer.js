import { createSlice } from '@reduxjs/toolkit'

export const themeReducer = createSlice({
  name: 'themeReducer',
  initialState: {
    value:  localStorage.getItem("theme") ?? 'default',
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTheme } = themeReducer.actions

export default themeReducer.reducer