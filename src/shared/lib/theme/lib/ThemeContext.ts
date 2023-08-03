import { createContext, Dispatch, SetStateAction } from "react"

interface IThemeProvider {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const LS_THEME_KEY = "theme"

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export const ThemeContext = createContext<IThemeProvider | null>(null)
