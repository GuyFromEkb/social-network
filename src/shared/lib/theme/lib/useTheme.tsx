import { useContext, useEffect } from "react"

import { LS_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, theme)
    document.body.classList.add(theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    })
  }

  return {
    theme,
    toggleTheme,
  }
}
