import { FC, useMemo, useState } from "react"

import { LS_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

const defaultUserTheme = (localStorage.getItem(LS_THEME_KEY) as Theme) ?? Theme.Light

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultUserTheme)

  const defaultValue = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
}
