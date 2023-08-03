import { FC } from "react"

import IconThemeDark from "~shared/assets/icons/theme-dark.svg"
import IconThemeLight from "~shared/assets/icons/theme-light.svg"
import { cn } from "~shared/lib/classNames"
import { Theme, useTheme } from "~shared/lib/theme"
import { Button, ThemeButton } from "~shared/ui/Button"

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Button className={cn("", {}, [className])} theme={ThemeButton.Clear} onClick={toggleTheme}>
      {theme === Theme.Dark ? <IconThemeLight /> : <IconThemeDark />}{" "}
    </Button>
  )
}
