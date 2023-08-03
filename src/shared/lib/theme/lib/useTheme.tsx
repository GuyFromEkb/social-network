import { useContext } from "react"

import { LS_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((_theme) => {
      const theme = _theme === Theme.Light ? Theme.Dark : Theme.Light
      localStorage.setItem(LS_THEME_KEY, theme)

      return theme
    })
  }

  return {
    theme,
    toggleTheme,
  }
}
