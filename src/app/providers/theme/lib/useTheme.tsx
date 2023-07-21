import { useContext } from "react"

import { Theme, ThemeContext } from "./ThemeContext"

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((_theme) => {
      const theme = _theme === Theme.Light ? Theme.Dark : Theme.Light
      return theme
    })
  }

  return {
    theme,
    toggleTheme,
  }
}
