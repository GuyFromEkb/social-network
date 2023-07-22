import { FC } from "react"

import { Theme, useTheme } from "app/providers/theme"
import IconThemeDark from "shared/assets/icons/theme-dark.svg"
import IconThemeLight from "shared/assets/icons/theme-light.svg"

interface IThemeSwitcherProps {}

export const ThemeSwitcher: FC = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <button onClick={toggleTheme}>{theme === Theme.Dark ? <IconThemeLight /> : <IconThemeDark />}</button>
  )
}
