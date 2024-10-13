import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IThemeState {
  value: string
}

const initialState: IThemeState = {
  value: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: (state) => {
      document.querySelector('html')!.setAttribute('class', 'light')
      state.value = 'light'
      localStorage.setItem('theme', 'light')
    },
    setDark: (state) => {
      document.querySelector('html')!.setAttribute('class', 'dark')
      state.value = 'dark'
      localStorage.setItem('theme', 'dark')
    },
  },
})

export const { setLight, setDark } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.value
export default themeSlice.reducer
