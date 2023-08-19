import cls from "./sideBar.module.scss"
import { FC, useState } from "react"

import { LangSwitcher } from "~features/LangSwitcher"
import { ThemeSwitcher } from "~features/ThemeSwitcher"
import { cn } from "~shared/lib/classNames"
import { Button, ThemeButton } from "~shared/ui/Button"
import { ButtonSize } from "~shared/ui/Button/Button"

import { NavLinkList } from "../NavLinkList/NavLinkList"

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleToggleSideBar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside data-testid={"sidebar"} className={cn(cls.sideBar, { [cls.collapsed]: collapsed })}>
      <div className={cls.greed}>
        <NavLinkList shortLinks={collapsed} />

        <div className={cn(cls.footer, { [cls.footerShort]: collapsed })}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} />
        </div>
      </div>

      <Button
        data-testid={"sidebar-button"}
        className={cls.collapsedBtn}
        square
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        onClick={handleToggleSideBar}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </aside>
  )
}
