import cls from "./sideBar.module.scss"
import { FC, useState } from "react"

import { ThemeSwitcher } from "features/ThemeSwitcher"
import { cn } from "shared/lib/classNames"
import { Button } from "shared/ui/Button"

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleToggleSideBar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside className={cn(cls.sideBar, { [cls.sideBarOpen]: collapsed })}>
      <div className={cls.greed}>
        <div>
          <Button className={cls.toggleSideBarBtn} onClick={handleToggleSideBar}>
            {collapsed ? "Скрыть" : "раскрыть"}
          </Button>
        </div>
        <div className={cls.footer}>
          <ThemeSwitcher />
          <div>Русский</div>
        </div>
      </div>
    </aside>
  )
}
