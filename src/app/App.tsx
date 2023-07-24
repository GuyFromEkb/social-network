import "./styles/index.scss"

import cls from "./app.module.scss"
import { FC, Suspense } from "react"

import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme"
import { cn } from "shared/lib/classNames"
import { NavBar } from "widgets/NavBar"
import { SideBar } from "widgets/SideBar"

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
