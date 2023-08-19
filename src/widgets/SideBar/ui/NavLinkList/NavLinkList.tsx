import cls from "./navLinkList.module.scss"
import { FC } from "react"
import { useTranslation } from "react-i18next"

import AboutIcon from "~shared/assets/icons/about-20-20.svg"
import MainIcon from "~shared/assets/icons/main-20-20.svg"
import { routePaths } from "~shared/constants/routePath"

import { NavLinkItem } from "../NavLinkItem/NavLinkItem"

interface INavLinksProps {
  shortLinks: boolean
}

export const NavLinkList: FC<INavLinksProps> = ({ shortLinks }) => {
  const { t } = useTranslation()

  return (
    <div className={cls.linkContainer}>
      <NavLinkItem text={t("Главная")} Icon={MainIcon} short={shortLinks} path={routePaths.main} />
      <NavLinkItem text={t("О сайте")} Icon={AboutIcon} short={shortLinks} path={routePaths.about} />
    </div>
  )
}
