import cls from "./sideBar.module.scss"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"

import { LangSwitcher } from "features/LangSwitcher"
import { ThemeSwitcher } from "features/ThemeSwitcher"
import { cn } from "shared/lib/classNames"
import { Button } from "shared/ui/Button"

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const handleToggleSideBar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside className={cn(cls.sideBar, { [cls.sideBarOpen]: collapsed })}>
      <div className={cls.greed}>
        <div>
          <Button onClick={handleToggleSideBar}>{collapsed ? t("свернуть") : t("развернуть")}</Button>
        </div>
        <div className={cls.footer}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </aside>
  )
}
