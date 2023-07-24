import cls from "./navBar.module.scss"
import { FC } from "react"
import { useTranslation } from "react-i18next"

import { routePaths } from "shared/config/routerConfig"
import { cn } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"

export const NavBar: FC = () => {
  const { t } = useTranslation()
  return (
    <nav className={cn(cls.navBar)}>
      <div className={cls.linkContainer}>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.about}>
          {t("О сайте")}
        </AppLink>
        <AppLink theme={AppLinkTheme.Inverted} to={routePaths.main}>
          {t("Главная")}
        </AppLink>
      </div>
    </nav>
  )
}
