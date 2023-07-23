import cls from "./navBar.module.scss"
import { FC } from "react"

import { routePaths } from "shared/config/routerConfig"
import { cn } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"

export const NavBar: FC = () => {
  return (
    <nav className={cn(cls.navBar)}>
      <div className={cls.linkContainer}>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.about}>
          ABOUT
        </AppLink>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.main}>
          Main
        </AppLink>
      </div>
    </nav>
  )
}
