import cls from "./navBar.module.scss"
import { FC } from "react"

import { ThemeSwitcher } from "features/ThemeSwitcher"
import { routePaths } from "shared/config/routerConfig"
import { cn } from "shared/lib/classNames"
import { AppLink } from "shared/ui"
import { AppLinkTheme } from "shared/ui/AppLink"

export const NavBar: FC = () => {
  return (
    <div className={cn(cls.navBar)}>
      <ThemeSwitcher />
      <div className={cls.linkContainer}>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.about}>
          ABOUT
        </AppLink>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.main}>
          Main
        </AppLink>
      </div>
    </div>
  )
}
