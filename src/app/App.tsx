import "./styles/index.scss"

import cls from "./app.module.scss"
import { FC, Suspense } from "react"

import { cn } from "~shared/lib/classNames"
import { useTheme } from "~shared/lib/theme"
import { NavBar } from "~widgets/NavBar"
import { SideBar } from "~widgets/SideBar"

import { AppRouter } from "./providers/router"

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback={"Загрузка переводов..."}>
        <NavBar />
        <main className={cls.pageGrid}>
          <SideBar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  )
}
