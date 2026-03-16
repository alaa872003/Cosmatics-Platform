import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: "light",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
     toggleTheme: (state) => {
        console.log(state.mode)
      state.mode = state.mode === "light" ? "dark" : "light"},
  },
})

export const {toggleTheme } = themeSlice.actions

export default themeSlice.reducer